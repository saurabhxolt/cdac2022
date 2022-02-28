import { Carousel, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import HeaderNavigation from "./header-navigation";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BooksService from "./BooksService";

const WelcomeHome = () => {
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

  return (
    <>
      <HeaderNavigation />
      <div className="container" style={{ height: "auto" }}>
        <h2 className="text-center"> Books List </h2>
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
                  <Link
                    className="btn btn-info"
                    to={`/edit-employee/${book.id}`}
                  >
                    Buy
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>{" "}
      <Footer />
    </>
  );
};

export default WelcomeHome;
