import React, { Component } from "react";
import PRICES from "../prices";
import "./ProductCards.css";

class ProductCard extends Component {
  render() {
    console.log("this props: ", this.props);
    const { title, description, image, pathLink } = this.props.price;

    return (
      <>
        <div className="card text-center shadow">
          <div className="overflow">
            <img
              src={image}
              alt="subscription-price"
              className="card-img-top"
            />
          </div>

          <div className="card-body text-dark">
            <h4 className="card-title">{title}</h4>
            <p className="card-text text-secondary">{description}</p>
            {/* <div class="card-footer"> */}
            <form>
              <button className="btn btn-outline-success">
                <a href={pathLink}>View More</a>
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

class ProductCards extends Component {
  render() {
    return (
      <>
        <h2>Subscription Pricing </h2>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            {PRICES.map((PRICES) => {
              return <ProductCard key={PRICES.id} price={PRICES} />;
            })}
          </div>
        </div>
      </>
    );
  }
}

export default ProductCards;
