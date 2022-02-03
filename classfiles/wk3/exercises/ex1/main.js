function setup () {
    createCanvas(200, 200);
}
function createTile() {
    translate(0, 0);
    fill('#2c0045');
    noStroke();
    rect(0, 0, 200, 200);
    fill('#ff7878')
    rect(0, 0, 200, 100);
    fill('#ffba26');
    triangle(0, 200, 100, 100, 200, 200);
    fill('#2c0045');
    triangle(0, 0, 100, 100, 200, 0);
    fill('#ff9100');
    arc(100, 100, 150, 150, PI, TWO_PI);
    fill('#fcb99d');
    arc(100, 100, 100, 100, PI, TWO_PI);
    fill('#d94100');
    circle(100, 100, 50);
}
function draw(){
    createTile();
    noLoop();
} 