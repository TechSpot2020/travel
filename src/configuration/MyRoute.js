import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Services from "../pages/Services";
import Team from "../pages/Team";
import Page404 from "../pages/Page404";
import ProductCards from "../pages/Products/ProductCards";
import PriceGold from "../pages/Products/ProductDetails/PriceGold";
import PriceSilver from "../pages/Products/ProductDetails/PriceSilver";
import PriceFree from "../pages/Products/ProductDetails/PriceFree";
import FreeCOForm from "../components/FreeCO/FreeCOForm";
import SilverCOForm from "../components/SilverCO/SilverCOForm";
import GoldCOForm from "../components/GoldCO/GoldCOForm";
import App from "../App";

class MyRoute extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/pricing" component={ProductCards} />
          <Route exact path="/price-free-detail" component={PriceFree} />
          <Route exact path="/price-silver-detail" component={PriceSilver} />
          <Route exact path="/price-gold-detail" component={PriceGold} />
          <Route
            exact
            path="/checkout-process-free-subscription"
            component={FreeCOForm}
          />

          <Route
            exact
            path="/checkout-process-silver-subscription"
            component={SilverCOForm}
          />

          <Route
            exact
            path="/checkout-process-gold-subscription"
            component={GoldCOForm}
          />

          <Route exact path="/contact-us" component={ContactUs} />
          {/* <Route
            exact
            path="/checkout-process-free-subscription"
            component={FreeCOForm}
          /> */}
          {/* 
          <Route
            exact
            path="/checkout-process-silver-subscription"
            component={SilverCOForm}
          />

          <Route
            exact
            path="/checkout-process-gold-subscription"
            component={GoldCOForm}
          /> */}

          <Route component={Page404} />
        </Switch>
      </div>
    );
  }
}

export default MyRoute;
