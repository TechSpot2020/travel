import React, { Component } from "react";
import free from "../../../images/free.svg";
import { Link, NavLink } from "react-router-dom";

class PriceFree extends Component {
  render() {
    return (
      <>
        <main id="main">
          <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">
              <ol>
                <li>
                  <Link to={"/"}>Home</Link>
                  {/* <a href="/">Home</a> */}
                </li>
                <li>
                  <Link to={"/pricing"}>Pricing</Link>
                  {/* <a href="/pricing">Pricing</a> */}
                </li>
                <li>Free</li>
              </ol>
              <h2>Free Subscription</h2>
            </div>
          </section>

          <section class="portfolio-details">
            <div class="container">
              <div class="portfolio-details-container">
                <div class="owl-carousel portfolio-details-carousel">
                  <img src={free} class="img-fluid" alt="" />
                </div>

                <div class="portfolio-info">
                  <h3>Subscription Information</h3>
                  <ul>
                    <li>
                      <h4>
                        <strong>Price</strong>: RM 0
                      </h4>
                    </li>

                    <li>
                      <strong>Category</strong>: Free Membership
                    </li>

                    <li>
                      <strong>Release date</strong>: 01 January 2020
                    </li>

                    <li>
                      <strong>Released by</strong>: TechSpot Company
                    </li>

                    <li>
                      <strong>Inquiry</strong>:{" "}
                      <a href="#">www.TechSpot@company.com</a>
                    </li>
                  </ul>
                  <button className="btn-primary btn-block">
                    <Link to={"/checkout-process-free-subscription"}>
                      Subscribe Now
                    </Link>
                    {/* <a href="/checkout-process-free-subscription">
                      Subscribe Now
                    </a> */}
                  </button>
                </div>
              </div>

              <div class="portfolio-description">
                <h2>Free User Plan Detail : </h2>
                <p>
                  All users can use the application with unlimited booking and
                  planning the trip. User can also start to gain promotion and
                  point rewards for having more additional excitement and
                  satisfaction.
                  <br />
                  Noted that this free plan come up with:
                  <li> Best Guranteed Booking Price</li>
                  <li>Map Navigation Service</li>
                  <li>Point Reward Collection</li>
                  <li>Promotion Available</li>
                </p>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default PriceFree;
