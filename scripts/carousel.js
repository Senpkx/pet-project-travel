import { onClickNext } from "./topToursNextBtn.js";
import { onClickPrev } from "./topToursPrevBtn.js";
import { createCard } from "./createCard.js";
import { centerCard, onLoadPage } from "./centerCard.js";

const prevButton = document.querySelector(".top_tours_prev_btn");
const nextButton = document.querySelector(".top_tours_next_btn");
const cardNumber = document.querySelector(".card-number p");
const currentProgress = document.querySelector(".progress_bar_current");

let CurrentInx = 1;
let start = true;
let isPrev = false;
let isAnimating = false;

function pageNumber(CurrentInx, data, isPrev) {
  if (CurrentInx === 0) {
    cardNumber.textContent = `${data.length}`;
    currentProgress.style.width = "100%";
  } else {
    currentProgress.style.width = `${17 * CurrentInx}px`;
    cardNumber.textContent = `${CurrentInx}`;
  }
}

function handleNextClick(data, allCard) {
  if (isAnimating) return;

  isAnimating = true;
  isPrev = false;
  CurrentInx = (CurrentInx + 1) % data.length;

  if (start) {
    if (CurrentInx > data.length - 3) {
      if (data.length - 1 === CurrentInx) {
        start = false;
        createCard(data[data.length - CurrentInx], isPrev);
      } else {
        createCard(data[data.length - 2 - CurrentInx], isPrev);
      }
    } else {
      createCard(data[CurrentInx + 2], isPrev);
    }
  } else {
    if (CurrentInx + 2 > data.length - 1) {
      createCard(data[CurrentInx - data.length + 2], isPrev);
    } else {
      createCard(data[CurrentInx + 2], isPrev);
    }
  }
  onClickNext(allCard);
  centerCard(allCard, isPrev);
  setTimeout(() => {
    isAnimating = !isAnimating;
  }, 500);
  pageNumber(CurrentInx, data, isPrev);
}
function handlePrevCard(data, allCard) {
  if (isAnimating) return;

  isAnimating = !isAnimating;
  isPrev = true;
  CurrentInx = (CurrentInx - 1 + data.length) % data.length;

  if (CurrentInx < 0) {
    CurrentInx = data.length - 1;
  } else {
    createCard(data[(CurrentInx - 2 + data.length) % data.length], isPrev);
  }

  onClickPrev(allCard);
  centerCard(allCard, isPrev);
  setTimeout(() => {
    isAnimating = !isAnimating;
  }, 500);

  pageNumber(CurrentInx, data, isPrev);
}
function createCradsOnLoadPage(data, allCard) {
  createCard(data[data.length - 1], isPrev);
  data.forEach((item, inx) => {
    if (inx < 4) {
      createCard(item, isPrev);
    }
  });
  onLoadPage(allCard);
}

fetch("./scripts/db.json")
  .then((response) => response.json())
  .then((data) => {
    const allCard = document.getElementsByClassName("top__tours-card");

    nextButton.addEventListener("click", (e) => {
      handleNextClick(data, allCard);
    });

    prevButton.addEventListener("click", (e) => {
      handlePrevCard(data, allCard);
    });

    createCradsOnLoadPage(data, allCard);
  })
  .catch((error) => {
    console.error("Ошибка загрузки JSON:", error);
  });
