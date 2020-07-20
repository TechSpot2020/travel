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
              <h2 data-aos="fade-up">Contact</h2>
              <p data-aos="fade-up">
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div class="row justify-content-center">
              <div class="col-xl-3 col-lg-4 mt-4" data-aos="fade-up">
                <div class="info-box">
                  <i class="bx bx-map"></i>
                  <h3>Our Address</h3>
                  <p>A108 Adam Street, New York, NY 535022</p>
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
                    info@example.com
                    <br />
                    contact@example.com
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
                    +1 5589 55488 55
                    <br />
                    +1 6678 254445 41
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
                      color="primary"
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
