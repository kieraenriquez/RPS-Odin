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

// DEBUG:
    let choice = getComputerChoice();
    console.log(choice);