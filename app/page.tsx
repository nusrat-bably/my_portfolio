'use client';

import { useState, useEffect } from 'react';
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
  // State to track which single section is selected ('all' shows everything)
  const [activeSection, setActiveSection] = useState<string>('all');

  useEffect(() => {
    // Smooth scroll for anchor links & handle single-section isolation for mobile
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target && target.getAttribute('href')?.startsWith('/#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.split('#')[1];
        
        if (id) {
          // If on mobile (screen width < 1024), isolate the section view
          if (window.innerWidth < 1024) {
            setActiveSection(id);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            // On desktop, keep normal smooth scrolling behavior across the full page
            setActiveSection('all');
            const element = document.getElementById(id);
            element?.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <main className="relative">
      {/* Mobile Reset Bar: Shows when a single section is isolated, allowing the user to view everything again */}
      {activeSection !== 'all' && (
        <div className="lg:hidden sticky top-20 z-30 px-4 py-3 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
            Viewing: {activeSection}
          </span>
          <button
            onClick={() => setActiveSection('all')}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
          >
            Show All Sections
          </button>
        </div>
      )}

      {/* Sections render conditionally based on mobile isolation state */}
      {(activeSection === 'all' || activeSection === 'hero') && <HeroSection />}
      {(activeSection === 'all' || activeSection === 'about') && <AboutSection />}
      {(activeSection === 'all' || activeSection === 'experience') && <ExperienceSection />}
      {(activeSection === 'all' || activeSection === 'projects') && <ProjectsSection />}
      {(activeSection === 'all' || activeSection === 'research') && <ResearchSection />}
      {(activeSection === 'all' || activeSection === 'skills') && <SkillsSection />}
      {(activeSection === 'all' || activeSection === 'education') && <EducationSection />}
      {(activeSection === 'all' || activeSection === 'achievements') && <AchievementsSection />}
      {(activeSection === 'all' || activeSection === 'references') && <ReferencesSection />}
      
      {/* Footer always remains visible at the bottom */}
      <Footer />
    </main>
  );
}