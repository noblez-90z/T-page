import "./About.css";
import regtangle from "./image/heading box.svg";
import people from "./image/pple runing.svg";
import girl from "./image/girl with bike.svg";
import teacher from "./image/reg girl with book.svg";
import woman_teach from "./image/woman teaching smile.svg";
import Layout from "./Layout";
const About = () => {
  return (
    <Layout>
      <div className="about-wrapper">
        <div className="about">
          <div className="about-head">
            <h1>WHAT IS MY-Tpage?</h1>
            <img src={regtangle} alt="" />
          </div>
          <p>
            The My-Tpage is aimed to provide a booking service for sports and
            education trainers, and their customers. Once the user visits the
            website, they can find the activity type they want to train in and
            find the best suited trainer for that activity
          </p>
        </div>
        <div className="about-main">
          <div className="about-main-text">
            <h5>
              Everything you would want for a good training platform, you can do
              with Mytpage
            </h5>
            <h2>Core Values</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              illum velit, corrupti asperiores numquam repudiandae quae facilis
              et, blanditiis officiis quibusdam est autem quisquam perferendis
              inventore laudantium, deserunt repellendus! Eaque.
            </p>
          </div>
          <img src={people} alt="people runing" />
        </div>
        <div className="about-section">
          <img src={girl} alt="girl with bycicle" />
          <div className="about-section-text">
            <h3>Core Values</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nibh semper bibendum neque
              molestie sagittis sagittis diam. Risus blandit aliquam pretium
              phasellus. Porttitor hendrerit elementum gravida id ut mauris amet
              tempor neque. Gravida in.
            </p>
          </div>
        </div>
        <div className="video-wrapper">
          <div className="vid1">
            <img src={woman_teach} alt="" />
            <p>Start a LESSON today</p>
            <h3>FOR TRAINER</h3>
            <button>CREATE OPPORTUNITIES FOR LEARNING</button>
          </div>
          <div className="vid2">
            <img src={teacher} alt="" />
            <h3>FOR TRAINEE</h3>
            <button>START A CLASS TODAY</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
