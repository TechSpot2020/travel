import React, { Component } from "react";
import PRICES from "../../pages/prices";

export class GoldConfirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { name, email, phone },
    } = this.props;

    return (
      <div className="form-container">
        <h1 className="mb-5">Confirm</h1>
        <ul class="list-group">
          <li class="list-group-item">Name: {name}</li>
          <li class="list-group-item">Email: {email}</li>
          <li class="list-group-item">Phone Number: {phone}</li>
          <li class="list-group-item">
            Order Summary :
            <ul className="list-group">
              <li className="list-group-item">
                <div>{PRICES[2].title}</div>
                <br />
                <div>
                  {" "}
                  Details :<li>Unlimited Booking and planning</li>
                  <li>Enable Map navigation</li>
                  <li>Triple reward point than free user</li>
                  <li>3 Travel Insurance included every year</li>
                  <li>More promotions available</li>
                </div>
              </li>
            </ul>
          </li>
        </ul>

        <br />
        <br />

        <div className="row">
          <div className="col-6">
            <button className="btn btn-danger" onClick={this.back}>
              Back
            </button>
          </div>
          <div className="col-6 text-right">
            <button className="btn btn-primary" onClick={this.continue}>
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default GoldConfirm;
