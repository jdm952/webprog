const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 300;
let cards = [];
const gameState = {
    totalPairs: 8,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
};
let cardfaceArray = [];
let cardback;

//load in images
function preload () {
    cardback = loadImage('img/card_back200x200.png');
    cardfaceArray = [
        loadImage('img/img1x200.png'),
        loadImage('img/img2.png'),
        loadImage('img/img3.png'),
        loadImage('img/img4.png'),
        loadImage('img/img5.png'),
        loadImage('img/img6.png'),
        loadImage('img/img7.png'),
        loadImage('img/img8.png'),
    ]
}

//set up canvas and cards
function setup () {
    createCanvas(1300, 1500);
    let selectedFaces = [];
    for (let z = 0; z < 8; z++) {
        const randomIdx = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        //remove the used cardface so it doesn't get randomly selected again
        cardfaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 4; i++) {
            const cardFaceImg = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, cardFaceImg));
            startingX += 220;
        }
        startingY += 250
        startingX = 100;
    }

}

function draw () {
    background (0);
    if (gameState.numMatched === gameState.totalPairs) {
        fill('yellow');
        textSize(66);
        text('winner winner chicken dinner', 400, 100);
        noLoop();
    }
    for (let b = 0; b < cards.length; b++) {
        if(!cards[b].isMatch) {
            cards[b].face = DOWN;
        }
        cards[b].show();
    }
    noLoop();
    //create scoreboard
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill(255);
    textSize(36);
    text('attempts ' + gameState.attempts, 100, 100);
    text('matches ' + gameState.numMatched, 100, 150);
}


function mousePressed () {
    if (gameState.waiting) {
        return;
    }
    for (let k = 0; k < cards.length; k++) {
        //first check flipped cards length, and then we can trigger the flip
        if(gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[k]);
            gameState.flippedCards.push(cards[k]);
        }
    }
    if(gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            //cards match! time to score
            //mark cards as matched so they don't flip back
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            //empty the flipped cards array
            gameState.flippedCards.length = 0;
            //increment the score
            gameState.numMatched++;
            loop();
        } else {
            gameState.waiting = true;
            const loopTimeOut = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000)
        }
    }
}

//create cards and flipping
class Card {
    constructor (x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 200;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }

    show () {
        if (this.face === UP || this.isMatch) {
            rect(this.x, this.y, this.width, this.height);
            image(this.cardFaceImg, this.x, this.y);
        } else {
            rect(this.x, this.y, this.width, this.height);
            image(cardback, this.x, this.y);
        }
    }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
            this.flip();
            return true;
        } else {
            return false;
        }
    }

    flip () {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}

function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
        //pick random index
        const idx = Math.floor(Math.random() * counter);
        //decrease counter by 1 (decrement)
        counter--;
        //swap the last element with it
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
}