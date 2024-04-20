import "./contact.css";
import social from "./image/group social media.svg";
// import bottom from "./image/corner shape.svg";
import phone from "./image/call.svg";
import location from "./image/location.svg";
import Layout from "./Layout";
const Contact = () => {
  return (
    <Layout>
      <div className="contact-wrapper">
        <div className="contact">
          <h2>contact directly</h2>
          <span>
            <img src={phone} alt="" />
            (480) 555-0103
          </span>
          <address>
            <img src={location} alt="" />
            canberra, Australia
          </address>
          <img src={social} alt="" />
        </div>
        <div className="contact-main">
          <div className="box">
            <span className="first">o</span>
            <span className="second">r</span>
          </div>
          <div className="message-box">
            <h2>
              send us a <strong>message</strong>
            </h2>

            <form action="">
              <div className="feild">
                <label For="First name">First name</label> <br />
                <input type="text" /> <br />
              </div>
              <div className="feild">
                <label For="Last name">Last name</label> <br />
                <input type="text" />
              </div>
              <div className="feild">
                <label For="Emial">Emial Address</label> <br />
                <input type="email" />
              </div>
              <div className="feild">
                <label For="phone">phone</label> <br />
                <input type="number" />
              </div>
              <div className="feild">
                <label For="message">Message</label> <br />
                <textarea></textarea>
              </div>
            </form>
            <button>send massage</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
