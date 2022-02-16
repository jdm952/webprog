// window.setTimeout(() => {
//     window.alert("fired");
// }, 5000);

//setTimeout notes:
//1000 = 1 second
//5000 = 5 seconds, etc.
//can only use window.setTimeout once

// let myNumber = 1;
// window.setInterval(() => {
//     console.log("my number is ", myNumber++);
// }, 500);

//setInterval notes:
//to do repeatedly, need to use setInterval because it repeats
//use this to send request to authentication server to check if this token is still valid
//may say after a certain amount time that user needs to log out and back in to renew session
//we'll use setInterval instead of draw because they both run in loops

// let myNumber = 1;
// const myTimer = window.setInterval(() => {
//     if(myNumber >= 20) {
//         window.clearInterval(myTimer);
//     }
//     console.log("still running", myNumber++);
// }, 200);

// const timer = window.setTimeout(() => {
//     console.log("time's up");
// }, 5000);
// function stopTimer() { //need to add button with onclick stopTimer() in html
//     console.log("stop timer");
//     window.clearTimeout(timer);
// }

//clearInterval notes
//put in an if function and use clearInterval

//clear timeout notes:
//if user finishes early. anytime you're done with trying to track the user's time

//intro to OOP
//making a class - think of a car. nothing tells us myCar is a car except for what we called it. class is taking that one step further.

// let myCar = {
//     wheels: 5,
//     color: "red"
// }

//class goes right there, no curly brackets needed
//classes are instantiated = a copy made from
//we've been working with classes a lot already - numbers, array, boolean.
//classes are typically capitalized, it's just a standard

// class Vehicle {
//     constructor(wheels, color) {
//         console.log("I have been created");
//         //to say this specific property belongs to this class and is instantiated we use "this."
//         this.wheels = wheels;
//         this.color = color;
//     }
//     go () { //this is a class method. to define a class method, you list method, parentheses, then curly brackets
//         console.log("I am now accelerating");
//     }
//     stop () {
//         console.log("I have now stopped");
//     }
// }


//create an instance of class Vehicle
// const myVehicle = new Vehicle(3, "purple"); //use keyword "new", that starts a new instance
// console.log(myVehicle);
// myVehicle.go();
// window.setTimeout(() => {
//     myVehicle.stop();
// }, 500);

// class Trike extends Vehicle {
//     constructor(color) {
//         super(3, color);//calls the constructor of the class that's being extended. like saying new Vehicle here. this is a method.
//         this.type = "cycle";
//     }
// }
// const myVehicle = new Trike("purple"); 
// console.log(myVehicle);
// myVehicle.go();
// window.setTimeout(() => {
//     myVehicle.stop();
// }, 500);

class Rectangle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 233;
        this.height = 200;
    }
    show() { //method
        rect(this.x, this.y, this.width, this.height);
    }
    move() {
        this.y = this.y + random(-3, 3); //random() is a p5.js function, can give it two numbers. need to call this in a p5 function (ie draw)
        this.x = this.x + random(-3, 3);
    }
}

let xOffset = 50;
const yOffset = 100;
const myRectangleArray = [];
for (let i = 0; i < 5; i++) {
    const tempRect = new Rectangle(xOffset, yOffset);
    myRectangleArray.push(tempRect);
    xOffset += 250;
}

// const myNewRectangle = new Rectangle(300, 500);
// const myRectangleArray = [new Rectangle(100, 100), new Rectangle(500, 100)];
function setup() {
    createCanvas(1000, 1000);
}


function draw() {
    background(0);
    // myNewRectangle.show();
    for (let rectArrayIndex = 0; rectArrayIndex < myRectangleArray.length; rectArrayIndex++) {
        myRectangleArray[rectArrayIndex].move();
        myRectangleArray[rectArrayIndex].show();
    }
}



//for memory card game
//we used preload function in week 1 to put in the snowman background. have to use live server to see it. 
