import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import NavBar from "./components/navBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
