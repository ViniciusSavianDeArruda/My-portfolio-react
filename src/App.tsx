import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import BackToTop from "./components/ui/BackToTop";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";

export default function App() {
  return (
    <div className="bg-bg min-h-screen text-neutral-300 font-mono">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
