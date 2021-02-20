// import { set } from "core-js/fn/dict";

 const apiKey = '20350247-9ee4604fddc5bc90bff046c58';

export default {
    searchQuery: "",
    page = 1,
    fetchiImages(searchQuery) {
    const url= `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${this.page}&per_page=12&key=apiKey`
    const options = {
        headers: {
            Autorization: apiKey,
        
       },
   }
        return fetch(url, options).then(res => res.json()).then(({ images }) => {
            this.page += 1;
            return images; }).catch(error => console.log(error));
    },
    resetPage() {
        this.page = 1;
    },
    get query() {
        return this.searchQuery;
    },
    set query (value) {
        this.searchQuery = value;
    }

};