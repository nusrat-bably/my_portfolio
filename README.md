# Nusrat Jahan Bably — Research Engineering Portfolio

A premium, production-ready personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Designed as a research lab meets Apple-level product launch page.

## 🎯 Philosophy

This portfolio is not just a website—it's a **research-engineering identity system** that communicates depth, intelligence, and intentionality within 6 seconds. It balances minimal design with meaningful content, quiet confidence with technical credibility.

### Design Principles

- **Minimal but Expressive**: No noise, only signal
- **Calm & Intelligent**: Like a precision engineer designed this, not a designer trying to impress
- **Recruiter-Optimized Yet Artistic**: Showcases both engineering strength and research intelligence
- **Dark-Mode First**: Designed around sophisticated dark aesthetics with electric blue accents
- **Intentional Motion**: Micro-interactions that feel physical, never frivolous

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.3
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11
- **Deployment**: Vercel (ready to deploy)

## 📁 Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page with all sections
│   └── globals.css          # Global styles & design system
├── components/
│   ├── nav/
│   │   └── NavigationBar.tsx      # Sticky navigation
│   ├── sections/
│   │   ├── HeroSection.tsx        # Landing section with CTAs
│   │   ├── AboutSection.tsx       # Philosophy & values
│   │   ├── ExperienceSection.tsx  # Professional experience
│   │   ├── ProjectsSection.tsx    # Featured projects
│   │   ├── ResearchSection.tsx    # Ongoing research
│   │   ├── SkillsSection.tsx      # Technical capabilities
│   │   ├── EducationSection.tsx   # Academic background
│   │   └── AchievementsSection.tsx # Awards & recognition
│   └── Footer.tsx           # Footer with links & social
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

### Type Checking

```bash
npm run type-check
```

## 📋 Website Sections

### 1. **Navigation Bar** (Fixed)
- Sticky navigation with smooth scroll links
- Logo with gradient text effect
- "Get in Touch" CTA button
- Responsive design (hamburger on mobile)

### 2. **Hero Section**
- Eye-catching headline: "Nusrat Jahan Bably"
- Subtitle: "Full-Stack Developer · AI & Research Engineer"
- Hero message: "Building systems where intelligence meets usability"
- Three CTAs: View Projects, View Research, Contact
- Statistics: Projects, Research Papers, GPA
- Animated background gradient

### 3. **About Section**
- Philosophy statement
- Engineering approach & values
- 6 hobby categories with descriptions:
  - 🌿 Gardening
  - 📸 Photography
  - ✏️ Sketching & Journaling
  - 📚 Reading
  - ♟️ Chess
  - 🐾 Time with Pets

### 4. **Experience Section**
- Teaching Assistant & Grader role at United International University
- Detailed responsibilities and achievements
- Relevant skills tags

### 5. **Projects Section**
- 3 featured projects in case-study format:
  - **BiblioTheca**: AI-powered gamified library system
  - **Landlytics**: Intelligent land analytics platform
  - **Medica DB**: Medical workflow management system
- Each includes problem, approach, tech stack, highlights

### 6. **Research Section**
- 3 ongoing/completed research initiatives:
  - **Multimodal Speech Reconstruction**: Bengali stroke patients
  - **ShunoBondhu**: Voice assistive system
  - **SmartBoardVision**: Classroom enhancement system
- Status and key contributions

### 7. **Skills Section**
- 5 skill categories:
  - Programming Languages
  - Frameworks & Tools
  - AI & Data Science
  - Core Systems
  - Research

### 8. **Education Section**
- B.Sc. Computer Science & Engineering (UIU)
- CGPA: 3.90/4.00
- HSC: 4.83, SSC: 5.00
- Relevant coursework

### 9. **Achievements Section**
- 6 major achievements with icons:
  - FYDP Champion
  - Chess Champion
  - Academic Scholarships
  - National Debate Champion
  - Programming Contest Participant
  - Teaching Excellence

### 10. **Footer**
- About bio
- Quick navigation links
- Social media connections (GitHub, LinkedIn, Twitter, Email)
- Copyright and deployment info

## 🎨 Design System

