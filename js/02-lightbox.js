// import { galleryItems } from "./gallery-items.js";
// // Change code below this line

// console.log(galleryItems);

// const galleryContaner = document.querySelector(".gallery");
// const galaryCards = createGalaryCards(galleryItems);

// galleryContaner.insertAdjacentHTML("beforeend", galaryCards);

// function createGalaryCards(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `
//        <div class="gallery__item">
//         <a class="gallery__item"
//         href="${original}">
//         <img class="gallery__image"
//         data-lightbox
//         src="${preview}"
//         alt="${description}" /></a>
//        </div>
//        `;
//     })
//     .join("");
// }

import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const galleryCards = createGalleryCards(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryCards);

function createGalleryCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a href="${original}" data-lightbox="image-1">
            <img class="gallery__image" src="${preview}" alt="${description}" data-lightbox="image-1" />
          </a>
        </div>
      `;
    })
    .join("");
}

const gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
