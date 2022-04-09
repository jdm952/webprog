function setup() {
    createCanvas(1000, 1000);
};

function draw() {
    background("#2c0045");
    for (i = 0; i < width; i++) {
        drawing(i, 10, 20, 10);
        drawing(i, i/4, 30, 25);
        drawing(i, i/2, 40, 50);
        drawing(i, i, 50, 100);
        drawing(i, i*2, 60, 200);
        drawing(i, i*4, 70, 400);
        drawing(i, i*12, 80, 1200);
    };
}

function drawing(x, y, drawingWidth, height) {
    push();
    translate(x, y);
    fill(255);
    ellipse(x, 0, drawingWidth, height);
    pop();
}