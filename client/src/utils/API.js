import axios from "axios";

//get all the saved books from api
export const getSavedBooks = function () {
    return axios.get("/api/books");
};

//will save the book to our api
export const saveBook = function (bookData) {
    return axios.post('/api/books', bookData);
};

//wil delete specific book by its id
export const deleteBook = function (bookId) {
    return axios.delete(`/api/books/${bookId}`);
};

// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const searchGoogleBooks = function (query) {
    return axios.get('https://www.googleapis.com/books/v1/volumes', { params: { q: query } });
};