const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = Math.floor(Math.random() * choices.length);
  //console.log(choice);
  return choices[choice];
}

function determineWinner(computerChoice, playerChoice) {
  computerChoice = getComputerChoice();
  playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();

  if (playerChoice === computerChoice) {
    console.log("Player has: " + playerChoice);
    console.log("Computer has: " + computerChoice);
    console.log("It's a tie!");
    return "tie";
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    console.log("Player has: " + playerChoice);
    console.log("Computer has: " + computerChoice);
    console.log("Computer wins!");
    return "computer";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    console.log("Player has: " + playerChoice);
    console.log("Computer has: " + computerChoice);
    console.log("You win!");
    return "player";
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    console.log("Player has: " + playerChoice);
    console.log("Computer has: " + computerChoice);
    console.log("Computer wins!");
    return "computer";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    console.log("Player has: " + playerChoice);
    console.log("Computer has: " + computerChoice);
    console.log("You win!");
    return "player";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    console.log("Player has: " + playerChoice);
    console.log("Computer has: " + computerChoice);
    console.log("You win!");
    return "player";
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    console.log("Player has: " + playerChoice);
    console.log("Computer has: " + computerChoice);
    console.log("Computer wins!");
    return "computer";
  }
}

function play() {
  let userScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const result = determineWinner();

    if (result === "player") {
      userScore++;
    } else if (result === "computer") {
      computerScore++;
    }
    console.log("result: " + result);
  }

  console.log("Your score: " + userScore);
  console.log("Computer's score: " + computerScore);
}

play();
