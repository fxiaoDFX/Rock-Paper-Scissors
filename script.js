function computerPlay() {
    let x = randomInteger(1, 99);

    if (x <= 33) {
        return "rock";
    } else if (x > 33 && x <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

let randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats paper.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats paper.";
    } else {
        return false;
    }
}

// Get reference to score and then set scores to 0
let playerScore = 0;
let computerScore = 0;
const scores = document.querySelectorAll('.score');
scores.forEach(score => score.insertAdjacentText('beforebegin', 0));

// Get click even for rock, paper, scissors buttons
const buttons = document.querySelectorAll('button');
let playerSelection = "";

const result = document.querySelector('.result');

buttons.forEach(button => button.addEventListener('click', () => {
    playerSelection = button.className;
    let str = playRound(playerSelection, computerPlay());
    // Display result of round
    result.textContent = str;
    // Update score
}));

// TODO
// Function game() updates scores and ends game when a player reaches 5 points
function game(){
    return 0;
}
   