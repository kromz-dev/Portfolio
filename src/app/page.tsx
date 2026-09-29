import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Projects } from "@/components/projects";
import { Parcours } from "@/components/parcours";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Projects />
        <About />
        <Parcours />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
