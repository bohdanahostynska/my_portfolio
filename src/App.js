import React from "react";
import SideBar from "../src/components/sidebar/SideBar";
import Home from "../src/components/home/Home";
import About from "../src/components/about/About";
import Skills from "../src/components/skills/Skills";
import Resume from "../src/components/resume/Resume";
import Portfolio from "../src/components/portfolio/Portfolio";
import Contact from "../src/components/contact/Contact";
import "./App.css";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <SideBar />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
