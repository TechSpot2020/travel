import React, { Component } from "react";

class TopBar extends Component {
  render() {
    return (
      <div>
        <section id="topbar" class="d-none d-lg-block">
          <div class="container d-flex">
            <div class="contact-info mr-auto">
              <ul>
                <li>
                  <i class="icofont-envelope"></i>
                  <a href="mailto:TechSpot@gmail.com">TechSpot@gmail.com</a>
                </li>
                <li>
                  <i class="icofont-phone"></i> +(60) 175678302
                </li>
                <li>
                  <i class="icofont-clock-time icofont-flip-horizontal"></i>{" "}
                  Mon-Fri 9am - 5pm
                </li>
              </ul>
            </div>
            <div class="cta">
              <a href="#about" class="scrollto">
                Get Started
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default TopBar;
