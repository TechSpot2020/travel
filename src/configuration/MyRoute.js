import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Services from "../pages/Services";
import Team from "../pages/Team";
// import ProductCards from "../pages/Products/ProductCards";
import PriceGold from "../pages/Products/ProductDetails/PriceGold";
import PriceSilver from "../pages/Products/ProductDetails/PriceSilver";
import PriceFree from "../pages/Products/ProductDetails/PriceFree";
import FreeCOForm from "../components/FreeCO/FreeCOForm";
import SilverCOForm from "../components/SilverCO/SilverCOForm";
import GoldCOForm from "../components/GoldCO/GoldCOForm";
import Page404 from "../pages/Page404";
import PCSilver from "../pages/PCSilver";

class MyRoute extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/services" component={Services} />
          <Route path="/team" component={Team} />
          {/* <Route path="/pricing" component={ProductCards} /> */}
          <Route path="/pricing" component={PCSilver} />
          <Route path="/price-free-detail" component={PriceFree} />
          <Route path="/price-silver-detail" component={PriceSilver} />
          <Route path="/price-gold-detail" component={PriceGold} />
          <Route
            path="/checkout-process-free-subscription"
            component={FreeCOForm}
          />

          <Route
            path="/checkout-process-silver-subscription"
            component={SilverCOForm}
          />

          <Route
            path="/checkout-process-gold-subscription"
            component={GoldCOForm}
          />

          <Route path="/contact-us" component={ContactUs} />

          <Route component={Page404} />
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
        </Switch>
      </div>
    );
  }
}

export default MyRoute;
