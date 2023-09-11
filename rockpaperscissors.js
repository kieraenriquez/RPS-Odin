function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
        rand = "rock";
    } else if (rand === 1) {
        rand = "paper";
    } else {
        rand = "scissors";
    }
    return rand;
}

function playRound (playerSelection, computerSelection) {
    let playerWins = 0;
    if (computerSelection == playerSelection) {
        playerWins = 2;
    } else if (computerSelection == "rock") {
        if (playerSelection == "paper") {
            playerWins = 1;
        } else if (computerSelection == "paper") {
            if (playerSelection == "scissors") {
                playerWins = 1;
            }
        } else {
            if (playerSelection == "scissors") {
                playerWins = 1;
            }
        }
    }
    let output = getMessageToPlayer();
    return output;
}