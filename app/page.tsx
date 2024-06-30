import Hero from "./components/hero";
import Header from "./components/header";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main
      className="flex flex-col bg-cover bg-no-repeat h-screen overflow-y-scroll overflow-x-hidden"
      style={{
        backgroundImage: `url("/images/ikhlas-rahman-EWimyN-lBmQ-unsplash.jpg")`,
      }}
    >
      <div className="flex flex-col bg-white/80 backdrop-blur">
        <Header />
        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