### Color Palette
- **Background**: `#0a0a0a` (Deep Black)
- **Surface**: `#1a1a1a` (Dark Gray)
- **Text**: `#e5e5e5` (Off-White)
- **Text Secondary**: `#a0a0a0` (Light Gray)
- **Accent**: `#6366f1` (Electric Indigo)
- **Accent Light**: `#818cf8`
- **Accent Dark**: `#4f46e5`

### Typography
- **Font Family**: Inter / System fonts (for performance)
- **H1**: 5rem – 7rem (responsive)
- **H2**: 3rem – 5rem
- **Body**: 1rem – 1.125rem with 1.6 line height
- **Letter Spacing**: -0.02em on headings

### Spacing
- Consistent 16px grid
- Section padding: 20rem – 40rem (responsive)
- Component gaps: 1rem – 3rem

### Components
- **Glass Effect**: `backdrop-filter: blur(10px)` with semi-transparent borders
- **Buttons**: Primary (indigo bg) and Secondary (outlined)
- **Cards**: Glass effect with hover animations
- **Inputs**: Styled with focus states

## ✨ Interactive Features

### Animations
- **Fade In Up**: Sections fade in as they scroll into view
- **Staggered Children**: Child elements animate with delays
- **Smooth Scroll**: Anchor links scroll smoothly
- **Hover States**: Subtle depth and color changes
- **Micro-interactions**: Button hovers, card elevations
- **Scroll Indicators**: Arrow animates on hero

### Performance
- Code splitting (automatic with Next.js)
- Image optimization
- CSS-in-JS (via Tailwind)
- Lazy loaded components

## 🔧 Customization Guide

### Update Personal Info
Edit the content in each section component:
```typescript
// components/sections/HeroSection.tsx
<h1>Your Name</h1>
<p>Your tagline</p>
```

### Change Color Scheme
Update `tailwind.config.js`:
```javascript
accent: '#your-color',
'accent-light': '#lighter-variant',
```

### Add/Remove Sections
Edit `app/page.tsx` to include/exclude sections:
```typescript
<HeroSection />
<AboutSection />
// Remove sections you don't need
```

### Update Projects
Modify the `projects` array in `ProjectsSection.tsx`

### Social Links
Update footer links in `components/Footer.tsx`:
```typescript
{ label: 'GitHub', href: 'your-github-url', icon: 'GH' }
```

## 📱 Responsive Design

- **Mobile**: 320px+ (stacked layout)
- **Tablet**: 768px+ (2-column grids)
- **Desktop**: 1024px+ (3-column grids, full spacing)

All sections adapt gracefully with Tailwind's responsive prefixes (`md:`, `lg:`).

## 🚢 Deployment

### Deploy to Vercel

1. Push to GitHub:
```bash
git add .
git commit -m "Initial portfolio"
git push origin main
```

2. Import project to [Vercel](https://vercel.com):
   - Connect your GitHub account
   - Select this repository
   - Click Deploy

3. Domain setup (optional):
   - Add custom domain in Vercel settings

### Deploy Elsewhere

Build the optimized production bundle:
```bash
npm run build
npm run start
```

Then deploy the `.next` folder to your hosting provider.

## 🔍 SEO & Meta Tags

Already configured with:
- Open Graph tags for social sharing
- Proper meta descriptions
- Keyword optimization
- Structured metadata

Customizable in `app/layout.tsx`

## 📊 Bundle Analysis

Production bundle size:
- HTML: ~45 KB
- JavaScript: ~148 KB (including React, Next.js, Framer Motion)
- Total: Well under 300 KB (highly optimized)

## 🐛 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**TypeScript errors?**
```bash
npm run type-check
```

**Build fails?**
```bash
rm -rf .next
npm run build
```

## 📝 License

Built with intention by Nusrat Jahan Bably. Free to use and customize.

---

**Built with**: Next.js, TypeScript, Tailwind CSS, Framer Motion  
**Designed as**: A calm, deeply intelligent engineer's personal identity system  
**Ready for**: Immediate deployment on Vercel

✨ **"Building systems where intelligence meets usability."**

© 2026 Nusrat Jahan Bably. All rights reserved.
This repository is publicly available for viewing and educational/reference purposes. Reuse, redistribution, or reproduction of the design or source code without permission is not permitted.
