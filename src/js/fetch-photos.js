 const apiKey = '20350247-9ee4604fddc5bc90bff046c58';
function fetchPhotos(searchQuery) {
    const url= 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=номер_страницы&per_page=12&key=apiKey'
    const options = {
        headers: {
            Autorization: apiKey,
        
       },
   }
    return fetch(url, options).then(res => res.json()).then(data => data.photos).catch(error => console.log(error));
}
export default fetchPhotos;