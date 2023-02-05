// Page on load
var topOfPage = document.createElement('div');
var highScEl = document.createElement('span');
var time = document.createElement('span');
var secondSection = document.createElement('section');
var h1El = document.createElement('h1');
var descriptEl = document.createElement('div')
var startBtnDiv = document.createElement('div');
var startBtn = document.createElement('button');
var inputBox = document.createElement('input');
var submitBtn = document.createElement('input');
var body = document.querySelector('body');

// Question elements
var quizCard = document.getElementById('quiz-card');
var titleSection = document.getElementById('title-section');
var questionResult = document.createElement('div');

// High scores page
var goBackEl = document.createElement('button');
var clearHighScoresEl = document.createElement('button');

// High Scores page


//global var being incremented to change question object 
var questionNum = 0;
var runTimer = true;

// Question elements
var qList = document.createElement('ul');
var q1 = document.createElement('li');
var q2 = document.createElement('li');
var q3 = document.createElement('li');
var q4 = document.createElement('li');
var q5 = document.createElement('li');

// Assigning content to load page
highScEl.textContent = 'View High Scores';
time.textContent = 'Time: 0';
quizCard.style.display = 'none';
h1El.textContent = 'Coding Quiz Challenge';
descriptEl.textContent = 'Try to answer the following code-related questions within the time limit.  Keep in mind that incorrect answers will penalize your score/time by ten seconds!';
startBtn.textContent = 'Start Quiz'

// Adding score/time to first section
titleSection.appendChild(topOfPage)
topOfPage.appendChild(highScEl);
topOfPage.appendChild(time);

// Adding quiz title, description and 'start quiz' button to second section
titleSection.append(secondSection);
secondSection.appendChild(h1El);
secondSection.appendChild(descriptEl);
secondSection.appendChild(startBtnDiv);
startBtnDiv.append(startBtn);
quizCard.after(questionResult);

// Adding ids to first page
topOfPage.setAttribute('id', 'highScoreDiv');
highScEl.setAttribute('id', 'highScores');
time.setAttribute('id', 'timeCounter');
h1El.setAttribute('id', 'title');
descriptEl.setAttribute('id', 'gameDescript');
startBtnDiv.setAttribute('id', 'firstBtnDiv');
secondSection.setAttribute('id', 'section2');

questionResult.setAttribute('style', 'font-size: x-large; color: gray; text-align: center; margin-top: 20px;');

// Adding event listener on click for timer countdown
startBtn.addEventListener('click', function (event) {
    secondSection.style.display = 'none';
    questionNum = 0;
    questionRender(questionNum);
    countdown();
});
var timeRemaining = 75;
function countdown() {
    var timeInterval = setInterval(function () {
        if (timeRemaining > -1 && runTimer) {
            time.textContent = 'Time: ' + timeRemaining;
            timeRemaining--;
        }
    }, 1000);
}


// Quiz questions array including options and answers
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

// Wrong answer function - deletes listeners, render next question, subtracts time, notifies answer incorrect
function wrongAnswer() {
    deleteListeners();
    questionRender(questionNum);
    timeRemaining -= 5;
    questionResult.textContent = 'Wrong!';
};

// Correct answer function - deletes listeners, render next question, notifies answer correct
function correctAnswer() {
    deleteListeners();
    questionRender(questionNum);
    console.log('correct answer');
    questionResult.textContent = 'Correct!';
};

// Call before rendering the next question to delete the previous event listeners
function deleteListeners() {
    for (let index = 1; index < 5; index++) {
        console.log(`Deleting listener ${index}`)

        var button = document.getElementById(`answer-btn-${index}`)

        button.removeEventListener('click', correctAnswer);
        button.removeEventListener('click', wrongAnswer);
    }
}


// Checks options and renders buttons depending on if answer is correct or not
function answerCheck(questionObj) {
    console.log(`questionObj ${JSON.stringify(questionObj)}`);
    for (let index = 0; index < questionObj.options.length; index++) {
        if (questionObj.options[index] == questionObj.answer) {
            document.getElementById(`answer-btn-${index + 1}`)
                .addEventListener('click', correctAnswer);
        } else {
            document.getElementById(`answer-btn-${index + 1}`)
                .addEventListener('click', wrongAnswer);
        };

        console.log(`index ${index}`);
    };

    console.log(`questionNum ${questionNum + 1}`);
    console.log(`questionsArray ${questionsArray.length}`);

    if (questionNum + 1 === questionsArray.length) {
        console.log('last question');

        runTimer = false;

        quizCard.style.display = 'none';

        createScorePage();
    }
}



