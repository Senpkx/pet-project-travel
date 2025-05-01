const card_sizes = {
  large: { width: "420px", height: "450px" },
  small: { width: "360px", height: "390px" },
};

const transition_style = { transition: "all 0.5s ease" };
const visible_style = { opacity: "1", visibility: "visible" };
const hidden_style = { opacity: "0", visibility: "hidden" };

function applyStyle(element, style) {
  Object.assign(element.style, style);
}

function updateCenterCard(card, isLarge) {
  const imageElemet = card.querySelector("img");
  const contentElement = card.querySelector("div");

  applyStyle(imageElemet, {
    ...(isLarge ? card_sizes.large : card_sizes.small),
    ...transition_style,
  });

  applyStyle(contentElement, {
    ...(isLarge ? visible_style : hidden_style),
  });
}

export function centerCard(allCard, isPrev) {
  if (!isPrev) {
    updateCenterCard(allCard[3], true);
    updateCenterCard(allCard[2], false);
  } else {
    updateCenterCard(allCard[1], true);
    updateCenterCard(allCard[2], false);
  }
}
export function onLoadPage(allCard) {
  updateCenterCard(allCard[2], true);
}
