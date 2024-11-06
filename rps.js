const choice = ["rock", "paper", "scissor"];
let humanScore = 0;
let computerScore = 0;

// Generate Computers move
function getComputerChoice(){
    const computerChoice = Math.floor(Math.random() * 10 % 3);
    return choice[computerChoice]
}

// Extract Human's move
function getHumanChoice(){
    const message = "Rock, Paper, Or Scissors?";
    return move = prompt(message);
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (computerChoice === "rock") {
        if (humanChoice === "paper") {
            console.log("You win! Paper beats Rock");
            humanScore++;
        } else if (humanChoice === "scissors") {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        } else if (humanChoice === "rock") {
            console.log("It's a tie!");
        }
    } else if (computerChoice === "paper") {
        if (humanChoice === "scissors") {
            console.log("You win! Scissors beat Paper");
            humanScore++;
        } else if (humanChoice === "rock") {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        } else if (humanChoice === "paper") {
            console.log("It's a tie!");
        }
    } else if (computerChoice === "scissors") {
        if (humanChoice === "rock") {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        } else if (humanChoice === "paper") {
            console.log("You lose! Scissors beat Paper");
            computerScore++;
        } else if (humanChoice === "scissors") {
            console.log("It's a tie!");
        }
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("Your Score " + humanScore + " Computer Score " + computerScore);
}

playGame();
