function getComputerChoice() {
	let computerChoiceNum = Math.floor(Math.random() * 3) + 1;
	switch (computerChoiceNum) {
		case 1:
			computerChoice = "PAPER";
			break;
		case 2:
			computerChoice = "SCISSORS";
			break;
		case 3:
			computerChoice = "ROCK";
			break;
	}
	return computerChoice;
}

function playRound(humanChoice, computerChoice) {
	if (humanChoice == computerChoice) {
		return 2;
	} else if (
		(humanChoice == "ROCK" && computerChoice == "SCISSORS") ||
		(humanChoice == "PAPER" && computerChoice == "ROCK") ||
		(humanChoice == "SCISSORS" && computerChoice == "PAPER")
	) {
		return 0;
	} else {
		return 1;
	}
}

let humanChoice;
let computerChoice;
let result;

let playerScore = 0;
let computerScore = 0;

let roundNumber = 1;

const roundTracker = document.querySelector("#roundTracker");
const scoreTracker = document.querySelector("#scoreTracker");

const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", () => {
	humanChoice = "ROCK"
});

const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", () => {
	humanChoice = "PAPER"
});

const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", () => {
	humanChoice = "SCISSORS"
});

const resultContainer = document.querySelector("#resultContainer");
const buttons = document.querySelectorAll("button");

buttons.forEach(element => {
	element.addEventListener("click", () => {
		if(playerScore == 5 || computerScore == 5){ return; }
		
		result = playRound(humanChoice, getComputerChoice());
		
		const resultItem = document.createElement("div");
		const roundText = document.createElement("strong");
		const choiceText = document.createElement("p");
		const resultText = document.createElement("strong");
		
		resultItem.appendChild(roundText);
		resultItem.appendChild(choiceText);
		resultItem.appendChild(resultText);

		choiceText.textContent = `Player selects ${humanChoice}, Computer selects ${computerChoice}`;

		if(result == 0){ 
			playerScore++;
			if(playerScore == 5){ resultText.textContent = "Player wins the Game!!!";}
			else { resultText.textContent = "Player Wins the Round"; }
			resultText.style = "color: green;"
		}
		else if(result == 1) { 
			computerScore++;
			if (computerScore == 5 ) { resultText.textContent = "Computer wins the Game!!!";}
			else { resultText.textContent = "Computer wins the Round!";}
			resultText.style = "color: red;"
		}
		else { 
			resultText.textContent = "Draw";
			resultText.style = "color: blue;"
		}
		roundTracker.textContent = `Round ${roundNumber}`;
		roundText.textContent = `Round ${roundNumber}`;
		scoreTracker.textContent = `Player: ${playerScore} vs PC ${computerScore}`
		resultContainer.appendChild(resultItem);
		resultItem.classList.add("resultItem");
		roundNumber++;
	});
});