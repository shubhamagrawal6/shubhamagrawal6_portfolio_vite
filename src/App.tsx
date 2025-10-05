import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import icebergImage from 'app:asset/icebergBackground.png';

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Scrolling Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={icebergImage}
          alt="Iceberg background"
          className="w-full h-full object-cover"
          style={{
            imageRendering: '-webkit-optimize-contrast',
            imageRendering: 'crisp-edges',
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
