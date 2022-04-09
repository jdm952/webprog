function setup() {
    createCanvas(1000, 1000);
    stroke(45, 130, 252);
};

function draw() {
    background("#2c0045");
    for (j = 0; j < 400; j += 10) {
        for (i = 0; i < 500; i += 10) {
            drawing((i * 1.5), (j * .8), (i * 2), j/2, (i * 6));
        };
    };
}

function drawing(x, y, drawingWidth, height, red) {
    push();
    translate(x, y);
    fill(red, 195, 252);
    ellipse(x, 0, drawingWidth, height);
    ellipse(0, y, drawingWidth, height);
    pop();
}