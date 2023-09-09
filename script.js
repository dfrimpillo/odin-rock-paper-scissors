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
    displayPlayerScore.textContent = `Player: ${playerScore}`;
    displayCompScore.textContent = `Computer: ${computerScore}`;
}


function gameWinner() {
  if (playerScore > computerScore){
    displayWinner.textContent = "Player wins, click the reset button to play again";
  } else {
    displayWinner.textContent = "Computer wins, click the reset button to play again";
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

const restart = document.getElementById('reset');

restart.addEventListener('click', function() {
  playerScore = 0;
  computerScore = 0;
  roundWinner = '';

  displayResult.textContent = '';
  displayWinner.textContent = '';

  displayPlayerChoice.src = '';
  displayCompChoice.src = '';


  displayPlayerScore.textContent = 'Player: 0';
  displayCompScore.textContent = 'Computer: 0';

  btn.forEach(button => {
    button.addEventListener('click', clickHandler);
  });
});

const displayResult = document.getElementById('result');
const displayWinner = document.getElementById('winner');
const displayPlayerChoice = document.getElementById('playerImg');
const displayCompChoice = document.getElementById('compImg');
const displayPlayerScore = document.getElementById('playerScore');
const displayCompScore = document.getElementById('computerScore');