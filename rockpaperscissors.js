function getComputerChoice() {
    let rand = Math.random(0, 2);
    switch (rand) {
        case 0:
        rand = "rock";
        break;
        case 1:
        rand = "paper";
        break;
        case 2:
        rand = "scissors";
        break;
    }
    return rand;
}

// DEBUG:
console.log(getComputerChoice);