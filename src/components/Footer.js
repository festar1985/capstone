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
          <text className="text-style-footer">Address</text>
          <text className="text-style-footer">phone number</text>
          <text className="text-style-footer">email</text>
        </div>
        <div className="footer-secondary-container">
          <h3 className="header-style">Social Media Links</h3>
          <text className="text-style-footer">Instagram</text>
          <text className="text-style-footer">LinkedIn</text>
          <text className="text-style-footer">Pinterest</text>
        </div>
      </div>
    </>
  );
}

export default Footer;
