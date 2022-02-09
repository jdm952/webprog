let rectX = 0;
const rectHeight = 75;
let rectY;
const rectWidth = 75;
let clickCount = 0;
let speed;
function setup() {
    createCanvas(750, 600);
    rectY = random(height - rectHeight);
    speed = random(1, 3);
    textSize(50);
    textFont('Roboto');
}

function draw() {
    background(155);
//add question
    fill(0);
    textSize(20);
    text("How many times can you click the square before it disappears?", 100, 200);
//create rectangle function
    drawShape();
//adjust rectangle speed
    rectX += speed;
//stop the rectangle loop, show click count
    if(rectX - 1 > width) { //added the -1 because the edge of the rectangle kept showing
        noLoop();
        text("Your score was " + clickCount, 100, 300);
    }
}

//make rectangle move, console.log click count
function mousePressed() {
    if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
        clickCount++;
        console.log('hit', clickCount);
    }
}

//rectangle function
function drawShape() {
    fill("purple");
    noStroke();
    rect(rectX, rectY, rectWidth, rectHeight);
}
