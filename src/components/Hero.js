import restauranfood from "../Assets/restauranfood.jpg";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="main">
        <div className="main-content">
          <h1>Little Lemon</h1>
          <h4>Chicago</h4>
          <p className="text-style">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>

          <Link to="/reservations">
            <button className="button" id="button" to="/reservations">
              Reserve a Table
            </button>
          </Link>
        </div>

        <div className="grid-div">
          <img className="img" src={restauranfood} alt="restaurantFood" />
        </div>
      </div>
    </>
  );
}

export default Hero;
