var offset = 0;
var strum = 1;

function setup() { 
    let canvas = createCanvas(600, 400);
    canvas.addClass("center");
} 

function draw() { 
  
  background(0);
  stroke(255);
  beginShape();
  for(var x = 0; x < width; x++){
    //var angle = map(x, 0, width, 0, TWO_PI);
    var angle = offset + x * 0.01;
    // map x between 0 and width to 0 and Two Pi
    var y = map(sin(angle), -strum, strum, 150, 250);
    vertex(x, y);
    vertex(x*3, y);
  };
  endShape();
  offset += 0.15;
  strum += .02;
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