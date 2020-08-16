let bgShader;
let resized = false;

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
  if (!resized && text_written) {
    resizeCanvas(
      windowWidth,
      1.19 * text.scrollHeight);
    resized = true;
  }
  
  shader(bgShader);
  bgShader.setUniform('time', frameCount);
  rect(0,0,width, height);
}