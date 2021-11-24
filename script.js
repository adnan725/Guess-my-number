'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// document.querySelector('.container').style.backgroundColor = '#60b347';

document.querySelector('.btn--check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no guess
  if (!guess) {
    document.querySelector('.start--guessing').textContent = '⛔ Not a number';

    //When guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('.start--guessing').textContent = '🎉 Correct';
    document.querySelector('.question-mark').textContent = secretNumber;
    document.querySelector('.question-mark').style.width = '20%';
    document.querySelector('.question-mark').style.height = '125px';
    document.querySelector('.victory').classList.remove('victory--hidden');

    // document.querySelector('.your--highscore').textContent = score;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.your--highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.start--guessing').textContent = '📈 Too high';
      score = score - 1;
      document.querySelector('.your--score').textContent = score;
    } else {
      document.querySelector('.start--guessing').textContent =
        '💥 You lost the game';
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.start--guessing').textContent = '📉 Too low';
      score = score - 1;
      document.querySelector('.your--score').textContent = score;
    } else {
      document.querySelector('.start--guessing').textContent =
        '💥 You lost the game';
    }
  }
});

document.querySelector('.btn--again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.question-mark').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.start--guessing').textContent = 'Start guessing...';
  document.querySelector('.question-mark').style.width = '17%';
  document.querySelector('.question-mark').style.height = '100px';
  document.querySelector('.your--score').textContent = score;
  // document.querySelector('.your--highscore').textContent = 0;
});

document.querySelector('.icon').addEventListener('click', function () {
  document.querySelector('.victory').classList.add('victory--hidden');
});
