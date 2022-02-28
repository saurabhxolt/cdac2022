import { Route, Routes } from "react-router-dom";
import AdminView from "./views/adminview";
import Login from "./views/login";
import Register from "./views/register";
import WelcomeHome from "./views/welcome-home";
import AddBooksComponent from "./views/AddBooksComponent";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome-home" element={<WelcomeHome />} />
        <Route path="/adminview" element={<AdminView />} />
        <Route exact path="/add-book" element={<AddBooksComponent />} />
        <Route exact path="/add-book/:id" element={<AddBooksComponent />} />
      </Routes>
    </>
  );
}
