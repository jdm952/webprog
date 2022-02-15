// var x = 280;
// var y = -100;
// var diameter = 380;
// function setup() {
//     createCanvas(480, 120);
//     fill(0, 102);
//     noStroke();
// }
// function draw() {
//     background(204);
//     ellipse(x, y, diameter, diameter);
// }

// function draw() {
//     background(204);
//     ellipse(mouseX, mouseY, 9, 9);
// }

//easing

// var x = 0;
// var easing = 0.01;
// function setup() {
//     createCanvas(220, 120);
// }
// function draw() {
//     var targetX = mouseX;
//     x += (targetX - x) * easing;
//     ellipse(x, 40, 12, 12);
//     print(targetX + " : " + x);
// }

// mouse clicking
// function setup() {
//     createCanvas(240, 120);
//     strokeWeight(30);
// }

// function draw() {
//     background(204);
//     stroke(102);
//     line(40, 0, 70, height);
//     if (mouseIsPressed) {
//         stroke(0);
//     } else{
//         stroke(255);
//     }
//     line(0, 70, width, 50);
// }

// var x;
// var offset = 10;

// function setup() {
//     createCanvas(240, 120);
//     x = width/2;
// }

// function draw() {
//     background(204);
//     if (mouseX > x) {
//         x += 0.5;
//         offset = -10;
//     }
//     if (mouseX < x) {
//         x -= 0.5;
//         offset = 10;
//     }
    //draw arrow left or right depending on offset value
//     line(x, 0, x, height);
//     line(mouseX, mouseY, mouseX + offset, mouseY - 10);
//     line(mouseX, mouseY, mouseX + offset, mouseY + 10);
//     line(mouseX, mouseY, mouseX + offset*3, mouseY);
// }

//draw some letters
// function setup() {
//     createCanvas(120, 120);
//     textSize(64);
//     textAlign(CENTER);
//     fill(255);
// }

// function draw() {
//     background(0);
//     text(key, 60, 80);
//     }

//robot
var x = 60;
var y = 440;
var radius = 45; //head
var bodyHeight = 160;
var neckHeight = 70;
var easing = 0.04;

function setup() {
    createCanvas(360, 480);
    strokeWeight(2);
    ellipseMode(RADIUS);
}

function draw() {

    var targetX = mouseX;
    x += (targetX - x) * easing;

    if (mouseIsPressed) {
        neckHeight = 16;
        bodyHeight = 90;
    } else {
        neckHeight = 70;
        bodyHeight = 160;
    }
    
    var neckY = y - bodyHeight - neckHeight - radius;

    background(204);

    //Neck
    stroke(102);
    line(x+12, y-bodyHeight, x+12, neckY);

    //Antennae
    line(x+12, neckY, x-18, neckY-43);
    line(x+12, neckY, x+42, neckY-99);
    line(x+12, neckY, x+78, neckY+15);

    //body
    noStroke();
    fill(102);
    ellipse(x, y-33, 33, 33);
    fill(0);
    rect(x-45, y-bodyHeight, 90, bodyHeight-33);

    //head
    fill(0);
    ellipse(x+12, neckY, radius, radius);
    fill(255);
    ellipse(x+24, neckY-6, 14, 14);
    fill(0);
    ellipse(x+24, neckY-6, 3, 3);
}