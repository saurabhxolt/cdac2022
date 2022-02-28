import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BooksService from "./BooksService";

const AddBooksComponent = () => {
  const [bookName, setBooksName] = useState("");
  const [autherName, setAutherName] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrUpdateBooks = (e) => {
    e.preventDefault();

    const books = { bookName, autherName, price };
    console.log(id);
    if (id) {
      BooksService.updateBooks(id, books)
        .then((response) => {
          navigate("/adminview");
          alert("Your Book has Updated !!! ");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      BooksService.createBooks(books)
        .then((response) => {
          console.log(response.data);
          alert("Your Book has Added !!! ");
          navigate("/adminview");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    BooksService.getBooksById(id)
      .then((response) => {
        setBooksName(response.data.bookName);
        setAutherName(response.data.autherName);
        setPrice(response.data.price);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (id) {
      return <h2 className="text-center">Update Books</h2>;
    } else {
      return <h2 className="text-center">Add books</h2>;
    }
  };

  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label"> Book Name :</label>
                  <input
                    type="text"
                    placeholder="Enter book name"
                    name="bookName"
                    className="form-control"
                    required
                    value={bookName}
                    onChange={(e) => setBooksName(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Author Name :</label>
                  <input
                    type="text"
                    placeholder="Enter author name"
                    name="autherName"
                    className="form-control"
                    value={autherName}
                    onChange={(e) => setAutherName(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Price :</label>
                  <input
                    type="text"
                    placeholder="Enter price"
                    name="price"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  ></input>
                </div>

                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateBooks(e)}
                >
                  Submit{" "}
                </button>
                <Link to="/adminview" className="btn btn-danger">
                  {" "}
                  Cancel{" "}
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBooksComponent;
