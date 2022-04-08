function setup() {
    createCanvas(400, 400);
    stroke(255);
    noFill();
  }
  
  function draw() {
    background(0);
    for (let i = 0; i < 450; i += 30) {
      strokeWeight(2);
      bezier( //start off using bezier example from p5.js example site
        450 - i / 4.0,
        0,
        0,
        150,
        200,
        200,
        400 - i / 4.0,
        400 + i / 25.0
      );
      bezier(
        400 - i / 4.0,
        400 + i / 25.0,
        0,
        150,
        200,
        200,
        0 + i / 4.0,
        400 + i / 4.0
      );
      bezier(
        0 + i / 4.0,
        400 + i / 4.0,
        200,
        200,
        0,
        150,
        0 - i / 4.0,
        0 + i / 25.0
      );
      bezier(
        0 - i / 4.0,
        0 + i / 25.0,
        200,
        200,
        0,
        150,
        450 - i / 4.0,
        0
      );
    }
  }
  