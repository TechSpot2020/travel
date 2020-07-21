import React from "react";
import "../TrialComponent/Card/CardStyle.css";
import { Link, NavLink } from "react-router-dom";

const PCGoldPrice = (props) => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="img1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">details on the card!!!</p>
        <button className="btn btn-outline-success">
          <Link to={"/price-gold-detail"}>View More</Link>
          {/* <a href={pathLink}>View More</a> */}
        </button>
      </div>
    </div>
  );
};

export default PCGoldPrice;
