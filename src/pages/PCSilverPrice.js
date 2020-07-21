import React from "react";
import "../TrialComponent/Card/CardStyle.css";
import { Link } from "react-router-dom";

const PCSilverprice = (props) => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="Silver-image" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
          Silver membership with cost of RM 19.90
        </p>
        <br />
        <button className="btn btn-outline-success">
          <Link to={"/price-silver-detail"}>View More</Link>
          {/* <a href={pathLink}>View More</a> */}
        </button>
      </div>
    </div>
  );
};

export default PCSilverprice;
