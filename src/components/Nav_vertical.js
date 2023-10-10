import "./Nav_vertical.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul className="ul-container">
      <li className="nav-item-veritcal">
        <Link className="link" to="/">
          HOME
        </Link>
      </li>
      <li className="nav-item-veritcal">
        <Link className="link" to="/about">
          ABOUT
        </Link>
      </li>
      <li className="nav-item-veritcal">
        <Link className="link" to="/menu">
          MENU
        </Link>
      </li>
      <li className="nav-item-veritcal">
        <Link className="link" to="/reservations">
          RESERVATIONS
        </Link>
      </li>
      <li className="nav-item-veritcal">
        <Link className="link" to="/oder">
          ORDER ONLINE
        </Link>
      </li>
      <li className="nav-item-veritcal">
        <Link className="link" to="/login">
          LOGIN
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
