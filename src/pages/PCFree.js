import React, { Component } from "react";
import "./Products/ProductCards.css";
import { Link, NavLink } from "react-router-dom";

class PCFree extends Component {
  render() {
    return (
      <>
        <div className="card text-center shadow">
          <div className="overflow">
            <p> image here</p>
            {/* <img
              src={image}
              alt="subscription-price"
              className="card-img-top"
            /> */}
          </div>

          <div className="card-body text-dark">
            <h4 className="card-title">FREE</h4>
            <p className="card-text text-secondary">
              Free subscription consist of 1 free GB, No Support
            </p>
            {/* <div class="card-footer"> */}
            <form>
              <button className="btn btn-outline-success">
                <Link to={"/price-free-detail"}>View More</Link>
                {/* <a href={pathLink}>View More</a> */}
              </button>

              {/* <a href="#" className="btn btn-outline-success">
                Go anywhere
              </a> */}
            </form>
            {/* </div> */}
          </div>
        </div>

        {/* <div style={{ display: "inline-block", width: 300, margin: 10 }}>
          <h3>{title}</h3>
          <img
            src={image}
            alt="subscription-price"
            style={{ width: 200, height: 120 }}
          />
          <p>{description}</p>
        </div> */}
      </>
    );
  }
}

export default PCFree;
