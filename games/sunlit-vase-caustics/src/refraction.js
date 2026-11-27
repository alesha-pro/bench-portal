import * as THREE from "three";
import { vesselOptics } from "./vessel-optics.js";

// The opaque depth buffer lets a refracted ray find a submerged stem before it
// leaves the water. A ray missing the bouquet continues back into the room.
export function glassOptics(material, uniforms) {
  material.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader =
      "varying vec3 vesselPoint;\n" +
      shader.vertexShader.replace(
        "#include <begin_vertex>",
        "#include <begin_vertex>\nvesselPoint=position;",
      );
    shader.fragmentShader =
      vesselOptics +
      `
      varying vec3 vesselPoint;uniform mat4 projectionMatrix;
      uniform sampler2D roomColor,roomDepth;
      uniform vec3 stemNodes[45];uniform vec3 lightVector,lightTint;uniform float lightPower;
      uniform vec2 clipPlanes;uniform vec3 slosh;uniform float seconds,purity;
      vec2 screenAt(vec3 p){vec4 q=projectionMatrix*vec4(p,1.);return q.xy/q.w*.5+.5;}
      float depthAt(vec2 uv){float d=textureLod(roomDepth,uv,0.).x;return (clipPlanes.x*clipPlanes.y)/(clipPlanes.y-d*(clipPlanes.y-clipPlanes.x));}
      vec4 stemHit(vec3 origin,vec3 ray,float limit){
        float nearest=limit;vec4 result=vec4(0.);
        for(int i=0;i<9;i++)for(int k=0;k<4;k++){
          vec3 a=stemNodes[i*5+k],axis=stemNodes[i*5+k+1]-a,w=origin-a;
          float len=length(axis);axis/=len;
          float c=dot(ray,axis),den=max(1.-c*c,.0001);
          float along=clamp((dot(w,axis)-dot(w,ray)*c)/den,0.,len);
          vec3 onStem=a+along*axis;float t=dot(onStem-origin,ray);
          vec3 radial=origin+ray*t-onStem;float distance=length(radial);
          float radius=.0145,edge=1.-smoothstep(radius-.0025,radius+.0025,distance);
          if(t>.002 && t<nearest && edge>0. && onStem.y<1.72){
            nearest=t;
            vec3 n=normalize(radial-ray*sqrt(max(.000001,radius*radius-distance*distance)));
            vec3 green=mix(vec3(.031,.073,.016),vec3(.092,.15,.044),float(i)/9.);
            result=vec4(green*(.54+.55*lightPower*lightTint*max(0.,dot(n,lightVector))+.40*max(0.,dot(n,normalize(vec3(2.,3.,4.))))),edge);
          }
        }
        return result;
      }
      bool sampleRay(vec3 start,vec3 direction,float interval,float jitter,out vec2 hit){
        float last=0.;
        for(int i=0;i<32;i++){
          float distance=(float(i)+jitter+.5)*interval;
          vec3 pos=start+distance*direction;vec2 uv=screenAt(pos);
          if(any(lessThan(uv,vec2(.001)))||any(greaterThan(uv,vec2(.999))))break;
          float gap=-pos.z-depthAt(uv);
          if(gap>=-.006 && gap<max(.038,interval*1.8)){
            float lo=last,hi=distance;
            for(int j=0;j<3;j++){float mid=(lo+hi)*.5;vec3 q=start+mid*direction;
              if(-q.z>depthAt(screenAt(q)))hi=mid;else lo=mid;}
            hit=screenAt(start+hi*direction);return true;
          }
          last=distance;
        }
        return false;
      }
    ` +
      shader.fragmentShader;
    shader.fragmentShader = shader.fragmentShader.replace(
      "vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;",
      `
      vec3 view=normalize(vViewPosition);
      vec3 incident=normalize(vesselPoint-cameraPosition);
      vec3 face=normalize(transpose(mat3(viewMatrix))*normal);
      if(dot(face,incident)>0.)face=-face;
      vec3 firstReflection=reflect(incident,face);
      vec3 reflected=getIBLRadiance(view,normal,.045);
      vec2 reflectionUV;
      if(sampleRay(-vViewPosition+.012*normal,mat3(viewMatrix)*firstReflection,.24,.1,reflectionUV))
        reflected=textureLod(roomColor,reflectionUV,0.).rgb;
      float incidence=clamp(dot(face,-incident),0.,1.);
      float frontF=fresnelWeight(incident,face,1.,1.520);
      vec3 transmittedLight=vec3(0.);
      for(int band=0;band<3;band++){
        vec2 iors=vec2[3](vec2(1.509,1.328),vec2(1.520,1.333),vec2(1.541,1.343))[band];
        vec3 ray=refract(incident,face,1./iors.x),p=vesselPoint;
        p.xz=normalize(p.xz+vec2(.00001))*radiusAt(p.y);
        int medium=1;float through=1.-frontF,wetLength=0.,radiance=0.;
        for(int bounce=0;bounce<8;bounce++){
          p+=ray*.00055;vec3 n;int next;
          float t=nextBoundary(p,ray,medium,slosh,seconds,n,next);
          if(t>20.)break;
          if(medium==2 || medium==3){
            vec4 stalk=stemHit(p,ray,t);
            radiance+=through*stalk[band]*stalk.a;through*=1.-stalk.a;
            if(medium==2){wetLength+=t;through*=exp(-t*vec3(.17,.054,.083)[band]*(1.+2.8*(1.-purity)));}
          }
          p+=ray*t;float n1=mediumIOR(medium,iors),n2=mediumIOR(next,iors);
          vec3 bent=refract(ray,n,n1/n2);
          if(dot(bent,bent)<.1){ray=reflect(ray,n);continue;}
          float f=fresnelWeight(ray,n,n1,n2);
          vec3 backRay=reflect(ray,n);
          #ifdef USE_ENVMAP
            float rear=textureLod(envMap,envMapRotation*backRay,2.).rgb[band];
            // A ray reflected at the free surface sees the local room through
            // the neck. Use its depth plate first and an exposure-matched probe
            // for paths leaving the screen.
            vec2 bouncedUV;
            if(medium==3 && next==2 && sampleRay((viewMatrix*vec4(p,1.)).xyz,
                mat3(viewMatrix)*backRay,.27,.1,bouncedUV))
              rear=textureLod(roomColor,bouncedUV,.6)[band];
            radiance+=through*f*min(rear,1.45)*.86;
          #endif
          through*=1.-f;ray=bent;medium=next;
          if(next==0)break;
        }
        vec3 start=(viewMatrix*vec4(p,1.)).xyz,travel=mat3(viewMatrix)*ray;
        vec2 uv;float bg;
        if(sampleRay(start,travel,.29,.1,uv)){
          bg=textureLod(roomColor,uv,(1.-purity)*min(wetLength,1.)*3.5)[band];
        }else{
          uv=screenAt(start+travel*2.4);
          if(travel.z<0. && all(greaterThan(uv,vec2(.001))) && all(lessThan(uv,vec2(.999))))
            bg=textureLod(roomColor,uv,1.)[band];
          else {
            bg=.20;
            #ifdef USE_ENVMAP
              bg=min(textureLod(envMap,envMapRotation*ray,1.).rgb[band]*.55,1.75);
            #endif
          }
        }
        transmittedLight[band]=radiance+through*bg;
      }
      float sunDot=max(0.,dot(firstReflection,lightVector));
      vec3 glint=lightTint*lightPower*(27.*pow(sunDot,950.)+1.3*pow(sunDot,65.));
      vec3 outgoingLight=transmittedLight+frontF*reflected+totalSpecular*.53+glint+
        (1.-purity)*.038*vec3(.54,.75,.70);
    `,
    );
  };
}

export function createRoomBuffer(renderer, camera) {
  const target = new THREE.WebGLRenderTarget(1, 1, {
    type: THREE.HalfFloatType,
    minFilter: THREE.LinearMipmapLinearFilter,
    generateMipmaps: true,
  });
  target.depthTexture = new THREE.DepthTexture(1, 1, THREE.UnsignedIntType);
  const size = new THREE.Vector2();
  return {
    uniforms: {
      roomColor: { value: target.texture },
      roomDepth: { value: target.depthTexture },
      clipPlanes: { value: new THREE.Vector2(camera.near, camera.far) },
    },
    capture(scene, vessel, stemCut) {
      renderer.getDrawingBufferSize(size);
      target.setSize(size.x, size.y);
      vessel.visible = false;
      stemCut.value = 1;
      renderer.setRenderTarget(target);
      renderer.render(scene, camera);
      renderer.setRenderTarget(null);
      vessel.visible = true;
      stemCut.value = 0;
    },
  };
}
