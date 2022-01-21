function setup() {
  createCanvas(400, 400);
  noStroke ();
}

function draw () {
  if (mouseIsPressed) {
    fill (0, 15, 46);
    ellipse(mouseX, mouseY, 80, 80);
  } else {
    fill(180, 240, 0);
    rect (mouseX, mouseY, 80, 80);
  }
}