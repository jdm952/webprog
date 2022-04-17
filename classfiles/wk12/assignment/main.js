let sound1;
let sound2;
let sound3;
let sound4;
let sound5;
let sound6;
let amplitude1;
let amplitude2;
let amplitude3;
let amplitude4;
let amplitude5;
let amplitude6;
var button1;
var button2;
var button3;
var button4;
var button5;
var button6;

function setup() {
    var canvas = createCanvas(windowWidth, 400);
    background(0);
    sound1 = loadSound("../sound/a3-trem-a2-v2.wav");
    sound2 = loadSound("../sound/d3-trem-d2-v2.wav");
    sound3 = loadSound("../sound/f4-trem-g3-v2.wav");
    sound4 = loadSound("../sound/e4-trem-e3-v2.wav");
    sound5 = loadSound("../sound/c4-trem-c3-v2.wav");
    sound6 = loadSound("../sound/b4-trem-b3-v2.wav");
    amplitude1 = new p5.Amplitude();
    amplitude1.setInput(sound1);
    amplitude2 = new p5.Amplitude();
    amplitude2.setInput(sound2);
    amplitude3 = new p5.Amplitude();
    amplitude3.setInput(sound3);
    amplitude4 = new p5.Amplitude();
    amplitude4.setInput(sound4);
    amplitude5 = new p5.Amplitude();
    amplitude5.setInput(sound5);
    amplitude6 = new p5.Amplitude();
    amplitude6.setInput(sound6);
    button1 = createButton(1);
    button1.parent("buttons");
    button1.addClass("orange")
    button1.mousePressed(togglePlay1);
    button2 = createButton(2);
    button2.parent("buttons");
    button2.addClass("pink");
    button2.mousePressed(togglePlay2);
    button3 = createButton(3);
    button3.parent("buttons");
    button3.addClass("yellow");
    button3.mousePressed(togglePlay3);
    button4 = createButton(4);
    button4.parent("buttons");
    button4.addClass("pink");
    button4.mousePressed(togglePlay4);
    button5 = createButton(5);
    button5.parent("buttons");
    button5.addClass("yellow");
    button5.mousePressed(togglePlay5);
    button6 = createButton(6);
    button6.parent("buttons");
    button6.addClass("orange");
    button6.mousePressed(togglePlay6);
}

function draw() {

    fill(0);
    //button 1 amplitude
    let level1 = amplitude1.getLevel();
    let size1 = map(level1, 0, 1, 0, 300);
    stroke(255, 127, random(255));
    ellipse(width * 0.125, height/2, size1, size1);

    //button 2 amplitude
    let level2 = amplitude2.getLevel();
    let size2 = map(level2, 0, 1, 0, 300);
    stroke(255, random(255), 203);
    ellipse(width * 0.25, height/2, size2, size2);

    //button 3 amplitude
    let level3 = amplitude3.getLevel();
    let size3 = map(level3, 0, 1, 0, 300);
    stroke(247, 230, random(255));
    ellipse(width * 0.4, height/2, size3, size3);


    //button 4 amplitude
    let level4 = amplitude4.getLevel();
    let size4 = map(level4, 0, 1, 0, 300);
    stroke(233, random(255) , 50);
    ellipse(width * .6, height/2, size4, size4);

    //button 5 amplitude
    let level5 = amplitude5.getLevel();
    let size5 = map(level5, 0, 1, 0, 300);
    stroke(255, random(255) , 50);
    ellipse(width * .8, height/2, size5, size5);

    //button 6 amplitude
    let level6 = amplitude6.getLevel();
    let size6 = map(level6, 0, 1, 0, 300);
    stroke(255, 0 , random(255));
    ellipse(width * .9, height/2, size6, size6);
}

//play and pause sound 1
function togglePlay1() {
    if (!sound1.isPlaying() ){
        sound1.play();
    } else {
        sound1.play();
        
    }
}
//play and pause sound 2
function togglePlay2() {
    if (!sound2.isPlaying() ){
        sound2.play();
    } else {
        sound2.play();
        
    }
}
//play and pause sound 3
function togglePlay3() {
    if (!sound3.isPlaying() ){
        sound3.play();
    } else {
        sound3.play();
        
    }
}
//play and pause sound 4
function togglePlay4() {
    if (!sound4.isPlaying() ){
        sound4.play();
    } else {
        sound4.play();
        
    }
}
//play and pause sound 5
function togglePlay5() {
    if (!sound5.isPlaying() ){
        sound5.play();
    } else {
        sound5.play();
        
    }
}
//play and pause sound 6
function togglePlay6() {
    if (!sound6.isPlaying() ){
        sound6.play();
    } else {
        sound6.play();
        
    }
}