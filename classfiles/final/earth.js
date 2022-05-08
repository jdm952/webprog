//starting code from Getting Started with p5.js book, example 8-6

let startX = 200;
let stopX= 300;
let startY= 310; 
let stopY = 20;
let x = startX;
let y = startY;
let step = 0.001;
let pct = 0.0;
let slider;
let slider2;
let button;

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.addClass("center");
  //slider adjusts growth rate
  slider = createSlider(0, 0.01, 0.001, 0.001);
  slider.addClass("slidertitle");
  //slider adjusts angle of growth
  slider2 = createSlider(0, 600, 300);
  slider2.addClass("slidertitle");
  //button restarts growth
  button = createButton('reset');
  button.addClass("reset");
  button.mousePressed(reset);
}

function reset() {
  window.location.reload();
}

function draw() {
  background(0);
  //grass growth
  if (pct < 1.0) {
    x = startX + ((slider2.value()-startX) * pct);
    y = startY + ((stopY-startY) * pct);
    pct += slider.value();
  } 

  noStroke();
  //sun
  fill(200, 150, 20);
  circle(slider2.value(), 0, 50);
  //grass
  //light green
  fill(0, 100, 7);
  bezier(425, 400, 370, 350, 370, 300, x+50, y);
  bezier(0, 400, 25, 350, 30, 300, x-200, y+25);
  bezier(500, 400, 440, 350, 440, 300, x+350, y+26);
  bezier(200, 400, 225, 350, 230, 300, x-120, y+25);
  bezier(25, 400, 20, 350, 20, 300, x-150, y+45);
  //yellow
  fill(153, 138, 3);
  bezier(400, 400, 450, 350, 400, 300, x+150, y);
  //dark green
  fill(0, 50, 7);
  bezier(175, 400, 175, 350, 100, 300, x-50, y+50);
  bezier(250, 400, 275, 350, x+50, 300, x+50, y);
  bezier(550, 400, 560, y+300, 590, y+200, x+400, y+75);
  bezier(100, 400, 45, 350, 45, 300, x-150, y);
  bezier(300, 400, 325, 350, 330, 300, x+100, y+25);
  bezier(300, 400, 325, 350, 325, 300, x+20, y+45);
  bezier(500, 400, 550, 350, 575, 300, x+300, y+75);
  bezier(425, 400, 475, 350, 500, 300, x+225, y+10);
  //yellow
  fill(153, 138, 3);
  bezier(350, 400, 290, y+300, 290, y+200, x+50, y+154);
  bezier(20, 400, 50, 350, 50, 300, x-125, y+200);
  bezier(200, 400, 225, 350, 250, 300, x+10, y);
  bezier(150, 400, 145, 350, 150, 300, x-70, y+26);
  //light green
  fill(0, 100, 7);
  bezier(200, 400, 225, 350, 275, 300, x-10, y+10);
  bezier(550, 400, 575, 350, 575, 300, x+270, y+45);
  //dirt
  // fill(0);
  fill(59, 33, 2);
  rect(0, 310, 600);
}