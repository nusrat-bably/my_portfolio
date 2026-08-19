import SmoothScroll from '@/components/SmoothScroll';
import CatCompanion from '@/components/sections/CatCompanion';

import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ResearchSection from '@/components/sections/ResearchSection';
import SkillsSection from '@/components/sections/SkillsSection';
import EducationSection from '@/components/sections/EducationSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import ReferencesSection from '@/components/sections/ReferencesSection';
import GuestbookSection from '@/components/sections/GuestbookSection';
import Footer from '@/components/Footer';

// The server action to fetch data
import { getGuestbookEntries } from '@/actions/guestbook';

export default async function Home() {
  // Fetch approved guestbook entries securely on the server side
  const entries = await getGuestbookEntries();

  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white">
      {/* Invisible client component for smooth scroll behavior */}
      <SmoothScroll />
      
      {/* Core Portfolio Sections */}
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ResearchSection />
      <SkillsSection />
      <EducationSection />
      <AchievementsSection />
      <ReferencesSection />
      
      {/* Interactive Guestbook */}
      <GuestbookSection initialEntries={entries} />
      
      {/* Global Footer */}
      <Footer />

      {/* Floating Interactive Cat Companion */}
      <CatCompanion />
    </main>
  );
}