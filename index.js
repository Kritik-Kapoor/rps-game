//Score Display Values
const compScore_value = document.getElementById("comp-score");
const yourScore_value = document.getElementById("your-score");
const scoreCards = document.querySelector(".score-cards");

//buttons
const rockButton = document.getElementById("rock");
const scissorsButton = document.getElementById("scissors");
const paperButton = document.getElementById("paper");
const playAgain = document.getElementById("play-btn");

//Containers to change display
const mainContainer = document.getElementById("main-container");
const container = document.getElementById("container");
const youPicked = document.getElementById("you-picked");
const pcPicked = document.getElementById("pc-picked");
const result = document.getElementById("result");

//modal-buttons
const modalBtn = document.getElementById("modal-btn");
const closeBtn = document.getElementById("close-btn");
const openBtn = document.getElementById("btn-rules");
const nextPage = document.getElementById("next-page");

//default score
let yourScore = localStorage.getItem("yourScore") || 0;
let compScore = localStorage.getItem("compScore") || 0;

//random function to pick computers choice
const compChoice = () => {
  const options = ["rock", "scissors", "paper"];
  const randomNumber = Math.floor(Math.random() * 3);
  return options[randomNumber];
};

//Win or loose score updation
const winner = () => {
  yourScore++;
  localStorage.setItem("yourScore", yourScore);
  yourScore_value.innerHTML = localStorage.getItem("yourScore") || 0;
  compScore_value.innerHTML = localStorage.getItem("compScore") || 0;
  result.innerText = "YOU WIN";
};

const lose = () => {
  compScore++;
  localStorage.setItem("compScore", compScore);
  compScore_value.innerHTML = localStorage.getItem("compScore") || 0;
  yourScore_value.innerHTML = localStorage.getItem("yourScore") || 0;
  result.innerText = "YOU LOST";
};

const draw = () => {
  compScore_value.innerHTML = localStorage.getItem("compScore") || 0;
  yourScore_value.innerHTML = localStorage.getItem("yourScore") || 0;
  result.innerText = "TIE UP";
};

//Game output conditions
const gameResult = (userchoice) => {
  const computer = compChoice();
  if (userchoice === computer) {
    draw();
    nextPage.style.display = "none";
  } else if (
    (userchoice === "rock" && computer === "scissors") ||
    (userchoice === "scissors" && computer === "paper") ||
    (userchoice === "paper" && computer === "rock")
  ) {
    winner();
    nextPage.style.display = "block";
  } else {
    lose();
    nextPage.style.display = "none";
  }

  updateResult(youPicked, userchoice);
  updateResult(pcPicked, computer);

  mainContainer.style.display = "none"; //To Change the main game display
  container.style.display = "flex";
};

//output update function
const updateResult = (pickedElement, choice) => {
  //removing button color classes
  pickedElement.classList.remove("rock-btn");
  pickedElement.classList.remove("scissors-btn");
  pickedElement.classList.remove("paper-btn");
  //updating button color class and image path
  pickedElement.classList.add(`${choice}-btn`);
  pickedElement.querySelector("img").src = `./assets/${choice}.png`;
  //removing and adding image centering classes
  pickedElement.querySelector("img").classList.remove("rock-left");
  pickedElement.querySelector("img").classList.remove("scissors-left");
  pickedElement.querySelector("img").classList.remove("paper-left");
  pickedElement.querySelector("img").classList.remove("rock-right");
  pickedElement.querySelector("img").classList.remove("scissors-right");
  pickedElement.querySelector("img").classList.remove("paper-right");
  if (pickedElement === youPicked) {
    pickedElement.querySelector("img").classList.add(`${choice}-left`);
  } else {
    pickedElement.querySelector("img").classList.add(`${choice}-right`);
  }
};

//main function
const main = () => {
  //selecting the users choice
  rockButton.addEventListener("click", function () {
    gameResult("rock");
  });

  scissorsButton.addEventListener("click", function () {
    gameResult("scissors");
  });

  paperButton.addEventListener("click", function () {
    gameResult("paper");
  });

  playAgain.addEventListener("click", function () {
    mainContainer.style.display = "block"; //To Change the main game display
    container.style.display = "none";
    nextPage.style.display = "none";
  });
  //Opening and closing Modal
  openBtn.addEventListener("click", function () {
    modalBtn.style.display = "flex";
  });

  closeBtn.addEventListener("click", function () {
    modalBtn.style.display = "none";
  });
};

main();
