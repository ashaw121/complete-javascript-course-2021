'use strict';

// DOM = Document Object Model: Structured representation of HTML doc. Tree shaped structure. DOM methods and properties are not actually part of the javascript language, they are from web APIs. DOM manipulation works in all browsers.

// Create random number
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector('.number').textContent = secretNumber;

// Get score
let score = Number(document.querySelector('.score').textContent);
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Updated messages
const mesDef = 'Start guessing...';
const winner = '🎉 Correct Number!';
const loser = '💣 You lost the game!';
const tooHigh = '👇 Too high!';
const tooLow = '☝️ Too low!';
const noNum = '⛔ No Number!';

// Use event listener to see when someone hits the 'check' button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no valid guess
  if (!guess) {
    displayMessage(noNum);
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage(winner);

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is incorrect
  } else if (guess != secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;

      displayMessage(guess > secretNumber ? tooHigh : tooLow);
    } else {
      displayMessage(loser);
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Event handler for reset button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  displayMessage(mesDef);
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
