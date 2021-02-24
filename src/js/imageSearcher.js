import newService from './apiService';
import refs from "./refs";
import updateImagesMarkup from './updeteImagesMarkup';
import lightBox from './lightbox'
// import infinityScroll from './scroll'

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
 lightBox();

function fetchImages() {

newService.fetchImages().then(images => {
    updateImagesMarkup(images);
  });
}

function clearImagesContainer() {
 refs.imagesContainer.innerHTML = '';
}