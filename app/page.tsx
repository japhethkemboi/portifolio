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
      <main className="flex flex-col backdrop-blur bg-white/80 dark:bg-black dark:text-white/80">
        <Hero />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
