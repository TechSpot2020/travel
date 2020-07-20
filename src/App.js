import React from "react";
import "./App.css";
import MyRoute from "./configuration/MyRoute";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Slider1 from "./Slider1";
import PayForm from "./TrialComponent/PayForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <PayForm />
        <TopBar />
        <Header />
        <MyRoute />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
