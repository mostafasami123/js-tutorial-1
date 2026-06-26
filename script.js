'use strict';

let secretNumber = Math.trunc(Math.random() * 20) +1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

const logic1 = function(guess) {
    if (guess > secretNumber && guess - secretNumber >= 4) {
        displayMessage('Too high!');
    } else if (guess > secretNumber &&  guess - secretNumber <= 3) {
        displayMessage('Your guess is high');
    } else if (guess < secretNumber && secretNumber - guess >= 4) {
        displayMessage('Too low!');
    } else {
        displayMessage('Your guess is low');
    }
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        displayMessage('no number')
    } else if (guess === secretNumber){
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('correct number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber){
        if (score > 1){
            // displayMessage(guess > secretNumber ? 'too high' : 'too low');
            logic1(guess)
            score--;
            document.querySelector('.score').textContent = score;
            setTimeout(() => {document.querySelector('.guess').value = ''}, 500);
        } else {
            displayMessage('you lose');
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#fa4040';
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});



console.log(secretNumber)
