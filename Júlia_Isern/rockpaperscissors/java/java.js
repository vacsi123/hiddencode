// Get the buttons and result element
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const result = document.getElementById("result");
const resetBtn = document.getElementById("reset");

// Define variables for player and computer choices
let playerChoice = "";
let computerChoice = "";

// Define function to generate random computer choice
function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	const randomIndex = Math.floor(Math.random() * 3);
	return choices[randomIndex];
}

// Define function to determine the winner
function determineWinner() {
	if (playerChoice === computerChoice) {
		return "Tie!";
	} else if (playerChoice === "rock" && computerChoice === "scissors" || 
	playerChoice === "paper" && computerChoice === "rock" || 
	playerChoice === "scissors" && computerChoice === "paper") {
		return "You win!";
	} else {
		return "Computer wins!";
	}
}

// Define function to display the result
function displayResult(resultString) {
	result.textContent = resultString;
}

// Define function to reset the game
function resetGame() {
	playerChoice = "";
	computerChoice = "";
	result.textContent = "";
}

// Add event listeners to the buttons
rockBtn.addEventListener("click", function() {
	playerChoice = "rock";
	computerChoice = getComputerChoice();
	displayResult(determineWinner());
});

paperBtn.addEventListener("click", function() {
	playerChoice = "paper";
	computerChoice = getComputerChoice();
	displayResult(determineWinner());
});

scissorsBtn.addEventListener("click", function() {
	playerChoice = "scissors";
	computerChoice = getComputerChoice();
	displayResult(determineWinner());
});

resetBtn.addEventListener("click", resetGame);
