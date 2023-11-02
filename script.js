'use strict';
// console.log(document.querySelector('.message').textContent);
// What is the DOM and DOM manipulation
// NOTE: change text, HTML attributes, and even CSS styles
// document.querySelector('.message').textContent = 'Correct Number 🏅';
// // console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = '20';
// console.log(document.querySelector('.guess').value);
let secretNumber = parseInt(Math.random() * 20 + 1);
let score = 20;
console.log(secretNumber);

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = parseInt(Math.random() * 20 + 1);
    console.log(secretNumber);
    score = 20;
    // document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
})

document.querySelector('.check').addEventListener('click', function () {
    console.log(document.querySelector('.guess').value);
    const guess = parseInt(document.querySelector('.guess').value);
    console.log(guess, typeof (guess))
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number 🍑';
    } else if (guess === secretNumber) {
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.message').textContent = 'You are win 🐣';
        document.querySelector('.number').textContent = secretNumber;
        let currentScore = document.querySelector('.highscore').textContent;
        if(currentScore < score){
            document.querySelector('.highscore').textContent = score;
        }
    } else if(guess!==secretNumber){
        if(score > 0)
        {
            document.querySelector('.message').textContent = guess > secretNumber ? 'Too High' : 'Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You are lost 🐣';
            document.querySelector('body').style.backgroundColor = 'red';
        }
    }
}) 
