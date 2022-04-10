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
const scores = document.querySelectorAll('.score');
scores.forEach(score => score.textContent = 0);

// Get click even for rock, paper, scissors buttons
const buttons = document.querySelectorAll('.options > button');
let playerSelection = "";
const result = document.querySelector('.result');
let resultText = ""; 

buttons.forEach(button => button.addEventListener('click', () => {
    playerSelection = button.className;
    resultText = playRound(playerSelection, computerPlay());
    // Display result of round
    result.textContent = resultText;
    // TODO: display updates scores
    game();
}));

// TODO
// Function game() updates scores and ends game when a player reaches 5 points
// Currently code only displayer through console, need to change all console.logs to 
// DOM methods later
let playerScore = 0;
let computerScore = 0;
const divPlayer = document.querySelector('.player.score');
const divComputer = document.querySelector('.computer.score');

function game(){
    if(resultText === "Tie"){
        console.log("It's a tie.");
    }else if(result === false){
        console.log("Invalid input, try again.");
    }else{
        let resultCheck = resultText.slice(4, 5);
        if(resultCheck === "w"){
            console.log(resultText);
            playerScore++;
            divPlayer.textContent = playerScore;
        }else{
            console.log(resultText);
            computerScore++;
            divComputer.textContent = computerScore;
        }
    }
    if(playerScore === 5){
        console.log(`GG you won!.`);
        reset();
    }else if(computerScore === 5){
        console.log(`Game over, you lost!.`);
        reset();
    }
}

// Function reset()
/* Resets the game when clicked, scores are set to 0
*/
const pAgainBtn = document.createElement('button');
const options = document.querySelector('.options');

function reset(){
    // Create element "Play Again" button
    // Replaces div.options with button that says Play Again
    // After click this button, this button is replaced with old options buttons
    pAgainBtn.innerHTML = "Play Again";
    options.hidden = true;
    const divContainer = document.querySelector('.container');
    divContainer.appendChild(pAgainBtn);

    const newBtn = document.createElement('button');
        newBtn.innerText  = "New Button";
    // Reset scores back to 0
    pAgainBtn.addEventListener('click', () =>{
        playerScore = 0;
        computerScore = 0;
        scores.forEach(score => score.textContent = 0);
        options.hidden = false;
        pAgainBtn.remove();
    })
   
}
