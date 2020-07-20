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
          <Route exact path="/" component={App} />
          <Route exact path="/travel/" component={Home} />
          <Route exact path="/travel/about-us" component={AboutUs} />
          <Route exact path="/travel/services" component={Services} />
          <Route exact path="/travel/team" component={Team} />
          <Route exact path="/travel/pricing" component={ProductCards} />
          <Route exact path="/travel/price-free-detail" component={PriceFree} />
          <Route
            exact
            path="/travel/price-silver-detail"
            component={PriceSilver}
          />
          <Route exact path="/travel/price-gold-detail" component={PriceGold} />
          <Route
            exact
            path="/travel/checkout-process-free-subscription"
            component={FreeCOForm}
          />

          <Route
            exact
            path="/travel/checkout-process-silver-subscription"
            component={SilverCOForm}
          />

          <Route
            exact
            path="/travel/checkout-process-gold-subscription"
            component={GoldCOForm}
          />

          <Route exact path="/travel/contact-us" component={ContactUs} />
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
