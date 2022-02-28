import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BooksService from "./BooksService";
import HeaderNavigation from "./header-navigation";
import Footer from "./Footer";

const ListBooksComponent = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = () => {
    BooksService.getAllBooks()
      .then((response) => {
        setBooks(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteBooks = (bookId) => {
    BooksService.deleteBooks(bookId)
      .then((response) => {
        getAllBooks();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <HeaderNavigation />
      <div className="container">
        <h2 className="text-center"> Books List </h2>
        <Link to="/add-book" className="btn btn-primary mb-2">
          {" "}
          Add Books{" "}
        </Link>
        <table className="table table-bordered table-striped">
          <thead>
            <th> Book Id </th>
            <th> Book Name </th>
            <th> Book Author Name </th>
            <th> Price </th>
            <th> Actions </th>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td> {book.id} </td>
                <td> {book.bookName} </td>
                <td>{book.autherName}</td>
                <td>{book.price}</td>
                <td>
                  <Link className="btn btn-info" to={`/add-book/${book.id}`}>
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteBooks(book.id)}
                    style={{ marginLeft: "10px" }}
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default ListBooksComponent;
