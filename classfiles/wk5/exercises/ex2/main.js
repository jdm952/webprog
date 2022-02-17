let myBubbleArray = [];
let startingX = 50;
let startingY = 100;

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
        this.width = 24;
        this.height = 24;
    }
     move() {
         this.x = this.x + random(-5, 5);
         this.y = this.y + random(-5, 5);
     }

     show() {
         stroke(255);
         strokeWeight(4);
         noFill();
         ellipse(this.x, this.y, this.width, this.height);
     }
}

for (let i = 0; i < 20; i++) {
    const tempBubble = new Bubble(startingX, startingY);
    myBubbleArray.push(tempBubble);
    startingX += 50;
}