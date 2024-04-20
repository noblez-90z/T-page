import logo from "./image/MyT-Horizontal Logo-CMYK-PNG.svg";
import web from "./image/Web.svg";
import vector from "./image/Vector.svg";
import menu from "./image/menu.svg";
import cancelMenu from "./image/cancel menu.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuDropDown, setMenuDropDown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(menu);
  const menuChange = () => {
    setMenuOpen(menuOpen === menu ? cancelMenu : menu);
    setMenuDropDown(!menuDropDown);
  };

  return (
    <div className="header-wrapper">
      <div className="logo-wrapper">
        <img src={logo} alt="" />
      </div>
      <div className={`navBar-menu ${menuDropDown ? "open" : ""}`}>
        <div className="navBar">
          <ul>
            <li>
              <Link to="#">find a trainee</Link>
            </li>
            <li>
              <Link to="#">become a trainer</Link>
            </li>
            <li>
              <Link to="#"> become an affiliate</Link>
            </li>
          </ul>
        </div>

        <div className="navBar-links">
          <div className="web">
            <img src={web} alt="" />
          </div>
          <Link to="/Login">login</Link>
          <button>
            <Link to="./SignUp">register</Link>
            <img src={vector} alt="" />
          </button>
        </div>
      </div>
      <div className="menu-wrapper">
        <img src={menuOpen} alt="menu" onClick={menuChange} />
      </div>
    </div>
  );
};

export default Header;
