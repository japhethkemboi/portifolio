import Image from "next/image";
import Hero from "./components/hero";
import Nav from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Nav />
      <section
        className="overflow-y-scroll scroll-smooth snap snap-y h-screen"
        style={{ scrollSnapType: "y mandatory" }}
      >
        <Hero />
        <About />
        <Projects />
      </section>
    </main>
  );
}
