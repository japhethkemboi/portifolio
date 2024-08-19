"use client";
import Hero from "./components/hero";
import Header from "./components/header";
import Projects from "./pages/projects/projects";
import Footer from "./components/footer";
import Contact from "./pages/contact";
import { useTheme } from "next-themes";
import Testimonials from "./components/testimonials";
import BottomNav from "./components/bottom_nav";
import About from "./pages/about";
import Search from "./pages/search";
import { useState } from "react";

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme == "dark";
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div
      className={`${
        isDark ? "dark" : ""
      } sm:flex sm:gap-2 sm:h-screen sm:overflow-hidden`}
    >
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab == "search" && <Search />}
      {activeTab == "projects" && <Projects />}
      {activeTab == "contact" && <Contact />}
      {activeTab == "about" && <About />}
      {/* <Header /> */}
      {activeTab == "home" && <Hero />}
      {activeTab == "testimonials" && <Testimonials />}
      {/* <Footer /> */}
    </div>
  );
}
