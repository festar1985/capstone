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
          <address className="text-style-footer">Address</address>
          <address className="text-style-footer">phone number</address>
          <address className="text-style-footer">email</address>
        </div>
        <div className="footer-secondary-container">
          <h3 className="header-style">Social Media Links</h3>
          <address className="text-style-footer">Instagram</address>
          <address className="text-style-footer">LinkedIn</address>
          <address className="text-style-footer">Pinterest</address>
        </div>
      </div>
    </>
  );
}

export default Footer;
