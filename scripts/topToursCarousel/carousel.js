import { onClickNext } from "./topToursNextBtn.js";
import { onClickPrev } from "./topToursPrevBtn.js";
import { createCard } from "./createCard.js";
import { centerCard, onLoadPageFocusedCard } from "./centerCard.js";

const prevButton = document.querySelector(".top_tours_prev_btn");
const nextButton = document.querySelector(".top_tours_next_btn");
const cardNumber = document.querySelector(".card-number p");
const currentProgress = document.querySelector(".progress_bar_current");

let CurrentInx = 0;
let isAnimating = false;

function createCradsOnLoadPage(data) {
  data.slice(-2).map((item) => {
    createCard(item);
  });
  data.slice(0, 3).map((item) => {
    createCard(item);
  });
}

function pageNumber(CurrentInx) {
  currentProgress.style.width = `${17 * CurrentInx}px`;
  cardNumber.textContent = `${CurrentInx + 1}`;
}

function handleNextClick(data, allCard) {
  if (isAnimating) return;

  isAnimating = true;
  CurrentInx = (CurrentInx + 1) % data.length;

  if (CurrentInx + 2 > data.length - 1) {
    createCard(data[CurrentInx - data.length + 2]);
  } else {
    createCard(data[CurrentInx + 2]);
  }

  onClickNext(allCard);
  centerCard(allCard);
  setTimeout(() => {
    isAnimating = !isAnimating;
  }, 500);
  pageNumber(CurrentInx);
}

function handlePrevCard(data, allCard) {
  if (isAnimating) return;

  isAnimating = !isAnimating;
  CurrentInx = (CurrentInx - 1 + data.length) % data.length;

  if (CurrentInx < 0) {
    CurrentInx = data.length - 1;
  } else {
    createCard(data[(CurrentInx - 2 + data.length) % data.length], true);
  }

  onClickPrev(allCard);
  centerCard(allCard, true);
  setTimeout(() => {
    isAnimating = !isAnimating;
  }, 500);

  pageNumber(CurrentInx);
}

fetch("./db/db.json")
  .then((response) => response.json())
  .then((data) => {
    const allCard = document.getElementsByClassName("top__tours-card");

    nextButton.addEventListener("click", (e) => {
      handleNextClick(data, allCard);
    });

    prevButton.addEventListener("click", (e) => {
      handlePrevCard(data, allCard);
    });

    createCradsOnLoadPage(data);
    onLoadPageFocusedCard(allCard);
  })
  .catch((error) => {
    console.error("Ошибка загрузки JSON:", error);
  });
