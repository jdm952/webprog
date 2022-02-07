let questionInput;
let currentQuestion;
let response;
let responseColor = 'green';
let heading;
let statements = [
    { question: "What do you call a fish wearing a bowtie?", answer: "sofishticated" },
    { question: "Why can't bicycles stand on their own?", answer: "they're two tired" },
    { question: "Where does the general keep his armies?", answer: "in his sleevies" },
    { question: "How do you organize a space party?", answer: "planet" },
    { question: "Why is it easy to weigh a fish?", answer: "they have their own scales" },
];

/*const questionLength = statements.length;
const questionIndex = Math.floor(Math.random() * questionLength);
const answer = window.prompt(statements[questionIndex].question);
window.alert("You answered: " + answer + ". The correct answer is: " + statements[questionIndex].answer);
*/

function next() {
    if(statements.length < 1) {
        window.alert('you win');
        return;
    }
    const randomIndex = Math.ceil(Math.random() * statements.length - 1);
    return statements[randomIndex];
}

function checkQuestion() {
    if (currentQuestion.answer === questionInput.value()) {
        statements = statements.filter(statementObj => {
            return currentQuestion.answer !== statementObj.answer;
        });
        response = 'correct! next question';
    } else {
        response = 'oops! that was not the right answer, try another'
        responseColor = 'red';
    } 
    currentQuestion = next();
    questionInput.value('');
    if(currentQuestion) {
        message = currentQuestion.question;
    }

}

currentQuestion = next();
let message = currentQuestion.question;
function setup() {
    createCanvas(800, 600);
    heading = createElement('h1', ['Playing with Puns']);
    heading.position(100, 100);
    questionInput = createInput('');
    questionInput.size(250, 24);
    questionInput.position(100, 200);
    submitAnswerButton = createButton('submit answer');
    submitAnswerButton.size(250, 24);
    submitAnswerButton.mousePressed(checkQuestion);
    submitAnswerButton.position(100, 250);
}
function draw() {
    background('#fad7d4');
    fill('#0e1373');
    textSize(24);
    text(message, 100, 300);
    fill(responseColor);
    text(response, 100, 150);
}