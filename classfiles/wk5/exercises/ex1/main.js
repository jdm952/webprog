let blockX = 0;
let blockY = 0;
let drawTimer;
let blockColorR = 255;
let blockColorG = 35;
let blockColorB = 45;
const speed = 50;
const distance = 2;

function setup() {
    createCanvas(500, 500);
    background (0);
}

function drawBlock(x, y, blockColorR, blockColorG, blockColorB) {
    fill(blockColorR, blockColorG, blockColorB || 255); // do color or default to 255 if no color added
    rect(x, y + 30, 50, 50);
}

function draw () {
    fill('white');
    text("press a number to change the color", 10, 20);
}

function keyTyped() {
    let keyToNumber = Number(key);
    if (isNaN(keyToNumber)) {
        return;
    }
    keyToNumber = map(keyToNumber, 1, 9, 1, 255);
    console.log("converted number ", keyToNumber);
    blockColorR = keyToNumber;
}
window.setTimeout(() => {
    drawTimer = window.setInterval(() => { 
        if(blockY - 50 <= height) {
            drawBlock(blockX, blockY, blockColorR, blockColorG, blockColorB);
            blockY += distance;
        } else {
            blockY = 0;
            blockX += 50;
        }
        if (blockY - 50 > height && blockX - 50 > width) {
            //cancels timer
            window.clearInterval(drawTimer);
            alert("done");
        }
    
    }, speed);
}, 1500);


