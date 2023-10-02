import "./Nav_vertical.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul>
      <li>
        <Link className="link" to="/">
          HOME
        </Link>
      </li>
      <li>
        <Link className="link" to="/about">
          ABOUT
        </Link>
      </li>
      <li>
        <Link className="link" to="/menu">
          MENU
        </Link>
      </li>
      <li>
        <Link className="link" to="/reservations">
          RESERVATIONS
        </Link>
      </li>
      <li>
        <Link className="link" to="/oder">
          ORDER ONLINE
        </Link>
      </li>
      <li>
        <Link className="link" to="/login">
          LOGIN
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
