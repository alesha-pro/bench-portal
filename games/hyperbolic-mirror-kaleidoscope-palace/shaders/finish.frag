#version 300 es
precision highp float;
uniform sampler2D uScene,uBloom;
uniform vec2 uSize;
uniform float uGlow;
out vec4 fragColor;
vec3 halo(vec2 uv,float lod){
    vec2 o=exp2(lod)/uSize*.94;
    return .25*(textureLod(uBloom,uv+o,lod).rgb+textureLod(uBloom,uv-o,lod).rgb+
                textureLod(uBloom,uv+vec2(o.x,-o.y),lod).rgb+textureLod(uBloom,uv+vec2(-o.x,o.y),lod).rgb);
}
void main(){
    vec2 uv=gl_FragCoord.xy/uSize;
    vec3 c=texture(uScene,uv).rgb;
    c=c*c/max(1.-c*c,.007);
    vec2 delta=(uv-.5)*1.8/uSize;
    vec3 b=vec3(textureLod(uBloom,uv+delta,0.).r,textureLod(uBloom,uv,0.).g,textureLod(uBloom,uv-delta,0.).b);
    c+=uGlow*(.28*b+.51*halo(uv,1.8)+.74*halo(uv,3.7)+.96*halo(uv,5.6));
    c*=1.-.18*pow(dot(uv-.5,uv-.5)*1.7,1.25);
    c*=vec3(.84,.83,.82);
    c=clamp((c*(2.51*c+.030))/(c*(2.43*c+.59)+.14),0.,1.);
    c=pow(c,vec3(1./2.2));
    float grain=fract(sin(dot(mod(gl_FragCoord.xy,256.),vec2(12.9898,78.233)))*43758.5);
    fragColor=vec4(c+(grain-.5)/255.,1.);
}
