//starting code from Coding Challenge #78: Simple Particle System - https://youtu.be/UcdigVaIYAk

let grass = [];

function setup() {
    let canvas = createCanvas(600, 400);
    canvas.addClass("center");
    //slider adjusts max number of particles
    slider = createSlider(0, 15, 0);
    slider.addClass("slidertitle");
}

function draw() {
    // background (10,215,232);
    background(0);
    //create new grass
    for (let i = 0; i < slider.value(); i++) {
        let p = new GrassLeaf();
        grass.push(p);
    }
    //remove old flames
    for (let i = grass.length - 1; i >= 0; i--) {
        grass[i].update();
        grass[i].show();
        if (grass[i].finished()){
            grass.splice(i, 1);
        }
    }
}

class GrassLeaf {
    
    constructor() {
        this.x = 300;
        this.y = 380;
        this.vx = .5
        this.vy = 1.5
    }

    finished() {
        return this.y < 60;
    }

    update() {
        this.y -= this.vy;
    }

    show() {
        // stroke(random(0,25), random(0,100), 7);
        noStroke();
        //draw grass with beziers
        fill(59, 33, 2);
        rect(225, 350, 180, 50);
        beginShape();
        //moss green
        fill(25, 50, 7);
        bezier(320, 380, this.x-2, this.y-10, this.x+30, this.y-15, this.x+20, this.y);
        bezier(290, 380, this.x-2, this.y-10, this.x+30, this.y-15, this.x+20, this.y);
        //forest green
        fill(0, 50, 7);
        bezier(360, 380, this.x, this.y-10, this.x+60, this.y, this.x+40, this.y-15);
        bezier(250, 380, this.x-54, this.y, this.x-44, this.y-15, this.x-44, this.y-40);
        bezier(280, 380, this.x-22, this.y-10, this.x+3, this.y-15, this.x-20, this.y);
        //bright green
        fill(0, 100, 7);
        bezier(300, 380, this.x-20, this.y-10, this.x+13, this.y-15, this.x+15, this.y);
        bezier(380, 380, this.x+70, this.y, this.x+90, this.y+20, this.x+80, this.y-10);
        bezier(270, 380, this.x-32, this.y-10, this.x-22, this.y-15, this.x-20, this.y-10);
        //bright green 2
        fill(25, 100, 7);
        bezier(340, 380, this.x+40, this.y-10, this.x+60, this.y, this.x+40, this.y-35);
        endShape();
    }
}


