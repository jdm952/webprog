//starting code from particle system waterfall by zahrak https://editor.p5js.org/zahrak/sketches/B1FV3hKDf


particles1 = [];
particles2 = [];

function setup() {
    let canvas = createCanvas(600, 400);
    canvas.addClass("center");
}

function draw() {
  background(0);
  for (let i = 0; i < 5; i++) {
    let p = new Particle1();
    particles1.push(p);
  }
  for (let i = particles1.length - 1; i >= 0; i--) {
    particles1[i].update();
    particles1[i].show();
    if (particles1[i].finished()) {
      // remove this particle
      particles1.splice(i, 1);
    }
  }

}

class Particle1 {

  constructor() {
    this.x = 300;
    this.y = 80;
    this.vx = random(-1, 1);
    this.vy = random(5, 1);
    this.alpha = 255;
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }
  
  

  show() {
    noStroke();
    fill(10,215,232, this.alpha);
    ellipse(this.x, this.y,10);
    fill(10,255,232, this.alpha/10);
    ellipse(this.x+10, this.y,10);
    fill(10,150,232, this.alpha/4);
    ellipse(this.x-10, this.y,10);
    fill(10,255,232, this.alpha/2);
    ellipse(this.x-20, this.y,10);
  }

}