import React, { Component } from "react";
import { Container, Button, Alert } from "reactstrap";

class ContactUs extends Component {
  state = {
    visible: false,
  };

  toggle() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (
      <>
        <section id="contact" class="contact">
          <div class="container">
            <div class="section-title">
              <h2 data-aos="fade-up">Contact our Support!</h2>
              <h4 data-a0s="fade-up">
                Need to get in touch with the team? We’re all ears.
              </h4>
              <p data-aos="fade-up">
                Our team is happy to answer your sales questions. Fill out the
                form and we’ll be in touch as soon as possible.
              </p>
            </div>

            <div class="row justify-content-center">
              <div class="col-xl-3 col-lg-4 mt-4" data-aos="fade-up">
                <div class="info-box">
                  <i class="bx bx-map"></i>
                  <h3>Our Address</h3>
                  <p>Level 8, MCT Tower Sky Park</p>
                  <p>One City, 47650 Subang Jaya, Malaysia </p>
                </div>
              </div>

              <div
                class="col-xl-3 col-lg-4 mt-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="info-box">
                  <i class="bx bx-envelope"></i>
                  <h3>Email Us</h3>
                  <p>
                    TechSpot@gmail.com
                    <br />
                    info@spotme.com
                  </p>
                </div>
              </div>
              <div
                class="col-xl-3 col-lg-4 mt-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="info-box">
                  <i class="bx bx-phone-call"></i>
                  <h3>Call Us</h3>
                  <p>
                    +(60) 175678302
                    <br />
                    +(60) 117776290
                  </p>
                </div>
              </div>
            </div>

            <div
              class="row justify-content-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="col-xl-9 col-lg-12 mt-4">
                <form action="">
                  <div class="form-row">
                    <div class="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div class="col-md-6 form-group">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      name="message"
                      rows="5"
                      data-rule="required"
                      data-msg="Please write something for us"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <Container>
                    <Button
                      color="orange"
                      block={true}
                      onClick={this.toggle.bind(this)}
                    >
                      Send Message
                    </Button>{" "}
                    <br />
                    <Alert
                      color="success"
                      isOpen={this.state.visible}
                      toggle={this.toggle.bind(this)}
                    >
                      Successfully sent the message!
                    </Alert>
                  </Container>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ContactUs;
