import { Link } from "react-router-dom";
import "./header.scss";

export default function Header() {
  return (
    <header>
      <div className="left">
        <div className="logo">
          <Link to={`/`}>NETFLIX</Link>
        </div>
      </div>
      <div className="right">
        <span>UNLIMITED TV SHOWS & MOVIES</span>
        <button>JOIN NOW</button>
        <button>SIGN IN</button>
      </div>
    </header>
  );
}
