import "./footer.css";
import logo from "./image/MyT-Horizontal Logo-CMYK-PNG.svg";
import socials from "./image/social media.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="info foot">
        <img src={logo} alt="" />
        <p>
          Providing a reliable booking service for sports and education
          trainers, and their customers
        </p>
        <div className="socials">
          <img src={socials} alt="" />
        </div>
      </div>
      <div className="company-wrapper foot">
        <h3>Company</h3>
        <ul>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms">Terms and conditions</Link>
          </li>
          <li>
            <Link to="/About">About us</Link>
          </li>
        </ul>
      </div>
      <div className="resource-wrapper foot">
        <h3>Resources</h3>
        <ul>
          <li>
            <Link to="/">Help Centers</Link>
          </li>
          <li>
            <Link to="./video and article">Video Tips</Link>
          </li>
        </ul>
      </div>
      <div className="help-wrapper foot">
        <h3>Help & Support</h3>
        <ul>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <span>+2349-000-000-000</span>

          <li>
            <Link to="mailto:recipient@info@mytpage.com">info@mytpage.com</Link>
          </li>
          <li>
            <Link to="./FAQs">FAQs</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
