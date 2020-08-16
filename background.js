let bgShader;

function preload(){
  bgShader = loadShader('shader.vert', 'shader.frag');
}
function setup() {
  noStroke();
  // fix Height
  createCanvas(
    windowWidth,
    windowHeight,
    WEBGL);
}

function draw() {
  if (document.readyState !== "complete") return;
  
  let text = document.getElementById("text");
  resizeCanvas(
    windowWidth,
    1.19 * text.scrollHeight);
  shader(bgShader);
  bgShader.setUniform('time', frameCount);
  rect(0,0,width, height);
}