import chefs from "../Assets/restaurant chef B.jpg";
import restaurant from "../Assets/restaurant.jpg";

function AboutShort() {
  return (
    <>
      <div>
        <div>
          <h4>Little Lemon</h4>
          <h5>Chicago</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
            ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque
            massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor
            condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in
            accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit
            lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi
            hendrerit consequat. In dictum ligula in elit euismod malesuada.
            Curabitur varius augue id tempus ultricies. Mauris suscipit porta
            odio, et pretium nibh scelerisque ut.
          </p>
        </div>

        <div>
          <img id="chefs" src={chefs} alt="male chefs" />
          <img id="restaurant" src={restaurant} alt="restaurant" />
        </div>
      </div>
    </>
  );
}

export default AboutShort;
