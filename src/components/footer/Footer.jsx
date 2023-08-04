import { Link } from "react-router-dom";
import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="item">
        <Link to={`#`}>Questions? Contact us.</Link>
      </div>
      <div className="container">
        <div className="item">
          <span>FAQ</span>
          <span>Investor Relations</span>
          <span>Privacy</span>
          <span>Speed Test</span>
        </div>
        <div className="item">
          <span>Help Centre</span>
          <span>Jobs</span>
          <span>Cookie Preferences</span>
          <span>Legal Notices</span>
        </div>
        <div className="item">
          <span>Account</span>
          <span>Ways to Watch</span>
          <span>Corporate Information</span>
          <span>Only on Netflix</span>
        </div>
        <div className="item">
          <span>Media Centre</span>
          <span>Terms of Use</span>
          <span>Contact Us</span>
        </div>
      </div>
      <select name="lang">
        <option value="english">English</option>
        <option value="hindi">Hindi</option>
      </select>
    </footer>
  );
}
