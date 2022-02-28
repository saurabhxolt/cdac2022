import { Link } from "react-router-dom";
import "./register.css";
import axios from "axios";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [list, setList] = useState([]);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleMobile = (e) => {
    setMobile(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const addUser = async () => {
    const url = "http://localhost:4001/adduser";
    const data = {
      name: name,
      email: email,
      password: password,
      mobile: mobile,
      address: address,
    };

    await axios.post(url, data);
    const newList = [data, ...list];
    setList(newList);
    setName("");
  };

  return (
    <div className="container-fluid form-r">
      <div
        className="row bg-transparent justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="col-12 col-md-6  bg-dark bg-opacity-50 in p-4 rounded">
          <form>
            <div className="alert alert-dark h4">
              Register to Purchase/View Books
            </div>

            <div>
              <label for="name" className="form-label fs-5">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Full name"
                onChange={unameinp}
                onFocus={clearErrors}
                value={uname}
                required
              />
            </div>

            <div className="mt-1">
              <input
                className="form-control form-control-lg"
                type="email"
                value={email}
                onChange={handleEmail}
                placeholder="Enter Email"
              />
            </div>

            <div className="mt-1">
              <input
                className="form-control form-control-lg"
                type="password"
                value={password}
                onChange={handlePassword}
                placeholder="Enter Password"
              />
            </div>

            <div className="mt-1">
              <input
                className="form-control form-control-lg"
                type="text"
                value={mobile}
                onChange={handleMobile}
                placeholder="Enter Mobile"
              />
            </div>

            <div className="mt-1">
              <input
                className="form-control form-control-lg"
                type="text"
                value={address}
                onChange={handleAddress}
                placeholder="Enter Complete Address"
              />
            </div>

            <div className="mt-1">
              <input
                type="button"
                value="Register"
                className="btn btn-dark w-100 btn-lg "
                onClick={addUser}
              />
            </div>

            <div className="text-center">
              <Link to="/login" className="text-info">
                Login here..
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
