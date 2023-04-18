import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

const itemsMarkup = createItemsMarkup(galleryItems);

galleryList.innerHTML = itemsMarkup;

function createItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

galleryList.addEventListener("click", openPicture);

function openPicture(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const selectedPicture = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
    <img src="${selectedPicture}" width="800" height="600">
`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );
  instance.show();

  function onEscKeyPress(event) {
    if (event.code !== "Escape") return;
    instance.close();
  }
}
