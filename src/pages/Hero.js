import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <section
        id="hero"
        class="d-flex flex-column justify-content-center align-items-center"
      >
        <div class="container" data-aos="fade-in">
          <h1>Welcome to Tech Spot</h1>
          <h2>
            Easy planning, Simple travelling, Unlock your travelling dream{" "}
          </h2>
          <div class="d-flex align-items-center">
            <i class="bx bxs-right-arrow-alt get-started-icon"></i>
            <a href="#about" class="btn-get-started scrollto">
              Get Started
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
