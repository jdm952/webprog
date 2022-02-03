function setup () {
    createCanvas(600, 600);
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
    createTile(0, 0, 20, HALF_PI, QUARTER_PI);
    createTile(0, 200, 75, TWO_PI, PI);
    createTile(0, 200, 20, TWO_PI, PI);
    createTile(200, -400, 75, PI, TWO_PI);
    createTile(0, 200, 50, PI, TWO_PI);
    createTile(0, 200, 75, TWO_PI, PI);
    createTile(200, -400, 20, PI, TWO_PI);
    createTile(0, 200, 75, TWO_PI, PI);
    createTile(0, 200, 20, TWO_PI, HALF_PI);
    noLoop();
} 