function createScorePage() {
    var questionResult = document.createElement('div');
    var h2El = document.createElement('h2');
    var completedEl = document.createElement('div');
    var initialsParentDiv = document.createElement('div');
    var initialsEl = document.createElement('div');


    questionResult.setAttribute('id', 'questionResultID');
    initialsParentDiv.setAttribute('id', 'initialsParentID');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.setAttribute('value', 'Submit');
    submitBtn.setAttribute('id', 'finalSubmit');
    inputBox.setAttribute('id', 'inputBoxID');

    h2El.textContent = 'All done!';
    completedEl.textContent = `Your final score is ${timeRemaining + 1}`;
    initialsEl.textContent = 'Enter Initials: ';

    highScoreDiv.after(questionResult);
    questionResult.appendChild(h2El);
    questionResult.appendChild(completedEl);
    questionResult.appendChild(initialsParentDiv);
    initialsParentDiv.appendChild(initialsEl);
    initialsParentDiv.appendChild(inputBox);
    initialsParentDiv.appendChild(submitBtn);

}

// Renders the current question to the page
function questionRender(number) {
    quizCard.style.display = 'flex';

    // Calls the answer check function to correct the event listener
    answerCheck(questionsArray[questionNum]);

    // Renders the question to the page
    var question = document.getElementById('quiz-question');
    question.innerText = questionsArray[questionNum].question;

    // for loop to print the options into the button depending on what questionsArray object you are on
    for (let index = 0; index < questionsArray[questionNum].options.length; index++) {
        var button = document.getElementById(`answer-btn-${[index + 1]}`)

        button.innerText = questionsArray[questionNum].options[index];
    }

    // Checks to see if the number is 0 and sets it to 1 or increments it if it isnt. it changes a global var "questionNum"
    if (number = 0) {
        questionNum = 1;
    } else {
        questionNum = questionNum + 1;
    }
};

submitBtn.addEventListener('click', function () {

    questionResultID.style.display = 'none';
    topOfPage.style.display = 'none';
    questionResult.style.display = 'none';

    winners = JSON.parse(localStorage.getItem("winners") || "[]");

    // localStorage.setItem("Score", JSON.strigtimeRemaining+1);
    winners.push({ initials: inputBox.value, score: timeRemaining + 1 });
    localStorage.setItem("winners", JSON.stringify(winners));


    createHighScorePage();
});

function createHighScorePage() {
    var highScoresContainer = document.createElement('section');
    var highScoresContainer2 = document.createElement('div');
    var highScoreTitle = document.createElement('h1');
    var winnersContainer = document.createElement('div');
    var buttonsContainer = document.createElement('div');
    var goBackBtn = document.createElement('button');
    var clearHighScoresBtn = document.createElement('button');
    buttonsContainer.setAttribute('id', 'buttonsContainerID');
    goBackBtn.setAttribute('id', 'goBackBtnID');


    highScoresContainer.setAttribute('id', 'highScoresContainerID');

    body.appendChild(highScoresContainer);
    highScoresContainer.appendChild(highScoreTitle);
    highScoresContainer.appendChild(winnersContainer)
    highScoresContainer.appendChild(buttonsContainer);
    buttonsContainer.appendChild(goBackBtn);
    buttonsContainer.appendChild(clearHighScoresBtn);
    highScoresContainer.appendChild(highScoresContainer2);

    goBackBtn.textContent = 'Go Back';
    clearHighScoresBtn.textContent = 'Clear High Scores';
    highScoreTitle.textContent = 'High Scores';

    goBackBtn.addEventListener('click', function () {
        location.reload();
    });

    var winners = JSON.parse(localStorage.getItem('winners'));
    console.log(winners);
    console.log(`winners.length ${winners.length}`);

    for (let i = 0; i < winners.length; i++) {
        var highScoresCard = document.createElement('div');
        var highScoresText = document.createElement('h4');

        var winner = winners[i];
        var winnerNum = i + 1;
        highScoresText.textContent = `${winnerNum}. ${winner.initials} - ${winner.score}`;

        highScoresContainer2.append(highScoresCard);
        highScoresCard.append(highScoresText);
    };
    clearHighScoresBtn.addEventListener('click', function () {
        localStorage.clear();
        highScoresContainer2.textContent = ' ';

      });
};



