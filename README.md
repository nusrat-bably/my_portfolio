# Nusrat Jahan Bably Portfolio

Research-driven portfolio for Nusrat Jahan Bably, presenting software engineering, AI research, teaching experience, academic work, projects, and ways for visitors to connect.

This document describes the implementation currently in this repository as of September 2026. It is the source of truth for the portfolio application; older planning notes may describe an earlier version of the site.

## What The Site Contains

The main route (`/`) is a long-form portfolio experience with:

- A hero section with rotating focus messages, academic and professional highlights, a view counter, and a visual background.
- About content covering philosophy, working approach, values, and interests outside technology.
- Professional experience for research and teaching-assistant roles.
- Four featured projects with links, screenshots, technology labels, and a dedicated fuel-monitoring case study.
- A research archive for Bengali speech reconstruction, ShunoBondhu, and SmartBoardVision. Research posters open in an image viewer where available.
- A skills section covering software engineering, AI and data, design, programming languages, frameworks, databases, scientific tooling, and productivity tools.
- Academic background, including degree, CGPA, earlier academic results, and graduation date.
- Awards and achievements with image galleries and expandable proof images.
- Academic references with faculty details, email links, and downloadable letters of recommendation.
- A guestbook where visitors can leave an optional name and message. Submitted messages require approval before they are displayed.
- A kudos button that lets a visitor like or unlike the portfolio.
- A floating contact companion with social, email, phone, WhatsApp, and AI-assistant entry points.
- A contextual roaming developer-cat animation and other motion-based visual details.
- Footer navigation, social links, CV download, and current-year copyright text.

The `/fuel` route is a standalone case study for the Fuel Theft Detection & Consumption Monitoring System. It documents the problem, prototype and circuit design, hardware components, test evidence, and a demonstration video.

## Technology Stack

### Application

| Area | Technology | Evidence |
| --- | --- | --- |
| Framework | Next.js `^16.3.1`, App Router | `app/`, `next.config.js` |
| UI runtime | React `^19.0.0`, React DOM `^19.0.0` | `package.json` |
| Language | TypeScript `^5.3.0` | `.ts` and `.tsx` files, `tsconfig.json` |
| Styling | Tailwind CSS `^3.4.0` | `tailwind.config.js`, component class names |
| CSS processing | PostCSS `^8.4.0`, Autoprefixer `^10.4.0` | `postcss.config.js` |
| Animation | Framer Motion `^11.0.0` | section and interaction components |
| Images and media | Next Image plus native `img` and `video` elements | `app/`, `components/`, `public/` |
| Hosting target | Vercel-compatible Next.js deployment | `DEPLOYMENT.md`, footer copy |

### Server-side integrations

| Capability | Technology | Implementation |
| --- | --- | --- |
| Portfolio assistant | Google Gemini via `@google/genai` | `app/api/chat/route.ts` |
| Guestbook storage and moderation | Notion API via `@notionhq/client` | `actions/guestbook.ts` |
| Views and kudos counters | Upstash Redis via `@upstash/redis` | `app/api/views/route.ts`, `app/api/likes/route.ts` |
| Server mutations | Next.js Server Actions | `actions/guestbook.ts` |
| API responses | Next.js Route Handlers and `NextResponse` | `app/api/**/route.ts` |

### Configuration and development tools

- Node.js is required by Next.js, but the repository does not declare an `engines` version. The Node 20 type package is installed for development typings; it should not be treated as a formally enforced runtime version.
- TypeScript is configured in strict mode with the `@/*` path alias mapped to the repository root.
- `reactStrictMode` is enabled in `next.config.js`.
- The application is dark-mode-first and uses CSS variables plus Tailwind utilities. The implemented visual palette is charcoal/black with teal, emerald, slate, lavender, amber, and occasional magenta accents.
- No external font package is installed. The global stylesheet uses a system sans-serif fallback stack, while selected sections use Tailwind font utilities.

## Routes And Data Flow

```text
/                    App Router homepage
  -> server fetches approved guestbook entries from Notion
  -> renders portfolio sections and client interactions

/fuel                Embedded IoT project case study

/api/chat            POST: sends chat history to Gemini
/api/views           POST: increments portfolio-views in Upstash Redis
/api/likes           GET: reads count, POST: increments, DELETE: decrements
```

Guestbook submissions use a Server Action. New entries are written with `Approved: false`, so they do not appear publicly until approved in Notion. The homepage reads only approved entries and revalidates `/` after a submission.

