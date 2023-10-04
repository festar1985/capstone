import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NoPage from "./components/NoPage";
import Menu from "./components/Menu";
import BookingPage from "./components/BookingPage";
import Order from "./components/Order";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/reservations" element={<BookingPage />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
