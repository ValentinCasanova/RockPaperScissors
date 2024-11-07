const choice = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const computerChoice = Math.floor(Math.random() * 3);
    return choice[computerChoice]
}

function playRound(humanChoice, computerChoice){
    console.log(`Human = ${humanChoice} Computer = ${computerChoice}`);
    humanChoice = humanChoice.toLowerCase(); // Ensure that human's choice is lowercase

    if (computerChoice === "rock") {
        if (humanChoice === "paper") {
            humanScore++;
            displayResult("You win! Paper beats Rock");
        } else if (humanChoice === "scissors") {
            computerScore++;
            displayResult("You lose! Rock beats Scissors");
        } else if (humanChoice === "rock") {
            displayResult("It's a tie!");
        }
    } else if (computerChoice === "paper") {
        if (humanChoice === "scissors") {
            humanScore++;
            displayResult("You win! Scissors beat Paper");
        } else if (humanChoice === "rock") {
            computerScore++;
            displayResult("You lose! Paper beats Rock");
        } else if (humanChoice === "paper") {
            displayResult("It's a tie!");
        }
    } else if (computerChoice === "scissors") {
        if (humanChoice === "rock") {
            humanScore++;
            displayResult("You win! Rock beats Scissors");
        } else if (humanChoice === "paper") {
            computerScore++;
            displayResult("You lose! Scissors beat Paper");
        } else if (humanChoice === "scissors") {
            displayResult("It's a tie!");
        }
    }
}

function displayResult(result){
    const lastRoundResult = document.querySelector(".results > #result");
    const score = document.querySelector(".results > #score");
    score.textContent = `Player Score: ${humanScore} 
    - Computer Score: ${computerScore}`
    lastRoundResult.textContent = result;
    if(humanScore == 5){
        lastRoundResult.textContent = "You win this game!";
        humanScore = 0;
        computerScore = 0;
    }else if(computerScore == 5){
        lastRoundResult.textContent = "You lost this game!";
        humanScore = 0;
        computerScore = 0;
    }
}
const rockButton = document.querySelector("#rockButton");
const scissorsButton = document.querySelector("#scissorsButton");
const paperButton = document.querySelector("#paperButton");

rockButton.addEventListener("click", () => 
    playRound('rock', getComputerChoice()));
scissorsButton.addEventListener("click", () => 
    playRound('scissors', getComputerChoice()));
paperButton.addEventListener("click", () => 
    playRound('paper', getComputerChoice()));
