import React, { Component } from "react";
import { Container, Button, Alert } from "reactstrap";

class Footer extends Component {
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
        <footer id="footer">
          <div class="footer-top">
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-md-6 footer-contact">
                  <h3>Flexor</h3>
                  <p>
                    Level 8, MCT Tower Sky Park, Jalan USJ 25/1 <br />
                    One City, 47650 Subang Jaya, Selangor
                    <br />
                    Malaysia <br />
                    <br />
                    <strong>Phone:</strong> +(60) 175678302
                    <br />
                    <strong>Email:</strong> TechSpot@gmail.com
                    <br />
                  </p>
                </div>

                <div class="col-lg-2 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <i class="bx bx-chevron-right"></i> <a href="#">Home</a>
                    </li>
                    <li>
                      <i class="bx bx-chevron-right"></i>{" "}
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <i class="bx bx-chevron-right"></i>{" "}
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <i class="bx bx-chevron-right"></i> <a href="#">Teams</a>
                    </li>
                    <li>
                      <i class="bx bx-chevron-right"></i>{" "}
                      <a href="#">Privacy policy</a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-3 col-md-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li>
                      <i class="bx bx-chevron-right"></i>{" "}
                      <a href="#">Product Support</a>
                    </li>
                    <li>
                      <i class="bx bx-chevron-right"></i>{" "}
                      <a href="#">Subscription Management</a>
                    </li>
                    <li>
                      <i class="bx bx-chevron-right"></i>{" "}
                      <a href="#">AR Integration App</a>
                    </li>
                    <li>
                      <i class="bx bx-chevron-right"></i>{" "}
                      <a href="#">Enterprise Marketing</a>
                    </li>
                    <li>
                      <i class="bx bx-chevron-right"></i>{" "}
                      <a href="#">Travel Plan</a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-4 col-md-6 footer-newsletter">
                  <h4>Join Our Newsletter</h4>
                  <p>Sign up for all the latest tips, tricks, and trends</p>
                  <form action="">
                    <input type="email" name="email" />
                  </form>
                  <br />
                  <Button
                    color="danger"
                    block={true}
                    onClick={this.toggle.bind(this)}
                  >
                    Subscribe
                  </Button>{" "}
                  <br />
                  <Alert
                    color="success"
                    isOpen={this.state.visible}
                    toggle={this.toggle.bind(this)}
                  >
                    Successfully subscribe!
                  </Alert>
                </div>
              </div>
            </div>
          </div>

          <div class="container d-lg-flex py-4">
            <div class="mr-lg-auto text-center text-lg-left">
              <div class="copyright">
                &copy; Copyright{" "}
                <strong>
                  <span>TechSpot</span>
                </strong>
                . All Rights Reserved 2020
              </div>
              <div class="credits">
                Designed by{" "}
                <a href="https://techspot2020.github.io/travel/">TechSpot</a>
              </div>
            </div>
            <div class="social-links text-center text-lg-right pt-3 pt-lg-0">
              <a href="#" class="facebook">
                <i class="bx bxl-facebook"></i>
              </a>
              <a
                href="https://instagram.com/spotmetravel?igshid=6mgiwmklxnvl"
                class="instagram"
              >
                <i class="bx bxl-instagram"></i>
              </a>
              <a
                href="https://techspot2020.github.io/travel/"
                class="google-plus"
              >
                <i class="bx bxl-github"></i>
              </a>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
