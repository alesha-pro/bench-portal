// Meridional sections of the blown shell, in the same world units as the mesh.
// Each band is a truncated cone. The normal blends across the joins and includes
// the angular fluting. The thick bottom and open mouth are separate interfaces.
export const vesselOptics = /* glsl */ `
const float foot=.036, lip=1.694, thickness=.030;
const int bands=9;
const vec2 profile[10]=vec2[10](
  vec2(.036,.412),vec2(.135,.49),vec2(.25,.61),vec2(.43,.70),
  vec2(.68,.746),vec2(.87,.74),vec2(1.08,.698),vec2(1.35,.586),
  vec2(1.57,.489),vec2(1.694,.492));
float radiusAt(float y){
  float r=profile[0].y;
  for(int i=0;i<bands;i++){
    vec2 a=profile[i],b=profile[i+1];
    r+=(b.y-a.y)*clamp((y-a.x)/(b.x-a.x),0.,1.);
  }
  return r;
}
vec3 shellNormal(vec3 p){
  float a=atan(p.z,p.x);
  float slope=(radiusAt(p.y+.035)-radiusAt(p.y-.035))/.07;
  vec2 radial=normalize(p.xz);
  float cut=.245*cos(16.*a+.43*p.y)*smoothstep(.08,.30,p.y)*(1.-smoothstep(1.12,1.62,p.y));
  radial-=cut*vec2(-radial.y,radial.x);
  return normalize(vec3(radial.x,-slope,radial.y));
}
float shellHit(vec3 p,vec3 d,float inset){
  float best=100.;
  for(int i=0;i<bands;i++){
    vec2 a=profile[i],b=profile[i+1];
    float k=(b.y-a.y)/(b.x-a.x),r=a.y-inset+k*(p.y-a.x),v=k*d.y;
    float A=dot(d.xz,d.xz)-v*v,B=dot(p.xz,d.xz)-r*v,C=dot(p.xz,p.xz)-r*r;
    float disc=B*B-A*C;
    if(disc<0.)continue;
    float root=sqrt(disc);
    float q=-B-(B>=0.?root:-root);
    vec2 ts=vec2(q/(abs(A)<1e-7?1e-7:A),C/(abs(q)<1e-7?1e-7:q));
    for(int j=0;j<2;j++){
      float t=ts[j],y=p.y+d.y*t;
      if(t>.0004 && t<best && y>=a.x && y<=b.x && (inset==0. || y>=.123))best=t;
    }
  }
  return best;
}
float levelAt(vec2 p,vec3 motion,float t){
  float r=length(p);
  return 1.06+.0024*sin(12.*p.x+5.*p.y-1.6*t)+.0017*sin(8.*p.y-2.1*t)+.212*dot(motion.xy,p)+.014*motion.z*sin(18.*r-7.5*t)+.013*pow(min(r/.687,1.),12.);
}
vec3 surfaceNormal(vec2 p,vec3 motion,float t){
  vec2 delta=vec2(.002,0.);
  return normalize(vec3(levelAt(p-delta,motion,t)-levelAt(p+delta,motion,t),.004,
    levelAt(p-delta.yx,motion,t)-levelAt(p+delta.yx,motion,t)));
}
float freeSurface(vec3 p,vec3 d,vec3 motion,float t){
  float den=d.y-.212*dot(motion.xy,d.xz);
  if(abs(den)<.009)return 100.;
  float s=(levelAt(p.xz,motion,t)-p.y)/den;
  vec3 q=p+d*s;
  s+=(levelAt(q.xz,motion,t)-q.y)/den;
  return s>.0004?s:100.;
}
float fresnelWeight(vec3 d,vec3 n,float n1,float n2){
  float f=(n1-n2)/(n1+n2);f*=f;
  return f+(1.-f)*pow(1.-clamp(abs(dot(d,n)),0.,1.),5.);
}
// Media are exterior air (0), glass (1), water (2) and air in the neck (3).
float mediumIOR(int m,vec2 iors){return m==1?iors.x:(m==2?iors.y:1.);}
float nextBoundary(vec3 p,vec3 d,int medium,vec3 motion,float time,out vec3 n,out int next){
  bool glass=medium==1;
  float outside=glass?shellHit(p,d,0.):100.,inside=shellHit(p,d,thickness);
  float dist=min(outside,inside);
  vec3 at=p+d*dist;
  next=outside<inside?0:(glass?(at.y<levelAt(at.xz,motion,time)?2:3):1);
  n=shellNormal(at);
  if(!glass){
    float surface=freeSurface(p,d,motion,time);
    if(surface<dist){dist=surface;n=surfaceNormal((p+d*dist).xz,motion,time);next=medium==2?3:2;}
  }
  if(abs(d.y)>.0001){
    float cap=((d.y>0.?lip:(glass?foot:.123))-p.y)/d.y;
    if(cap>.0004 && cap<dist){
      dist=cap;n=vec3(0.,1.,0.);next=(d.y>0.||glass)?0:1;
    }
    if(glass && d.y>0. && p.y<.123){
      float base=(.123-p.y)/d.y;
      if(base>.0004 && base<dist && length((p+d*base).xz)<radiusAt(.123)-thickness){
        dist=base;n=vec3(0.,1.,0.);next=2;
      }
    }
  }
  if(dot(d,n)>0.)n=-n;
  return dist;
}
`;
