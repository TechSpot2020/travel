import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.jpeg";

class Header extends Component {
  render() {
    return (
      <div>
        <header id="header">
          <div className="container d-flex">
            <div className="logo mr-auto">
              <h1 className="text-light">
                <img src={logo} alt="TechSpotLogo" />
                <Link exact activeStyle={{ color: "orange" }} to={"/"}>
                  <span>Tech Spot</span>
                </Link>
              </h1>
            </div>

            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li className="active">
                  <Link exact activeStyle={{ color: "orange" }} to={"/"}>
                    Home
                  </Link>

                  {/* <a href="/">Home</a> */}
                </li>
                <li>
                  <NavLink
                    exact
                    activeStyle={{ color: "orange" }}
                    to={"/about-us"}
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
