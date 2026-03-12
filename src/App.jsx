import Navbar     from "./sections/Navbar";
import Hero3D     from "./sections/Hero3D";
import About      from "./sections/About";
import Skills     from "./sections/Skills";
import Projects   from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact    from "./sections/Contact";
import Footer     from "./sections/Footer";
import { ThemeProvider } from "./context/ThemeContext";

function GlobalBackground() {
  return (
    <div className="global-bg">
      <div className="global-bg-glow" />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <GlobalBackground />
      <Navbar />
      <Hero3D />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}