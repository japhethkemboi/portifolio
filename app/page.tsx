"use client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/hero";
import Header from "./components/header";
import { useTheme } from "next-themes";
import Testimonials from "./components/testimonials";
import About from "./pages/about";
import Search from "./pages/search";
import Contact from "./pages/contact";
import { useEffect, useState } from "react";

export default function App() {
  const [render, setRender] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => setRender(true), []);

  return render ? (
    <Router>
      <div className={`${isDark ? "dark" : ""} flex flex-col h-screen`}>
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<Search />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </div>
      </div>
    </Router>
  ) : null;
}
