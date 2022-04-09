let rotateBy = 5;
const x = 500;
const y = 500;
const x2 = 102;
const y2 = 104;

function setup() {
    createCanvas(1000, 1000);
    background(0);
    angleMode(DEGREES);
}

function makeArm(rotateBy) {
    let alt = Math.random(rotateBy / 360);
    console.log(alt);
    fill("#481004");
    stroke("#ff5733");
    strokeWeight(1);
    ellipse(150 + alt, 150, 150 - alt * 2);
    fill("#fff");
    ellipse((150 + alt) - 50, 150, (150 - alt - 50) * 2);
}

function draw() {
    translate(x, y);
    for (let i = 0; i < 360; i+=360) {
        rotate(rotateBy);
        makeArm(rotateBy);
        rotateBy += 8;
    }
}
