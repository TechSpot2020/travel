import React from "react";
import "./App.css";
import MyRoute from "./configuration/MyRoute";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import { HashRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Slider1 from "./Slider1";
import PayForm from "./TrialComponent/PayForm";

function App() {
  return (
    <>
      <HashRouter>
        <TopBar />
        <Header />
        <MyRoute />
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
