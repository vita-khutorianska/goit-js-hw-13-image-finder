import * as basicLightbox from 'basiclightbox'
// import refs from './refs'
// import 'basicLightbox/src/main.scss';

 const lightBox = () => {

    refs.imagesContainer.addEventListener('click', openModal)
    function openModal(event) {
        
   
        if (event.target.nodeName !== "IMG") {
                return;     
        }
        
        const { source } = event.target.dataset;
        const { alt } = event.target;
        basicLightbox.create(`
		<img width="1200" height="900" src="${source}" alt='${alt}'>
	`).show(); 
        
    }
}
    
export default  
 lightBox 
