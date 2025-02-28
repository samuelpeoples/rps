

function getComputerChoice() {
    let computerChoiceNum = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
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

function getHumanChoice() {
    let humanChoice = prompt("Paper, Scissors or Rock?");
    humanChoice = humanChoice.toUpperCase();
    if (
        humanChoice != "PAPER" &&
        humanChoice != "SCISSORS" &&
        humanChoice != "ROCK"
    ) {
        console.log("Invalid entry, check your spelling!");
        humanChoice = getHumanChoice();
    }
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice);
    console.log(computerChoice);
    if (humanChoice == computerChoice) {
        console.log("%c Draw!", "color: blue;");
    } else if (
        (humanChoice == "ROCK" && computerChoice == "SCISSORS") ||
        (humanChoice == "PAPER" && computerChoice == "ROCK") ||
        (humanChoice == "SCISSORS" && computerChoice == "PAPER")
    ) {
        console.log("%c Human Wins!", "color: green");
        return 0;
    } else {
        console.log("%c Computer Wins!", "color: red");
        return 1;
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        console.log(
            `Current score! Human ${playerScore} vs Computer ${computerScore}!`
        );
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        let winVal = playRound(humanChoice, computerChoice);

        if (winVal == 0) {
            playerScore++;
        } else if (winVal == 1) {
            computerScore++;
        }

        if (playerScore == 3 || computerScore == 3) { i = 5; }
    }
    if (playerScore >= 3) {
        console.log("Human Wins");
    } else if (playerScore == computerScore) {
        console.log("Final Draw");
    } else {
        console.log("Computer Wins");
    }

    console.log(`Final score! Player ${playerScore} vs Computer ${computerScore}!`);
}

