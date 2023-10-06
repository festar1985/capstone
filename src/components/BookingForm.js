import "./BookingForm.css";
import { useState } from "react";

function BookingForm() {
  const [bookingData, setBookingData] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [bookingTime, setBookingTime] = useState("17:00");
  const [bookingGuests, setbookingGuests] = useState(1);
  const [bookingOccasion, setbookingOccasion] = useState("");
  const [bookingFirstName, setbookingFirstName] = useState("");
  const [bookingLastName, setbookingLastName] = useState("");
  const [bookingTelephone, setbookingTelephone] = useState("");

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

  const handlerFirstNameChange = (e) => {
    setbookingFirstName(e.target.value);
  };

  const handlerLastNameChange = (e) => {
    setbookingLastName(e.target.value);
  };

  const handlerTelephoneChange = (e) => {
    setbookingTelephone(e.target.value);
  };

  return (
    <>
      <form className="form-container">
        <h2 className="form-element">Reservation</h2>
        <label className="form-element" htmlFor="res-date">
          Choose date
        </label>
        <input
          className="form-element"
          type="date"
          id="res-date"
          value={bookingData}
          onChange={handlerDateChange}
        />
        <label className="form-element" htmlFor="res-time">
          Choose time
        </label>
        <select
          className="form-element"
          id="res-time"
          value={bookingTime}
          onChange={handlerTimeChange}
        >
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label className="form-element" htmlFor="guests">
          Number of guests
        </label>
        <input
          className="form-element"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={bookingGuests}
          onChange={handlerGuestChange}
        />
        <label className="form-element" htmlFor="occasion">
          Occasion
        </label>
        <select
          className="form-element"
          id="occasion"
          value={bookingOccasion}
          onChange={handlerOccasionChange}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <label className="form-element" htmlFor="firstname">
          FirstName
        </label>
        <input
          className="form-element"
          type="text"
          id="firstname"
          value={bookingFirstName}
          onChange={handlerFirstNameChange}
          required
        />
        <label className="form-element" htmlFor="lastname">
          LastName
        </label>
        <input
          className="form-element"
          type="text"
          id="lastname"
          value={bookingLastName}
          onChange={handlerLastNameChange}
          required
        />
        <label className="form-element" htmlFor="lastname">
          Telephone
        </label>
        <input
          className="form-element"
          type="number"
          id="guests"
          value={bookingTelephone}
          onChange={handlerTelephoneChange}
          required
        />

        <input
          className="form-element form-button-input"
          type="submit"
          value="Make Your reservation"
          disabled={!bookingFirstName && !bookingLastName && !bookingTelephone}
        />
      </form>
    </>
  );
}

export default BookingForm;
