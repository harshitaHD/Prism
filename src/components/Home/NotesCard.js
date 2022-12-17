import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const NotesCard = () => {
  return (
    <div className="cards">
      <div className="card-1 code notes-body">
        <div className="card-title notes-title">NOTES</div>
        <div className="content">
          <i className="fa-solid fa-book"></i>
          <p>Keep your notes safe and secure...</p>
        </div>
        <div className="click-btn">
          <Link to="/notes">
            <button className="btn notes-btn">Click here</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
