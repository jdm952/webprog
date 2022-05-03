//starting code from Coding Challenge #78: Simple Particle System - https://youtu.be/UcdigVaIYAk

let flames = [];

function setup() {
    let canvas = createCanvas(600, 400);
    canvas.addClass("center");
}

function draw() {
    background (0);
    //create new flames
    for (let i = 0; i < 2; i++) {
        let p = new Flame();
        flames.push(p);
    }
    //remove old flames
    for (let i = flames.length - 1; i >= 0; i--) {
        flames[i].update();
        flames[i].show();
        if (flames[i].finished()){
            flames.splice(i, 1);
        }
    }
}

class Flame {
    
    constructor() {
        this.x = 300;
        this.y = 380;
        this.vx = random(-2, 2);
        this.vy = random(-6, -1);
        this.alpha = 255;
    }

    finished() {
        return this.alpha < 0;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 10;
    }

    show() {
        noStroke()
        //draw flames with beziers
        beginShape();
        fill(252, this.alpha/2, 7);
        bezier(320, 380, this.x-2, this.y-30, this.x+30, this.y-20, this.x+20, this.y-80);
        bezier(320, 380, this.x-50, this.y-40, this.x+55, this.y-20, this.x+60, this.y-80);
        fill(255, 189, this.alpha-80);
        bezier(300, 380, this.x-20, this.y-30, this.x+40, this.y-30, this.x+20, this.y-80);
        bezier(300, 380, this.x-5, this.y-30, this.x+55, this.y-30, this.x+60, this.y-80);
        fill(252, this.alpha/2, 7);
        bezier(320, 380, this.x+20, this.y-30, this.x-40, this.y-10, this.x-50, this.y-60);
        bezier(320, 380, this.x+5, this.y-30, this.x-20, this.y-10, this.x-50, this.y-80);
        fill(252, this.alpha*2, 7);
        bezier(280, 380, this.x+20, this.y-30, this.x-40, this.y-10, this.x-50, this.y-100);
        bezier(280, 380, this.x+5, this.y-30, this.x-55, this.y-10, this.x-50, this.y-100);
        endShape();
    }
}


