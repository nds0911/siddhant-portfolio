import { Background3D } from "./components/Background3D";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About, Education } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Achievements } from "./components/Achievements";
import { Contact, Footer } from "./components/Contact";

export default function App() {
  return (
    <>
      <Background3D />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
