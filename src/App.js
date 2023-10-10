import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NoPage from "./components/NoPage";
import Menu from "./components/Menu";
import BookingPage from "./components/BookingPage";
import Order from "./components/Order";
import Login from "./components/Login";
import Confirmation from "./components/Confirmation";
import { useEffect, useReducer, useState } from "react";
import { fetchAPI, submitAPI } from "./API/api.js";

const today = new Date().toISOString().slice(0, 10);

function App() {
  const [bookingDate, setBookingDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const [availableTimes, setAvailableTimes] = useReducer(
    updateAvailableTimes,
    []
  );

  useEffect(() => {
    setAvailableTimes("initialize");
  }, []);

  function updateAvailableTimes(availableTimes, action) {
    switch (action) {
      case "initialize":
        return fetchAPI(today);
      case "update":
        return fetchAPI(bookingDate);
      default:
        return availableTimes;
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route
          path="/reservations"
          element={
            <BookingPage
              bookingDate={bookingDate}
              setBookingDate={setBookingDate}
              availableTimes={availableTimes}
              setAvailableTimes={setAvailableTimes}
            />
          }
        ></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/confirmation" element={<Confirmation />}></Route>"
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
