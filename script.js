
let numberOfRounds = 5;

function game(numberOfRounds) {

    for (let i = 1; i <= numberOfRounds; i++) {

        const playerSelection  = prompt ("Choose: Rock, Paper or Scissors?");
        console.log(`Player choice: ${playerSelection}`);
        
        function getComputerChoice(){
           const choices = ["Rock", "Paper", "Scissors"];
           const randomIndex = Math.floor(Math.random() * 3);
           return choices[randomIndex];
        }
        
        
        
        const computerSelection = getComputerChoice();
        
        console.log(`Computer choice: ${computerSelection}`);
        
        if (playerSelection === null) {
            console.log("Input error!");
            break;
        } else if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
            console.log("It's a draw");
        } else if (
            (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") ||
            (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") ||
            (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper")
        ) {
          console.log(`You win! ${playerSelection} beats ${computerSelection}`);  
        } else {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        }

    }
}

game(numberOfRounds);

alert ("Play another round!");