var body = document.body;
var header = document.createElement('div');
var highScEl = document.createElement('span');
var time = document.createElement('span');
var h1El = document.createElement('h1');
var descEl = document.createElement('div');
var startBtn = document.createElement('button');

// Questions
var qList = document.createElement('ul');
var q1 = document.createElement('li');
var q2 = document.createElement('li');
var q3 = document.createElement('li');
var q4 = document.createElement('li');
var q5 = document.createElement('li');

highScEl.textContent = 'View High Scores';
time.textContent = 'Time: 0'

h1El.textContent = 'Coding Quiz Challenge';
descEl.textContent = 'Try to answer the following code-related questions within the time limit.  Keep in mind that incorrect answers will penalize your score/time by ten seconds!';
startBtn.textContent = 'Start Quiz'

body.appendChild(header)
header.appendChild(highScEl);
header.appendChild(time);

body.appendChild(h1El);
body.appendChild(descEl);
body.append(startBtn);

header.setAttribute('style', 'margin:15px; display:flex; justify-content:space-between;');
highScEl.setAttribute('style', 'list-style:none; color:#800080; text-align:start;');
time.setAttribute('style', 'list-style:none; color:black; text-align:end;');
h1El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
descEl.setAttribute('style', 'margin-top:15px; padding-left:380px; padding-right: 380px; text-align:center;');

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


