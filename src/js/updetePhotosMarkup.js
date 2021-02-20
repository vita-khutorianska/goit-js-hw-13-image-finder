import newService from './js/apiService;'
import {searchForm, photosContainer} from "./refs";
import photosTemplate from '..templates/photos.hbs'

function updatePhotosMarkup(photos) {
    const markup = photosTemplate(photos);
  photosContainer.insertAdjacentHTML('beforeend', markup);    
}

searchForm.addEventListener('submit', searchFormSubmitHandler);

function searchFormSubmitHandler(event) {
    event.preventDefault();
    const form = event.currentTarget;
    newService.query = form.elements.query.value;
    clearPhotosContainer();
  newService.resetPage();
    form.reset();
    fetchPhotos();
}

function fetchPhotos() {

newService.fetchPhotos().then(photos => {
    updatePhotosMarkup(photos);
  });
}

function clearPhotosContainer() {
  refs.photosContainer.innerHTML = '';
}
// export default updatePhotosMarkup;
