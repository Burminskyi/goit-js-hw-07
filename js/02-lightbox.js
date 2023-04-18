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
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
