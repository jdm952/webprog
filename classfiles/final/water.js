//starting code from particle system waterfall by zahrak https://editor.p5js.org/zahrak/sketches/B1FV3hKDf

molecules = [];

function setup() {
    let canvas = createCanvas(600, 400);
    canvas.addClass("center");
    //slider adjusts max number of molecules
    slider = createSlider(0, 15, 4);
    slider.addClass("slidertitle");
    //slider adjusts fade of molecules
    slider2 = createSlider(0, 5, 5, .25);
    slider2.addClass("slidertitle");
}

function draw() {
  background(0);
  //create new water molecules
  for (let i = 0; i < slider.value(); i++) {
    let p = new Molecule();
    molecules.push(p);
  }
  //remove old water molecules
  for (let i = molecules.length - 1; i >= 0; i--) {
    molecules.update();
    molecules[i].show();
    if (molecules[i].finished()) {
      molecules.splice(i, 1);
    }
  }
}

class Molecule {

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
    this.alpha -= slider2.value();
  }  

  show() {
    //draw water molecules
    noStroke();
    //blue1
    fill(10,215,232, this.alpha);
    ellipse(this.x, this.y, 10);
    ellipse(this.x+20, this.y, 10);
    //blue2
    fill(10,255,232, this.alpha/10);
    ellipse(this.x+10, this.y, 10);
    ellipse(this.x-30, this.y, 10);
    ellipse(this.x+30, this.y, 10);
    //blue3
    fill(10,150,200, this.alpha/4);
    ellipse(this.x-10, this.y, 10);
    //blue2
    fill(10,255,232, this.alpha/2);
    ellipse(this.x-20, this.y, 10);
  }
}