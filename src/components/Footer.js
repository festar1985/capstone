import logo2 from "../Assets/logo2.JPG";
import Nav2 from "../components/Nav_vertical";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <img src={logo2} alt="Little Lemon Logo" />
        <div>
          <p>Doormat</p>
          <p>Navigation</p>
          <Nav2 />
        </div>
        <div>
          <p>Contact</p>
          <p>Address</p>
          <p>phone number</p>
          <p>email</p>
        </div>
        <div>
          <p>Social Media Links</p>
          <p>Instagram</p>
          <p>LinkedIn</p>
          <p>Pinterest</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
