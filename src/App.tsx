import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Education from "./components/sections/Formation";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";

export default function App() {
  return (
    <div className="bg-[#080808] min-h-screen text-[#00FF41] font-mono">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
