import "./login.css";
import at_sign from "./image/at-sign.svg";
import lock from "./image/lock.svg";
import logo from "./image/MyT-Horizontal Logo-CMYK-PNG.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-head">
          <img src={logo} alt="" />
          <div className="head-side">
            <span>don't have an account?</span>
            <strong>
              <Link to="./SignUp">sign up here</Link>
            </strong>
          </div>
        </div>
        <h1>sign in</h1>
        <form action="">
          <div className="login-feild">
            <label>Email</label> <br />
            <input
              type="text"
              required
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <img src={at_sign} alt="" />
          </div>
          <div className="login-feild">
            <label>Password</label> <br />
            <input
              type="password"
              required
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img src={lock} alt="" />
          </div>
          <p>
            <Link to="/PasswordReset">Forgot password?</Link>
          </p>
          <button>sign in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
