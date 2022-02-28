import axios from "axios";

const BOOKS_BASE_REST_API_URL = "http://localhost:8080/books";

class BooksService {
  getAllBooks() {
    return axios.get(BOOKS_BASE_REST_API_URL);
  }

  createBooks(books) {
    return axios.post(BOOKS_BASE_REST_API_URL, books);
  }

  getBooksById(booksId) {
    return axios.get(BOOKS_BASE_REST_API_URL + "/" + booksId);
  }

  updateBooks(booksId, books) {
    return axios.put(BOOKS_BASE_REST_API_URL + "/" + booksId, books);
  }

  deleteBooks(booksId) {
    return axios.delete(BOOKS_BASE_REST_API_URL + "/" + booksId);
  }
}

export default new BooksService();
