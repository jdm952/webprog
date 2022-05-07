let offset = 0;
let strum = 1;

function setup() { 
  let canvas = createCanvas(600, 400);
  canvas.addClass("center");
  slider = createSlider(0, 0.3, 0.1, 0.01);
  slider.addClass("slidertitle");
  slider2 = createSlider(0, 600, 1);
  slider2.addClass("slidertitle");
} 

function draw() { 
  
  background(0);
  fill(255);
  noStroke();
  beginShape();
  for(var x = 0; x < slider2.value(); x++){
    //var angle = map(x, 0, width, 0, TWO_PI);
    var angle = offset + x * 0.01;
    // map x between 0 and width to 0 and Two Pi
    var y = map(sin(angle), -strum, strum, 150, 250);
    vertex(x, y);
  }
  endShape();
  offset += slider.value();
}