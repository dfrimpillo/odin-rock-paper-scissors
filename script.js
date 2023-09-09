let playerScore = 0;
let computerScore = 0;
let roundWinner = '';


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
  
function playRound(playerSelection) {

    const computerSelection = getComputerChoice();
    const displayResult = document.getElementById('result');
    const displayPlayerChoice = document.getElementById('playerImg');
    const displayCompChoice = document.getElementById('compImg');

    const choiceImages = {
      rock: 'rock.png',
      paper: 'paper.png',
      scissors: 'scissors.png',
    };

    displayPlayerChoice.src = choiceImages[playerSelection];
    displayCompChoice.src = choiceImages[computerSelection];
    
    if (playerSelection === computerSelection) {
        displayResult.textContent = "It's a draw";
        roundWinner = 'tie';
        
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        displayResult.textContent = `You win!`;
        playerScore++;
        roundWinner = 'player';
        if (playerScore == 5){
          
          gameOver();
        }
    } else {
        displayResult.textContent = `You lose!`;
        computerScore++;
        roundWinner = 'computer'
        if (computerScore == 5){
          
          gameOver();
        }
    }
    scoreUpdate();

  }
  
  const btn = document.querySelectorAll('#buttons img');


function gameOver () {

  if (playerScore === 5 || computerScore === 5){
    gameWinner();
    disableButtons()
    return true;
  }
  return false;

}


function scoreUpdate(){
    const displayPlayerScore = document.getElementById('playerScore');
    const displayCompScore = document.getElementById('computerScore');


    displayPlayerScore.textContent = `Player: ${playerScore}`;
    displayCompScore.textContent = `Computer: ${computerScore}`;
}


function gameWinner() {
  const displayWinner = document.getElementById('winner')
  if (playerScore > computerScore){
    displayWinner.textContent = "Player wins";
  } else {
    displayWinner.textContent = "Computer wins";
  }
}


function clickHandler() {
  const playerSelection = this.className;
  playRound(playerSelection);
}

btn.forEach(button => {
  button.addEventListener('click', clickHandler);
});

function disableButtons() {
  btn.forEach(button => {
      button.removeEventListener('click', clickHandler);
  });
}
