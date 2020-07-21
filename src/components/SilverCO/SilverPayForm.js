import React, { Component } from "react";
import "../PayForm.css";
import PRICES from "../../pages/prices";
import { Link } from "react-router-dom";

class SilverPayForm extends Component {
  render() {
    const {
      values: { name },
    } = this.props;

    return (
      <>
        <div id="main-container">
          <div id="main-wrapper">
            <div class="column detail-wrapper">
              <h2 class="title">Checkout Now</h2>
              <div class="product-detail">
                <img src={PRICES[1].image} alt="Free-Subscription" />
                <p class="product-name">{PRICES[1].title}</p>
                <p class="product-price">RM 19.90 </p>
              </div>
            </div>

            <div class="column form-wrapper">
              <h5 className="text-left">Hello, {name}</h5>
              <form action="">
                <input
                  type="text"
                  id="username"
                  required
                  placeholder="Your Name"
                />

                <input
                  type="text"
                  id="credit card"
                  required
                  placeholder="Credit Card"
                />

                <label for="">Expires on:</label>

                <select name="" id="">
                  <option value="">January</option>
                  <option value="">February</option>
                  <option value="">March</option>
                  <option value="">April</option>
                  <option value="">May</option>
                  <option value="" selected>
                    June
                  </option>
                  <option value="">July</option>
                  <option value="">August</option>
                  <option value="">September</option>
                  <option value="">October</option>
                  <option value="">November</option>
                  <option value="">December</option>
                </select>

                <select name="" id="">
                  <option value="" selected>
                    2020
                  </option>
                  <option value="">2021</option>
                </select>

                <div class="btn-checkout">
                  <button type="submit">
                    <Link to={"/"}>Checkout</Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SilverPayForm;
