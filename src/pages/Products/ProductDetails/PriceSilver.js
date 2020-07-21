import React, { Component } from "react";
import silver from "../../../images/silver.svg";
import { Link, NavLink } from "react-router-dom";

class PriceSilver extends Component {
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
                <li>Silver Subscription</li>
              </ol>
              <h2>Silver Subscription</h2>
            </div>
          </section>

          <section class="portfolio-details">
            <div class="container">
              <div class="portfolio-details-container">
                {/* <div class="owl-carousel portfolio-details-carousel">
                  <img src={silver} class="img-fluid" alt="" />
                </div> */}
                <div>
                  <img
                    src={silver}
                    width="700px"
                    height="500px"
                    alt="silver-image-detail"
                  />
                </div>

                <div class="portfolio-info">
                  <h3>Project information</h3>
                  <ul>
                    <li>
                      <h4>
                        <strong>Price</strong>: RM 19.90
                      </h4>
                      <p>Every Month</p>
                    </li>

                    <li>
                      <strong>Category</strong>: Silver Membership
                    </li>

                    <li>
                      <strong>Release date</strong>: 10 January 2020
                    </li>

                    <li>
                      <strong>Released by</strong>: TechSpot Company
                    </li>

                    <li>
                      <strong>Inquiry</strong>:{" "}
                      <a href="#">TechSpot@company.com</a>
                    </li>
                  </ul>

                  <button className="btn-primary btn-block">
                    <Link to={"/checkout-process-silver-subscription"}>
                      Subscribe Now
                    </Link>
                    {/* <a href="/checkout-process-silver-subscription">
                      Subscribe Now
                    </a> */}
                  </button>
                </div>
              </div>

              <div class="portfolio-description">
                <h2>Silver Membership Detail : </h2>
                <p>
                  This is the upgrade version from the free plan subscription
                  which having enhancement on the services and more promotional.
                  Definitely empower the rate of users experience and
                  satisfaction during travelling.
                  <br />
                  Following are the benefits you can enjoy for silver
                  subscription:
                  <li>Map Navigation Service</li>
                  <li>Unlimited Booking and Planning</li>
                  <li>Double point Reward than free user</li>
                  <li>2x Travel Insurance included</li>
                  <li>More promotion limited for Silver</li>
                </p>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default PriceSilver;
