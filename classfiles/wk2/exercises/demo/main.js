//variable but has multple slots
let myArr = ['bob', 'betty', 'sue'];
let myOtherArray = new Array(); //array constructor is not the preferable way to do this
myOtherArray.push('star wars');
myOtherArray.push('raiders of the lost ark');
// myArr.pop(); //removes last item
// myArr.shift(); //removes first item
myArr.unshift('james');//adds item to beginning of the array

console.log(myArr);
console.log(myOtherArray);
console.log(myOtherArray[0]); //read single item if you know what index is
console.log(myArr.indexOf('betty')); //tells us what index number 'betty' is
const bettyIdx = myArr.indexOf('betty'); //defines the index number of betty
console.log(bettyIdx);

myArr.splice(bettyIdx, 1);
console.log(myArr); //this extracted betty out. if we change to 2, it'll delete two names

//these are all considered mutations

console.log(myArr.length);//outputs number of slots in an array. not a read only property, you can change the length

//property is log, push, all the things after the period. something on the object that allows us to do an action to it
// Math.random () for random 0 and 1
// Math.round(n) rounds to the nearest whole number
//myArr.length -1 to get the last index number of an array
const randomNumber = Math.round(Math.random() * (myArr.length - 1));
console.log(myArr[randomNumber]);


const myBicycle = {color: "yellow", wheels: "knobby", suspension: "shocks"};
//use any properties/strings you want. color, wheels, etc. The : creates the property.
console.log('bike', myBicycle);

//adding properties
myBicycle.seat = "soft and cushy";
console.log("bike seat", myBicycle);

//viewing values by ket (dot and array notation)

//starting the question assignment
const questions = [
    { question: "red + blue", answer: "purple" },
    { question: "2 + banana", answer: "2banana" },
    { question: "adding white", answer: "tint" }
]

// determine how long question set is
const questionLength = questions.length;
//choose a pseudo-random number between 0 and the length of the array using math.floor(Math.random() * ARRAY_LENGTH)
const questionIndex = Math.floor(Math.random() * questionLength); //random between 0 and 2
//display question with window.prompt
const answer = window.prompt(questions[questionIndex].question);
if (answer === questions[questionIndex].answer) {
        window.alert("you win");
}