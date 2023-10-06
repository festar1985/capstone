import Image from "../Assets/Mario.jpg";
import { Link } from "react-router-dom";
import "./Confirmation.css";

function Confirmation() {
  return (
    <header className="confirmation-header">
      <img
        className="confirmation-image"
        src={Image}
        alt="Little Lemon Ingredients"
      ></img>
      <section className="reserve-header-text">
        <h1>Your Reservation is Confirmed!</h1>
        <h4>A confirmation message has been sent to your email.</h4>
        <h4>Thanks for dining with us!</h4>
      </section>

      <section className="redirect-buttons">
        <Link className="redirect-button" to="/order">
          Order Online
        </Link>
        <Link className="redirect-button" to="/">
          Home Page
        </Link>
      </section>
    </header>
  );
}

export default Confirmation;
