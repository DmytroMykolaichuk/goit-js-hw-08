// Add imports above this line
import  {galleryItems}  from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery');

const galleryItemEl = galleryItems.map(({ preview, original, description }) =>
    `<a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>`
).join('');

galleryEl.innerHTML = galleryItemEl;

new SimpleLightbox('.gallery a', {captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250, docClose: true});
