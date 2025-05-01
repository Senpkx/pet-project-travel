import { prev } from "./aboudUcPrevBtn.js";
import { next } from "./aboudUcNextBtn.js";

var initialState = 0;

const nextButton = document.querySelector(".about_uc_next_btn");
const prevButton = document.querySelector(".about_uc_prev_btn");
const card = document.querySelectorAll(".about_uc-card");
let toggle = true;

nextButton.addEventListener("click", (e) => {
  if (initialState < card.length - 2) {
    if (toggle) {
      toggle = !toggle;
      initialState++;
      next(initialState, card);
    }
  }
  setTimeout(() => {
    toggle = !toggle;
  }, 2000);
});

prevButton.addEventListener("click", (e) => {
  if (initialState > 0) {
    if (toggle) {
      toggle = !toggle;
      initialState--;

      prev(initialState, card);
    }
  }
  setTimeout(() => {
    toggle = !toggle;
  }, 2000);
});
