const scissorsInput = document.querySelector(".scissorsInput");
const paperInput = document.querySelector(".paperInput");
const rockInput = document.querySelector(".rockInput");

const rockDiv = document.querySelector(".rock");
const paperDiv = document.querySelector(".paper");
const scissorsDiv = document.querySelector(".scissors");
const writeText = document.querySelector(".writeText");
const writeTextGood = document.querySelector(".writeTextGood");
const hero = document.querySelector(".hero");

function startGame() {
  // console.log("game started successfully");
  const randomValue = Math.floor(Math.random() * 3) + 1;
  // console.log(randomValue);
  switch (randomValue) {
    case 1:
      paperInput.value = "rock";
      scissorsInput.value = "rock";

      break;
    case 2:
      rockInput.value = "paper";
      scissorsInput.value = "paper";
      break;
    case 3:
      paperInput.value = "scissors";
      rockInput.value = "scissors";
      break;

    default:
      break;
  }
}

startGame();

function handleRock() {
  hero.classList.add("dnone");
  if (rockInput.value == "rock") {
    // console.log("rock found");
    writeTextGood.innerText = "YOU WIN";
  } else {
    // console.log("ad");
    rockDiv.classList.add("failed");
    writeText.innerText = "YOU LOSE. Paper beats Rock";
  }
}
function handlePaper() {
  hero.classList.add("dnone");
  if (paperInput.value == "paper") {
    // console.log("paper found");
    writeTextGood.innerText = "YOU WIN";
  } else {
    // console.log("ad");
    paperDiv.classList.add("failed");
    writeText.innerText = "YOU LOSE. Scissors beats Paper";
  }
}
function handleScissors() {
  hero.classList.add("dnone");
  if (scissorsInput.value == "scissors") {
    // console.log("scissors found");
    writeTextGood.innerText = "YOU WIN";
  } else {
    // console.log("ad");
    scissorsDiv.classList.add("failed");
    writeText.innerText = "YOU LOSE. Rock beats Scissors";
  }
}
