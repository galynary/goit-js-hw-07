import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const divRef = document.querySelector(".gallery");
const addGallaryMarkup = createGallaryMarkup(galleryItems);
divRef.innerHTML = addGallaryMarkup;
function createGallaryMarkup(items) {
  return items
    .map(
      (item) =>
        `<a class="gallery__item"
      href ="${item.original}";
      >
        <img
          class="gallery__image"
          src="${item.preview}"
         alt="${item.description}"
        />
      </a>
    `
    )
    .join("");
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
