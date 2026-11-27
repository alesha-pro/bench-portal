#version 300 es
precision highp float;
in vec2 uv;
out vec4 frag;
uniform sampler2D scene,b1,b2,b3,b4,b5;
float dither(vec2 p) {return fract(52.9829189*fract(dot(p,vec2(.06711056,.00583715))));}
vec3 srgb(vec3 c) {return mix(12.92*c,1.055*pow(c,vec3(1./2.4))-.055,step(vec3(.0031308),c));}
// A cubic B-spline reconstruction keeps the wide halo smooth in deep shadow.
vec3 halo(sampler2D layer) {
    vec2 dims=vec2(textureSize(layer,0)), p=uv*dims-.5, t=fract(p);
    vec2 t2=t*t, t3=t2*t;
    vec2 w0=(1.-3.*t+3.*t2-t3)/6., w1=(4.-6.*t2+3.*t3)/6.;
    vec2 w2=(1.+3.*t+3.*t2-3.*t3)/6., w3=t3/6.;
    vec2 a=w0+w1, b=w2+w3;
    vec2 l=(floor(p)-.5+w1/a)/dims, r=(floor(p)+1.5+w3/b)/dims;
    return a.y*(a.x*texture(layer,l).rgb+b.x*texture(layer,vec2(r.x,l.y)).rgb)
          +b.y*(a.x*texture(layer,vec2(l.x,r.y)).rgb+b.x*texture(layer,r).rgb);
}
void main(){
    vec3 light=texture(scene,uv).rgb;
    vec3 glow=.075*texture(b1,uv).rgb+.09*texture(b2,uv).rgb+.13*texture(b3,uv).rgb
             +.17*halo(b4)+.20*halo(b5);
    vec3 c=(light+glow)*(.94-.11*dot(uv-.5,uv-.5));
    c=clamp(c*(2.51*c+.03)/(c*(2.43*c+.59)+.14),0.,1.);
    frag=vec4(clamp(srgb(c)+(dither(gl_FragCoord.xy)-.5)/255.,0.,1.),1.);
}
