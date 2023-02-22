import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContaner = document.querySelector('.gallery');
const galaryCards = createGalaryCards(galleryItems);

galleryContaner.insertAdjacentHTML('beforeend', galaryCards);


function createGalaryCards(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
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
    }).join('');
}

galleryContaner.addEventListener('click', conteinerGalaryClick);

function conteinerGalaryClick(evt){
    evt.preventDefault();

    if (!evt.target.classList.contains('gallery__image')) {
    return;
   }

    console.log(evt.target.src);
}


// import { galleryItems } from './gallery-items.js';
// const galleryContainerRef = document.querySelector(".gallery");
// const imagesMarkup = galleryItems.map(({ preview, original, description }) => {
//       return `<div class="gallery__item">
//       <a class="gallery__link" href="${original.value}">
//         <img
//           class="gallery__image"
//           src="${preview}"
//           data-source="${original}"
//           alt="${description}"
//         />
//       </a>
//     </div>`;
//     })
//     .join("");
  
// console.log(imagesMarkup);
// galleryContainerRef.insertAdjacentHTML("beforeend", imagesMarkup);
// galleryContainerRef .addEventListener('click', onContainerClick);

// function onContainerClick(e) {
//       e.preventDefault();

//     if (!e.target.classList.contains('gallery__image')) {
//         return;
//     }
//     console.log(e.target);
// }