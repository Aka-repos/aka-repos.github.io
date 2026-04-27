import "@/styles/portfolio.css";
import { LangProvider } from "@/contexts/LangContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CustomCursor } from "@/components/cursor/CustomCursor";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Repos } from "@/components/sections/Repos";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";

function Portfolio() {
  useScrollReveal();

  return (
    <>
      {/* Global smoke — fixed behind all sections */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SmokeBackground smokeColor="#a1a1a1" />
      </div>

      <div className="relative" style={{ zIndex: 1 }}>
        <CustomCursor />
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Repos />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <LangProvider>
      <Portfolio />
    </LangProvider>
  );
}

export default App;
