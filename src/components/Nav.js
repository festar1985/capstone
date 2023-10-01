import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul className="nav-container-main">
      <li className="nav-item">
        <Link className="link" to="/">
          HOME
        </Link>
      </li>
      <li className="nav-item">
        <Link className="link" to="/about">
          ABOUT
        </Link>
      </li>
      <li className="nav-item">
        <Link className="link" to="/menu">
          MENU
        </Link>
      </li>
      <li className="nav-item nav-item-reservation">
        <Link className="link" to="/reservations">
          RESERVATIONS
        </Link>
      </li>
      <li className="nav-item nav-item-order">
        <Link className="link" to="/oder">
          ORDER ONLINE
        </Link>
      </li>
      <li className="nav-item">
        <Link className="link" to="/login">
          LOGIN
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
