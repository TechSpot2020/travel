import React, { Component } from "react";
import "../components/PayForm.css";

class PayForm extends Component {
  render() {
    return (
      <>
        <div id="main-container">
          <div id="main-wrapper">
            <div class="column detail-wrapper">
              <h2 class="title">Checkout Now</h2>
              <div class="product-detail">
                <img src="" width="700px" height="300px" alt="" />
                <p class="product-name">Test</p>
                <p class="product-price">RM100</p>
              </div>
            </div>

            <div class="column form-wrapper">
              <h5 className="text-left">Hello</h5>
              <form action="">
                <label for="">
                  <input type="text" id="name" required />
                  <span>Name</span>
                </label>

                <label for="">
                  <input type="text" id="c-card" required />
                  <span>Credit Card</span>
                </label>

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
                  <button type="submit">Checkout</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PayForm;
