import React from "react";
import "../TrialComponent/Card/CardStyle.css";
import { Link } from "react-router-dom";

const PCFreePrice = (props) => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="free-image" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">Free plan with cost of RM 0</p>
        <button className="btn btn-outline-success">
          <Link to={"/price-free-detail"}>View More</Link>
          {/* <a href={pathLink}>View More</a> */}
        </button>
      </div>
    </div>
  );
};

export default PCFreePrice;
