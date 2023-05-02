const playAgain = document.getElementById("play-button");
const modalBtn = document.getElementById("modal-btn");
const closeBtn = document.getElementById("close-btn");
const openBtn = document.getElementById("btn-rules");

const nextMain = () => {
  playAgain.addEventListener("click", function () {
    mainContainer.style.display = "block"; //To Change the main game display
    container.style.display = "none";
  });
  //Opening and closing Modal
  openBtn.addEventListener("click", function () {
    modalBtn.style.display = "flex";
  });

  closeBtn.addEventListener("click", function () {
    modalBtn.style.display = "none";
  });
};

nextMain();
