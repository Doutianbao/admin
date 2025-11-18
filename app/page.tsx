import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { ParticlesBackground } from "@/components/particles-background";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Testimonials } from "@/components/sections/testimonials";
import { LanguageProvider } from "@/lib/language-context";

export default function Home() {
  return (
    <LanguageProvider>
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar />
        <ScrollProgress />
        <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
          <Hero />
          <Skills />
          <Projects />
          <Testimonials />
        </main>
      </div>
    </LanguageProvider>
  );
}

