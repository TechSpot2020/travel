import React from "react";
import Hero from "./Hero";
import Clients from "../components/Clients";
import AboutUs from "./AboutUs";
import WhyUs from "./WhyUs";
import Services from "./Services";
import Testimonials from "../components/Testimonials";
import Portfolio from "./Portfolio";
import Team from "./Team";
import ContactUs from "./ContactUs";
import Values from "./Values";
// import ProductCards from "./Products/ProductCards";
// import PCFree from "./PCFree";
import PCSilver from "./PCSilver";

function Home() {
  return (
    <>
      <Hero />
      <main id="main">
        <WhyUs />
        <AboutUs />
        <Clients />
        <Services />
        <Values />
        <Testimonials />
        <Portfolio />
        <Team />
        {/* <hr />
        <PCFree /> */}

        <hr />
        <PCSilver />

        <ContactUs />
      </main>
    </>
  );
}

export default Home;
