let myLineArray = [];
let startingX = 500;
let startingY = 500;
let startingX2 = 150;
let startingY2 = 150;

class Line {
    constructor(x, y, x2, y2) {
        this.x = x;
        this.y = y;
        this.x2 = x2;
        this.y2 = y2;
    }

     show() {
         stroke(255, 75, 3);
         strokeWeight(2);
         line(this.x, this.y, this.x2, this.y2);
     }
}

for (let i = 0; i < 50; i++) {
    const makeLines = new Line(startingX, startingY, startingX2, startingY2);
    myLineArray.push(makeLines);
    startingX += 0;
    startingY += 0;
    startingX2 += 0;
    startingY2 += 360;
}

function setup() {
    createCanvas(1000, 1000);
    angleMode(DEGREES);
}

function draw() {
    background(0);
    for (let lineArrayIdx = 0; lineArrayIdx < myLineArray.length; lineArrayIdx++) {
        myLineArray[lineArrayIdx].show();
    }

}

