const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");
const computerChoiceDiv = document.getElementById("computer-choice");

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "draw";
    }
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "win";
    }
    return "lose";
}

function updateScore(result) {
    if (result === "win") {
        playerScore++;
    } else if (result === "lose") {
        computerScore++;
    }

    scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        announceWinner();
    }
}

function announceWinner() {
    let winner = playerScore > computerScore ? "Player" : "Computer";
    resultDiv.textContent = `${winner} wins the game!`;
    resetScore();
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
}

function displayComputerChoice(computerSelection) {
    const img = document.createElement("img");
    img.src = `images/${computerSelection}.png`;
    img.alt = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    computerChoiceDiv.innerHTML = "";
    computerChoiceDiv.appendChild(img);
}

function buttonClickHandler(playerSelection) {
    const computerSelection = computerPlay();
    displayComputerChoice(computerSelection);
    const result = playRound(playerSelection, computerSelection);
    resultDiv.textContent = `You ${result}! ${playerSelection} vs ${computerSelection}`;
    updateScore(result);
}

rockBtn.addEventListener("click", () => buttonClickHandler("rock"));
paperBtn.addEventListener("click", () => buttonClickHandler("paper"));
scissorsBtn.addEventListener("click", () => buttonClickHandler("scissors"));

const computerChoiceTextDiv = document.getElementById("computer-choice-text");

function displayComputerChoice(computerSelection) {
    const img = document.createElement("img");
    img.src = `images/${computerSelection}.png`;
    img.alt = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    img.style.width = "100px";
    img.style.height = "100px";
    computerChoiceDiv.innerHTML = "";
    computerChoiceDiv.appendChild(img);

    computerChoiceTextDiv.textContent = `The computer selects ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
}

const resetBtn = document.getElementById("reset");

function resetGame() {
    resetScore();
    resultDiv.textContent = "";
    computerChoiceTextDiv.textContent = "";
    computerChoiceDiv.innerHTML = "";
    scoreDiv.textContent = "";
}

resetBtn.addEventListener("click", resetGame);