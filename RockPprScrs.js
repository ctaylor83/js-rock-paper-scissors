let choice = ['rock', 'paper', 'scissors'];

let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    return choice[Math.ceil(Math.random() * 3) -1];
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionL = playerSelection.toLowerCase();
    if (playerSelectionL == computerSelection) {
        console.log('Tie');
    }
    else if (playerSelectionL == 'rock' && computerSelection == 'paper') {
        console.log('You lose, Paper beats Rock');
        computerScore++;
    }

    else if (playerSelectionL == 'rock' && computerSelection == 'scissors') {
        console.log('You win, Rock beats Scissors');
        playerScore++;
    }

    else if (playerSelectionL == 'paper' && computerSelection == 'scissors') {
        console.log('You lose, Scissors beats Paper');
        computerScore++;
    }

    else if (playerSelectionL == 'paper' && computerSelection == 'rock') {
        console.log('You win, Paper beats Rock');
        playerScore++;
    }

    else if (playerSelectionL == 'scissors' && computerSelection == 'rock') {
        console.log('You lose, Rock beats Scissors');
        computerScore++;
    }

    else if (playerSelectionL == 'scissors' && computerSelection == 'paper') {
        console.log('You win, Scissors beats Paper');
        playerScore++;
    }
    
}

function game(){
    for (let i = 0; i < 5; ++i){

        let playerSelection = prompt('Enter your choice, Rock, Paper or Scissors :');
        console.log('Player Choice: ' + playerSelection);

        let computerSelection = getComputerChoice();
        console.log('Computer Choice: ' + computerSelection);

        (playRound(playerSelection, computerSelection));
    }

    if(computerScore > playerScore) {
        console.log('Computer won the game!');
    }

    else if(playerScore > computerScore) {
        console.log('Player won the game!');
    }

    else {
        console.log('It is a draw!');
    }
}

game();