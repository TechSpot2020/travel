import React, { Component } from "react";

class Breadcrumb extends Component {
  render() {
    return (
      <>
        <section id="breadcrumbs" class="breadcrumbs">
          <div class="container">
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Pricing Details</li>
            </ol>
            <h2>Pricing Details</h2>
          </div>
        </section>
      </>
    );
  }
}

export default Breadcrumb;
