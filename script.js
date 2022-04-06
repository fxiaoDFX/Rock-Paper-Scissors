function computerPlay(){
    let x = randomInteger(1, 99);

    if(x <= 33){
        return "rock";
    }else if(x > 33 && x <= 66){
        return "paper";
    }else{
        return "scissors";
    }
}

let randomInteger = (min, max) => Math.floor(Math.random() * (max-min + 1)) + min;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection) {
        return "Tie";
    }else if(playerSelection === "rock" && computerSelection === "paper"){
        return "You lose! Paper beats rock.";
    }else if(playerSelection === "rock" && computerSelection === "scissors"){
        return "You win! Rock beats scissors.";
    }else if(playerSelection === "paper" && computerSelection === "rock"){
        return "You win! Paper beats rock.";
    }else if(playerSelection === "paper" && computerSelection === "scissors"){
        return "You lose! Scissors beats paper.";
    }else if(playerSelection === "scissors" && computerSelection ==="rock"){
        return "You lose! Rock beats scissors.";
    }else if(playerSelection === "scissors" && computerSelection === "paper"){
        return "You win! Scissors beats paper.";
    }else {
        return false;
    }
}

const buttons = document.querySelectorAll('button');
function logText(e){
    console.log(this.classList.value);
}
buttons.forEach(button => {
    button.addEventListener('click', logText);
});

// Must change this function to use buttons 
/* function game() {
    let i = 0;
    let valid = true;
    let playerSelection = "";
    let result = "";
    let playerWins = 0;
    let computerWins = 0;

    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => button.addEventListener('click', game));

    // Remove play to five limit, now end the game when a player scores 5 wins
    while (i < 5) {
        playerSelection = prompt("Choose one: Rock, Paper, or Scissors.");
        result = playRound(playerSelection, computerPlay());
        if (result === "Tie") {
            console.log("It's a tie.");
            i++;
        } else if (result === false) {
            console.log("Invalid input, try again.");
        } else {
            let resultCheck = result.slice(4, 5);
            if (resultCheck === "w") {
                console.log(result);
                playerWins++;
            } else {
                console.log(result);
                computerWins++;
            }
            i++;
        }
        valid = true;
    }
    if (playerWins > computerWins) {
        console.log("Congrats, you win!");
    } else if (playerWins === computerWins) {
        console.log("No contest.");
    } else {
        console.log("You have been defeated!");
    }
    console.log("You: " + playerWins + "\nComputer: " + computerWins);
}

game(); 
*/