const cards = document.querySelector(".top__tours-cards");

function createHTML(item) {
  return `<div class="top__tours-card">
      <img src="${item.src}" alt="${item.name}">
      <p>${item.name}</p>
      <div class="cardDescriptionContainer">
        <p>${item.description}</p>
        <div class="cardDescriptionContainerFooter">
          <p>From ${item.price}</p>
          <button><a href="${item.url}" >Booking now</a></button>
        </div>
      </div>
    </div>`;
}

function addToDom(cardHTML, isPrev) {
  const template = document.createElement("template");
  template.innerHTML = cardHTML.trim();
  const cardElement = template.content.firstChild;
  if (isPrev) {
    setTimeout(() => {
      cards.insertBefore(cardElement, cards.firstChild);
    }, 500);
  } else {
    cards.appendChild(cardElement);
  }
}

export function createCard(item, isPrev) {
  const cardHTML = createHTML(item);
  addToDom(cardHTML, isPrev);
}
