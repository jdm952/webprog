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
//const questions = [
//    { question: "red + blue", answer: "purple" },
//    { question: "2 + banana", answer: "2banana" },
//    { question: "adding white", answer: "tint" }
//]

// determine how long question set is
// const questionLength = questions.length;
//choose a pseudo-random number between 0 and the length of the array using math.floor(Math.random() * ARRAY_LENGTH)
//const questionIndex = Math.floor(Math.random() * questionLength); //random between 0 and 2
//display question with window.prompt
//const answer = window.prompt(questions[questionIndex].question);
//if (answer === questions[questionIndex].answer) {
//        window.alert("you win");
// }

//objects
const kensCar = {
    color: 'red',
    pistons: 4
}
console.log(kensCar);
//mutate: add data (properties)
kensCar.fuelInjection = true;
console.log(kensCar);
kensCar['4-wheel-drive']= true;

//display single item with dot
console.log("kens car is", kensCar.color);
//display single item with array notation
console.log('is it 4 wheel dig?', kensCar['4-wheel-drive']);
// using toString (works with arrays too)
console.log(kensCar.toString());
const myCars = ['rav', 'pilot', 'juke'];
console.log(myCars.toString());

//mutate: remove property
delete kensCar.pistons;
console.log('kens car without pistons', kensCar);

//merge two objects
const basicJuke = {
    wheels: 4,
    color: "black",
    doors: 4,
    make: 'Nissan'
};
const newJuke = Object.assign({}, basicJuke, kensCar);
console.log('new juke', newJuke);

//objects in arrays
//an array is created by doing:
const cars = [
    {make: 'Nissan', model: 'Rogue', color: 'orange'},
    {make: 'Nissan', model: 'Altima', color: 'blue'},
    {make: 'Dodge', model: 'Viper', color: 'blue'}
];
console.log('index 1 of cars color', cars[1].color);
const randomIdx = Math.round(Math.random() * cars.length -1);
//Math.random gives us a number between 0 and 1
//cars.length gives us the length of the cars array
//do the -1 because cars are indexed 0, 1, and 2. if we want to know whether it's the 
