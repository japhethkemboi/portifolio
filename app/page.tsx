import Image from "next/image";
import Hero from "./components/hero";
import Nav from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </main>
  );
}
