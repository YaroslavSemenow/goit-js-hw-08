// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const galleryContainet = document.querySelector('.gallery');
const galleryItemsMarkup = createGalerryItemsMarkup(galleryItems);

galleryContainet.insertAdjacentHTML('beforeend', galleryItemsMarkup);

function createGalerryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` 
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </div>
    `;
    })
    .join('');
}

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
  gallery.options.captionsData = 'alt';
  gallery.options.captionDelay = 250;
});
