//modified this from the memory card game

function setup() {
    createCanvas(1050, 1500);
    background("#2c0045");
    let myTiger = new Tiger();
};

let tigerArray = [];


class Tiger {
  constructor () {
      this.x = 200;
      this.y = 200;
      this.s = random(0.25, 1);
      this.show();
  }
  show () {
      tiger(this.x, this.y, this.s);
      //create tigers on y axis
      for (let j = 0; j < 10; j++) {
        //create tigers on x axis
        for (let i = 0; i < 10; i++) {
            const newTiger = { x: (i * 200) + 50, y: (j * 200) + 100, s: random(0.25, 1)}
            tiger(newTiger.x, newTiger.y, newTiger.s);
            tigerArray.push(newTiger);
            }
        } 
    }
};

function tiger(x, y, s) {
    push();
    translate(x, y);
    scale(s);
    fill(245, 126, 16);
    //left ear
    ellipse(-65, -120, 80);
    fill(0);
    ellipse(-65, -120, 50);
    fill(245, 126, 16);
    //right ear
    ellipse(65, -120, 80);
    fill(0);
    ellipse(65, -120, 50);
    fill(245, 126, 16);
    //head
    ellipse(0, -50, 170, 190);
    //stripes
    stroke(0);
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
    fill(0);
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
    fill(0);
    ellipse(-30, -80, 30, 40);
    ellipse(30, -80, 30, 40);
    //pupils
    fill(255);
    ellipse(-28, -86, 15);
    ellipse(30, -86, 15);
    pop();
}