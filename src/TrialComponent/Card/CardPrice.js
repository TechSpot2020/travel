import React from "react";
import "./CardStyle.css";

const CardPrice = (props) => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="img1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">details on the card!!!</p>
        <a href="#" className="btn btn-outline-success">
          Go anywhere
        </a>
      </div>
    </div>
  );
};

export default CardPrice;
