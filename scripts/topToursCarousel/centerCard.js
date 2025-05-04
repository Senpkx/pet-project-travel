const card_sizes = [
  {
    // desktop
    large: { width: "420px", height: "450px" },
    small: { width: "360px", height: "390px" },
  },
  {
    // tablet
    large: { width: "270px", height: "290px" },
    small: { width: " 250px", height: " 270px" },
  },
];

const tablet_width = 1250;

const transition_style = {
  transition: "all 0.5s ease",
};
const visible_style = { opacity: "1", visibility: "visible" };
const hidden_style = { opacity: "0", visibility: "hidden" };

function applyStyle(element, style) {
  Object.assign(element.style, style);
}

function updateCenterCard(card, isLarge) {
  const imageElemet = card.querySelector("img");
  const contentElement = card.querySelector("div");

  window.addEventListener("resize", () => {
    if (window.innerWidth < tablet_width) {
      applyStyle(imageElemet, {
        ...(isLarge ? card_sizes[1].large : card_sizes[1].small),
        ...transition_style,
      });
      applyStyle(contentElement, {
        ...(isLarge ? visible_style : hidden_style),
      });
      return applyStyle(card, {
        ...(isLarge ? { width: "270px", height: "500px" } : null),
      });
    }
    applyStyle(imageElemet, {
      ...(isLarge ? card_sizes[0].large : card_sizes[0].small),
      ...transition_style,
    });
    return applyStyle(card, {
      ...(isLarge ? { width: "420px", height: "650px" } : null),
    });
  });

  if (window.innerWidth < tablet_width) {
    applyStyle(imageElemet, {
      ...(isLarge ? card_sizes[1].large : card_sizes[1].small),
      ...transition_style,
    });
    applyStyle(contentElement, {
      ...(isLarge ? visible_style : hidden_style),
    });
    return applyStyle(card, {
      ...(isLarge
        ? { width: "270px", height: "500px" }
        : { width: "250px", height: "500px" }),
    });
  }
  applyStyle(imageElemet, {
    ...(isLarge ? card_sizes[0].large : card_sizes[0].small),
    ...transition_style,
  });

  applyStyle(contentElement, {
    ...(isLarge ? visible_style : hidden_style),
  });
}

export function centerCard(allCard, isPrev = false) {
  if (!isPrev) {
    updateCenterCard(allCard[3], true);
    updateCenterCard(allCard[2], false);
  } else {
    updateCenterCard(allCard[1], true);
    updateCenterCard(allCard[2], false);
  }
}
export function onLoadPageFocusedCard(allCard) {
  updateCenterCard(allCard[2], true);
}
