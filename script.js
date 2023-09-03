const choices = ["rock", "paper", "scissors"];
let playerChoice = "";
let userScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
  playerChoice = "rock";
  play();   
});

paper.addEventListener('click', () => {
  playerChoice = "paper";
  play(); 
});

scissors.addEventListener('click', () => {
  playerChoice = "scissors";
  play();
});

const results = document.querySelector('#results');
const paragraph = document.createElement('p');
const currentScore = document.createElement('p');
const finalScore = document.createElement('p');

play();

function getComputerChoice() {
  const choice = Math.floor(Math.random() * choices.length);
  return choices[choice];
}

function determineWinner(playerChoice) {
  computerChoice = getComputerChoice();
  
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
  
const result = determineWinner(playerChoice);

  if (result === "player") {
      userScore++;
    } else if (result === "computer") {
      computerScore++;
    }
  console.log("result: " + result);
  

  console.log("Your score: " + userScore);
  console.log("Computer's score: " + computerScore);
  paragraph.textContent = "Your score: " + userScore +  
  ' Computers score: ' + computerScore;

  if (userScore > computerScore) {
    console.log("You are the winner!");  
    currentScore.textContent = "You won that round!";
  }
  else if (computerScore > userScore) {
    console.log("The computer wins!");    
    currentScore.textContent = "The computer won that round!";
  }
  else {
    console.log("It's a tie!");    
    currentScore.textContent = "Round tied!";
  }
  results.appendChild(paragraph);
  results.appendChild(currentScore);
}


