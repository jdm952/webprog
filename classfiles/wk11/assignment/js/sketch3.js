var x = [];

function setup() {
    createCanvas(1000, 1000);
    noStroke();
    for (var i = 0; i < 3000; i++){
        x[i] = random(-1000, 200);
    };
}

function draw() {
    background("#2c0045");
    for (var i = 0; i < x.length; i++) {
        x[i] += .5;
        var y = i * .4;
        var scalar = random(-.25, .25);
        var blue = random(0, 255);
        var blue2 = random(0, 255);
        tiger(x[i], y, scalar, blue, blue2);
    }
}

function tiger(x, y, s, blue, blue2) {
    push();
    translate(x, y);
    scale(s);
    fill(245, 126, blue);
    //left ear
    ellipse(-65, -120, 80);
    fill(0, 0, blue2);
    ellipse(-65, -120, 50);
    fill(245, 126, blue);
    //right ear
    ellipse(65, -120, 80);
    fill(0, 0, blue2);
    ellipse(65, -120, 50);
    fill(245, 126, blue);
    //head
    ellipse(0, -50, 170, 190);
    //stripes
    stroke(0, 0, blue2);
    strokeWeight(10);
    noFill();
    //top stripes
    line(-20, -141, -20, -123);
    line(0, -143, 0, -120);
    line(20, -141, 20, -123);
    //left stripes
    line(-82, -60, -67, -60);
    line(-82, -43, -50, -43);
    line(-80, -23, -67, -23);
    //right stripes
    line(82, -60, 67, -60);
    line(82, -43, 50, -43);
    line(80, -23, 67, -23);
    //snout
    fill(240, 193, 149);
    noStroke();
    ellipse(0, 0, 80, 90);
    fill(0, 0, blue2);
    triangle(-20, -44, 0, -25, 20, -44);//nose
    stroke(0);
    strokeWeight(2);
    //mouth
    line(0, -40, 0, 20)
    noFill();
    strokeWeight(3);
    arc(0, 0, 40, 40, TWO_PI, PI);
    strokeWeight(2);
    //left whiskers
    line(-15, -20, -60, -40);
    line(-20, -15, -60, -15);
    line(-15, -10, -70, 0);
    //right whiskers
    line(20, -10, 60, 0);
    line(20, -20, 70, -30);
    line(25, -15, 70, -10);
    //eyes
    noStroke();
    fill(0, 0, blue2);
    ellipse(-30, -80, 30, 40);
    ellipse(30, -80, 30, 40);
    //pupils
    fill(255);
    ellipse(-28, -86, 15);
    ellipse(30, -86, 15);
    pop();
}