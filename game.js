//get computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let decision = Math.floor(Math.random() * choices.length);
    return choices[decision];
}

//get human choice
const buttonChoice = document.querySelectorAll("button");
const resultDisplay = document.querySelector(".result");
let gameOver = false;

buttonChoice.forEach(button => { 
    button.addEventListener('click', (e) => {
        if (gameOver) return;

        const humanSelection = e.target.innerText;
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        //display the score
        const score = document.querySelector("#score");
        score.textContent = `Score: ${humanScore} - ${computerScore}`;
        
        //determine when someone reaches 5 points
        gameLength(humanScore, computerScore);
    });
});

//scoring system
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock" ||
        humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
    }
}

function gameLength(humanScore, computerScore) {
    if (humanScore === 5 || computerScore === 5) {
        gameOver = true;

        const message = document.createElement("p");
        message.style.fontSize = "36px"
        message.style.fontWeight = "bold";
        if (humanScore === 5) {
            message.textContent = `You Win!`;
        }
        else if (computerScore === 5) {
            message.textContent = `You Lose!`;
        }

        resultDisplay.appendChild(message);
    }
}