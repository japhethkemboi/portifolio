"use client";
import Hero from "./components/hero";
import Header from "./components/header";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Contact from "./components/contact";
import { useTheme } from "next-themes";
import Testimonials from "./components/testimonials";

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme == "dark";

  return (
    <div className={isDark ? "dark" : ""}>
      <Header />
      <Hero />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
