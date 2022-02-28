import { Link } from "react-router-dom";
import "./register.css";
import axios from "axios";
import { useEffect, useState } from "react";
import my_url from "../api/my_url";
import swal from "sweetalert2";

export default function Register() {
  useEffect(() => {
    document.title = "Registration Page";
  }, []);

  let [uname, setUname] = useState("");
  let [ucity, setUcity] = useState("");
  let [uphone, setUphone] = useState("");
  let [uemail, setUemail] = useState("");
  let [upassword, setUpassword] = useState("");
  let [uconpassword, setUconpassword] = useState("");

  let unameinp = (e) => setUname(e.target.value);
  let ucityinp = (e) => setUcity(e.target.value);
  let uphoneinp = (e) => setUphone(e.target.value);
  let uemailinp = (e) => setUemail(e.target.value);
  let upasswordinp = (e) => setUpassword(e.target.value);
  let uconpasswordinp = (e) => setUconpassword(e.target.value);

  let user = {
    name: uname,
    city: ucity,
    phone: uphone,
    email: uemail,
    password: upassword,
    conpassword: uconpassword,
  };
  //Registration data
  const registerUser = (data) => {
    axios.post(`${my_url}/registerUser`, data).then((response) => {
      swal
        .fire({
          icon: "success",
          title: "Hurreh!!!",
          text: "Thank You For Registering with us!!!",
        })
        .then(function () {
          window.location = "/";
        });

      clearFields();
    });
  };
  //Email verification
  const verify = (data) => {
    axios.post(`${my_url}/findbyemail`, data).then((response) => {
      console.log(response);
      if (response.data.length == 0) {
        registerUser(user);
        clearFields();
      } else {
        //alert("User already Registered with us");
        swal.fire({
          icon: "error",
          title: "Oh Oh !!!",
          text: "This Email is already Registered with Us!!!",
        });
      }
    });
  };

  function clearFields() {
    setUname("");
    setUcity("");
    setUphone("");
    setUemail("");
    setUpassword("");
    setUconpassword("");

    document.getElementById("tnc").checked = false;
  }

  let validate = () => {
    if (
      uname.trim() === "" ||
      ucity === "" ||
      uphone.trim() === "" ||
      uemail.trim() === "" ||
      upassword.trim() === "" ||
      uconpassword.trim === ""
    ) {
      swal.fire("All fields are  required");
    } else if (
      uname.search(/^[a-zA-Z ]*$/) < 0 ||
      uname.length < 3 ||
      uname.length > 40
    ) {
      document.getElementById("name").classList.add("is-invalid");
      alert(
        "Name should contain characters only and must have length of minimum 3 and maximum 30"
      );
    } else if (ucity === "") {
      document.getElementById("city").classList.add("is-invalid");
    } else if (uphone === "" || uphone.search(/^[789][0-9]{9}$/) < 0) {
      document.getElementById("phone").classList.add("is-invalid");
      alert("Enter valid Mobile Number");
    } else if (
      uemail === "" ||
      uemail.search(/^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) < 0
    ) {
      document.getElementById("email").classList.add("is-invalid");
      alert("Enter valid Email ID");
    } else if (
      upassword === "" ||
      upassword.search(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
      ) < 0 ||
      upassword.length < 6
    ) {
      document.getElementById("password").classList.add("is-invalid");
      alert(
        "Enter a password with atleast 8 characters and must include 1 capital, 1 number and 1 special character"
      );
      alert(
        "Enter a password with atleast 8 characters and must include 1 capital, 1 number and 1 special character"
      );
    } else if (upassword !== uconpassword) {
      document.getElementById("conpassword").classList.add("is-invalid");
      alert("Password mismatch.");
    } else if (document.getElementById("tnc").checked == false) {
      document.getElementById("tnc").classList.add("is-invalid");
      alert("Please accept terms and conditions.");
    } else {
      verify(user);
    }
  };

  return (
    <div className="container-fluid form-r">
      <div className="row bg-transparent justify-content-center align-items-center">
        <div className="col-12 col-md-8  bg-dark bg-opacity-50 in p-1 rounded">
          <form className="justify-content-center">
            <div className="alert alert-dark h4">
              Register to Purchase/View Books
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 bg-dark bg-opacity-50 in p-4 rounded">
                <label for="name" className="form-label  text-white fs-5">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Full name"
                  onChange={unameinp}
                  value={uname}
                  required
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 bg-dark bg-opacity-50 in p-4 rounded">
                <label for="city" className="form-label text-white fs-5">
                  City
                </label>
                <select
                  id="city"
                  className="form-select"
                  name="city"
                  onChange={ucityinp}
                  value={ucity}
                  required
                >
                  <option value=""></option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Pune">Pune</option>
                  <option value="Banglore">Amravati</option>
                  <option value="Hyderabad">Kolhapur</option>
                  <option value="Hyderabad">Dhule</option>
                </select>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 bg-dark bg-opacity-50 in p-4 rounded">
                <label for="phone" className="form-label text-white fs-5">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Without +91"
                  onChange={uphoneinp}
                  value={uphone}
                  required
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 bg-dark bg-opacity-50 in p-4 rounded">
                <label for="email" className="form-label text-white fs-5">
                  Email-ID
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Eg:-abc@gmail.com"
                  onChange={uemailinp}
                  value={uemail}
                  required
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 bg-dark bg-opacity-50 in p-4 rounded">
                <label for="password" className="form-label text-white fs-5">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter a strong password"
                  onChange={upasswordinp}
                  value={upassword}
                  required
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 bg-dark bg-opacity-50 in p-4 rounded">
                <label for="conpassword" className="form-label text-white fs-5">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="conpassword"
                  name="conpassword"
                  placeholder="Confirm entered password"
                  onChange={uconpasswordinp}
                  value={uconpassword}
                  required
                />
              </div>
            </div>
            <div className="col-md-7 text-right mt-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="tnc"
                name="tnc"
                required
              />
              <label for="tnc" className="form-label text-white fs-5">
                Accept terms and conditions
              </label>
            </div>
            <div className="col-md-5 text-left mt-3">
              <Link
                to="/termsandconditions"
                href="#"
                className="text-decoration-none  fs-5"
                id="tnc"
              >
                Terms and Conditions
              </Link>
            </div>
            <div className="col-md-12 text-center">
              <h4 className="fs-4 text-white">
                Already Registered?
                <Link to="/" href="login.html" className="text-decoration-none">
                  Login here
                </Link>
              </h4>
            </div>

            <div className="col-md-12 text-center">
              <input
                type="button"
                className="btn btn-lg btn-primary"
                value="Register"
                onClick={validate}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
