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

// function getHumanChoice() {
//     let humanChoice = prompt("Paper, Scissors or Rock?");
//     humanChoice = humanChoice.toUpperCase();
//     if (
//         humanChoice != "PAPER" &&
//         humanChoice != "SCISSORS" &&
//         humanChoice != "ROCK"
//     ) {
//         console.log("Invalid entry, check your spelling!");
//         humanChoice = getHumanChoice();
//     }
//     return humanChoice;
// }

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        //console.log("%c Draw!", "color: blue;");
        return 2;
    } else if (
        (humanChoice == "ROCK" && computerChoice == "SCISSORS") ||
        (humanChoice == "PAPER" && computerChoice == "ROCK") ||
        (humanChoice == "SCISSORS" && computerChoice == "PAPER")
    ) {
        //console.log("%c Human Wins!", "color: green");
        return 0;
    } else {
        //console.log("%c Computer Wins!", "color: red");
        return 1;
    }
}

// function playGame() {
//     let playerScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i < 5; i++) {
//         console.log(`Round ${i + 1}`);
//         console.log(
//             `Current score! Human ${playerScore} vs Computer ${computerScore}!`
//         );
//         computerChoice = getComputerChoice();
//         //humanChoice = getHumanChoice();
//         let winVal = playRound(humanChoice, computerChoice);

//         if (winVal == 0) {
//             playerScore++;
//         } else if (winVal == 1) {
//             computerScore++;
//         }

//         if (playerScore == 3 || computerScore == 3) { i = 5; }
//     }
//     if (playerScore >= 3) {
//         console.log("Human Wins");
//     } else if (playerScore == computerScore) {
//         console.log("Final Draw");
//     } else {
//         console.log("Computer Wins");
//     }

//     console.log(`Final score! Player ${playerScore} vs Computer ${computerScore}!`);
// }


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
    result = playRound(humanChoice, getComputerChoice());
});

const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", () => {
    humanChoice = "PAPER"
    result = playRound(humanChoice, getComputerChoice());
});

const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", () => {
    humanChoice = "SCISSORS"
    result = playRound(humanChoice, getComputerChoice());
});

const resultContainer = document.querySelector("#resultContainer");
const buttons = document.querySelectorAll("button");
buttons.forEach(element => {
    element.addEventListener("click", () => {
        const resultItem = document.createElement("div");
        const choiceText = document.createElement("p");
        const resultText = document.createElement("p");

        resultItem.appendChild(choiceText);
        resultItem.appendChild(resultText);

        choiceText.textContent = `Player selects ${humanChoice}, Computer selects ${computerChoice}`;
        if(result == 0){ 
            resultText.textContent = "Player Wins"; 
            playerScore++;
        }
        else if(result == 1) { 
            resultText.textContent = "Computer Wins"; 
            computerScore++;
        }
        else { 
            resultText.textContent = "Draw";
        }

        roundNumber++;
        roundTracker.textContent = `Round ${roundNumber}`;
        scoreTracker.textContent = `Player: ${playerScore} vs PC ${computerScore}`
        if(playerScore == 5){ resultText.textContent = "Player wins the Game!";}
        else if (computerScore == 5 ) { resultText.textContent = "Computer wins the Game!";}
        resultContainer.appendChild(resultItem);

    });
});