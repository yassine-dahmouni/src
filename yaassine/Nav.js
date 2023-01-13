import { Link } from "react-router-dom";
import "../yaassine/Yas.css";

export default function Nav() {
  return (
    <div className="menu">
      <li>
        <Link to="/home" style={{ textDecoration: "none" }}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/blog" className="bb">
          Blog
        </Link>
      </li>
    </div>
  );
}
