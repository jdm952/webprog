let myBubbleArray = [];
let startingX = 200;
let startingY = 150;
let startingX2 = 400;
let startingY2 = 100;

function setup() {
    createCanvas(1000, 1000);
    bubble = new Bubble;
}

function draw() {
    background(0);
    for (let bubbleArrayIdx = 0; bubbleArrayIdx < myBubbleArray.length; bubbleArrayIdx++) {
        myBubbleArray[bubbleArrayIdx].move();
        myBubbleArray[bubbleArrayIdx].show();
    }

}

class Bubble {
    constructor() {
        this.x = 200;
        this.y = 150;
        this.x2 = 400;
        this.y2 = 100;
    }
     move() {
         this.x = this.x + random(-5, 5);
         this.y = this.y + random(-5, 5);
     }

     show() {
         stroke(255);
         strokeWeight(4);
         noFill();
         line(this.x, this.y, this.x2, this.y2);
     }
}

for (let i = 0; i < 20; i++) {
    const tempBubble = new Bubble(startingX, startingY, startingX2, startingY2);
    myBubbleArray.push(tempBubble);
    startingX += 50;
    startingY += 100;
    startingX2 += 300;
    startingY2 += 400;
}