//starting code from Sine wave by stevenraysimon:https://editor.p5js.org/stevenraysimon/sketches/HyTseadOg 

let offset = 0;
let strum = 1;

function setup() { 
  let canvas = createCanvas(600, 400);
  canvas.addClass("center");
  //slider adjusts flutter speed
  slider = createSlider(0, 0.3, 0.1, 0.01);
  slider.addClass("slidertitle");
  //slider adjusts length of sail
  slider2 = createSlider(0, 600, 500);
  slider2.addClass("slidertitle");
} 

function draw() { 
  background(0);
  noStroke();
  beginShape();
  for(var x = 0; x < slider2.value(); x++){
    var angle = offset + x * 0.01;
    var y = map(sin(angle), -strum, strum, 150, 250);
    //adjust color when fluttering
    let r = map(sin(angle), -strum, strum, 100, 255);
    let g = map(sin(angle), -strum, strum, 0, 75);
    fill(r, g, 0);
    vertex(x, y);
  }
  endShape();
  offset += slider.value();
}