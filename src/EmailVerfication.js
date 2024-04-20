import logo from "./image/MyT-Horizontal Logo-CMYK-PNG.svg";
import "./EmailVerfication.css";

const EmailVerfication = () => {
  return (
    <div className="email">
      <div className="email-wrapper">
        <div className="email-head">
          <img src={logo} alt="" />
        </div>
        <div className="email-verification">
          <h1>verify your email address</h1>
          <p>
            We have sent a verification link to your email address. Kindly click
            the link from your email to verify your account.  Didn't receive the
            email? Please check your spam folder or try to resend verification
          </p>
          <button>resend Verfication</button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerfication;
