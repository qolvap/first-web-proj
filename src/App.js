import "./index.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Question from "./components/Question";
import Advantages from './components/Advantages'
import Testimonials from './components/Testimonials'
import Services from "./components/Services";

import Footer from "./components/Footer";

function HomePage() {
  return (
    <div>
      <About />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* ---- BODY START ----- */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} exact />
          <Route path="/Question" element={<Question />} exact />
          <Route path="/Advantages" element={<Advantages />} exact />
          <Route path="/Services" element={<Services />} exact />
          <Route path="/Testimonials" element={<Testimonials />} exact />
        </Routes>
        {/* ---- BODY END ----- */}
        <Footer />
      </div>
    </Router>
  );
}
