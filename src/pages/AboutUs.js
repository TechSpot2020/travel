import React, { Component } from "react";

class AboutUs extends Component {
  render() {
    return (
      <>
        <section id="about" class="about section-bg">
          <div class="container">
            <div class="row">
              <div
                class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch"
                data-aos="fade-right"
              >
                <a
                  // href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                  href="https://www.youtube.com/watch?v=XWbY5jdJnHg"
                  class="venobox play-btn mb-4"
                  data-vbtype="video"
                  data-autoplay="true"
                ></a>
              </div>

              <div class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                <h4 data-aos="fade-up">About us</h4>
                <h3 data-aos="fade-up">
                  Brand new features of travelling with All-new possibilities.
                </h3>
                <p data-aos="fade-up">
                  Our latest app, SpotMe is created to update the simplified
                  travelling experience using AR effects — and our new
                  capabilities open up fresh AR experiences to breaking the wall
                  between the digital and physical travelling experience.
                </p>

                <div class="icon-box" data-aos="fade-up">
                  <div class="icon">
                    <i class="bx bx-fingerprint"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Personalization</a>
                  </h4>
                  <p class="description">
                    Smart customization and effective tracking of user
                    travelling personalization. TechSpot integrate
                    Recommendation algorithm within the app to understand,
                    boost, and enrich the user satisfaction and knowledge
                    regarding about the tour spout anywhere. Security and
                    confidentiality information is assured.
                  </p>
                </div>

                <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                  <div class="icon">
                    <i class="bx bx-gift"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Activity Packages</a>
                  </h4>
                  <p class="description">
                    TechSpot come up with strategic of boosting customers
                    engagement and experiences by including numerous and
                    varieties of promotional and rewards. Collection of rewards
                    can be redeemed with exciting services that come as a
                    packages within the subscription of the app.
                  </p>
                </div>

                <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                  <div class="icon">
                    <i class="bx bx-atom"></i>
                  </div>
                  <h4 class="title">
                    <a href="">AR Map Navigation</a>
                  </h4>
                  <p class="description">
                    Effortless and advanced technology for travelling build by
                    TechSpot. Build entirely using standard-compliant of Mapbox
                    Mapping, WebGL, React Js, and Unity engine for
                    hyper-optimized real time AR application. Featuring the
                    location of tour spot mapping, route detection, and
                    responsive scale within the SpotMe app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
      </>
    );
  }
}

export default AboutUs;
