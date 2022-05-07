//starting code from https://editor.p5js.org/stevenraysimon/sketches/HyTseadOg 

var offset = 1;
var strum = 1;
var fr = 30;

function setup() { 
    let canvas = createCanvas(600, 400);
    canvas.addClass("center");
    slider = createSlider(0, .5, 0, .1);
    slider.addClass("slidertitle");
    slider2 = createSlider(0, .1, 0, .01);
    slider2.addClass("slidertitle");
    frameRate(fr);
} 

function draw() { 
  
  background(0);
  stroke(255);
  // noFill();
  beginShape();
  for(var x = 0; x < width; x++){
    //var angle = map(x, 0, width, 0, TWO_PI);
    var angle = offset + x * slider2.value();
    // map x between 0 and width to 0 and Two Pi
    var y = map(sin(angle), -slider.value(), slider.value()/2, 100, 250);
    // vertex(x, y);
    // vertex(x*3, y*3);
    ellipse(x, y, 5);
    // ellipse(x+25, y+10, 10);
    // line(x, y, x, y-33);
    // curve(x, y, x+slider.value(), y, x, y+slider.value());
    // curve(x, y, x+20, y+20, x+30, y+30, x+100, y+100);
  };
  endShape();
  offset -= 0.15;
  strum -= .02;
}




//starting code from particle system waterfall by zahrak https://editor.p5js.org/zahrak/sketches/B1FV3hKDf


// particles1 = [];
// particles2 = [];

// function draw() {
//   background(0);
//   for (let i = 0; i < 5; i++) {
//     let p = new Particle1();
//     particles1.push(p);
//   }
//   for (let i = particles1.length - 1; i >= 0; i--) {
//     particles1[i].update();
//     particles1[i].show();
//     if (particles1[i].finished()) {
//       // remove this particle
//       particles1.splice(i, 1);
//     }
//   }

// }

// class Particle1 {

//   constructor() {
//     this.x = 350;
//     this.y = 80;
//     this.vx = random(-1, 1);
//     this.vy = random(5, 1);
//     this.alpha = 255;
//   }

//   finished() {
//     return this.alpha < 0;
//   }

//   update() {
//     this.x += this.vx;
//     this.y += this.vy;
//     this.alpha -= 5;
//   }
  
  

//   show() {
//     noStroke();
        // beginShape();
        // for(var i = 0; i < width; i++){
        //     var angle = offset + i * 0.01;
        //     var y = map(sin(angle), -strum, strum, 150, 250);
        //     vertex(i, y);
        //     vertex(i*3, y);
        // };
        // endShape();
// }