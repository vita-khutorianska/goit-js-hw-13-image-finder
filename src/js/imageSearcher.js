import newService from './apiService';
import refs from "./refs";
import updateImagesMarkup from './updeteImagesMarkup';
import lightBox from './lightbox';
import infinityScroll from './scroll';
import { info, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/BrightTheme.css';

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);


function searchFormSubmitHandler(event) {
   scrollScr = false;
    event.preventDefault();
    const form = event.currentTarget;
  newService.query = form.elements.query.value;
    if (newService.query === '') {
        error({
            text: "enter querly",
            delay: 200
        });
    }
         if (newService.query.length  <= 2) {
      info ({
      text: ' Put more letters'
    });
      
        refs.imagesContainer.innerHTML = '';
        return
  }
   console.log('newService.query',  refs.imagesContainer.innerHTML)
    refs.imagesContainer.innerHTML = '';   
   newService.resetPage();
  fetchImages();
    form.reset();
 
}
 lightBox();
let scrollScr = false;

function fetchImages() {

newService.fetchImages().then(images => {
  updateImagesMarkup(images);
   if (refs.imagesContainer.childNodes.length > 0) {
            if (scrollScr) {
                window.scrollTo(
                    {
                        top: document.documentElement.scrollTop + document.documentElement.clientHeight,
                        behavior: 'smooth'
                    }
                );
            }
                 
        }          
        scrollScr = true;
        infinityScroll();       
         })
     }

export default fetchImages;
