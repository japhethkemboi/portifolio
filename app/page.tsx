import Image from "next/image";
import Hero from "./components/hero";
import Nav from "./components/navbar";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <section id="home">
        <Hero />
      </section>
      <section id="about"></section>
      <section id="projects"></section>
    </main>
  );
}
