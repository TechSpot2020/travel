import React, { Component } from "react";

class Values extends Component {
  render() {
    return (
      <>
        <section id="values" class="values">
          <div class="container">
            <div class="row">
              <div
                class="col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
              >
                <div
                  class="card"
                  style={{ backgroundImage: `url(assets/img/values-1.jpg)` }}
                >
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="">Our Mission</a>
                    </h5>
                    <p class="card-text">
                      <li>
                        To inspire and engage people to confidently explore,
                        experience and share our world in a more digital and
                        innovative way.
                      </li>
                      <li>
                        Empowering travellers around the world to discover, book
                        and experience the best things to do anywhere, anytime,
                        with the consent of cost efficient.
                      </li>
                      <li>
                        Build many AR experiences and publish multiple times
                        across different platforms and channels without relying
                        on technical skills
                      </li>
                    </p>
                    {/* <div class="read-more">
                      <a href="#">
                        <i class="icofont-arrow-right"></i>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              <div
                class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div
                  class="card"
                  style={{ backgroundImage: `url(assets/img/values-2.jpg)` }}
                >
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="">Our Vision</a>
                    </h5>
                    <p class="card-text">
                      On our commitment to provide a trusted resource for
                      travellers with valued advice and insights from the SpotMe
                      community, based on the wisdom of the crowds and immersive
                      digital Augmented Reality content. We believe with this,
                      it will engage your consumers in a more digital and
                      innovative way.
                    </p>
                    {/* <div class="read-more">
                      <a href="#">
                        <i class="icofont-arrow-right"></i> Read More
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              <div
                class="col-md-6 d-flex align-items-stretch mt-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div
                  class="card"
                  style={{ backgroundImage: `url(assets/img/values-3.jpg)` }}
                >
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="">Our Plan</a>
                    </h5>
                    <p class="card-text">
                      Innovate and engage audience digitally with immersive
                      travelling experience content ranging from Augmented
                      Reality mapping.
                    </p>
                    {/* <div class="read-more">
                      <a href="#">
                        <i class="icofont-arrow-right"></i> Read More
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              <div
                class="col-md-6 d-flex align-items-stretch mt-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div
                  class="card"
                  style={{ backgroundImage: `url(assets/img/values-4.jpg)` }}
                >
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="">Our Care</a>
                    </h5>
                    <p class="card-text">
                      Customers satisfaction and experiences are our pleasure!
                      and glory!
                    </p>
                    {/* <div class="read-more">
                      <a href="#">
                        <i class="icofont-arrow-right"></i> Read More
                      </a>
                    </div> */}
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

export default Values;
