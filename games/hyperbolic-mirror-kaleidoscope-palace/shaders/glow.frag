#version 300 es
precision highp float;
uniform sampler2D uScene;
uniform vec2 uSize;
out vec4 fragColor;
void main(){
    vec2 uv=gl_FragCoord.xy/uSize;
    vec3 c=texture(uScene,uv).rgb;
    c=c*c/max(1.-c*c,.008);
    float lum=dot(c,vec3(.25,.62,.13));
    c*=smoothstep(.72,2.8,lum);
    fragColor=vec4(min(c*.22,1.),1.);
}
