import{$ as e,A as t,D as n,E as r,F as i,G as a,H as o,I as s,K as c,L as l,M as u,O as d,P as ee,Q as te,S as f,T as ne,V as p,W as re,X as m,Z as ie,_ as ae,a as oe,b as se,c as ce,d as le,et as h,g as ue,h as de,i as fe,j as pe,k as me,l as he,m as ge,n as _e,nt as ve,o as ye,p as be,q as xe,r as Se,s as Ce,t as we,tt as g,u as Te,v as Ee,w as De,x as Oe,y as ke,z as Ae}from"./graphics-rRdjLIzW.js";var _=class{constructor(e=20,t=.72){this.frequency=e,this.damping=t,this.x=0,this.v=0}kick(e){this.v+=e}reset(){this.x=this.v=0}step(e,t=0){let n=this.frequency,r=this.damping*n,i=n*Math.sqrt(1-this.damping**2),a=this.x-t,o=(this.v+r*a)/i,s=Math.exp(-r*e),c=Math.sin(i*e),l=Math.cos(i*e);return this.x=t+s*(a*l+o*c),this.v=s*((o*i-r*a)*l-(a*i+r*o)*c),this.x}},je=(e,t,n)=>Math.max(t,Math.min(n,e)),Me=[{mass:1,pitch:3.5,push:2.7,camera:1.12,roll:.9,recovery:29,climb:.0032},{mass:1.3,pitch:7.8,push:5.1,camera:2.35,roll:1.7,recovery:23,climb:.008},{mass:1.5,pitch:6.2,push:4.1,camera:1.85,roll:1.15,recovery:25,climb:.006}],Ne=class{constructor(){this.lagX=new _(13,.8),this.lagY=new _(14,.8),this.pitch=new _(29,.66),this.push=new _(32,.73),this.roll=new _(24,.62),this.yaw=new _(24,.74),this.cameraX=new _(30,.83),this.cameraY=new _(28,.85),this.landing=new _(17,.66),this.stride=new _(22,.72),this.strafe=new _(12,.85),this.forward=new _(12,.85),this.sprint=new _(14,.87),this.stance=new _(18,.9),this.springs=Object.values(this).filter(e=>e instanceof _),this.burst=0,this.lastFire=-10}reset(){this.springs.forEach(e=>e.reset()),this.burst=0,this.lastFire=-10}turn(e,t){this.lagX.x=je(this.lagX.x+e,-.17,.17),this.lagY.x=je(this.lagY.x+t,-.13,.13)}fire(e,t,n){let r=Me[e];this.burst=n-this.lastFire<.22?this.burst+1:0,this.lastFire=n;let i=Math.sin(this.burst*2.17+.6)*.65+(Math.random()-.5)*.35,a=1-t*.48,o=.95+Math.random()*.1;return this.pitch.frequency=r.recovery,this.push.frequency=r.recovery+4,this.pitch.kick(r.pitch*a*o),this.push.kick(r.push*(1-t*.38)),this.yaw.kick(i*r.roll*.48*a),this.roll.kick(i*r.roll*a),this.cameraX.kick(r.camera*(1-t*.24)*o),this.cameraY.kick(i*r.camera*.14),r.climb*(1-t*.25)}land(e){this.landing.kick(-je(e,0,12)*.26),this.pitch.kick(je(e,0,12)*.16)}step(e,t,{sprint:n=!1,strafe:r=0,forward:i=0,stance:a=0}={}){let o=Me[t].mass;this.lagX.frequency=13/Math.sqrt(o),this.lagY.frequency=14/Math.sqrt(o);for(let t of[this.lagX,this.lagY,this.pitch,this.push,this.roll,this.yaw,this.cameraX,this.cameraY,this.landing,this.stride])t.step(e);this.strafe.step(e,r),this.forward.step(e,i),this.sprint.step(e,+!!n),this.stance.step(e,a)}snapshot(){return{lag:[this.lagX.x,this.lagY.x],kick:[this.pitch.x,this.push.x,this.roll.x],camera:[this.cameraX.x,this.cameraY.x],landing:this.landing.x,sprint:this.sprint.x}}};function Pe(e){let t=new me,n=new ne().makeScale(0,0,0),r=new g(0,1,0),i=new se(new ye(1,1,1),new d({color:10722183,metalness:.55,roughness:.48}),128),o=new se(new be(.008,.008,.032,8),new d({color:13870676,metalness:.8,roughness:.3}),48);i.frustumCulled=o.frustumCulled=!1,e.add(i,o);let c=[{mesh:i,count:128,cursor:0,data:[]},{mesh:o,count:48,cursor:0,data:[]}];for(let e of c)for(let t=0;t<e.count;t++)e.mesh.setMatrixAt(t,n),e.data.push({p:new g,v:new g,r:new g,spin:new g,size:1,life:0,bounced:!1});let l=new Float32Array(384),u=new Float32Array(128),te=new Float32Array(128),f=[],p=new ce;p.setAttribute(`position`,new Ce(l,3)),p.setAttribute(`size`,new Ce(u,1)),p.setAttribute(`alpha`,new Ce(te,1));let re=new s(p,new a({transparent:!0,depthWrite:!1,uniforms:{pixelScale:{value:600}},vertexShader:`attribute float size;attribute float alpha;uniform float pixelScale;varying float a;void main(){a=alpha;vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(size*pixelScale/-p.z,1.,180.);}`,fragmentShader:`varying float a;void main(){vec2 p=gl_PointCoord-.5;float r=length(p);float n=sin(p.x*25.+sin(p.y*17.))*sin(p.y*21.);float f=1.-smoothstep(.08,.49,r+n*.023);gl_FragColor=vec4(.49,.48,.43,a*f*f);}`}));re.frustumCulled=!1,e.add(re);for(let e=0;e<128;e++)f.push({p:new g,v:new g,life:0,max:1,size:1});let m=0,ie=new ee(1,1),ae=new a({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,uniforms:{},vertexShader:`varying vec2 u;void main(){u=uv;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 u;void main(){vec2 p=u-.5;float r=length(p);float edge=.36+.045*sin(atan(p.y,p.x)*13.);float a=(1.-smoothstep(edge-.1,edge,r))*.75;vec3 c=mix(vec3(.035,.028,.021),vec3(.24,.21,.17),smoothstep(.09,.2,r));gl_FragColor=vec4(c,a);}`}),oe=new se(ie,ae,64);oe.frustumCulled=!1,e.add(oe);for(let e=0;e<64;e++)oe.setMatrixAt(e,n);let le=0;function h(e,t,n=3,r=1){for(let i=0;i<n;i++){let n=f[m++%128];n.p.copy(e),n.v.copy(t).multiplyScalar(.25+Math.random()*.65).add(new g((Math.random()-.5)*.4,.4,(Math.random()-.5)*.4)),n.life=n.max=.45+Math.random()*.5,n.size=r*(.12+Math.random()*.1)}}function ue(e,t,n,r){let i=e.cursor++%e.count,a=e.data[i];a.p.copy(t),a.v.copy(n),a.r.set(Math.random()*6,Math.random()*6,0),a.spin.set(Math.random()*18-9,Math.random()*18-9,Math.random()*18-9),a.life=e===c[1]?2.8:1,a.size=r,a.bounced=!1}function de(e,n,r=!1,i=!1){h(e,n,r?5:3,r?1.5:1);for(let t=0;t<(r?10:5);t++){let t=n.clone().multiplyScalar(1.5+Math.random()*4);t.x+=(Math.random()-.5)*3,t.y+=Math.random()*3,t.z+=(Math.random()-.5)*3,ue(c[0],e,t,(i?.018:.026)*(1+Math.random()))}i||(t.position.copy(e).addScaledVector(n,.014),t.quaternion.setFromUnitVectors(new g(0,0,1),n),t.rotateZ(Math.random()*6),t.scale.setScalar(r?.21:.13),t.updateMatrix(),oe.setMatrixAt(le++%64,t.matrix),oe.instanceMatrix.needsUpdate=!0)}function fe(e,t,n,i){let a=t.clone().multiplyScalar(2.2+Math.random()).addScaledVector(n,-.6).addScaledVector(r,1.5+Math.random());ue(c[1],e,a,i===1?1.65:1)}function pe(e,r){re.material.uniforms.pixelScale.value=r*.75;for(let r of c){for(let i=0;i<r.count;i++){let a=r.data[i];if(a.life<=0){r.mesh.setMatrixAt(i,n);continue}a.life-=e,a.v.y-=12*e,a.p.addScaledVector(a.v,e),a.p.y<.02&&(a.p.y=.02,a.v.y=Math.abs(a.v.y)*.32,a.v.x*=.65,a.v.z*=.65,a.spin.multiplyScalar(.5),a.bounced=!0),a.r.addScaledVector(a.spin,e),t.position.copy(a.p),t.rotation.set(a.r.x,a.r.y,a.r.z),t.scale.setScalar(a.size*Math.min(1,Math.max(0,a.life)*5)),t.updateMatrix(),r.mesh.setMatrixAt(i,t.matrix)}r.mesh.instanceMatrix.needsUpdate=!0}for(let t=0;t<128;t++){let n=f[t];n.life>0?(n.life-=e,n.p.addScaledVector(n.v,e),n.v.multiplyScalar(Math.exp(-e*2)),l.set(n.p.toArray(),t*3),u[t]=n.size*(1+(1-n.life/n.max)*2.4),te[t]=Math.max(0,n.life/n.max)*.24):te[t]=0}p.attributes.position.needsUpdate=p.attributes.size.needsUpdate=p.attributes.alpha.needsUpdate=!0}function he(){le=0;for(let e of c){for(let t=0;t<e.count;t++)e.data[t].life=0,e.mesh.setMatrixAt(t,n);e.mesh.instanceMatrix.needsUpdate=!0}f.forEach(e=>e.life=0),te.fill(0),p.attributes.alpha.needsUpdate=!0;for(let e=0;e<64;e++)oe.setMatrixAt(e,n);oe.instanceMatrix.needsUpdate=!0}return{impact:de,eject:fe,puff:h,tick:pe,clear:he,stats:()=>({casings:c[1].data.filter(e=>e.life>0).length,chips:c[0].data.filter(e=>e.life>0).length,smoke:f.filter(e=>e.life>0).length,decals:Math.min(le,64)})}}var Fe=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Ie=new pe(-1,1,1,-1,0,1),Le=new class extends ce{constructor(){super(),this.setAttribute(`position`,new de([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new de([0,2,0,0,2,0],2))}},Re=class{constructor(e){this._mesh=new r(Le,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ie)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},ze=class extends Fe{constructor(t,n=`tDiffuse`){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof a?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=e.clone(t.uniforms),this.material=new a({name:t.name===void 0?`unspecified`:t.name,defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Re(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Be={name:`FXAAShader`,uniforms:{tDiffuse:{value:null},resolution:{value:new h(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`},Ve={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},He=class extends Fe{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Ue=class extends Fe{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},We=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new h);this._width=n.width,this._height=n.height,t=new ve(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ee}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ze(Ve),this.copyPass.material.blending=0,this.timer=new m}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}He!==void 0&&(r instanceof He?n=!0:r instanceof Ue&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new h);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Ge=class extends Fe{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Te}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Ke={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Te(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},qe=class t extends Fe{constructor(t,r=1,i,o){super(),this.strength=r,this.radius=i,this.threshold=o,this.resolution=t===void 0?new h(256,256):new h(t.x,t.y),this.clearColor=new Te(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new ve(s,c,{type:Ee}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new ve(s,c,{type:Ee});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new ve(s,c,{type:Ee});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),s=Math.round(s/2),c=Math.round(c/2)}let l=Ke;this.highPassUniforms=e.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new a({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let u=[6,10,14,18,22];s=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(u[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new h(1/s,1/c),s=Math.round(s/2),c=Math.round(c/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=r,this.compositeMaterial.uniforms.bloomRadius.value=.1;let d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new g(1,1,1),new g(1,1,1),new g(1,1,1),new g(1,1,1),new g(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=e.clone(Ve.uniforms),this.blendMaterial=new a({uniforms:this.copyUniforms,vertexShader:Ve.vertexShader,fragmentShader:Ve.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Te,this._oldClearAlpha=1,this._basic=new n,this._fsQuad=new Re(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new h(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,n,r,i,a){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=t.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[n]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=t.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[n]),e.clear(),this._fsQuad.render(e),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(r),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);return new a({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new h(.5,.5)},direction:{value:new h(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new a({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};qe.BlurDirectionX=new h(1,0),qe.BlurDirectionY=new h(0,1);var Je={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Ye=class extends Fe{constructor(){super(),this.isOutputPass=!0,this.uniforms=e.clone(Je.uniforms),this.material=new Ae({name:Je.name,uniforms:this.uniforms,vertexShader:Je.vertexShader,fragmentShader:Je.fragmentShader}),this._fsQuad=new Re(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},le.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},v=e=>document.getElementById(e),Xe=v(`game`),y;try{y=new oe({canvas:Xe,antialias:!0,powerPreference:`high-performance`})}catch(e){throw v(`unsupported`).classList.remove(`hidden`),v(`loading`).classList.add(`hidden`),e}y.setPixelRatio(Math.min(devicePixelRatio,1.25)),y.setSize(innerWidth,innerHeight),y.shadowMap.enabled=!0,y.shadowMap.type=1,y.toneMapping=4,y.toneMappingExposure=1.18,y.autoClear=!1,y.info.autoReset=!1;var b=new re;b.fog=new ue(1716278,.014);var x=new u(78,innerWidth/innerHeight,.08,350);x.rotation.order=`YXZ`;var Ze=new We(y);Ze.addPass(new Ge(b,x));var Qe=new qe(new h(innerWidth,innerHeight),.48,.6,1.05);Ze.addPass(Qe),Ze.addPass(new Ye);var $e=new ze(Be);Ze.addPass($e);var et=new re,tt=new u(60,innerWidth/innerHeight,.015,10);et.add(new ke(11856367,1517105,1.05));var nt=new ge(16766379,2.1);nt.position.set(-1,2,2),et.add(nt);var rt=new ge(7853800,1.2);rt.position.set(2,.7,-1),et.add(rt);var it=await Se(y,b,et),S=new Ne,at=Pe(b),ot=!1,st=-10,ct=0,lt=-10,ut=-1,dt=0,ft=-1,pt=performance.now(),C=0,w=0,T=`menu`,mt=1,ht=.65,gt=0,_t=1977;function vt(){return _t=_t*1664525+1013904223>>>0,_t/4294967296}var E=(e,t)=>e+vt()*(t-e),D=De.clamp,yt=De.lerp,bt=(e,t,n,r)=>yt(e,t,1-Math.exp(-n*r)),O=(e=0,t=0,n=0)=>new g(e,t,n),k=O(),xt=O(),A=(e,t=0,n=.8,r=0,i=0)=>new d({color:e,metalness:t,roughness:n,emissive:r,emissiveIntensity:i}),j=A(5464424,.18,.85),St=A(2438718,.3,.7),Ct=A(7963003,.25,.66),M=A(7430217,.78,.4),wt=A(726299,.65,.38),Tt=A(16735012,.15,.4,16732187,4),Et=A(7593188,.3,.35,3918567,3.2);for(let e of[j,St,Ct])e.map=it.stoneMap,e.normalMap=it.stoneNormal,e.normalScale.set(.5,.5),e.roughnessMap=it.stoneRough,e.envMapIntensity=.3;var Dt=new ye(1,1,1),Ot=new xe(1,12,8),kt=new be(1,1,1,12),At=new t(1);function N(e,t,n,i,a){let o=new r(e,t);return i&&o.position.set(...i),a&&o.scale.set(...a),o.castShadow=!0,o.receiveShadow=!0,n.add(o),o}function P(e,t,n,r,i,a,o,s=j){return N(Dt,s,e,[t,n,r],[i,a,o])}function jt(e,t,n,r,i,a){return N(Ot,a,e,[t,n,r],[i,i,i])}var Mt=[],Nt=[],Pt=[],Ft=[];function It(e,t,n,r,i=2,a=j){let o=P(b,e,i/2,t,n,i,r,a);return Mt.push({x:e,z:t,hx:n/2+.05,hz:r/2+.05}),Nt.push(o),o}function Lt(e,t,n,r,i,a,o,s=0,c=0,l=0){let u=N(new ie(t,n,8,80),r,e,[i,a,o]);return u.rotation.set(s,c,l),u}b.add(new ke(11392729,3228242,2.1));var Rt=new ge(16766385,3.4);Rt.position.set(-20,37,-15),Rt.castShadow=!0,Rt.shadow.mapSize.set(2048,2048),Object.assign(Rt.shadow.camera,{left:-38,right:38,top:38,bottom:-38,near:1,far:100}),Rt.shadow.bias=-4e-4,Rt.shadow.normalBias=.025,b.add(Rt);var zt=new ge(6995671,2);zt.position.set(10,20,30),b.add(zt);var Bt=new r(new xe(220,48,24),new a({side:1,depthWrite:!1,uniforms:{uTime:{value:0}},vertexShader:`varying vec3 vPos; void main(){vPos=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec3 vPos;uniform float uTime;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}void main(){vec3 p=normalize(vPos);float h=p.y;vec3 c=mix(vec3(.055,.11,.13),vec3(.008,.017,.029),smoothstep(-.2,.9,h));float cloud=sin(p.x*13.+p.z*9.)*.3+sin(p.z*27.+p.y*21.)*.16; c+=vec3(.09,.125,.13)*pow(max(0.,1.-abs(h-.12)*2.8),3.)*(.7+cloud);vec2 uv=vec2(atan(p.z,p.x),asin(p.y));vec2 cell=floor(uv*290.);float s=hash(cell);float star=pow(max(0.,1.-length(fract(uv*290.)-.5)*2.),12.)*step(.988,s)*smoothstep(.1,.5,h);c+=star*vec3(.7,.84,.9);gl_FragColor=vec4(c,1.);}`}));b.add(Bt);var Vt=new a({vertexShader:`varying vec3 p;varying vec3 n;void main(){p=position;n=normal;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec3 p;varying vec3 n;void main(){float bands=sin(p.y*.72+sin(p.x*.15)*1.8)*.04+sin(p.y*2.8)*.013;float light=pow(max(0.,dot(normalize(n),normalize(vec3(-1.,.3,.7)))),1.5);vec3 col=vec3(.18+bands,.23+bands,.22+bands)*(.16+light*.7);gl_FragColor=vec4(col,1.);}`}),Ht=N(new xe(32,64,48),Vt,b,[-24,55,-119]);Ht.rotation.z=-.3;var Ut=new r(new o(39,58,160),new a({side:2,transparent:!0,depthWrite:!1,vertexShader:`varying vec3 p;void main(){p=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec3 p;void main(){float r=length(p.xy);float a=(.2+.25*sin(r*5.)+.15*sin(r*17.))*smoothstep(39.,41.,r)*(1.-smoothstep(54.,58.,r));gl_FragColor=vec4(.55,.58,.45,a);}`}));Ut.position.copy(Ht.position),Ut.rotation.set(1.08,.15,-.32),b.add(Ut),jt(b,13,30,-99,15,new n({color:462869})),Lt(b,15.5,.19,Tt,13,30,-98),Lt(b,16.2,.035,Tt,13,30,-98);var Wt=it.floor,Gt=N(new be(33,33,1.8,80),St,b,[0,-1,0]);Nt.push(Gt);var Kt=new r(new he(32.95,96),Wt);Kt.rotation.x=-Math.PI/2,Kt.position.y=-.075,Kt.receiveShadow=!0,b.add(Kt);var qt=new r(new he(32.9,96),new c({opacity:.38}));qt.rotation.x=-Math.PI/2,qt.position.y=-.069,qt.receiveShadow=!0,qt.visible=!1,b.add(qt),Lt(b,32.7,.085,M,0,.02,0,Math.PI/2);for(let e=0;e<24;e++){let t=e/24*Math.PI*2,n=Math.sin(t)*32,r=Math.cos(t)*32,i=P(b,n,-.1,r,2.5,1,2.2,St);i.rotation.y=t,P(b,n,.48,r,.75,.045,.5,Et)}It(0,-21,12,6,1,St),P(b,0,1.05,-21,12.3,.12,6.3,M);for(let e=0;e<3;e++)P(b,0,.15+e*.13,-16.7-e*.8,10,.3+e*.26,1,j);It(0,-21,3,2.2,3,wt),P(b,0,3.05,-21,3.4,.16,2.5,M);var Jt=Lt(b,5.1,.1,Tt,0,8.6,-23);Lt(b,5.45,.035,M,0,8.6,-23);var F=new ae;F.position.set(0,8.2,-22.7),b.add(F),N(new t(1),wt,F,[0,0,0],[1.1,3.5,.75]),N(new t(1),Tt,F,[0,.1,.09],[.17,2.8,.78]);for(let e of[-1,1]){let t=P(F,e*1.6,.7,0,.35,3.5,.4,M);t.rotation.z=e*-.8;let n=P(F,e*2.6,1.3,0,.13,2.6,.3,Ct);n.rotation.z=e*-1.05}Lt(F,.7,.045,Tt,0,3.1,0);var Yt=new i(16737832,65,22,2);Yt.position.set(0,7,-21),b.add(Yt);function Xt(e,t,n=0,i=14,a=6){let o=new ae;o.position.set(e,0,t),o.rotation.y=n,b.add(o);for(let s of[-1,1]){P(o,s*a,1,0,1.75,2,1.75,St),we(o,s*a,i,j,M),P(o,s*a,i*.36,.52,.15,i*.72,.14,M),P(o,s*a,i*.71,0,1.3,.5,1.3,Ct);let c=new l(O(s*a,i*.7,0),O(s*a,i*.96,0),O(0,i*1.18,0)),u=new r(new te(c,16,.39,5,!1),j);u.castShadow=!0,o.add(u);let d=new r(new te(c,20,.045,4,!1),M);d.position.z=.4,o.add(d),N(At,M,o,[s*a,i*.78,0],[.5,1.2,.5]);let ee=O(s*a,0,0).applyAxisAngle(O(0,1,0),n).add(O(e,0,t));Mt.push({x:ee.x,z:ee.z,hx:.8,hz:.8})}return o}for(let e of[-20,-7,7,20])Xt(-23,e,Math.PI/2,E(12,17),5.4),Xt(23,e,Math.PI/2,E(12,17),5.4);Xt(0,-27,0,20,10),Xt(0,29,0,13,10);for(let e of[-1,1])for(let t of[-20,-7,7,20]){let n=e*23,r=P(b,n,1.4,t,1.2,2.8,6,St);Mt.push({x:n,z:t,hx:.6,hz:3}),Nt.push(r),P(b,n,2.87,t,1.5,.14,6.3,M)}for(let e=0;e<12;e++){let t=e%2?1:-1,n=-26+Math.floor(e/2)*10,r=P(b,t*17,15+E(0,5),n,.9,6,1.1,j);r.rotation.z=t*-.9,r.rotation.x=E(-.2,.2),Ft.push({mesh:r,base:r.position.y,phase:E(0,6),speed:E(.2,.4)})}for(let e=0;e<8;e++){let t=e/8*Math.PI*2,n=Math.sin(t)*16,r=Math.cos(t)*16;r<-11&&Math.abs(n)<7||(It(n,r,3.3,1.7,1.5,St),P(b,n,1.55,r,3.5,.14,1.95,Ct),P(b,n,1.1,r+.87,2.3,.055,.02,M))}for(let e of[-1,1]){It(e*8,-5,2.5,2.5,3.2,j),P(b,e*8,3.25,-5,2.8,.2,2.8,M),N(At,Et,b,[e*8,4.25,-5],[.22,.65,.22]);let t=new i(7069160,9,9);t.position.set(e*8,4,-5),b.add(t)}for(let e of[-1,1])for(let t of[-11,12]){let n=new ae;n.position.set(e*28,0,t),n.rotation.y=-e*Math.PI/2,b.add(n),P(n,0,2.8,0,4.1,5.6,.45,wt),P(n,-2.15,3,0,.45,6,.7,M),P(n,2.15,3,0,.45,6,.7,M),P(n,0,6,0,4.6,.45,.7,M);let o=new r(new ee(3.8,5.5),new a({transparent:!0,side:2,uniforms:{t:{value:0}},vertexShader:`varying vec2 uv2;void main(){uv2=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 uv2;uniform float t;void main(){vec2 p=uv2;float edge=pow(abs(p.x-.5)*2.,5.);float bands=pow(.5+.5*sin(p.x*70.+sin(p.y*15.-t*2.)),8.);float fade=smoothstep(0.,.12,p.y)*(1.-smoothstep(.82,1.,p.y));vec3 c=vec3(1.8,.21,.045)*(edge*.8+bands*.45+.05);gl_FragColor=vec4(c,fade*.9);}`}));o.position.set(0,3,.26),n.add(o),Pt.push(o);let s=new i(16728860,20,10,2);s.position.set(e*26,2,t),t<0&&b.add(s)}var Zt=new se(Dt,j,100),Qt=new me;for(let e=0;e<100;e++){let t=E(0,Math.PI*2),n=E(34,64);Qt.position.set(Math.cos(t)*n,E(-16,32),Math.sin(t)*n),Qt.rotation.set(E(0,3),E(0,3),E(0,3)),Qt.scale.set(E(.4,2.6),E(.4,3.3),E(.4,2.5)),Qt.updateMatrix(),Zt.setMatrixAt(e,Qt.matrix)}b.add(Zt);var $t=new ce,en=new Float32Array(660);for(let e=0;e<220;e++)en[e*3]=E(-38,38),en[e*3+1]=E(.4,22),en[e*3+2]=E(-38,38);$t.setAttribute(`position`,new Ce(en,3));var tn=new a({transparent:!0,depthWrite:!1,blending:2,uniforms:{t:{value:0}},vertexShader:`uniform float t;varying float a;void main(){vec3 p=position;p.y=mod(p.y+t*.16,22.);p.x+=sin(t*.3+p.z)*.3;vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(30./-mv.z,1.,4.);a=.3+.3*sin(p.x+t);}`,fragmentShader:`varying float a;void main(){float d=length(gl_PointCoord-.5);gl_FragColor=vec4(1.,.49,.2,(1.-smoothstep(.1,.5,d))*a);}`});b.add(new s($t,tn)),_e(b,j,M),b.traverse(e=>{e.isMesh&&[j,St,Ct,M,wt].includes(e.material)&&!Nt.includes(e)&&Nt.push(e)}),b.updateMatrixWorld(!0);var nn=new Map,rn=new Set([F,Jt,...Ft.map(e=>e.mesh)]);b.traverse(e=>{if(!e.isMesh||e.isInstancedMesh||![j,St,Ct,M,wt,Tt,Et].includes(e.material))return;let t=e;for(;t;){if(rn.has(t))return;t=t.parent}nn.has(e.material)||nn.set(e.material,[]),nn.get(e.material).push(e)});for(let[e,t]of nn){let n=t.map(e=>(e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone()).applyMatrix4(e.matrixWorld)),i=fe(n,!1);if(n.forEach(e=>e.dispose()),i){let n=new r(i,e);n.castShadow=!0,n.receiveShadow=!0,b.add(n),t.forEach(e=>{e.visible=!1,e.matrixAutoUpdate=!1,e.matrixWorldAutoUpdate=!1}),n.matrixAutoUpdate=!1}}var I,an,on,sn=!1;function cn(){if(!I){I=new(window.AudioContext||window.webkitAudioContext),an=I.createGain(),an.gain.value=ht;let e=I.createDynamicsCompressor();e.threshold.value=-10,e.knee.value=12,e.ratio.value=5,e.attack.value=.002,e.release.value=.12,an.connect(e).connect(I.destination),on=I.createBuffer(1,I.sampleRate*2,I.sampleRate);let t=on.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}if(I.resume(),!sn){sn=!0;let e=I.createBufferSource();e.buffer=on,e.loop=!0;let t=I.createBiquadFilter();t.type=`lowpass`,t.frequency.value=160;let n=I.createGain();n.gain.value=.12,e.connect(t).connect(n).connect(an),e.start();for(let e of[41.2,61.8]){let t=I.createOscillator(),n=I.createGain();t.frequency.value=e,n.gain.value=.023,t.connect(n).connect(an),t.start()}}}function L(e,t,n,r,i=`sine`,a=0){if(!I)return;let o=I.currentTime+a,s=I.createOscillator(),c=I.createGain();s.type=i,s.frequency.setValueAtTime(e,o),s.frequency.exponentialRampToValueAtTime(Math.max(t,10),o+n),c.gain.setValueAtTime(r,o),c.gain.exponentialRampToValueAtTime(.001,o+n),s.connect(c).connect(an),s.start(o),s.stop(o+n+.01)}function R(e,t,n=2e3,r=0,i=`lowpass`){if(!I)return;let a=I.currentTime+r,o=I.createBufferSource(),s=I.createBiquadFilter(),c=I.createGain();o.buffer=on,s.type=i,s.frequency.value=n,c.gain.setValueAtTime(t,a),c.gain.exponentialRampToValueAtTime(.001,a+e),o.connect(s).connect(c).connect(an),o.start(a,Math.random()),o.stop(a+e+.01)}function ln(e){let t=e===1?1.12:e===2?.98:.72,n=.94+Math.random()*.12;R(.034,t,6500),R(.19,t*.45,1700),L((e===1?96:145)*n,32,e===1?.23:.16,t*.72),R(.28,t*.36,260),L(2100*n,620,.024,.12,`triangle`),R(.12,.12,3800,.055,`highpass`),R(.28,t*.16,1100,.12),R(.4,t*.075,720,.24)}function un(e,t){R(.055,.28,e?3900:1500),L(e?2300:730,e?1300:220,.055,e?.14:.1,`triangle`),L(t?125:180,45,t?.2:.11,t?.23:.14),t&&R(.12,.16,650,.03)}function dn(e){R(.035,.13,e===2?3600:2100),L(e===2?480:260,120,.045,.055,`triangle`)}var z=[{name:`REVENANT`,label:`AUTOMATIC / 5.56 × 45`,capacity:30,reserveMax:210,damage:30,interval:.092,reload:1.8,spread:.017,aimSpread:.0018,kick:.026,auto:!0,pellets:1,zoom:57,weight:1},{name:`ABSOLUTION`,label:`PUMP ACTION / 12 GAUGE`,capacity:8,reserveMax:64,damage:23,interval:.82,reload:2.4,spread:.074,aimSpread:.046,kick:.082,auto:!1,pellets:10,zoom:64,weight:1.3},{name:`LAST WORD`,label:`SEMI AUTO / 7.62 × 51`,capacity:12,reserveMax:96,damage:100,interval:.38,reload:2.05,spread:.026,aimSpread:6e-4,kick:.065,auto:!1,pellets:1,zoom:43,weight:1.5}],B=new ae;et.add(B);var V=0,H=it.weaponRoots,fn=[];for(let e=0;e<3;e++){let t=H[e];t.visible=e===0,B.add(t);let n=new ae;n.position.fromArray(t.userData.muzzle),t.add(n),fn.push(n);let i=new a({transparent:!0,depthWrite:!1,blending:2,side:2,uniforms:{seed:{value:0}},vertexShader:`varying vec2 u;void main(){u=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 u;uniform float seed;void main(){vec2 p=u-.5;float a=atan(p.y,p.x);float r=length(p);float ray=pow(abs(sin(a*5.+seed)),8.);float v=1.-smoothstep(.04,.2+ray*.28,r);gl_FragColor=vec4(3.,1.5,.3,v);}`}),o=new r(new ee(.4,.4),i);o.position.z=-.025,n.add(o),n.visible=!1}var pn=new ae;pn.name=`loading_shell`;var mn=new r(new be(.011,.011,.048,12),A(10434086,.15,.5)),hn=new r(new be(.012,.012,.009,12),A(13609568,.8,.3));hn.position.y=-.025,pn.add(mn,hn),pn.rotation.z=Math.PI/2,pn.position.set(.035,-.08,-.38),pn.visible=!1,H[1].getObjectByName(`support_hand`).add(pn);var gn=new i(16753466,0,3);gn.position.set(0,.15,-.5),et.add(gn);var _n=new i(16752964,0,9);b.add(_n);var vn=2200,yn=[],bn=new Float32Array(vn*3),xn=new Float32Array(vn*3),Sn=new Float32Array(vn),Cn=0;for(let e=0;e<vn;e++)yn.push({p:O(),v:O(),life:0,max:1,size:1,gravity:0});var wn=new ce;wn.setAttribute(`position`,new Ce(bn,3)),wn.setAttribute(`color`,new Ce(xn,3)),wn.setAttribute(`aSize`,new Ce(Sn,1));var Tn=new a({vertexColors:!0,transparent:!0,depthWrite:!1,blending:2,vertexShader:`attribute float aSize;varying vec3 c;void main(){c=color;vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(aSize*240./-p.z,0.,45.);}`,fragmentShader:`varying vec3 c;void main(){float d=length(gl_PointCoord-.5);gl_FragColor=vec4(c,(1.-smoothstep(.05,.5,d))*.85);}`}),En=new s(wn,Tn);En.frustumCulled=!1,b.add(En);function Dn(e,t,n,r=3,i=.12,a=.5,o=6,s=null){let c=new Te(n);for(let n=0;n<t;n++){let t=Cn++%vn,n=yn[t];n.p.copy(e),n.v.set(E(-1,1),E(-.3,1.6),E(-1,1)).normalize().multiplyScalar(E(r*.3,r)),s&&n.v.addScaledVector(s,r*.8),n.life=n.max=E(a*.5,a),n.size=E(i*.5,i*1.5),n.gravity=o,xn[t*3]=c.r*2,xn[t*3+1]=c.g*2,xn[t*3+2]=c.b*2}wn.attributes.color.needsUpdate=!0}var On=[];function kn(e,t,n=16768148){let r=new ce().setFromPoints([e,t]),i=new f({color:n,transparent:!0,opacity:.7,depthWrite:!1,blending:2}),a=new Oe(r,i);b.add(a),On.push({mesh:a,life:.055,max:.055})}var An=[];function jn(e,t=16733998,r=3){let i=Lt(b,.3,.025,new n({color:t,transparent:!0,opacity:1,depthWrite:!1}),e.x,.13,e.z,Math.PI/2);An.push({mesh:i,life:.45,max:.45,scale:r})}var U=[],Mn=[],Nn=[];A(2568505,.72,.5),A(7831931,.6,.4),A(1055007,.2,.8),A(16735031,.3,.3,16725271,3.6),A(6378308,.75,.4);var Pn=A(7990004,.3,.3,2408421,3),Fn=0;function In(e,t){let n=new ae;n.position.copy(t),b.add(n);let r=e===1?1.3:e===2?.94:1;n.scale.setScalar(r);let i=it.createSoldier(e);n.add(i.visual);let a={mixer:i.mixer,runAction:i.run,idleAction:i.idle,visual:i.visual,spine:i.spine,id:Fn++,g:n,type:e,scale:r,hp:e===1?270:e===2?85:100,maxHp:e===1?270:e===2?85:100,speed:e===1?2.3:e===2?2.7:E(3.2,4.2),phase:E(0,6),attack:E(.4,1.4),stagger:0,flinch:new _(23,.6),twist:new _(20,.66),hitPause:0,spawnTime:.7,attackMotion:0,dead:!1,deathTime:0,fallSide:vt()>.5?1:-1,velocity:O()};return U.push(a),Dn(t.clone().add(O(0,1,0)),20,e===2?7530495:16732197,2,.12,.8,0),jn(t,16735535,2),a}var W=new Set,Ln=0,Rn=0,zn=!1,G=!1,Bn=!1,Vn=!1,K={pos:O(0,1.75,10),velocity:O(),health:100,stamina:100,grounded:!0,vy:0,slide:0,slideDir:O(),lastDamage:-10},Hn=0,Un=0,q=0,Wn=0,Gn=0,Kn=0,qn=0,J=0,Jn=-10,Y=0,Yn=0,Xn=0,X=0,Zn=0,Qn=0,$n=0,er=0,tr=0,nr=0,rr=0,ir=0,ar=0,or=0,Z=z.map(e=>({mag:e.capacity,reserve:e.reserveMax})),sr=new p,cr=O(),lr=O(),ur=O();function dr(){let e=z[V],t=Z[V];v(`weapon-name`).textContent=e.name,v(`weapon-class`).textContent=e.label,v(`ammo`).textContent=String(t.mag).padStart(2,`0`),v(`ammo`).style.color=t.mag<=Math.ceil(e.capacity*.2)?`#ff795b`:``,v(`reserve`).textContent=t.reserve,v(`health-number`).textContent=Math.ceil(K.health),v(`health-bar`).style.width=K.health+`%`,v(`health-bar`).style.background=K.health<30?`#ff5939`:`#e4ebd9`,v(`stamina-bar`).style.width=K.stamina+`%`,v(`score`).textContent=String(Un).padStart(6,`0`),document.querySelectorAll(`.weapon-slots>span`).forEach((e,t)=>e.classList.toggle(`active`,t===V))}function fr(e){e===V||Xn>0||(V=e,J=0,Y=0,ct=0,Xn=.32,ut=-1,st=-10,Jn=C-z[e].interval,nr=0,H.forEach((t,n)=>t.visible=e===n),R(.1,.09,2500),dr())}function pr(){let e=Z[V],t=z[V];Y||e.mag===t.capacity||e.reserve<=0||Xn>0||(J=0,ct=0,Y=Yn=t.reload,R(.14,.2,1700),L(180,100,.09,.1,`square`))}function mr(e,t){let n=document.createElement(`div`);n.textContent=e+` `;let r=document.createElement(`b`);r.textContent=`+`+t,n.appendChild(r),v(`combat-feed`).prepend(n),setTimeout(()=>n.remove(),3100)}function hr(e,t){T===`playing`&&(K.health=Math.max(0,K.health-e),K.lastDamage=C,tr=.7,Qn+=.065,R(.13,.3,420),L(90,35,.22,.3),t&&(k.copy(K.pos).sub(t),k.y=0,k.normalize(),K.velocity.addScaledVector(k,2)),dr(),K.health<=0&&Ar())}function gr(e,t,n,r,i){if(e.dead)return;let a=t*(n?2.5:1),o=V!==0;e.hp-=a,e.stagger=n?.25:o?.22:.14,e.hitPause=n?.055:.035,e.flinch.kick(Math.min(a*.045,6)),e.twist.kick(D(i.x-e.g.position.x,-.5,.5)*9),e.velocity.addScaledVector(r,Math.min(t*.06,4.5)),e.velocity.y=0;let s=r.clone().negate();if(Dn(i,n?13:7,n?16763496:16738368,n?6:4,.075,.35,6,s),at.impact(i,s,o,!0),$n=.22,dt=n?1.5:1,v(`hitmarker`).style.color=n?`#ff7950`:`#fff4d2`,ft!==rr&&(un(n,e.hp<=0),ft=rr),e.hp<=0){e.dead=!0,e.deathTime=1.7,e.runAction.paused=!0,e.idleAction.paused=!0,e.fallSide=Math.sign(e.twist.v)||e.fallSide,e.velocity.addScaledVector(r,o?3:1.5),e.velocity.y=0,Hn++;let t=(e.type===1?250:e.type===2?150:100)+(n?50:0);Un+=t,L(n?130:105,38,.15,.16),er=.8,dt=1.8,v(`kill-confirm`).textContent=n?`CRITICAL ELIMINATION +`+t:`ELIMINATED +`+t,mr(n?`HEADSHOT`:`CHOIR SILENCED`,t),Dn(e.g.position.clone().add(O(0,1,0)),18,16740411,5,.09,.6,5,s),(vt()<.33||K.health<45)&&yr(e.g.position),dr()}}function _r(e,t,n,r){xt.copy(e).sub(n);let i=xt.dot(t),a=xt.lengthSq()-r*r,o=i*i-a;if(o<0)return 1/0;let s=-i-Math.sqrt(o);return s>0?s:1/0}function vr(){let e=z[V],t=Z[V];if(T!==`playing`||J>0||Y>0||Xn>0||C-Jn<e.interval||ot)return;if(t.mag<=0){pr();return}Jn=C,lt=C,ut=V,t.mag--,rr++,ln(V),nr=.055,fn[V].children[0].material.uniforms.seed.value=E(0,10),Rn=D(Rn+S.fire(V,X,C),-1.35,1.35),Qn=Math.min(.018,Qn+e.kick*.055),K.slide=Math.min(K.slide,.5),x.updateMatrixWorld();let n=x.position.clone(),r=O();x.getWorldDirection(r),lr.set(1,0,0).applyQuaternion(x.quaternion);let i=O(0,1,0).applyQuaternion(x.quaternion),a=yt(e.spread,e.aimSpread,X)*(K.velocity.length()>5?1.6:1),o=!1;for(let t=0;t<e.pellets;t++){cr.copy(r).addScaledVector(lr,(Math.random()-.5)*a*2).addScaledVector(i,(Math.random()-.5)*a*2).normalize();let s=90,c=null,l=!1;sr.set(n,cr);let u=sr.intersectObjects(Nt,!1);u.length&&(s=u[0].distance);for(let e of U){if(e.dead||e.spawnTime>.3)continue;let t=_r(n,cr,e.g.position.clone().add(O(0,1.82*e.scale,0)),.26*e.scale),r=_r(n,cr,e.g.position.clone().add(O(0,1.1*e.scale,0)),.55*e.scale);t<s&&t<=r+.2?(s=t,c=e,l=!0):r<s&&(s=r,c=e,l=!1)}let d=n.clone().addScaledVector(cr,s);if(c){let t=V===1?D(1-s/50,.22,1):1;gr(c,e.damage*t,l,cr,d)}else if(s<90){let e=u[0],t=e.face.normal.clone().transformDirection(e.object.matrixWorld);Dn(d,7,16762242,5,.055,.35,8,t),at.impact(d,t,V!==0),o=!0}if(t<3){let e=n.clone().addScaledVector(r,.65).addScaledVector(lr,X>.7?.01:.23);e.y-=X>.7?.13:.21,kn(e,d)}}o&&(R(.055,.045,2100,.035),L(1500,640,.07,.02,`triangle`,.04)),V!==1&&at.eject(n.clone().addScaledVector(lr,.23).addScaledVector(r,.45).addScaledVector(i,-.12),lr,r,V),at.puff(n.clone().addScaledVector(r,1.15).addScaledVector(lr,X>.7?0:.2).addScaledVector(i,-.13),r,2,.5),_n.position.copy(n).addScaledVector(r,1),dr()}function yr(e){let t=new ae;t.position.copy(e).add(O(0,.55,0)),b.add(t),N(At,Et,t,[0,0,0],[.2,.3,.2]),Lt(t,.33,.012,Et,0,0,0,Math.PI/2),Nn.push({g:t,life:25,phase:E(0,6)})}function br(){q++,Wn=7+q*3,Gn=1.5,Kn=0,qn=3.3,v(`wave-label`).textContent=`WAVE `+String(q).padStart(2,`0`),v(`wave-banner`).querySelector(`small`).textContent=q===1?`THE CATHEDRAL IS LISTENING`:`THE LITURGY CONTINUES`,v(`wave-banner`).querySelector(`b`).textContent=`WAVE `+String(q).padStart(2,`0`),v(`wave-banner`).querySelector(`span`).textContent=q%3==0?`THE HEAVY CHOIR HAS ARRIVED`:`SILENCE THE CHOIR`,L(110,55,1.3,.13),L(165,82,1.4,.08,`sine`,.2)}function xr(){let e=[O(-26,0,-11),O(26,0,-11),O(-26,0,12),O(26,0,12),O(-13,0,-25),O(13,0,-25)];e=e.filter(e=>e.distanceTo(K.pos)>11);let t=(e[Math.floor(vt()*e.length)]||O(0,0,-25)).clone();t.x+=E(-1.2,1.2),t.z+=E(-1.2,1.2);let n=vt();In(q>=3&&n<.2?1:q>=2&&n<.4?2:0,t)}function Sr(e){let t=new Set;e.traverse(e=>{e.isSkinnedMesh&&!t.has(e.skeleton)&&(t.add(e.skeleton),e.skeleton.dispose()),e.isMesh&&!it.sharedGeometries.has(e.geometry)&&![Dt,Ot,kt,At].includes(e.geometry)&&e.geometry.dispose()}),b.remove(e)}function Cr(){for(let e of U)Sr(e.g);U.length=0;for(let e of Mn)b.remove(e.mesh);Mn.length=0;for(let e of Nn)Sr(e.g);Nn.length=0;for(let e of On)b.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose();On.length=0;for(let e of An)b.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose();An.length=0;for(let e of yn)e.life=0;at.clear()}function wr(){J=0,Cr(),K={pos:O(0,1.75,10),velocity:O(),health:100,stamina:100,grounded:!0,vy:0,slide:0,slideDir:O(),lastDamage:-10},Ln=0,Rn=0,Hn=0,Un=0,q=0,Y=0,Xn=0,X=0,Zn=0,S.reset(),ot=!1,rr=0,ft=-1,Jn=-10,lt=-10,ut=-1,st=-10,or=0,ir=0,ar=0,$n=0,er=0,nr=0,W.clear(),zn=G=!1,Qn=0,tr=0,Z=z.map(e=>({mag:e.capacity,reserve:e.reserveMax})),v(`combat-feed`).innerHTML=``,v(`menu`).classList.add(`hidden`),v(`death`).classList.add(`hidden`),v(`pause`).classList.add(`hidden`),v(`hud`).classList.remove(`hidden`),T=`playing`,br(),dr(),Er()}function Tr(){Vn=!0,Xe.style.cursor=`none`,T===`playing`&&(v(`pause`).classList.add(`hidden`),or=6,v(`pickup-message`).textContent=`DRAG TO LOOK · ESC TO PAUSE / OPEN IN CHROME FOR CAPTURED MOUSE`)}function Er(){if(cn(),Vn){Xe.style.cursor=`none`;return}try{let e=Xe.requestPointerLock();e?.catch&&e.catch(Tr)}catch{Tr()}}function Dr(){T===`playing`&&(Xe.style.cursor=`default`,T=`paused`,zn=G=!1,W.clear(),v(`pause`).classList.remove(`hidden`))}function Or(){T=`playing`,v(`pause`).classList.add(`hidden`),Er()}function kr(){Xe.style.cursor=`default`,T=`menu`,document.exitPointerLock?.(),v(`menu`).classList.remove(`hidden`),v(`hud`).classList.add(`hidden`),v(`pause`).classList.add(`hidden`),v(`death`).classList.add(`hidden`),Cr(),W.clear(),zn=G=!1}function Ar(){Xe.style.cursor=`default`,T=`dead`,document.exitPointerLock?.(),zn=G=!1,v(`final-score`).textContent=Un.toLocaleString(),v(`final-wave`).textContent=q,v(`final-kills`).textContent=Hn,v(`death`).classList.remove(`hidden`)}v(`deploy`).addEventListener(`click`,wr),v(`restart`).addEventListener(`click`,wr),v(`resume`).addEventListener(`click`,Or),v(`quit`).addEventListener(`click`,kr),v(`death-quit`).addEventListener(`click`,kr),v(`help-button`).onclick=()=>v(`manual`).classList.remove(`hidden`),v(`close-manual`).onclick=()=>v(`manual`).classList.add(`hidden`),document.querySelectorAll(`.weapon-card`).forEach(e=>e.addEventListener(`click`,()=>{V=Number(e.dataset.weapon),H.forEach((e,t)=>e.visible=t===V),document.querySelectorAll(`.weapon-card`).forEach(t=>t.classList.toggle(`selected`,t===e))})),v(`sensitivity`).oninput=e=>mt=Number(e.target.value),v(`volume`).oninput=e=>{ht=Number(e.target.value),an&&(an.gain.value=ht)},v(`quality`).onchange=e=>{let t=e.target.value===`high`;y.setPixelRatio(Math.min(devicePixelRatio,t?1.25:.85)),y.shadowMap.enabled=t,Qe.enabled=t,Ur()},document.addEventListener(`pointerlockchange`,()=>{Bn=document.pointerLockElement===Xe,Bn?(Vn=!1,Xe.style.cursor=`none`):T===`playing`&&!Vn&&Dr()}),document.addEventListener(`pointerlockerror`,Tr),document.addEventListener(`mousemove`,e=>{if(T!==`playing`||!Bn&&!(Vn&&(zn||G)))return;let t=.002*mt*yt(1,.6,X);Ln-=e.movementX*t,Rn=D(Rn-e.movementY*t,-1.35,1.35),S.turn(e.movementX*t,e.movementY*t)}),document.addEventListener(`mousedown`,e=>{T===`playing`&&(Bn||Vn)&&(e.button===0&&(zn=!0,vr()),e.button===2&&(G=!0))}),document.addEventListener(`mouseup`,e=>{e.button===0&&(zn=!1),e.button===2&&(G=!1)}),document.addEventListener(`contextmenu`,e=>e.preventDefault()),document.addEventListener(`keydown`,e=>{if([`Space`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Tab`].includes(e.code)&&e.preventDefault(),e.code===`Escape`&&T===`playing`){document.exitPointerLock?.(),Dr();return}T===`playing`&&(W.add(e.code),!e.repeat&&(e.code===`KeyF`&&!Y&&(J=2.8,G=!1),e.code===`KeyR`&&pr(),[`Digit1`,`Digit2`,`Digit3`].includes(e.code)&&fr(Number(e.code.slice(-1))-1),e.code===`Space`&&K.grounded&&(K.vy=6.8,K.grounded=!1,S.landing.kick(-.8),S.pitch.kick(-.5),L(80,45,.1,.07)),(e.code===`KeyC`||e.code===`ControlLeft`)&&K.grounded&&K.velocity.length()>5&&K.stamina>20&&K.slide<=0&&(K.slide=.85,K.slideDir.copy(K.velocity).normalize(),K.stamina-=20,R(.5,.18,850))))}),document.addEventListener(`keyup`,e=>W.delete(e.code)),document.addEventListener(`wheel`,e=>{T===`playing`&&(Bn||Vn)&&fr((V+(e.deltaY>0?1:2))%3)},{passive:!0}),window.addEventListener(`blur`,()=>{T===`playing`&&(document.exitPointerLock?.(),Dr())});function jr(e,t){let n=Math.hypot(e.x,e.z);n>31.5-t&&(e.x*=(31.5-t)/n,e.z*=(31.5-t)/n);for(let n of Mt){let r=D(e.x,n.x-n.hx,n.x+n.hx),i=D(e.z,n.z-n.hz,n.z+n.hz),a=e.x-r,o=e.z-i,s=a*a+o*o;if(s<t*t){if(s>1e-5)s=Math.sqrt(s),e.x+=a/s*(t-s),e.z+=o/s*(t-s);else{let r=n.hx+t-Math.abs(e.x-n.x),i=n.hz+t-Math.abs(e.z-n.z);r<i?e.x+=(e.x>n.x?1:-1)*r:e.z+=(e.z>n.z?1:-1)*i}}}}function Mr(){let e=W.has(`KeyW`)||W.has(`KeyS`)||W.has(`KeyA`)||W.has(`KeyD`),t=W.has(`ShiftLeft`)&&e&&!G&&K.stamina>1&&!Y&&K.slide<=0,n=(W.has(`KeyC`)||W.has(`ControlLeft`))&&K.slide<=0,r=K.slide>0?12:t?8.8:n?2.8:G?3.4:5.5;ur.set(-Math.sin(Ln),0,-Math.cos(Ln)),lr.set(Math.cos(Ln),0,-Math.sin(Ln)),k.set(0,0,0),W.has(`KeyW`)&&k.add(ur),W.has(`KeyS`)&&k.sub(ur),W.has(`KeyD`)&&k.add(lr),W.has(`KeyA`)&&k.sub(lr),k.normalize().multiplyScalar(r),K.slide>0&&(k.copy(K.slideDir).multiplyScalar(12*(.6+K.slide*.45)),K.slide-=w),K.velocity.x=bt(K.velocity.x,k.x,K.grounded?12:3,w),K.velocity.z=bt(K.velocity.z,k.z,K.grounded?12:3,w),K.pos.addScaledVector(K.velocity,w),jr(K.pos,.4),t?K.stamina=Math.max(0,K.stamina-w*15):K.stamina=Math.min(100,K.stamina+w*18),K.grounded||(K.vy-=18*w,K.pos.y+=K.vy*w,K.pos.y<=1.75&&(S.land(Math.abs(K.vy)),K.pos.y=1.75,K.vy=0,K.grounded=!0,Qn=Math.min(.025,Qn+.012),R(.09,.18,400))),C-K.lastDamage>5&&K.health<100&&(K.health=Math.min(100,K.health+w*9));let i=K.velocity.length();ir+=w*i*1.7;let a=K.grounded?Math.sin(ir)*.025*Math.min(i/5,1):0,o=K.slide>0?-.75:n?-.45:0;return S.step(w,V,{sprint:t,strafe:K.velocity.dot(lr),forward:K.velocity.dot(ur),stance:o}),x.position.copy(K.pos),x.position.y+=a+S.stance.x+S.landing.x*.45,x.rotation.set(D(Rn+S.cameraX.x+Math.sin(C*61)*Qn,-1.45,1.45),Ln+S.cameraY.x+Math.cos(C*47)*Qn*.4,-S.strafe.x*.002+(K.slide>0?-.055:0)),x.fov=bt(x.fov,yt(t?85:78,z[V].zoom,X),12,w),x.updateProjectionMatrix(),i>2&&K.grounded&&(ar-=w,ar<=0&&(ar=t?.28:.4,S.stride.kick(t?-.27:-.13),R(.07,t?.12:.065,350),L(75,40,.06,.04))),v(`movement-state`).textContent=K.slide>0?`OPERATOR / SLIDING`:t?`OPERATOR / SPRINTING`:K.health<30?`OPERATOR / CRITICAL`:`OPERATOR / NOMINAL`,t}function Nr(e){let t=z[V],n=H[V];X=bt(X,G&&!Y&&!e&&Xn<=0&&J<=0?1:0,12/t.weight,w),Qn=bt(Qn,0,18,w);let r=K.velocity.length(),i=Math.min(r/6,1)*(K.grounded?1:.1),a=1-X*.94,o=S.sprint.x,s=S.lagX.x*a,c=S.lagY.x*a,l=Y>0?1-Y/Yn:0,u=(e,t,n)=>{let r=D((n-e)/(t-e),0,1);return r*r*(3-2*r)},d=Y>0?u(0,.16,l)*(1-u(.79,1,l)):0,ee=Xn>0?Math.sin(Xn/.32*Math.PI/2):0,te=Math.sin(C*1.65)*.003+Math.sin(C*2.71)*7e-4;Zn=Math.max(0,S.pitch.x),B.position.set(yt(.27,0,X)-s*.28+Math.sin(ir*.5)*.016*i*a-S.strafe.x*.0015*a-d*.16,yt(-.285,-n.userData.sightHeight,X)+c*.2+(Math.cos(ir)*.012*i+te)*a+S.landing.x*.7+S.stride.x*a+d*.12-ee*.36-o*.075,yt(-.67,-.32,X)+S.push.x+Math.sin(ir)*.01*i*a-S.forward.x*.0025*a-d*.07+o*.06),B.rotation.set(S.pitch.x*(1-X*.42)+c+S.forward.x*.003*a+d*.24-o*.3+Math.sin(ir)*.009*i*a+D(K.vy*.004,-.03,.03)*a,s+S.yaw.x-d*.25+Math.sin(ir*.5)*.009*i*a+o*.12,S.roll.x+s*.6-S.strafe.x*.009*a-d*.5-o*.36+Math.sin(ir*.5)*.017*i*a),J=Math.max(0,J-w);let f=J>0?Math.sin((1-J/2.8)*Math.PI):0;B.position.z-=f*.47,B.position.y+=f*.12,B.position.x-=f*.2,B.rotation.y-=f*1.1,B.rotation.z+=f*.28,H.forEach(e=>{e.getObjectByName(`operator_hands`).visible=f<.05,e.userData.stock.visible=f>.05});let ne=ut===V?C-lt:10,p=D(ne/.115,0,1),re=V===1?Math.sin(D((ne-.17)/.42,0,1)*Math.PI):0;n.userData.bolt.position.z=V===1?re*.055:Math.sin(p*Math.PI)*.062,pn.visible=!1;let m=n.getObjectByName(`support_hand`),ie=n.getObjectByName(`trigger_finger`);if(ie&&(ie.position.z=-Math.sin(p*Math.PI)*.008),m&&(m.position.set(0,0,re*.12),m.rotation.set(0,0,0)),V===1&&(n.userData.pump.position.z=-.4+re*.12,ne>.19&&ne<.7&&st!==lt&&ut===1)){st=lt,dn(0),R(.06,.12,2800,.16);let e=O();x.getWorldDirection(e);let t=O(1,0,0).applyQuaternion(x.quaternion);at.eject(x.position.clone().addScaledVector(e,.5).addScaledVector(t,.18).add(O(0,-.12,0)),t,e,1)}if(n.userData.magazine&&(n.userData.magazine.position.set(0,0,0),n.userData.magazine.rotation.set(0,0,0)),Y>0){if(V===1){let e=u(.12,.27,l)*(1-u(.75,.9,l)),t=Math.sin(D((l-.25)/.5,0,1)*Math.PI*3)**2;m&&(m.position.set(.045*e,(-.11-t*.07)*e,(.25+t*.055)*e),m.rotation.z=-.22*e),pn.visible=e>.4&&t>.15,B.rotation.z+=t*.025*e}else{let e=u(.04,.19,l)*(1-u(.76,.92,l)),t=u(.2,.37,l)*(1-u(.54,.72,l));n.userData.magazine.position.set(-t*.045,-t*.25,t*.06),n.userData.magazine.rotation.z=t*-.12,m&&(m.position.set(.012*e-t*.045,-.105*e-t*.25,.245*e+t*.06),m.rotation.z=-t*.12);let r=u(.78,.84,l)*(1-u(.87,.93,l));n.userData.bolt.position.z+=r*.06}let e=Y;Y=Math.max(0,Y-w);let r=l>.8?3:l>.6?2:+(l>.22);if(r>ct&&(ct=r,dn(r),S.push.kick(r===2?-.28:.18),S.roll.kick(r===2?.16:-.12)),e>0&&Y===0){let e=Z[V],n=Math.min(t.capacity-e.mag,e.reserve);e.mag+=n,e.reserve-=n,dn(2),S.pitch.kick(-.24),dr()}}nr=Math.max(0,nr-w),fn.forEach((e,t)=>{e.visible=nr>0&&t===V,e.rotation.z=C*40,e.scale.setScalar((t===1?1.35:1)*(.8+Math.sin(C*91)*.2))}),gn.intensity=nr>0?5:0,_n.intensity=nr>0?14:0,Xn=Math.max(0,Xn-w),v(`crosshair`).style.opacity=1-X,v(`crosshair`).style.setProperty(`--gap`,7+Zn*100+r*.65+(V===1?9:0)+`px`),v(`reload-prompt`).textContent=Y>0?`RELOADING `+Math.round((1-Y/Yn)*100)+`%`:Z[V].mag===0?`R  /  RELOAD`:Z[V].mag<4?`LOW AMMUNITION`:``,zn&&t.auto&&!e&&vr()}var Q=65,$=32,Pr=new Uint8Array(4225),Fr=new Int16Array(4225),Ir=new Int32Array(4225),Lr=0;for(let e=0;e<Q;e++)for(let t=0;t<Q;t++){let n=t-$,r=e-$,i=Math.hypot(n,r)>30.7;for(let e of Mt){let t=Math.max(0,Math.abs(n-e.x)-e.hx),a=Math.max(0,Math.abs(r-e.z)-e.hz);if(t*t+a*a<.65*.65){i=!0;break}}Pr[e*Q+t]=+!!i}function Rr(){Fr.fill(-1);let e=D(Math.round(K.pos.x)+$,0,64),t=D(Math.round(K.pos.z)+$,0,64)*Q+e,n=0,r=0;for(Ir[r++]=t,Fr[t]=0;n<r;){let e=Ir[n++],t=Math.floor(e/Q),i=e%Q;for(let[n,a]of[[1,0],[-1,0],[0,1],[0,-1]]){let o=i+n,s=t+a;if(o<0||s<0||o>=Q||s>=Q)continue;let c=s*Q+o;Fr[c]>=0||Pr[c]||(Fr[c]=Fr[e]+1,Ir[r++]=c)}}}function zr(e,t){let n=Math.hypot(t.x-e.x,t.z-e.z),r=Math.ceil(n/.7);for(let n=1;n<r;n++){let i=yt(e.x,t.x,n/r),a=yt(e.z,t.z,n/r);for(let e of Mt)if(Math.abs(i-e.x)<e.hx+.6&&Math.abs(a-e.z)<e.hz+.6)return!1}return!0}function Br(e,t){if(zr(e.g.position,K.pos))return t;let n=D(Math.round(e.g.position.x)+$,1,63),r=D(Math.round(e.g.position.z)+$,1,63),i=1/0,a=null;for(let t=-1;t<=1;t++)for(let o=-1;o<=1;o++){if(o===0&&t===0)continue;let s=(r+t)*Q+n+o,c=Fr[s];if(c<0||Pr[s]||Pr[r*Q+n+o]||Pr[(r+t)*Q+n])continue;let l=c+Math.hypot(n+o-$-e.g.position.x,r+t-$-e.g.position.z)*.15;l<i&&(i=l,a=O(n+o-$,0,r+t-$))}return a?a.sub(e.g.position).setY(0).normalize():t}function Vr(){Lr-=w,Lr<=0&&(Rr(),Lr=.45);let e=0;for(let t=U.length-1;t>=0;t--){let n=U[t];if(n.dead){n.mixer.update(w*.25),n.deathTime-=w,n.g.rotation.z=bt(n.g.rotation.z,n.fallSide*1.5,7,w),n.g.position.addScaledVector(n.velocity,w),n.velocity.multiplyScalar(Math.exp(-w*5)),n.g.position.y=n.deathTime<.45?-(.45-n.deathTime)*1.4:.05,n.deathTime<=0&&(Sr(n.g),U.splice(t,1));continue}if(e++,n.hitPause=Math.max(0,n.hitPause-w),n.mixer.update(n.hitPause>0?0:w),n.spawnTime=Math.max(0,n.spawnTime-w),n.spawnTime>0){n.g.scale.setScalar(n.scale*(1-n.spawnTime/.8));continue}n.g.scale.setScalar(n.scale);let r=K.pos.clone().sub(n.g.position);r.y=0;let i=r.length();r.normalize(),n.g.rotation.y=Math.atan2(-r.x,-r.z),n.attack-=w,n.stagger=Math.max(0,n.stagger-w);let a=r.clone(),o=n.type===2,s=o?12:1.4;if(n.runAction.timeScale=n.stagger>0?.2:n.type===1?.85:1.15,n.runAction.setEffectiveWeight(+(i>s)),n.idleAction.play().setEffectiveWeight(i>s?0:1),i>s){a=Br(n,a);for(let e of U){if(e===n||e.dead)continue;let t=n.g.position.x-e.g.position.x,r=n.g.position.z-e.g.position.z,i=t*t+r*r;i<1.7&&i>.001&&(a.x+=t/i*.55,a.z+=r/i*.55)}a.normalize(),n.g.position.addScaledVector(a,n.speed*(n.stagger>0?.17:1)*w*(1+Math.min(q,12)*.025))}if(n.g.position.addScaledVector(n.velocity,w),n.velocity.multiplyScalar(Math.exp(-w*10)),jr(n.g.position,.4*n.scale),n.phase+=w*n.speed*2.2,n.flinch.step(w),n.twist.step(w),n.attackMotion=Math.max(0,n.attackMotion-w),n.spine&&(n.spine.rotation.x+=n.flinch.x-Math.sin(n.attackMotion/.35*Math.PI)*.32,n.spine.rotation.z+=n.twist.x),n.visual.rotation.z=n.twist.x*.35,n.g.position.y=Math.abs(Math.sin(n.phase))*.025,!o&&i<1.8&&n.attack<=0&&(n.attack=n.type===1?1.2:.85,n.attackMotion=.35,hr(n.type===1?24:12,n.g.position)),o&&i<22&&n.attack<=0){n.attack=2.6+E(0,.8);let e=n.g.position.clone().add(O(0,1.4,0)),t=K.pos.clone().addScaledVector(K.velocity,.25).sub(e).normalize(),r=jt(b,e.x,e.y,e.z,.15,Pn);Mn.push({mesh:r,v:t.multiplyScalar(11),life:4}),L(440,140,.2,.07,`sawtooth`)}}Wn>0?(Gn-=w,Gn<=0&&e<Math.min(10+q*2,30)&&(xr(),Wn--,Gn=Math.max(.25,1.15-q*.07))):e===0&&(Kn===0&&(Kn=5,Un+=q*250,K.health=Math.min(100,K.health+25),Z=z.map(e=>({mag:e.capacity,reserve:e.reserveMax})),or=3,v(`pickup-message`).textContent=`WAVE CLEARED  /  ARSENAL RESTORED  /  +`+q*250,dr()),Kn-=w,Kn<=0&&br()),v(`enemy-count`).textContent=Kn>0?`NEXT WAVE IN `+Math.ceil(Kn)+`s`:e+Wn+` HOSTILES REMAINING`;for(let e=Mn.length-1;e>=0;e--){let t=Mn[e];t.mesh.position.addScaledVector(t.v,w),t.life-=w,gt%3==0&&Dn(t.mesh.position,1,4116464,.2,.12,.25,0);let n=!1;for(let e of Mt)if(t.mesh.position.y<3&&Math.abs(t.mesh.position.x-e.x)<e.hx&&Math.abs(t.mesh.position.z-e.z)<e.hz){n=!0;break}t.mesh.position.distanceTo(K.pos)<.65&&(hr(16,t.mesh.position),n=!0),(t.life<=0||n)&&(Dn(t.mesh.position,10,5298943,2,.12,.4,0),b.remove(t.mesh),Mn.splice(e,1))}}function Hr(){at.tick(w,innerHeight);for(let e=0;e<vn;e++){let t=yn[e];t.life>0?(t.life-=w,t.v.y-=t.gravity*w,t.p.addScaledVector(t.v,w),t.p.y<.05&&(t.p.y=.05,t.v.y=Math.abs(t.v.y)*.3,t.v.x*=.7,t.v.z*=.7),bn[e*3]=t.p.x,bn[e*3+1]=t.p.y,bn[e*3+2]=t.p.z,Sn[e]=t.size*Math.max(0,t.life/t.max)):Sn[e]=0}wn.attributes.position.needsUpdate=!0,wn.attributes.aSize.needsUpdate=!0;for(let e=On.length-1;e>=0;e--){let t=On[e];t.life-=w,t.mesh.material.opacity=t.life/t.max*.65,t.life<=0&&(b.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),On.splice(e,1))}for(let e=An.length-1;e>=0;e--){let t=An[e];t.life-=w,t.mesh.scale.setScalar(1+(1-t.life/t.max)*t.scale*4),t.mesh.material.opacity=Math.max(0,t.life/t.max),t.life<=0&&(b.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),An.splice(e,1))}for(let e=Nn.length-1;e>=0;e--){let t=Nn[e];t.life-=w,t.g.rotation.y+=w*1.5,t.g.position.y=.65+Math.sin(C*3+t.phase)*.12,t.g.position.distanceTo(K.pos)<2.1&&(K.health=Math.min(100,K.health+18),z.forEach((e,t)=>Z[t].reserve=Math.min(e.reserveMax,Z[t].reserve+Math.ceil(e.capacity*.65))),t.life=0,or=2,v(`pickup-message`).textContent=`+18 VITALITY  /  AMMUNITION RECOVERED`,L(560,1120,.14,.09),Dn(t.g.position,12,7860223,2,.1,.5,0)),t.life<=0&&(Sr(t.g),Nn.splice(e,1))}$n=Math.max(0,$n-w),er=Math.max(0,er-w),qn=Math.max(0,qn-w),or=Math.max(0,or-w),tr=bt(tr,0,5,w),v(`hitmarker`).style.opacity=Math.min(1,$n*14),v(`hitmarker`).style.transform=`translate(-50%,-50%) scale(`+(1+Math.max(0,$n/.22)*dt*.48)+`)`,v(`kill-confirm`).style.opacity=Math.min(1,er*4),v(`wave-banner`).classList.toggle(`show`,qn>0),v(`pickup-message`).style.opacity=+(or>0),v(`damage`).style.opacity=T===`menu`?0:tr*.65+(K.health<30?(1+Math.sin(C*4))*.07:0)}function Ur(){y.setSize(innerWidth,innerHeight),Ze.setSize(innerWidth,innerHeight);let e=y.getPixelRatio();$e.material.uniforms.resolution.value.set(1/(innerWidth*e),1/(innerHeight*e)),x.aspect=tt.aspect=innerWidth/innerHeight,tt.fov=De.radToDeg(2*Math.atan(Math.tan(Math.PI/6)*Math.max(1,1.3/tt.aspect))),x.updateProjectionMatrix(),tt.updateProjectionMatrix()}window.addEventListener(`resize`,Ur);var Wr=0,Gr=0,Kr=60;function qr(){requestAnimationFrame(qr);let e=performance.now();if(w=Math.min((e-pt)/1e3,.04),pt=e,T!==`paused`&&T!==`dead`&&(C+=w),gt++,T===`menu`)x.position.set(9+Math.sin(C*.07)*1.8,5.4,24),x.lookAt(-1,7,-18),x.fov=64,x.updateProjectionMatrix();else if(T===`playing`){let e=Mr();ot=e,Nr(e),Vr(),Hr(),gt%5==0&&dr()}for(let e of Pt)e.material.uniforms.t.value=C;tn.uniforms.t.value=C,Bt.material.uniforms.uTime.value=C,F.position.y=8.2+Math.sin(C*.65)*.18,F.rotation.y=Math.sin(C*.23)*.12,Jt.rotation.z=C*.025;for(let e of Ft)e.mesh.position.y=e.base+Math.sin(C*e.speed+e.phase)*.22,e.mesh.rotation.y+=w*.012;y.info.reset(),y.clear(),Ze.render(),T!==`menu`&&(y.clearDepth(),y.render(et,tt)),Wr++,performance.now()-Gr>1e3&&(Kr=Math.round(Wr*1e3/(performance.now()-Gr)),Wr=0,Gr=performance.now(),T===`playing`&&C>5&&Kr<42&&y.getPixelRatio()>.9&&(y.setPixelRatio(Math.max(.9,y.getPixelRatio()-.1)),Ur()))}window.__VESPER__={getState:()=>({state:T,wave:q,kills:Hn,score:Un,health:K.health,position:K.pos.toArray(),weapon:z[V].name,ammo:{...Z[V]},ads:X,reloading:Y,alive:U.filter(e=>!e.dead).length,queued:Wn,yaw:Ln,pitch:Rn,locked:Bn,fallbackMouse:Vn,fps:Kr,drawCalls:y.info.render.calls,triangles:y.info.render.triangles,renderScale:y.getPixelRatio(),motion:S.snapshot(),gunPosition:B.position.toArray(),gunRotation:B.rotation.toArray().slice(0,3),effects:at.stats(),parts:{support:H[V].getObjectByName(`support_hand`).position.toArray(),magazine:H[V].userData.magazine.position.toArray(),pump:H[V].userData.pump?.position.z},shots:rr,grounded:K.grounded,models:H.map(e=>e.name),enemyPositions:U.filter(e=>!e.dead).map(e=>({type:e.type,hp:e.hp,scale:e.scale,stagger:e.stagger,flinch:e.flinch.x,position:e.g.position.toArray()}))})},Ur(),dr(),qr(),setTimeout(()=>{v(`loading`).style.opacity=0,setTimeout(()=>v(`loading`).classList.add(`hidden`),500)},400);