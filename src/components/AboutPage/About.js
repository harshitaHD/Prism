import React from "react";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import "./About.css";

const About = () => {
  return (
    <>
      <Navbar />
      <h1>
        About <span>PRISM</span>
      </h1>
      {/*mission of our project*/}
      <div className="abt-cards">
        <div className="abt-body mission-body">
          <div className="abt-title mission">Our Mission</div>
          <div className="abt-content">
            <p>
              Mission of <span>PRISM</span> is to provide best support and easy
              to use environment for the students for their skill development
              and career growth.
            </p>
          </div>
        </div>
        {/*vision of our project */}
        <div className="abt-body vision-body">
          <div className="abt-title vision">Our Vision</div>
          <div className="abt-content">
            <p>
              Vision of <span>PRISM</span> is to be a world class organization
              and a leading service provider for students by providing valuable
              support to reach their goals and live their dreams.
            </p>
          </div>
        </div>
        {/*What we do */}
        <div className="abt-body work-body">
          <div className="abt-title work">What we do?</div>
          <div className="abt-content">
            <p>
              We provides easy to use coding platform, where you can compile
              your codes with ease and also you can design your web pages here
              along with a system for managing records and notes.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
