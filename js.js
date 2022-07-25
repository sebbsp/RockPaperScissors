const playerOptions = document.querySelectorAll(".playerSelection");
const pscore = document.querySelector('#playerScore');
const cscore = document.querySelector('#computerScore');
const resultbox = document.querySelector('#result');
const result = document.querySelector('.roundResult');
const mid = document.querySelector('.mid');

let playerChoice = '';
let computerChoice = '';
let playerScore = 0;
let computerScore = 0;
let winner = '';

function getComputerChoice() {
    let a = Math.floor(Math.random()*3);
    if (a === 0) {
        computerChoice = 'Rock';
    } else if ( a === 1 ) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }
}

    playerOptions.forEach((choice) => {
        choice.addEventListener('click', () => {
            playerChoice = choice.id;   
            getComputerChoice();
            singleRound(playerChoice, computerChoice);
            if (computerScore === 5 || playerScore === 5 ) {
                function check() {
                    if (computerScore > playerScore) {
                        winner = 'Computer';
                    } else {
                        winner = 'User';
                    }

                }
                check();
                const resultMessage = document.createElement('h1');
                resultMessage.textContent = `The winner is ${winner}`;
                const resultScore = document.createElement('p');
                resultScore.textContent = `Final Score - User ${playerScore} - Computer ${computerScore}`;
                resultMessage.appendChild(resultScore);
                mid.replaceWith(resultMessage);

                const reload = document.createElement('button');
                reload.textContent= `Click to play again`;
                reload.addEventListener('click' , () => { location.reload()});
                resultMessage.appendChild(reload);
            }
        })
    })

    function singleRound(playerSelection, computerSelection) {
        if (playerSelection === 'paper' && computerSelection === 'Rock') {
            playerScore ++;
            result.textContent = "You Win! Paper beats Rock";
            pscore.textContent = playerScore;
        } else if (playerSelection === 'rock' && computerSelection === 'Paper') {
            computerScore++;
            result.textContent = "You lose! Paper beats Rock";
            cscore.textContent = computerScore;
        } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
            computerScore++;
            result.textContent = "You lose! Scissors beat Paper";
            cscore.textContent = computerScore;
        } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
            playerScore++;
            result.textContent = "You Win! Scissors beat Paper";
            pscore.textContent = playerScore;
        } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
            playerScore++;
            result.textContent = "You Win! Rock beats Scissors";
            pscore.textContent = playerScore;
        } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
            computerScore++;
             result.textContent = "You lose! Rock beats scissors";
             cscore.textContent = computerScore;
        } else {
            result.textContent = "It's a draw!!!!"
        }
    }



