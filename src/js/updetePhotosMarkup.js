import newService from './js/apiService;'
import {searchForm, imagesContainer} from "./refs";
import imagesTemplate from '..templates/images.hbs'

function updateImagesMarkup(images) {
    const markup = imagesTemplate(images);
  imagesContainer.insertAdjacentHTML('beforeend', markup);    
}

searchForm.addEventListener('submit', searchFormSubmitHandler);

function searchFormSubmitHandler(event) {
    event.preventDefault();
    const form = event.currentTarget;
    newService.query = form.elements.query.value;
    clearImagesContainer();
  newService.resetPage();
    form.reset();
    fetchImages();
}

function fetchImages() {

newService.fetchImages().then(images => {
    updateImagesMarkup(images);
  });
}

function clearImagesContainer() {
  refs.imagesContainer.innerHTML = '';
}
// export default updateimagesMarkup;
