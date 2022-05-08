//starting code from Coding Challenge #78: Simple Particle System - https://youtu.be/UcdigVaIYAk

let flames = [];

function setup() {
    let canvas = createCanvas(600, 400);
    canvas.addClass("center");
    //slider adjusts frame rate
    slider = createSlider(0, 30, 30);
    slider.addClass("slidertitle");
    //slider2 adjusts height of flames
    slider2 = createSlider(-10, -1, -6);
    slider2.addClass("slidertitle");
}

function draw() {
    background (0);
    frameRate(slider.value());
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
        //two ways of adjusting color to look like it's flickering
        this.alpha = 255;
        this.r = random(220,255);
        this.g = random(50,175);
        this.b = random(0, 200);
    }

    finished() {
        return this.alpha < 0;
    }

    update() {
        this.x += this.vx;
        this.y += slider2.value();
        this.alpha -= 15;
    }

    show() {
        noStroke()
        //draw flames with beziers
        beginShape();
       
        //light orange
        fill(this.r, this.g, this.alpha-250);
        bezier(315, 380, this.x-5, this.y-40, this.x+15, this.y+20, this.x+20, this.y-90);
        bezier(290, 380, this.x-40, this.y-40, this.x+45, this.y+30, this.x-10, this.y-100);
       
        //red
        fill(this.r, 0, this.alpha-150);
        bezier(280, 380, this.x+20, this.y-30, this.x-40, this.y+10, this.x-50, this.y-70);
        bezier(320, 380, this.x+20, this.y, this.x+23, this.y+10, this.x+22, this.y-70);
       
        // //light orange
        fill(this.r, this.g, this.alpha-250);
        bezier(300, 380, this.x-20, this.y-30, this.x+40, this.y-30, this.x+20, this.y-80);

        //yellow
        fill(252, 200, this.alpha-200);
        bezier(320, 380, this.x+20, this.y-30, this.x-40, this.y+20, this.x-40, this.y-90);
        bezier(325, 380, this.x+5, this.y-30, this.x-20, this.y+10, this.x-50, this.y-60);

        // //red
        fill(this.r, 0, this.alpha-150);
        bezier(285, 380, this.x+5, this.y-30, this.x-55, this.y+10, this.x-50, this.y-60);
        bezier(305, 380, this.x-5, this.y-30, this.x+55, this.y-30, this.x+60, this.y-80);

        endShape();
    }
}


