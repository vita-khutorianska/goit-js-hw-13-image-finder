
import newService from './js/apiService';
import refs from "./js/refs";
import updateImagesMarkup from './js/updeteImagesMarkup';

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);

function searchFormSubmitHandler(event) {
    event.preventDefault();
    const form = event.currentTarget;
  newService.query = form.elements.query.value;
   
  fetchImages();
   clearImagesContainer();
    newService.resetPage();
    form.reset();
    
}

function fetchImages() {

newService.fetchImages().then(images => {
    updateImagesMarkup(images);
  });
}

function clearImagesContainer() {
 refs.imagesContainer.innerHTML = '';
}
