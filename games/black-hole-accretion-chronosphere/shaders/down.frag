#version 300 es
precision highp float;
in vec2 uv;
out vec4 frag;
uniform sampler2D src;
uniform vec2 texel;
uniform float extractBright;
vec3 tap(vec2 d) {
    vec3 c=texture(src,uv+d*texel).rgb;
    float y=max(c.r,max(c.g,c.b));
    return c*mix(1.,smoothstep(.09,.87,y),extractBright);
}
void main() {
    vec3 c=4.*tap(vec2(0));
    c+=2.*(tap(vec2(1.4,0))+tap(vec2(-1.4,0))+tap(vec2(0,1.4))+tap(vec2(0,-1.4)));
    c+=tap(vec2(1.4,1.4))+tap(vec2(-1.4,1.4))+tap(vec2(1.4,-1.4))+tap(vec2(-1.4,-1.4));
    frag=vec4(c/16.,1);
}
