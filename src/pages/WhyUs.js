import React, { Component } from "react";

class WhyUs extends Component {
  render() {
    return (
      <>
        <section id="why-us" class="why-us">
          <div class="container">
            <div class="row">
              <div class="col-xl-4 col-lg-5" data-aos="fade-up">
                <div class="content">
                  <h3>Why Choose SpotMe as your travel app? </h3>
                  <p>
                    SpotMe is built to enable and enrich customers experience
                    (planning, booking, enjoy activities) of travelling with
                    Augmented Reality map navigation to anywhere in a simple
                    automated way.
                  </p>
                  {/* <div class="text-center">
                    <a href="#" class="more-btn">
                      Learn More <i class="bx bx-chevron-right"></i>
                    </a>
                  </div> */}
                </div>
              </div>
              <div class="col-xl-8 col-lg-7 d-flex">
                <div class="icon-boxes d-flex flex-column justify-content-center">
                  <div class="row">
                    <div
                      class="col-xl-4 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <div class="icon-box mt-4 mt-xl-0">
                        <i class="bx bx-receipt"></i>
                        <h4>User Engagement Analytic</h4>
                        <p>
                          Track the user engagement analytic to derive valuable
                          insight for business in digital way.
                        </p>
                      </div>
                    </div>
                    <div
                      class="col-xl-4 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <div class="icon-box mt-4 mt-xl-0">
                        <i class="bx bx-cube-alt"></i>
                        <h4>Explore and Plan Your Trip</h4>
                        <p>
                          Enable customers to customize their own travel through
                          booking all the Hotel, flight, and variety activities.
                        </p>
                      </div>
                    </div>
                    <div
                      class="col-xl-4 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <div class="icon-box mt-4 mt-xl-0">
                        <i class="bx bx-images"></i>
                        <h4>AR View</h4>
                        <p>
                          Provide better and accurate map navigation with AR
                          quality over competitor.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default WhyUs;
