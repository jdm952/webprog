let soundArray = [];
let amplitude;
var button;



function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("samples");
    soundArray[0] = loadSound("../sound/a3-trem-a2-v2.wav");
    soundArray[1] = loadSound("../sound/d3-trem-d2-v2.wav");
    soundArray[2] = loadSound("../sound/d5-trem-d4-v2.wav");
    soundArray[3] = loadSound("../sound/e4-trem-e3-v2.wav");
    amplitude = new p5.Amplitude();
    button = createButton("push me again");
    button.parent("samples-button");
    button.mousePressed(togglePlay);
}

function draw() {
    background(0);

    let level = amplitude.getLevel();
    let size = map(level, 0, 1, 0, 1400);

    fill(255, 0 , 50);
    ellipse(width/2, height/2, size, size);
}

function togglePlay() {
        let sound = random(soundArray);
        if (sound.isPlaying() ){
            sound.play();
        } else {
            sound.play();
        }

}