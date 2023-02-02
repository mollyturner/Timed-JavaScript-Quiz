// Populate questions, pop answers,
var topOfPage = document.createElement('div');
var highScEl = document.createElement('span');
var time = document.createElement('span');
var h1El = document.createElement('h1');
var descriptEl = document.createElement('div')
var startBtnDiv = document.createElement('div');
var startBtn = document.createElement('button');
var quizCard = document.getElementById('quiz-card');
var titleSection = document.getElementById('title-section');

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

titleSection.appendChild(topOfPage)
topOfPage.appendChild(highScEl);
topOfPage.appendChild(time);

titleSection.appendChild(h1El);
titleSection.appendChild(descriptEl);
titleSection.appendChild(startBtnDiv);
startBtnDiv.append(startBtn);

topOfPage.setAttribute('id', 'highScoreDiv');
highScEl.setAttribute('id', 'highScores');
time.setAttribute('id', 'timeCounter');
h1El.setAttribute('id', 'title');
descriptEl.setAttribute('id', 'gameDescript');
startBtnDiv.setAttribute('id', 'firstBtnDiv');

startBtn.addEventListener('click', () => {questionRender(0)});

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

//global var being incremented to change question object 
var questionNum = 0;

//calls functions to delete listeners, render next question and delete time
function wrongAnswer() {          
    deleteListeners(); 
    questionRender(questionNum);
    //TODO: make this function delete time
    console.log('Wrong answer');
};

//calls functions to delete listeners, render next question
function correctAnswer() {        
    deleteListeners();         
    questionRender(questionNum);
    console.log('correct answer');
};

//gets called before rendering the next question to delete the previous event listeners
function deleteListeners() {
    for (let index = 1; index < 5; index++) {
        console.log(`Deleting listener ${index}`)

        var button = document.getElementById(`answer-btn-${index}`)

        button.removeEventListener('click', correctAnswer);
        button.removeEventListener('click', wrongAnswer);
    }
}


//Checks the options and renders buttons depending on if the answer is correct or not
function answerCheck (questionObj) {
    for (let index = 0; index < questionObj.options.length; index++) {


        if (questionObj.options[index] == questionObj.answer) {
            document.getElementById(`answer-btn-${[index + 1]}`)
                .addEventListener('click', correctAnswer);
        } else {
            document.getElementById(`answer-btn-${[index + 1]}`)
                .addEventListener('click', wrongAnswer);
        };
    };
}

//Renders the current question to the page
function questionRender(number) {
    quizCard.style.display = 'flex';
    
    //calls the answer check function to correct the event listener
    answerCheck(questionsArray[questionNum]);

    //renders the question to the page
    var question = document.getElementById('quiz-question');
    question.innerText = questionsArray[questionNum].question;

    //for loop to print the options into the button depending on what questionsArray object you are on
    for (let index = 0; index < questionsArray[questionNum].options.length; index++) {
        var button = document.getElementById(`answer-btn-${[index + 1]}`)

        button.innerText = questionsArray[questionNum].options[index];
    }

    //this checks to see if the number is 0 and sets it to 1 or increments it if it isnt. it changes a global var "questionNum"
    if (number = 0) {
        questionNum = 1;
    } else {
        questionNum = questionNum + 1;
    }
    
};
