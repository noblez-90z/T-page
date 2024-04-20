import "./privacy.css";
import ellipse from "./image/Ellipse 12.svg";
import regtangle from "./image/heading box.svg";
import Layout from "./Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="privacy-policy-wrapper">
        <div className="privacy-head">
          <h2>PRIVACY POLICY</h2>
          <img src={regtangle} alt="" />
        </div>
        <div className="privacy-main">
          <p>
            ​This privacy policy sets out how Mytpage uses and protects any
            information that you give me when you use this website. Mytpage is
            committed to ensuring that your privacy is protected. <br />
            Should I ask you to provide certain information by which you can be
            identified when using this website, you can be assured that it will
            only be used in accordance with this privacy statement. <br />​
            Mytpage may change this policy from time to time by updating this
            page. You should check this page from time to time to ensure that
            you are happy with any changes. This policy is effective from 1st
            January 2099. ​
          </p>
          <div className="privacy-text">
            <div className="privacy-text-head">
              <img src={ellipse} alt="" />
              <h3>WHAT I COLLECT</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nunc congue leo elementum
              purus vestibulum. Ut pretium molestie facilisis massa diam.
            </p>
          </div>
          <div className="privacy-text">
            <div className="privacy-text-head">
              <img src={ellipse} alt="" />
              <h3>WHAT I DO WITH THE INFORMATION I GATHER</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nunc congue leo elementum
              purus vestibulum. Ut pretium molestie facilisis massa diam.
            </p>
          </div>
          <div className="privacy-text">
            <div className="privacy-text-head">
              <img src={ellipse} alt="" />
              <h3>​INTERNAL RECORD KEEPING</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nunc congue leo elementum
              purus vestibulum. Ut pretium molestie facilisis massa diam.
            </p>
          </div>
          <div className="privacy-text">
            <div className="privacy-text-head">
              <img src={ellipse} alt="" />
              <h3>SECURITY</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nunc congue leo elementum
              purus vestibulum. Ut pretium molestie facilisis massa diam.
            </p>
          </div>
          <div className="privacy-text">
            <div className="privacy-text-head">
              <img src={ellipse} alt="" />
              <h3>​HOW I USE COOKIES</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nunc congue leo elementum
              purus vestibulum. Ut pretium molestie facilisis massa diam.
            </p>
          </div>
          <div className="privacy-text">
            <div className="privacy-text-head">
              <img src={ellipse} alt="" />
              <h3>​LINKS TO OTHER WEBSITES</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nunc congue leo elementum
              purus vestibulum. Ut pretium molestie facilisis massa diam.
            </p>
          </div>
          <div className="privacy-text">
            <div className="privacy-text-head">
              <img src={ellipse} alt="" />
              <h3>​CONTROLLING YOUR PERSONAL INFORMATION</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nunc congue leo elementum
              purus vestibulum. Ut pretium molestie facilisis massa diam.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
