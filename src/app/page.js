import Navbar from "./compenents/Navbar";
import Hero from "./compenents/Hero";
import About from "./compenents/About";
import Skills from "./compenents/Skills";
import Projects from "./compenents/Projects";
import Contact from "./compenents/Contact";
import Footer from "./compenents/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-blue-primary">
      <Navbar />
      <div>
        <Hero />
        <div className="mx-auto py-4 px-12">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </main>
  );
}
