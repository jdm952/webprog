function setup () {
    createCanvas(600, 600);
    noLoop();
}
function createTile(originX,originY, diameter, start, stop) {
    translate(originX, originY, diameter, start, stop);
    fill('#2c0045');
    noStroke();
    rect(0, 0, 200, 200);
    fill('#ff7878')
    rect(0, 0, 200, 100);
    fill('#ffba26');
    triangle(0, 200, 100, 100, 200, 200);
    triangle(0, 0, 100, 100, 200, 0);
    fill('#ff9100');
    arc(100, 100, 150, 150, start, stop);
    fill('#fcb99d');
    arc(100, 100, 100, 100, start, stop);
    fill('#d94100');
    circle(100, 100, diameter);
}
function draw(){
    angleMode(DEGREES);
    createTile(0, 0, 30, 135, 315);
    createTile(0, 200, 75, 90, 270);
    createTile(0, 200, 30, 45, 225);
    createTile(200, -400, 75, 180, 360);
    createTile(0, 200, 50, 0, 360);
    createTile(0, 200, 75, 360, 180);
    createTile(200, -400, 30, 225, 45);
    createTile(0, 200, 75, 270, 90);
    createTile(0, 200, 30, 315, 135);
} 