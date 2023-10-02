import logo2 from "../Assets/logo2.JPG";
import Nav2 from "../components/Nav_vertical";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <img src={logo2} alt="Little Lemon Logo" />
        <div>
          <h3 className="header-style">
            Doormat <br /> Navigation
          </h3>
          <Nav2 />
        </div>
        <div className="footer-secondary-container">
          <h3 className="header-style">Contact</h3>
          <text className="text-style">Address</text>
          <text className="text-style">phone number</text>
          <text className="text-style">email</text>
        </div>
        <div className="footer-secondary-container">
          <h3 className="header-style">Social Media Links</h3>
          <text className="text-style">Instagram</text>
          <text className="text-style">LinkedIn</text>
          <text className="text-style">Pinterest</text>
        </div>
      </div>
    </>
  );
}

export default Footer;
