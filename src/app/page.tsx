import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectShowcase from "@/components/ProjectShowcase";
import WritingAndSpeaking from "@/components/WritingAndSpeaking";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="flex flex-col gap-0">
        <HeroSection />
        <AboutSection />
        <ExperienceTimeline />
        <ProjectShowcase />
        <WritingAndSpeaking />
        <SkillsSection />
        <ContactSection />
      </div>
    </div>
  );
}
