import React, { Component } from "react";
import PCSilverPrice from "./PCSilverPrice";
import pay from "../images/pay.png";

class PCSilver extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <PCSilverPrice imgsrc={pay} title="silver" />
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
