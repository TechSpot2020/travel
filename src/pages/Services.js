import React, { Component } from "react";

class Services extends Component {
  render() {
    return (
      <>
        <section id="services" class="services section-bg">
          <div class="container">
            <div class="section-title" data-aos="fade-up">
              <h2>Services</h2>
              <p>
                Collection of the services in SpotMe application created by
                TechSpot. Effective, efficient, and effortless travelling
                experience are united into one package. Your satisfaction is our
                pleasure!
              </p>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6" data-aos="fade-up">
                <div class="icon-box">
                  <div class="icon">
                    <i class="icofont-computer"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Smart Plan / Book</a>
                  </h4>
                  <p class="description">
                    Enable easier booking and planning to anywhere in your
                    journey with a unique route that changes and grows with you,
                    from full implementation to excitement and satisfaction.
                  </p>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="icon-box">
                  <div class="icon">
                    <i class="icofont-chart-bar-graph"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Customization</a>
                  </h4>
                  <p class="description">
                    Customization of tour experience anywhere in user journey
                    with a unique planning that adapts and supports by
                    recommendation algorithm within our SpotMe app.
                  </p>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="icon-box">
                  <div class="icon">
                    <i class="icofont-earth"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Navigation Map with AR</a>
                  </h4>
                  <p class="description">
                    Travelling become easier with our AR advanced navigation. We
                    provide an accurate maps navigation with AR quality over
                    competitor.
                  </p>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div class="icon-box">
                  <div class="icon">
                    <i class="icofont-image"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Wishlist Tour spot</a>
                  </h4>
                  <p class="description">
                    Traveling brings the best and leave impression on selected
                    tour spot. Thus, we enable users to save and give feedback
                    to it.
                  </p>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div class="icon-box">
                  <div class="icon">
                    <i class="icofont-settings"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Surprise Package</a>
                  </h4>
                  <p class="description">
                    Be boost and excited by our suprise package where we provide
                    many exciting services and rewards that can be enjoyed by
                    the users during travelling only by using our app.
                  </p>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div class="icon-box">
                  <div class="icon">
                    <i class="icofont-tasks-alt"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Tour Activities</a>
                  </h4>
                  <p class="description">
                    We provide numerous and exciting activities for the users to
                    enrich their experiences and satisfaction during the tour or
                    travelling.Be sure to check on it!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Services;
