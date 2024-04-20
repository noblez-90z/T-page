import logo from "./image/MyT-Horizontal Logo-CMYK-PNG.svg";

import "./PasswordReset.css";
import { useHistory } from "react-router";
// import { useNavigate } from "react-router";

const PasswordReset = () => {
  const history = useHistory();

  console.log(history);
  const handleGoBack = () => {
    history.goBack(-1);
  };

  // const navigate = useNavigate();
  // const handleGoBack = () => {
  //   navigate(-1);
  // };

  return (
    <div className="password">
      <div className="password-wrapper">
        <div className="password-head">
          <img src={logo} alt="" />
        </div>
        <div className="password-reset">
          <h1>reset your password</h1>
          <p>
            Enter your email address below and we’ll send an email with a link
            to update your password.
          </p>
          <div className="reset-feild">
            <label htmlFor="">Email</label> <br />
            <input type="email" />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                stroke="#A1A1AA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 7.99987V12.9999C16 13.7955 16.3161 14.5586 16.8787 15.1212C17.4413 15.6838 18.2044 15.9999 19 15.9999C19.7957 15.9999 20.5587 15.6838 21.1213 15.1212C21.6839 14.5586 22 13.7955 22 12.9999V11.9999C21.9999 9.7429 21.2362 7.55235 19.8333 5.7844C18.4303 4.01645 16.4706 2.77509 14.2726 2.26217C12.0747 1.74924 9.76794 1.99491 7.72736 2.95923C5.68677 3.92356 4.03241 5.54982 3.03327 7.57359C2.03413 9.59736 1.74898 11.8996 2.22418 14.106C2.69938 16.3124 3.90699 18.2931 5.65064 19.7261C7.39429 21.1592 9.57144 21.9602 11.8281 21.999C14.0847 22.0378 16.2881 21.3121 18.08 19.9399"
                stroke="#A1A1AA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="email-btn">
            <button className="btn">reset password</button>
            <button className="back" onClick={handleGoBack}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.375 18H5.625"
                  stroke="#1F2937"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.75 7.875L5.625 18L15.75 28.125"
                  stroke="#1F2937"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;