import logo from "../Assets/Logo.svg";
import Nav from "./Nav";
import "./Header.css";

function Header() {
  return (
    <div className="header-container-main">
      <img className="header-item" src={logo} alt="Little Lemon Logo" />
      <Nav />
    </div>
  );
}

export default Header;
