const currentForProgress = document.querySelector(".current");
const width = window.innerWidth;

export function prev(initialState, card) {
  card[initialState + 2].classList.add("first-card-translate-right");
  card[initialState + 1].animate(
    { transform: `translate(${width / 2 - 75}px, 0)` },
    { duration: 1000, easing: "ease" }
  );
  currentForProgress.style.width = `${initialState * 60 + 120}px`;
  setTimeout(() => {
    card[initialState + 2].classList.add("not-visible");
    card[initialState + 2].classList.remove("first-card-translate-right");
    card[initialState].classList.remove("not-visible");
    card[initialState].classList.add("last-card-traslate-right");
  }, 1000);
  setTimeout(() => {
    card[initialState + 2].classList.remove("last-card-traslate-right");
    card[initialState].classList.remove("last-card-traslate-right");
  }, 1500);
}
