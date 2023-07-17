import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector(`.gallery`);

const galleryListArr = galleryItems.map(image => {
  return `<li class="gallery__item">
   <a class="gallery__link" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
   </a>
</li>`;
});

const listTemplate = `${galleryListArr.join(``)}`;

galleryEl.insertAdjacentHTML(`beforeend`, listTemplate);

const lightbox = new SimpleLightbox(`.gallery a`, {
  captionsData: 'alt',
  captionDelay: 250,
});
