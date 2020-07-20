import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <header id="header">
          <div className="container d-flex">
            <div className="logo mr-auto">
              <h1 className="text-light">
                <a href="index.html">
                  <span>Flexor</span>
                </a>
              </h1>
            </div>

            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li className="active">
                  <NavLink
                    exact
                    activeStyle={{ color: "orange" }}
                    to={"/travel/"}
                  >
                    Home
                  </NavLink>

                  {/* <a href="/">Home</a> */}
                </li>
                <li>
                  <NavLink
                    exact
                    activeStyle={{ color: "orange" }}
                    to={"/travel/about-us"}
                  >
                    About Us
                  </NavLink>
                  {/* <a href="#about">About</a> */}
                </li>
                <li>
                  <NavLink
                    exact
                    activeStyle={{ color: "orange" }}
                    to={"/services"}
                  >
                    Services
                  </NavLink>
                  {/* <a href="#services">Services</a> */}
                </li>
                <li>{/* <a href="#portfolio">Portfolio</a> */}</li>
                <li>
                  <NavLink exact activeStyle={{ color: "orange" }} to={"/team"}>
                    Team
                  </NavLink>
                  {/* <a href="#team">Team</a> */}
                </li>
                <li>
                  <NavLink
                    exact
                    activeStyle={{ color: "orange" }}
                    to={"/pricing"}
                  >
                    Pricing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    activeStyle={{ color: "orange" }}
                    to="/contact-us"
                  >
                    Contact
                  </NavLink>
                  {/* <NavLink to={"/contact"}>Contact</NavLink> */}
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