Views and kudos are persisted in Redis. The counters are always updated when their endpoints are called, but public display is controlled independently through environment flags. The browser also stores a local `bably-portfolio-liked` marker to prevent a visitor from accidentally treating a refresh as a new local like.

The chatbot is opened from the contact companion through a browser custom event. It posts the current conversation to `/api/chat`; the server route supplies the portfolio-specific system instruction and calls Gemini. The Gemini API key remains server-side.

## Environment Variables

Create a local `.env.local` file for integrations that you want to enable. Do not commit it.

```env
# Gemini portfolio assistant
GEMINI_API_KEY=

# Notion guestbook
NOTION_API_KEY=
NOTION_DATABASE_ID=

# Upstash Redis for views and likes
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

# Optional compatibility names used by the likes route
KV_REST_API_URL=
KV_REST_API_TOKEN=

# Public visibility switches
SHOW_VIEW_COUNTER=false
SHOW_LIKE_COUNT=false
```

The guestbook silently returns an empty list when Notion variables are absent. Chat requires `GEMINI_API_KEY`. Redis-backed features require the relevant Upstash variables; the likes route also accepts the Vercel KV-compatible aliases shown above. Set the display switches to `true` only when the corresponding count should be rendered publicly.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The `/fuel` case study is available at [http://localhost:3000/fuel](http://localhost:3000/fuel).

Available scripts:

```bash
npm run dev         # Start the development server
npm run build       # Create a production build
npm run start       # Serve the production build
npm run type-check  # Run TypeScript without emitting files
npm run lint        # Invoke the configured Next lint script
```

The current package script uses `next lint`. Newer Next.js releases may no longer provide that command, so treat linting as a script that should be verified during dependency upgrades rather than as a guaranteed passing check.

## Repository Layout

```text
app/
  layout.tsx                 Root layout, metadata, navigation, global overlays
  page.tsx                   Homepage composition and server-side guestbook read
  globals.css                Tailwind layers, CSS variables, animations, utilities
  fuel/page.tsx              Fuel-monitoring case study
  api/chat/route.ts          Gemini assistant endpoint
  api/likes/route.ts         Redis-backed kudos endpoint
  api/views/route.ts         Redis-backed view endpoint
actions/guestbook.ts         Notion Server Actions and guestbook types
components/
  nav/                       Navigation and inline visual companions
  sections/                  Portfolio sections and interactive visual features
  PortfolioChatbot.tsx      Chat UI
  KudosButton.tsx            Like/unlike UI
  ViewCounter.tsx            Optional public view counter
  Footer.tsx                 Site footer and external links
lib/constants.ts             Shared constants, where applicable
public/                      CV, project images, posters, photos, tools, and video
```

The repository also contains `*orig.tsx` files that represent older component or route versions. They are not imported by the active App Router entry points and should be treated as historical references, not live application code.

## Content And Project Technology

The technologies shown in the project cards describe the showcased work, not dependencies of this portfolio shell:

- **BiblioTheca:** React, Spring Boot, Java, H2 Database, REST API.
- **Landlytics:** Laravel, PHP, MySQL, Tailwind CSS.
- **Medica DB:** React, Node.js, Socket.io, SQL.
- **Fuel Theft & Consumption Monitoring:** Arduino, C/C++, IoT sensors, Bluetooth.

The skills display additionally references Python, TensorFlow, PyTorch, Pandas, NumPy, Matplotlib, Git/GitHub, LaTeX, Canva, Jira, and Microsoft Office. These are portfolio content and assets; they are not all installed npm dependencies in this repository.

## Deployment Notes

The application can be deployed as a standard Next.js Node application or through Vercel:

1. Push the repository to a Git provider.
2. Import it into Vercel and keep the framework as Next.js.
3. Add the required environment variables in the deployment project settings.
4. Build with `npm run build` and serve with `npm run start` when self-hosting.

Do not use a static export if you need the Gemini route, Notion guestbook, or Redis counters. Those features require server execution. See [DEPLOYMENT.md](DEPLOYMENT.md) for the existing hosting notes and operational checklist.

## Verification

Before deploying content or integration changes:

```bash
npm run type-check
npm run build
```

Also verify the homepage, `/fuel`, guestbook submission, AI assistant, CV links, external project links, and mobile navigation in a browser. The integration features cannot be fully verified without valid Gemini, Notion, and Upstash credentials.

## Current Documentation Caveat

Some older files in the repository still contain earlier claims such as Next.js 15, electric indigo as the primary accent, three featured projects, six achievements, no database, and no third-party services. Those statements no longer describe the active implementation. This README intentionally documents the current source code and package manifest instead.
