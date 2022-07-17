let computerChoice = '';
let playerChoice = '';

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

function getPlayerChoice() {
    playerChoice = prompt(("Please enter your choice").toLowerCase());

    if (playerChoice === 'paper') {
    } else if (playerChoice === 'rock') {
    } else if (playerChoice === 'scissors') {
    } else {
        playerChoice = prompt (("Please enter a valid option").toLowerCase());
    }
}


function singleRound(playerSelection, computerSelection) {
    if (playerSelection === 'paper' && computerSelection === 'Rock') {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === 'rock' && computerSelection === 'Paper') {
        return "You lose! Paper beats Rock";
    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        return "You lose! Scissors beat Paper";
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        return "You Win! Scissors beat Paper";
    } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        return "You lose! Rock beats scissors";
    } else {
        return "It's a draw!!!!"
    }
}

getComputerChoice();
getPlayerChoice();
console.log(playerChoice);
console.log(computerChoice);
console.log(singleRound(playerChoice,computerChoice));


