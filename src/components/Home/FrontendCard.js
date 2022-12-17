import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const FrontendCard = () => {
  return (
    <div className="cards">
      <div className="card-1 code dsa-body">
        <div className="card-title dsa-title">DESIGN</div>
        <div className="content">
          <i className="fa-sharp fa-solid fa-wand-magic-sparkles"></i>
          <p>Design your web pages here with ease...</p>
        </div>
        <div className="click-btn">
          <Link to="/dsa">
            <button className="btn dsa-btn">Click here</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FrontendCard;
