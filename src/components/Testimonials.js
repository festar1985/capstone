import ratings from "../Assets/rating.png";
import profile1 from "../Assets/profile1.JPG";
import profile2 from "../Assets/profile2.JPG";
import profile3 from "../Assets/profile3.JPG";
import profile4 from "../Assets/profile4.JPG";
import "./Testimonials.css";

function Testimonials() {
  return (
    <>
      <div className="testimonials-container">
        <div>
          <h1 className="testimonials-header-style">Testimonials</h1>
        </div>

        <div className="testimonials-secondary-container">
          <div className="review">
            <img
              className="review-item-stars"
              id="rating"
              src={ratings}
              alt="ratings"
            />
            <img
              className="review-item-image"
              id="profile"
              src={profile1}
              alt="Customer Pic"
            />
            <h2 className="review-item-name">Ivan G.</h2>
            <p className="review-item-text">"Really enjoyed the food."</p>
          </div>
          <div className="review">
            <img
              className="review-item-stars"
              id="rating"
              src={ratings}
              alt="ratings"
            />
            <img
              className="review-item-image"
              id="profile"
              src={profile2}
              alt="Customer Pic"
            />
            <h2 className="review-item-name">Peter M.</h2>
            <p className="review-item-text">"The greek salad was excellent!"</p>
          </div>

          <div className="review">
            <img
              className="review-item-stars"
              id="rating"
              src={ratings}
              alt="ratings"
            />
            <img
              className="review-item-image"
              id="profile"
              src={profile3}
              alt="Customer Pic"
            />
            <h2 className="review-item-name">Nikolay R.</h2>
            <p className="review-item-text">
              "Amazing Mediterranean restaurant"
            </p>
          </div>

          <div className="review">
            <img
              className="review-item-stars"
              id="rating"
              src={ratings}
              alt="ratings"
            />
            <img
              className="review-item-image"
              id="profile"
              src={profile4}
              alt="Customer Pic"
            />
            <h2 className="review-item-name">Martin J.</h2>
            <p className="review-item-text">
              "Awesome place and delicious food"
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
