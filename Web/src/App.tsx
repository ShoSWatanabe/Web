import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import FooterBar from "./components/FooterBar";

import "./App.css";
import { useEffect, useState } from "react";

const MOBILE_WIDTH_THRESHOLD = 600;

function App() {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // This is for mobile resiveness
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < MOBILE_WIDTH_THRESHOLD,
  );
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_WIDTH_THRESHOLD);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <NavBar isMobile={isMobile} />
      <div className="bg-gray-50">
        <Routes>
          <Route path="/" element={<Home isMobile={isMobile} />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <FooterBar />
    </>
  );
}

export default App;
