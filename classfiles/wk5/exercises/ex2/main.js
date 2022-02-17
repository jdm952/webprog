let myLineArray = [];
let startingX = 0;
let startingY = 0;
let startingX2 = 50;
let startingY2 = 50;

class Line {
    constructor(x, y, x2, y2) {
        this.x = x;
        this.y = y;
        this.x2 = x2;
        this.y2 = y2;
    }

     show() {
         stroke(255, 75, 3);
         strokeWeight(4);
         noFill();
         line(this.x, this.y, this.x2, this.y2);
     }

     move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
        this.x2 = this.x2 + random(-3, 3);
        this.y2 = this.y2 + random(-7, 7);
    }
}

for (let i = 0; i < 20; i++) {
    const makeLines = new Line(startingX, startingY, startingX2, startingY2);
    myLineArray.push(makeLines);
    startingX += 50;
    startingY += 50;
    startingX2 += 50;
    startingY2 += 50;
}

function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    background(0);
    for (let lineArrayIdx = 0; lineArrayIdx < myLineArray.length; lineArrayIdx++) {
        myLineArray[lineArrayIdx].move();
        myLineArray[lineArrayIdx].show();
    }

}

