import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/sections/HeroSection/HeroSection";
import { AboutSection } from "@/sections/AboutSection/AboutSection";
import { SkillsSection } from "@/sections/SkillsSection/SkillsSection";
import { ExperienceSection } from "@/sections/ExperienceSection/ExperienceSection";
import { ProjectsSection } from "@/sections/ProjectsSection/ProjectsSection";
import { ContactSection } from "@/sections/ContactSection/ContactSection";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 grid-bg pointer-events-none -z-10"></div>
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
