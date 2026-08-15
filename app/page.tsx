'use client';

import { useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ResearchSection from '@/components/sections/ResearchSection';
import SkillsSection from '@/components/sections/SkillsSection';
import EducationSection from '@/components/sections/EducationSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import ReferencesSection from '@/components/sections/ReferencesSection';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Smooth scroll for anchor links - identical behavior across Mobile & Desktop
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target && target.getAttribute('href')?.startsWith('/#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.split('#')[1];
        
        if (id) {
          const element = document.getElementById(id);
          element?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <main className="relative">
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
      
      {/* Footer always remains visible at the bottom */}
      <Footer />
    </main>
  );
}