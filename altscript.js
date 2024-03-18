'use strict';
    
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}
// React to click

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //When there is no input
    if (!guess) {
       // document.querySelector('.message').textContent = '⛔ No Number!';
       displayMessage ('⛔ No Number!');

        //When players win
      } else if (guess === secretNumber) {
        displayMessage ('🎉 Correct Number!');
       // document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
          highscore = score;
          document.querySelector('.highscore').textContent = highscore;
        }
//When guess is wrong


        
      } else if (guess !== secretNumber) {
        if (score > 1) {
        //document.querySelector('.message').textContent = guess > secretNumber ? 'Too big' : 'Too small';
        displayMessage(guess > secretNumber ? 'Too big' : 'Too small');
        score --;
        document.querySelector('.score').textContent = score;
         } else {
          displayMessage('You lost the game');
            //document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
         }

    }
  );

  //When you play the game again
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    //document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });