import { render, screen } from "@testing-library/react";
import App from "./App";
import BookingForm from "./components/BookingForm";
import { BrowserRouter as Router } from "react-router-dom";
import { fireEvent } from "@testing-library/react";
import Home from "./components/Home";
import Hero from "./components/Hero";
import * as userEvent from "@testing-library/user-event";

const availableTimes = ["17:00", "17:30", "18:50", "19:00", "20:00", "21:00"];

const bookingDate = new Date().toISOString().slice(0, 10);

test("Renders the BookingForm heading", () => {
  render(
    <Router>
      <BookingForm bookingDate={bookingDate} availableTimes={availableTimes} />
    </Router>
  );
  const headingElement = screen.getByText("Reservation");
  expect(headingElement).toBeInTheDocument();
});

test("Check homepage for Render", () => {
  render(
    <Router>
      <Home />
    </Router>
  );
  const headingElement = screen.getByText("Greek Salad");
  expect(headingElement).toBeInTheDocument();
});

test("Check the date state", () => {
  render(
    <Router>
      <BookingForm availableTimes={availableTimes} bookingDate={bookingDate} />
    </Router>
  );

  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
});

test("Submit should be disabled", () => {
  render(
    <Router>
      <BookingForm availableTimes={availableTimes} bookingDate={bookingDate} />
    </Router>
  );

  const submit = screen.getByTestId("submit");
  expect(submit).toBeInTheDocument();
  expect(submit.value).toBe("Make Your reservation");

  expect(submit).toBeDisabled();
});
