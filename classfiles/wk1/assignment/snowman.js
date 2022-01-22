let grid = undefined;
let stroke1 = prompt("enter a basic color in lowercase", "black");
let stroke2 = prompt("enter another basic color in lowercase", "orange");
function setup() {
    createCanvas(1000, 800);
    background('#91bbff');
    //grid = loadImage('100px_grid.png');
}
function draw() {
    //background(grid);
    fill ('#f1f1f1');
    noStroke();
    //body
    ellipse(500, 400, 250);
    ellipse(500, 600, 350);
    //head
    ellipse(500, 200, 200);
    //left arm
    stroke(0);
    strokeWeight(10);
    line(280, 300, 390, 390);
    line(280, 300, 280, 280);
    line(280, 300, 260, 280);
    line(280, 300, 255, 300);
    //right arm
    line(600, 400, 760, 325);
    line(760, 325, 762, 300);
    line(760, 325, 780, 315);
    line(760, 325, 780, 335);
    //body buttons
    strokeWeight(25);
    point(500, 400);
    point(500, 500);
    point(500, 600);
    //hat brim
    stroke(stroke1);
    strokeWeight(10);
    strokeCap(SQUARE);
    line (400, 120, 600, 120);
    //hat
    fill(stroke1);
    rect(440, 25, 120, 90);
    //eyes
    stroke(0);
    strokeWeight(17);
    point(448, 186);
    point(558, 186);
    noFill();
    strokeWeight(3);
    ellipse(445, 190, 20, 35);
    ellipse(555, 190, 20, 35);
    //mouth
    noFill();
    strokeWeight(3);
    arc (500, 225, 80, 80, QUARTER_PI, PI, CHORD);
    //nose
    fill(stroke2);
    stroke(stroke2);
    triangle(500, 200, 495, 212, 550, 230);
    //snow falling
    stroke('#fff');
    strokeWeight(12);
    point(100, 100);
    point(200, 150);
    point(50, 250);
    point(350, 100);
    point(750, 50);
    point(900, 150);
    point(950, 75);
    point(750, 300);
    point(800, 400);
    point(800, 500);
    point(900, 350);
    point(925, 725);
    point(125, 600);
    point(55, 450);
    point(250, 350);
}
