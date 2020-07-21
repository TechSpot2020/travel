import React, { Component } from "react";
import PCFreePrice from "./PCFreePrice";
import PCSilverPrice from "./PCSilverPrice";
import PCGoldPrice from "./PCGoldPrice";
import pay from "../images/pay.png";

class PCSilver extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <PCFreePrice imgsrc={pay} title="FREE" />
          </div>

          <div className="col-md-4">
            <PCSilverPrice imgsrc={pay} title="SILVER" />
          </div>

          <div className="col-md-4">
            <PCGoldPrice imgsrc={pay} title="GOLD" />
          </div>
          {/* 
          <div className="col-md-4">
            <CardPrice imgsrc={pay} title="silver" />
          </div>

          <div className="col-md-4">
            <CardPrice imgsrc={pay} title="platinum" />
          </div> */}
        </div>
      </div>
    );
  }
}

export default PCSilver;
