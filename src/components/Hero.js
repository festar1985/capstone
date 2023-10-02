import restauranfood from "../Assets/restauranfood.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div>
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>

          <Link to="/reservations">
            <button id="button" to="/reservations">
              Reserve a Table
            </button>
          </Link>
        </div>

        <div>
          <img src={restauranfood} alt="restaurantFood" />
        </div>
      </div>
    </>
  );
}

export default Hero;
