import { Link } from "react-router-dom";
import "./Home.css";

const CodeCard = () => {
  return (
    <div className="cards">
      <div className="card-1 code card-body">
        <div className="card-title code-title">CODE</div>
        <div className="content">
          <i className="fa-solid fa-code"></i>
          <p>Code, compile, run and learn...</p>
        </div>
        <div className="click-btn">
          <Link  to="/code">
          <button className="btn code-btn">
            Click Here
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CodeCard;
