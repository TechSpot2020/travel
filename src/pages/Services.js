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
                Collection of the services or function in SpotMe application
                created by TechSpot. Effective, efficient, and effortless
                travelling experience are united into one package. Each scene is
                memorable and presented by AR which enhancing the real
                experience of the customer. Your satisfaction is our pleasure!
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
                    We can enable easier booking of tour planning and meet you
                    anywhere in your journey with a unique plan that changes and
                    grows with you, from full implementation to excitement and
                    satisfaction management furing travelling.
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
                    The app allow to customize tour experience anywhere in user
                    journey with a unique personalization planning that changes
                    and grows with you with recommendation algorithm within our
                    SpotMe app.
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
                    Travelling become easier with our advanced navigation. User
                    no need to worry to be lost during travelling. Once click
                    away from SpotMe, our app will help you navigate the route
                    for you anywhere you wanna go with AR!
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
                    Traveling can bring the best and good impression about the
                    tour spot. We allow users to save their favorite place
                    during travelling and will utilize the data to bring the
                    best on the similar tour place that may liked by the users.
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
