import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const divRef = document.querySelector(".gallery");
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
function onImageClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__item")) {
    return;
  }

  const lightbox = new SimpleLightbox(".gallery__item", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
