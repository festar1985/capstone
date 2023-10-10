import "./Highlights.css";
import greek from "../Assets/greek salad.jpg";
import bruschetta from "../Assets/bruchetta.JPG";
import lemon from "../Assets/lemon dessert.jpg";

function Highlights() {
  return (
    <>
      <div className="highlights-container">
        <div className="highlights-header">
          <h3>Specials</h3>

          <button id="button">Online Menu</button>
        </div>
      </div>

      <div className="highlights-cards">
        <div className="highlights-cards-col">
          <img className="img-highlights" src={greek} alt="Greek Salad" />
          <p>Greek Salad</p>
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
          <button className="highlights-button">Order Delivery </button>
        </div>
        <div className="highlights-cards-col">
          <img className="img-highlights" src={bruschetta} alt="bruschetta" />
          <p>Bruschetta</p>
          <p>
            Our Bruschetta is made from homemade grilled bread that has been
            smeared with garlic and seasoned with salt and olive oil. Topped
            with fresh vegetables.
          </p>
          <button className="highlights-button">Order Delivery </button>
        </div>
        <div className="highlights-cards-col">
          <img className="img-highlights" src={lemon} alt="Lemon cake" />
          <p>Lemon Cake</p>
          <p>
            This comes straight from grandma’s recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
          <button className="highlights-button">Order Delivery </button>
        </div>
      </div>
    </>
  );
}

export default Highlights;
