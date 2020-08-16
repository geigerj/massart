let bgShader;
let canvasResized = false;

function preload(){
  bgShader = loadShader('shader.vert', 'shader.frag');
}
function setup() {
  noStroke();
  // fix Height
  let text = document.getElementById("text");
  createCanvas(
    windowWidth,
    1.19 * text.scrollHeight,
    WEBGL);
}

function draw() {
  if (document.readyState !== "complete") return;
  if (!canvasResized && text_written) {
    resizeCanvas(
      windowWidth,
      1.19 * text.scrollHeight);
    canvasResized = true;
  }
  
  shader(bgShader);
  bgShader.setUniform('time', frameCount);
  rect(0,0,width, height);
}