import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContaner = document.querySelector(".gallery");
const galaryCards = createGalaryCards(galleryItems);
let modalImgBig;

galleryContaner.insertAdjacentHTML("beforeend", galaryCards);

function createGalaryCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
       <div class="gallery__item">
         <a class="gallery__link" href="${original}">
           <img
             class="gallery__image"
             src="${preview}"
             data-source="${original}"
             alt="${description}"/>
         </a>
       </div>
       `;
    })
    .join("");
}

galleryContaner.addEventListener("click", conteinerGalaryClick);

function conteinerGalaryClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  console.log(evt.target.dataset.source);

  modalImgBig = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
  `);

  modalImgBig.show();
}

window.addEventListener("keydown", onEscKeyPress);
function onEscKeyPress(evt) {
  if (evt.code !== "Escape") {
    return;
  }
  {
    modalImgBig.close();
  }
  window.removeEventListener("keydown", modalImgBig);
}
