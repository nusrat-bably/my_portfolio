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

// The new invisible smooth scroll component
import SmoothScroll from '@/components/SmoothScroll';
// The Cat Companion (matching your exact folder structure)
import CatCompanion from '@/components/sections/CatCompanion';

// The server action to fetch data
import { getGuestbookEntries } from '@/actions/guestbook';

export default async function Home() {
  // Fetch approved guestbook entries securely on the server side
  const entries = await getGuestbookEntries();

  return (
    <main className="relative">
      {/* Invisible client component for scroll behavior */}
      <SmoothScroll />
      
      {/* Sections render unconditionally for all screen sizes */}
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ResearchSection />
      <SkillsSection />
      <EducationSection />
      <AchievementsSection />
      <ReferencesSection />
      
      {/* The new Guestbook Section */}
      <GuestbookSection initialEntries={entries} />
      
      {/* Footer always remains visible at the bottom */}
      <Footer />

      {/* Floating Interactive Cat Companion */}
      <CatCompanion />
    </main>
  );
}