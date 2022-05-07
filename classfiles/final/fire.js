//starting code from Coding Challenge #78: Simple Particle System - https://youtu.be/UcdigVaIYAk

let flames = [];


function setup() {
    let canvas = createCanvas(600, 400);
    canvas.addClass("center");
    //slider adjusts max number of particles
    slider = createSlider(0, 5, 3, .5);
    slider.addClass("slidertitle");
    slider2 = createSlider(-10, -1, -6);
    slider2.addClass("slidertitle");
}

function draw() {
    background (0);
    //create new flames
    for (let i = 0; i < slider.value(); i++) {
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
        this.alpha = 255;
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
        fill(255, 189, this.alpha-150);
        bezier(315, 380, this.x-5, this.y-40, this.x+15, this.y+20, this.x+20, this.y-90);
        bezier(290, 380, this.x-40, this.y-40, this.x+45, this.y+30, this.x-10, this.y-100);
       
        //red
        fill(252, this.alpha/2, 7);
        bezier(280, 380, this.x+20, this.y-30, this.x-40, this.y+10, this.x-50, this.y-70);
        bezier(320, 380, this.x+20, this.y, this.x+23, this.y+10, this.x+22, this.y-70);
       
        //light orange
        fill(255, 189, this.alpha-150);
        bezier(300, 380, this.x-20, this.y-30, this.x+40, this.y-30, this.x+20, this.y-80);

        //yellow
        fill(252, 200, this.alpha-200);
        bezier(320, 380, this.x+20, this.y-30, this.x-40, this.y+20, this.x-40, this.y-90);
        bezier(325, 380, this.x+5, this.y-30, this.x-20, this.y+10, this.x-50, this.y-60);

        //red
        fill(252, this.alpha/2, 7);
        bezier(285, 380, this.x+5, this.y-30, this.x-55, this.y+10, this.x-50, this.y-60);
        bezier(305, 380, this.x-5, this.y-30, this.x+55, this.y-30, this.x+60, this.y-80);


        // endShape();
    }
}


