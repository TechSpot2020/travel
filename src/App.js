import React from "react";
import "./App.css";
import MyRoute from "./configuration/MyRoute";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import { BrowserRouter, HashRouter } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <TopBar />
        <Header />
        <MyRoute />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
