function setup () {
    createCanvas(200, 200);
}
function createTile() {
    translate(0, 0);
    fill('blue');
    rect(0, 0, 200, 200);
    stroke('white');
    strokeWeight(5);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    noStroke();
    fill('yellow');
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);
    nofill();//if i delete this, the circle will show up but be filled with yellow
    stroke('purple'); //if i move the next 3 lines above no fill, the circle will appear but behind the yellow circles
    strokeWeight(5);
    circle(100, 100, 100);

}
function draw(){
    createTile();
}