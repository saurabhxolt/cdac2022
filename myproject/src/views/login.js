import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert2";
import my_url from "../api/my_url";
import React, { useEffect, useState } from "react";

export default function Login() {
  useEffect(() => {
    document.title = "Login";
  }, []);

  const [user, setUser] = useState({});

  //Handler of Login form
  const handlerForm = (e) => {
    checkLogin(user);
    e.preventDefault();
  };

  //Login check method
  const checkLogin = (data) => {
    axios.post(`${my_url}/loginUser`, data).then(
      (response) => {
        if (response.data.length == 0) {
          swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Wrong Credentials Entered or you have not registered yet.",
          });
        } else {
          if (response.data[0].admin == true) {
            window.location = "/adminview";
            sessionStorage.setItem("admin", "admin");
          } else {
            sessionStorage.setItem("username", response.data[0].name);
            window.location = "/welcome-home";
            const userdata = {
              name: response.data[0].name,
              email: response.data[0].email,
              city: response.data[0].city,
              phone: response.data[0].phone,
            };

            sessionStorage.setItem("userdata", JSON.stringify(userdata));
            sessionStorage.setItem("userSession", response.data[0].email);
            localStorage.setItem("user", response.data[0].email);
          }
        }
      },
      (error) => {
        console.log(error);
        swal.fire({
          icon: "error",
          title: "Oh no!",
          text: "Sorry!!!! Server is down",
        });
      }
    );
  };
  return (
    <div className="form-bg">
      <div className="container-fluid">
        <div
          className="row  align-items-center justify-content-end "
          style={{ height: "100vh" }}
        >
          <div className="col-12 col-md-6  bg-transparent p-4">
            <form onSubmit={handlerForm}>
              <div className="alert alert-dark h4">
                Already User? Login here...
              </div>

              <div className="mb-1">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Email"
                  id="email"
                  name="email"
                  onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                  }}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter Password"
                  id="password"
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                  }}
                  required
                />
              </div>

              <div>
                <input
                  type="submit"
                  value="Login to App"
                  className="btn btn-lg btn-dark w-100"
                />
              </div>

              <div className="text-center fs-4 mt-1">
                <Link to="/register" className="text-blue ">
                  Or Register Here...
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
