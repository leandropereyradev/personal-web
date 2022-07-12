import React from "react";
import '../src/css/app.css'
import Nav from "./components/Nav";
import ScrollSpy from "./components/ScrollSpy";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="app-container">
      <ScrollSpy  />
      <Header />
      <Portfolio />
      <About />
      <Contact />
      <Nav/>
    </div>
  );
};

export default App;
