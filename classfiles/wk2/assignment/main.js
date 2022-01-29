const questions = [
    { question: "What do you call a fish wearing a bowtie?", answer: "Sofishticated." },
    { question: "Why can't bicycles stand on their own?", answer: "They're two tired." },
    { question: "Where does the general keep his armies?", answer: "In his sleevies." },
    { question: "How do you organize a space party?", answer: "Planet." },
    { question: "Why is it easy to weigh a fish?", answer: "They have their own scales." },
]


const questionLength = questions.length;
const questionIndex = Math.floor(Math.random() * questionLength);
const answer = window.prompt(questions[questionIndex].question);
window.alert("You answered: " + answer + ". The correct answer is: " + questions[questionIndex].answer);