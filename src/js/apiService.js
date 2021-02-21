// import { set } from "core-js/fn/dict";

 const apiKey = '20350247-9ee4604fddc5bc90bff046c58';

export default {

    searchQuery: "",
    page: 1,
    perPage: 12,
    fetchImages() {
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=${this.perPage}&key=${apiKey}`;
//     const options = {
//     headers: {
//       Authorization: apiKey,
//     },
//   }
        return fetch(url).then(res => res.json()).then(({ hits}) => {
            this.page += 1;
            return hits; }) 
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