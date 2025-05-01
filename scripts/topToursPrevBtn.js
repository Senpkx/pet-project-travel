export function onClickPrev(allCard) {
  Array.from(allCard).forEach((card) => {
    Object.assign(card.style, {
      transform: "translate(380px)",
      transition: "transform 0.5s ease",
    });
  });
  setTimeout(() => {
    allCard[allCard.length - 1].remove();
    Array.from(allCard).forEach((item) => {
      Object.assign(item.style, {
        transform: "translate(0)",
        transition: "transform 0s ease",
      });
    });
  }, 500);
}
