function computerPlay(){
    let computerSelection = "";
    let x = randomInteger(1, 99);

    if(x <= 33){
        return "rock";
    }else if(x > 33 && x <= 66){
        return "paper";
    }else{
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){

}

let randomInteger = (min, max) => Math.floor(Math.random() * (max-min + 1)) + min;

