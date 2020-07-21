import React from "react";
import "../TrialComponent/Card/CardStyle.css";
import { Link } from "react-router-dom";

const PCGoldPrice = (props) => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="Gold-image" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
          Gold membership with cost of RM 29.90
        </p>
        <button className="btn btn-outline-success">
          <Link to={"/price-gold-detail"}>View More</Link>
          {/* <a href={pathLink}>View More</a> */}
        </button>
      </div>
    </div>
  );
};

export default PCGoldPrice;
