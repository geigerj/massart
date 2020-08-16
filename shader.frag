precision mediump float;

varying vec2 vTexCoord;

uniform float time;

void main() {
  vec2 uv = vTexCoord;
 
  float rend = distance(uv, vec2(0.5));
 
  vec4 color = vec4(
    sin(sin(uv.x)*3.14 + time*0.000515)*0.4 + 0.6,
    sin(cos(uv.y)*3.14 + time*0.000137)*0.4 + 0.6,
    sin(time*0.05)*0.1 + 0.7,
    1);
                            
  // ouput
  gl_FragColor = color;
}