//get computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let decision = Math.floor(Math.random() * choices.length);
    return choices[decision];
}

//get human choice
function getHumanChoice() {
    let decision = prompt("Choose 'rock', 'paper' or 'scissors'");

    return decision;
}

//scoring system
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("Tie");
    }

    else if (humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper")
    {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);

        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock" ||
        humanChoice === "rock" && computerChoice === "paper")
    {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);

        computerScore++;
    }

    return humanChoice;
}



// playRound(humanSelection, computerSelection);

//play game
function playGame() {
    let computerSelection;
    let humanSelection;

    for (let i = 0; i < 5; i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log(`The final score is ${humanScore} - ${computerScore}`);

    return;
}

playGame();