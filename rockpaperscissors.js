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

let winCount = 0;

function playRound(playerSelection, computerSelection) {
    let playerWins = 0;
    if (computerSelection == playerSelection) {
        playerWins = 0.5;
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
    winCount += playerWins;
    let output = getMessageToPlayer(playerWins, playerSelection, computerSelection);
    return output;
}

function getMessageToPlayer(gameVal, playerSelection, computerSelection) {
    let playerMessage = '';
    switch (gameVal) {
        case 0:
            playerMessage = "You Lose, " + computerSelection + " beats " + playerSelection + "!";
            break;
        case 1:
            playerMessage = "You Win, " + playerSelection + " beats " + computerSelection + "!";
            break;
        case 0.5:
            playerMessage = "It's a tie! I picked the same thing as you..."
            break;
    }
    return playerMessage;
}

function playerChoice() {
    let playerChoice = confirm("Rock! Paper! Scissors! Do you want to choose Rock?");
    if (playerChoice == true) {
        playerChoice = "rock";
    } else if (confirm("How about paper?")) {
        playerChoice = "paper";
    } else {
        alert("Well, it looks like you've chosen scissors!");
        playerChoice = "scissors";
    }
    return playerChoice;
}

function game() {
    for (let i = 0; i < 5; i++) {
        alert("Round " + i);
        let player = playerChoice();
        let computer = getComputerChoice();
        alert(playRound(player, computer));
    }
    alert("Game over! Your score is " + (winCount + 1) + " out of 5.");
}