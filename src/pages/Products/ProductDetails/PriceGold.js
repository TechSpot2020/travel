import React, { Component } from "react";
import gold from "../../../images/gold.svg";
import { Link } from "react-router-dom";

class PriceGold extends Component {
  render() {
    return (
      <>
        <main id="main">
          <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">
              <ol>
                <li>
                  <Link to={"/"}>Home</Link>
                  {/* <a href="/home">Home</a> */}
                </li>
                <li>
                  <Link to={"/pricing"}>Pricing</Link>
                  {/* <a href="/pricing">Pricing</a> */}
                </li>
                <li>Gold Subscription</li>
              </ol>
              <h2>Gold Subscription</h2>
            </div>
          </section>

          <section class="portfolio-details">
            <div class="container">
              <div class="portfolio-details-container">
                <div>
                  <img src={gold} class="img-fluid" alt="" />
                </div>

                <div class="portfolio-info">
                  <h3>Subscription Information</h3>

                  <ul>
                    <li>
                      <h4>
                        <strong>Price</strong>: RM 29.90
                      </h4>
                      <p>Every Month</p>
                    </li>

                    <li>
                      <strong>Category</strong>: Gold Membership
                    </li>

                    <li>
                      <strong>Release date</strong>: 20 January 2020
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
                    <Link to={"/checkout-process-gold-subscription"}>
                      Subscribe Now
                    </Link>
                    {/* <a href="/checkout-process-gold-subscription">
                      Subscribe Now
                    </a> */}
                  </button>
                </div>
              </div>

              <div class="portfolio-description">
                <h2>This is an example of portfolio detail</h2>
                <p>
                  This is the most advanced version subscription provided by
                  TechSpot which ensure the enrichment of users satisfaction to
                  the optimal. Supported by triple rewards to be claimed and
                  unlock the best of travel passion within the users.
                  <br />
                  Following are the benefits you can enjoy for gold
                  subscription:
                  <li>Unlimited Booking and planning</li>
                  <li>Enable Map navigation</li>
                  <li>Triple reward point than free user</li>
                  <li>3 Travel Insurance included every year</li>
                  <li>More promotions available</li>
                </p>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default PriceGold;
