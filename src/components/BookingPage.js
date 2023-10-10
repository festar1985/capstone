import BookingForm from "./BookingForm";
import Header from "./Header";
import Footer from "./Footer";

function BookingPage(props) {
  const bookingDate = props.bookingDate;
  const setBookingDate = props.setBookingDate;
  const availableTimes = props.availableTimes;
  const setAvailableTimes = props.setAvailableTimes;
  return (
    <>
      <Header />
      <BookingForm
        bookingDate={bookingDate}
        setBookingDate={setBookingDate}
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
      />
      <Footer />
    </>
  );
}

export default BookingPage;
