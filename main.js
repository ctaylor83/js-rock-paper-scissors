let winners = []
let choice = ['rock', 'paper', 'scissors'];

// Function to reset the game and scores to 0
function resetgame() {
    winners = [];
    document.querySelector(".playerScore").textContent = "Score: 0";
    document.querySelector(".computerScore").textContent = "Score: 0";
    document.querySelector(".ties").textContent = "Ties: 0";
    document.querySelector(".winner").textContent = "";
    document.querySelector(".playerChoice").textContent = "";
    document.querySelector(".computerChoice").textContent = "";
    document.querySelector(".reset").style.display = "none";
}

// Function to start the game until someone wins 5 times
function beginGame() {
    let imgs = document.querySelectorAll("img");
  imgs.forEach((img) =>
    img.addEventListener("click", () => {
      if (img.id) {
        playRound(img.id);
      }
    })
  );
}

// Function to play the round, logic around the player's selection vs what is randomly chosen for the computer
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

// Calling the computer choice, making this random each game
function getComputerChoice() {
    return choice[Math.ceil(Math.random() * 3) -1];
}



game();