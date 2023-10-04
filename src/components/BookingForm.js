import "./BookingForm.css";
import { useState } from "react";

function BookingForm() {
  const [bookingData, setBookingData] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [bookingTime, setBookingTime] = useState("17:00");
  const [bookingGuests, setbookingGuests] = useState(1);
  const [bookingOccasion, setbookingOccasion] = useState("");

  const handlerDateChange = (e) => {
    setBookingData(e.target.value);
  };

  const handlerTimeChange = (e) => {
    setBookingTime(e.target.value);
  };

  const handlerGuestChange = (e) => {
    setbookingGuests(e.target.value);
  };

  const handlerOccasionChange = (e) => {
    setbookingOccasion(e.target.value);
  };

  return (
    <>
      <form className="form-container">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={bookingData}
          onChange={handlerDateChange}
        />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={bookingTime} onChange={handlerTimeChange}>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={bookingGuests}
          onChange={handlerGuestChange}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={bookingOccasion}
          onChange={handlerOccasionChange}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
}

export default BookingForm;
