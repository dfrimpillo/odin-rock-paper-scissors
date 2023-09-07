function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
  
  function playRound(playerSelection) {

    const computerSelection = getComputerChoice();
    const displayResult = document.getElementById('result');
  
    if (playerSelection === computerSelection) {
        displayResult.textContent = "It's a draw";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        displayResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        displayResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
  
  const btn = document.querySelectorAll('#buttons img');

btn.forEach(button => {
  button.addEventListener('click', function() {
    const playerSelection = button.className;
    playRound(playerSelection);
  });
});