import ratings from "../Assets/rating.png";
import profile1 from "../Assets/profile1.JPG";
import profile2 from "../Assets/profile2.JPG";
import profile3 from "../Assets/profile3.JPG";
import profile4 from "../Assets/profile4.JPG";

function Testimonials() {
  return (
    <>
      <div>
        <div>
          <h1>Testimonials</h1>
        </div>

        <div>
          <div>
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={profile1} alt="Customer Pic" />
            <h2>Ivan G.</h2>
            <p>"Really enjoyed the food."</p>
          </div>
          <div>
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={profile2} alt="Customer Pic" />
            <h2>Peter M.</h2>
            <p>"The greek salad was excellent!"</p>
          </div>

          <div>
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={profile3} alt="Customer Pic" />
            <h2>Nikolay R.</h2>
            <p>"Amazing Mediterranean restaurant"</p>
          </div>

          <div>
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={profile4} alt="Customer Pic" />
            <h2>Martin J.</h2>
            <p>"Awesome place and delicious food"</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
