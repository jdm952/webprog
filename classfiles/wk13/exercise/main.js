var slider;
var pos;

function setup() {
    let canvas = createCanvas(500, 500);
    canvas.addClass("center");
    angleMode(DEGREES);
    slider = createSlider(0, 5, 1, .1);
    slider.addClass("center");

    pos = 0.0; //using a float value instead of an integer
    inc = 2.0;//amount by which we increase position. it's an angle.

    pos2 = 0.0; //using a float value instead of an integer
    inc2 = 5.0;

}

function draw() {
    clear();
    background(0);
    translate(width/2, height/2);
    var mySinVal = sin(pos);
    var mySinVal2 = cos(pos2);
    amplified = mySinVal * 50;
    amplified2 = mySinVal2 * 50;

    for (x = 0; x <= 360; x = x+5) {
        stroke(255);
        fill(mouseY, mouseX, 85);
        triangle(0, 10, 50, amplified2, amplified, 10);
        triangle(amplified2, 10, 50, amplified, 20, 10);
        triangle(0, 10, 50, -50, 20, amplified);
        rotate(x);
        noStroke();
        fill(mouseX, mouseY, 85);
        stroke(255);
        line(0, amplified, 70, amplified2);
        line(0, amplified*2, 70, amplified2*2);
        stroke(mouseX, mouseY, 255);
        line(0, amplified*8, 70, amplified2*8);
        noStroke();
        ellipse(0, amplified*4, 20);
        ellipse(0, amplified*2, 20);
        ellipse(0, amplified*8, 20);
    }

    pos = pos + slider.value();
    // pos2 = pos2 + slider2.value();
}