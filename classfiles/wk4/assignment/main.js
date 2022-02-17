  function setup() {
    createCanvas(1050, 1500);
    let myCard = new Card();
  }

  let cards = [];

  function draw() {
    background("#ccc");
    noLoop();
    //heading
    fill(0);
    textSize(40);
    text("Memory Card Game", 350, 100);
    fill('blue');
    //create cards on y axis
  // for (let j = 0; j < 4; j++) {
  //     //create cards on x axis
  //   for (let i = 0; i < 4; i++) {
  //     const newCard = { x: (i * 250) + 50, y: (j * 250) + 400, width: 200, height: 200 }
  //     rect(newCard.x, newCard.y, newCard.width, newCard.height);
  //     cards.push(newCard);
      }
    }
  }

class Card {
  constructor () {
      this.x = 100;
      this.y = 100;
      this.width = 80;
      this.height = 100;
      this.show();
  }
  show () {
      fill('blue');
      rect(this.x, this.y, this.width, this.height, 10);
      for (let j = 0; j < 4; j++) {
        //create cards on x axis
      for (let i = 0; i < 4; i++) {
        const newCard = { x: (i * 250) + 50, y: (j * 250) + 400, width: 200, height: 200 }
        rect(newCard.x, newCard.y, newCard.width, newCard.height);
        cards.push(newCard);
  }
}