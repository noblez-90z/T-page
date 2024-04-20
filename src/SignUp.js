import "./Signup.css";
import logo from "./image/MyT-Horizontal Logo-CMYK-PNG.svg";
import at_sign from "./image/at-sign.svg";
import lock from "./image/lock.svg";
import user from "./image/user.svg";
import desktop from "./image/desktop signup overlay.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Location, setLocation] = useState("");
  return (
    <div className="signup">
      <div className="desktop">
        <img src={desktop} alt="" />
      </div>
      <div className="signup-wrapper">
        <div className="signup-head">
          <img src={logo} alt="" />
          <div className="Shead-side">
            <span>Already have an account?</span>
            <strong>
              <Link to="/Login">Login here</Link>
            </strong>
          </div>
        </div>
        <h1>sign up</h1>
        <form action="/EmailVerfication">
          <div className="signup-feild">
            <label>Enter your full name</label> <br />
            <input
              type="text"
              placeholder="Enter your name"
              required
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <img src={user} alt="" />
          </div>
          <div className="signup-feild">
            <label>Email</label> <br />
            <input
              type="text"
              placeholder="@Example.com"
              required
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <img src={at_sign} alt="" />
          </div>
          <div className="signup-feild">
            <label>Password</label> <br />
            <input
              type="password"
              required
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img src={lock} alt="" />
          </div>
          <div className="signup-feild">
            <label>Your Location</label> <br />
            <select
              value={Location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="uyo">uyo</option>
              <option value="eket">eket</option>
              <option value="itu">itu</option>
            </select>
          </div>
          <button>sign in</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
