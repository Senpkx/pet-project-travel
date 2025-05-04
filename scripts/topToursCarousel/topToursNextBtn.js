export function onClickNext(allCard) {
  if (window.innerWidth < 1250) {
    Array.from(allCard).forEach((card) => {
      Object.assign(card.style, {
        transform: "translate(-260px)",
        transition: "transform 0.5s ease",
      });
    });
    setTimeout(() => {
      allCard[0].remove();
      Array.from(allCard).forEach((item) => {
        Object.assign(item.style, {
          transform: "translate(0)",
          transition: "transform 0s ease",
        });
      });
    }, 500);
  } else {
    Array.from(allCard).forEach((card) => {
      Object.assign(card.style, {
        transform: "translate(-380px)",
        transition: "transform 0.5s ease",
      });
    });
    setTimeout(() => {
      allCard[0].remove();
      Array.from(allCard).forEach((item) => {
        Object.assign(item.style, {
          transform: "translate(0)",
          transition: "transform 0s ease",
        });
      });
    }, 500);
  }
}
