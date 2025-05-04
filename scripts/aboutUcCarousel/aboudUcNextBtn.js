const currentForProgress = document.querySelector(".current");
const width = window.innerWidth;

export function next(initialState, card) {
  card[initialState - 1].classList.add("first-card-traslate-left");
  card[initialState].animate(
    { transform: `translate(-${width / 2 - 75}px, 0)` },
    { duration: 1000, easing: "ease" }
  );
  currentForProgress.style.width = `${initialState * 60 + 120}px`;
  setTimeout(() => {
    card[initialState - 1].classList.add("not-visible");
    card[initialState - 1].classList.remove("first-card-traslate-left");
    card[initialState + 1].classList.remove("not-visible");
    card[initialState + 1].classList.add("last-card-traslate-left");
  }, 1000);
  setTimeout(() => {
    card[initialState + 1].classList.remove("last-card-traslate-left");
  }, 1500);
}
