import React, { Component } from "react";
import PRICES from "../../pages/prices";

export class FreeConfirm extends Component {
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
                <div>{PRICES[0].title}</div>
                <div>{PRICES[0].description}</div>
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

export default FreeConfirm;
