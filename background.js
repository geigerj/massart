let bgShader;
let canvasResized = false;

function preload(){
  bgShader = loadShader('shader.vert', 'shader.frag');
}

function setup() {
  noStroke();
  let textDiv = document.getElementById("text");
  createCanvas(
    windowWidth,
    1.12 * textDiv.scrollHeight + 1,
    WEBGL);
}

function draw() {
  if (document.readyState !== "complete") return;
  if (!canvasResized && text_written) { 
    let textDiv = document.getElementById("text");
    resizeCanvas(
      windowWidth,
      1.12 * textDiv.scrollHeight + 1);
    canvasResized = true;
  }
  
  shader(bgShader);
  bgShader.setUniform('time', frameCount);
  rect(0,0,width, height);
}