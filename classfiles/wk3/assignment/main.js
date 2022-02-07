let rotateBy = 5;
let fillColor = window.prompt("enter a basic color", 'gold');
let strokeColor = window.prompt("enter another basic color", 'orange');
let weight = window.prompt("enter a number between 1 and 15", 1);

function setup() {
    createCanvas(800, 800);
    background(0);
    angleMode(DEGREES);
}

function makeArm(rotateBy, fillColor, strokeColor, weight) {
    let alt = Math.round(rotateBy / 360);
    fill(fillColor);
    stroke(strokeColor);
    strokeWeight(weight);
    ellipse(150 + alt, 150, 150 - alt * 2);
    bezier(85, 20, 10, 10 + alt, 90, 90 + alt, 15, 80);
    line(400, 400, 85, 20);
}

function draw() {
    translate(400, 400);
    rotate(rotateBy);
    makeArm(rotateBy, fillColor, strokeColor, weight);
    rotateBy += 8;
}

function mousePressed() {
    rotateBy = getRandomInt(360);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function doubleClicked () {
    noLoop();
}