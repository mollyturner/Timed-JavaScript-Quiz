// Populate questions, pop answers,

var body = document.body;
var topOfPage = document.createElement('div');
var highScEl = document.createElement('span');
var time = document.createElement('span');
var h1El = document.createElement('h1');
var descriptEl = document.createElement('div')
var startBtnDiv = document.createElement('div');
var startBtn = document.createElement('button');
var quizCard = document.getElementById('quiz-card')

// Questions
var qList = document.createElement('ul');
var q1 = document.createElement('li');
var q2 = document.createElement('li');
var q3 = document.createElement('li');
var q4 = document.createElement('li');
var q5 = document.createElement('li');

highScEl.textContent = 'View High Scores';
time.textContent = 'Time: 0';
quizCard.style.display = 'none';

h1El.textContent = 'Coding Quiz Challenge';
descriptEl.textContent = 'Try to answer the following code-related questions within the time limit.  Keep in mind that incorrect answers will penalize your score/time by ten seconds!';
startBtn.textContent = 'Start Quiz'

body.appendChild(topOfPage)
topOfPage.appendChild(highScEl);
topOfPage.appendChild(time);

body.appendChild(h1El);
body.appendChild(descriptEl);
body.appendChild(startBtnDiv);
startBtnDiv.append(startBtn);

topOfPage.setAttribute('id', 'highScoreDiv');
highScEl.setAttribute('id', 'highScores');
time.setAttribute('id', 'timeCounter');
h1El.setAttribute('id', 'title');
descriptEl.setAttribute('id', 'gameDescript');
startBtnDiv.setAttribute('id', 'firstBtnDiv');

function countdown() {
    var timeRemaining = 5;
    var timeInterval = setInterval(function () {
        if (timeRemaining > -1) {
            time.textContent = 'Time: ' + timeRemaining;
            timeRemaining--;
        }
    }, 1000);
}
countdown();

var questionsArray = [
    {
        answer: "alerts",
        options: ["strings", "booleans", "alerts", "numbers"],
        question: "Commonly used data types DO NOT include: ",
    },
    {
        answer: "parentheses",
        options: ["quotes", "curly Brackets", "parentheses", "square brackets"],
        question:
            "The condition in an if/else statement is enclosed within _____.",
    },
    {
        answer: "all of the above",
        options: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above",
        ],
        question: "Arrays in JavaScript can be used to store _____.",
    },
    {
        answer: "quotes",
        options: ["commas", "curly brackets", "quotes", "parentheses"],
        question:
            "String values must be enclosed within _____ when being assigned to variables",
    },
    {
        answer: "console.log",
        options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        question:
            "A very useful tool used during development and debugging for printing content to the debugger is: ",
    },
];

function answerCheck(object) {
    for (let index = 0; index < object.options.length; index++) {

        if (object.options[index] == object.answer) {
            document.getElementById(`answer-btn-${[index]}`)
                .addEventListener('click', () => { 
                    
                    questionRender()})
        } else {
            document.getElementById(`answer-btn-${[index]}`)
                .addEventListener('click', () => { 
                    
                    questionRender()})
        }
    }
}
