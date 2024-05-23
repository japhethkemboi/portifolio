import Image from "next/image";
import Hero from "./components/hero";
import Nav from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <section className="overflow-y-scroll snap-y h-screen snap-mandatory">
        <Hero />
        <About />
        <Projects />
      </section>
    </main>
  );
}
