import { useState } from "react";
import "./Hompage.css";
import couple from "./image/couple on bike.svg";
import football from "./image/Playing football.svg";
import check from "./image/CheckCircle.svg";
import woman from "./image/runing woman.svg";
import me from "./image/IMG_0767.JPG";
import stars from "./image/Rating.svg";
import Layout from "./Layout";
const Homepage = () => {
  const [index, setIndex] = useState(0);
  const handleClick = () => {
    setIndex(index + 1);
  };

  return (
    <Layout>
      <div className="hero-wrapper">
        <div className="hero">
          <div className="hero-text">
            <h1>Find the ideal Learning Path for you</h1>
            <p>
              Providing a reliable booking service for sports and education
              trainers, and their customers.
            </p>
            <button>FIND TRAINERS </button>
          </div>
          <div className="hero-pic">
            <img src={couple} alt="couple" />
          </div>
        </div>
        <div className="section">
          <div className="section-pic">
            <img src={football} alt="playing football" />
          </div>
          <div className="section-list">
            <h3>
              We'll put you in touch with the ideal Trainee in less than 24
              hours.
            </h3>
            <p>
              Myt.Page gets to provide a platform that helps connects you with
              your trainee, and help form meaningful relationship with them. We
              are there, every step of the way.
            </p>
            <ul>
              <li>
                <img src={check} alt="" />
                By sorting, classifying, and categorizing the endless pool of
                trainees, we help you overcome the difficulties of recruiting
                and selecting the perfect fits for your teaching capacity.
              </li>
              <li>
                <img src={check} alt="" />
                You needless crawl through endless pool of potential clients, we
                give you a selection of people who are ready for a good
                relationship with your course.
              </li>
              <li>
                <img src={check} alt="" />
                Our method eliminates the conventional trainee and trainer
                process, and quickly locates determined trainee that are most
                ready to jump on your course
              </li>
              <li>
                <img src={check} alt="" />
                On Myt.page, you should be sure to find options that will meet
                your schedule and session needs.
              </li>
            </ul>
            <button id="first">FIND TRAINERS</button>
            <button>LERAN MORE</button>
          </div>
        </div>
        <div className="woman-wrapper">
          <div className="woman-text">
            <h3>Find Trainees and earn as they complete your course</h3>
            <ul>
              <li>
                <img src={check} alt="" />
                Avoid finding relevant learning platforms and submitting an
                unlimited number of submissions to learn a skill or improve your
                vocation.
              </li>
              <li>
                <img src={check} alt="" />
                We match you with the appropriate opportunities based on your
                schedule and location
              </li>
              <li>
                <img src={check} alt="" />
                Land a great teacher in less than 24 hours
              </li>
            </ul>
            <button id="sec">FIND TRAINERS</button>
            <button>LERAN MORE</button>
          </div>
          <div className="woman-pic">
            <img src={woman} alt="" />
          </div>
        </div>
        <div className="ideal-wrapper">
          <div className="ideal-text">
            <h2>
              Step into a your ideal course and be the best at what you do,
            </h2>
            <p>
              Every day, we hire make it a priority to find people are the best
              at what they do, and we have your best interest to link them up
              with you.
            </p>
          </div>
          <button>EXPLORE YOUR CHANCES</button>
        </div>
        <div className="rating-wrapper">
          <h2>
            We’ve got a lot of people who trust us, so you are in excellent
            hands.
          </h2>
          <div className="rate-wrap">
            <div className="rating" onClick={handleClick}>
              <div className="rating-star">
                <img src={stars} alt="" />
              </div>
              <div className="rating-text">
                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages
                </p>
              </div>
              <div className="manager">
                <img src={me} alt="" />
                <div className="">
                  <h5>Jane Doe</h5>
                  <p>HR Manager, Sectraco</p>
                </div>
              </div>
            </div>
            <div className="rating" onClick={handleClick}>
              <div className="rating-star">
                <img src={stars} alt="" />
              </div>
              <div className="rating-text">
                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages
                </p>
              </div>
              <div className="manager">
                <img src={me} alt="" />
                <div className="">
                  <h5>Jane Doe</h5>
                  <p>HR Manager, Sectraco</p>
                </div>
              </div>
            </div>
            <div className="rating" onClick={handleClick}>
              <div className="rating-star">
                <img src={stars} alt="" />
              </div>
              <div className="rating-text">
                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages
                </p>
              </div>
              <div className="manager">
                <img src={me} alt="" />
                <div className="">
                  <h5>Jane Doe</h5>
                  <p>HR Manager, Sectraco</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
