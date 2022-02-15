  function setup() {
    createCanvas(1050, 1500);
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
    for (let j = 0; j < 4; j++) {
        //create cards on x axis
      for (let i = 0; i < 4; i++) {
        const newCard = { x: (i * 250) + 50, y: (j * 250) + 400, width: 200, height: 200 }
        rect(newCard.x, newCard.y, newCard.width, newCard.height);
        cards.push(newCard);
      }
    }
  }

//playing around with adding the card back image
//   function add_img() { 
//     var img = document.createElement('img'); 
//     img.src = 'card_back200x200.png'; 
//     document.getElementById('cardback').appendChild(img);
// }