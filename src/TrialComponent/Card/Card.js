import React, { Component } from "react";
import CardPrice from "./CardPrice";
import pay from "../images/pay.png";

class Card extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <CardPrice imgsrc={pay} title="free" />
          </div>

          <div className="col-md-4">
            <CardPrice imgsrc={pay} title="silver" />
          </div>

          <div className="col-md-4">
            <CardPrice imgsrc={pay} title="platinum" />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
