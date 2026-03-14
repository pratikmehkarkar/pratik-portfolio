# Pratik Mehkarkar Portfolio

Premium Next.js portfolio focused on **Android + AI + Cloud** engineering work, with tasteful anti-gravity interactions and recruiter-friendly readability.

## Tech Stack
- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- Framer Motion
- React Three Fiber / Three.js (single lightweight hero scene)

## Performance + Vercel Hobby Readiness
- One minimal WebGL scene only (`HeroScene`) with low-power renderer settings.
- Heavy sections are lazy-rendered via intersection observer to keep initial load small.
- Client-heavy sections are code-split with `next/dynamic`.
- No paid backend dependencies required; this is a fully static/content-driven portfolio.
- Works on Vercel Hobby with default Next.js settings (no add-ons needed).

## Run Locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000`

## Deploy to Vercel
1. Push this repo to GitHub.
2. Import the repo in Vercel.
3. Framework preset: **Next.js** (auto-detected).
4. Build command: `npm run build`
5. Output: `.next`
6. Deploy.

## Folder Structure
```text
src/
  app/
    layout.tsx             # global metadata + layout
    page.tsx               # page composition and lazy-loaded sections
    globals.css            # global styling and premium dark theme
  components/
    ExperienceSection.tsx  # isolated experience timeline section
    GravityContext.tsx     # gravity mode state
    GravityToggle.tsx      # floating toggle button
    HeroScene.tsx          # single lightweight 3D hero visual
    LazyRender.tsx         # intersection-observer lazy render wrapper
    MagneticButton.tsx     # magnetic hover CTA buttons
    ProjectCard.tsx        # reusable project card
    ProjectsSection.tsx    # isolated projects grid section
    ScrollProgress.tsx     # scroll progress indicator
    Section.tsx            # reusable animated section wrapper
    TechOrbit.tsx          # motion-enabled stack grid
  config/
    portfolio.ts           # all customizable personal/project content
public/
  favicon.ico
  resume-placeholder.pdf
```

## Where to Customize
Update all personal details in:
- `src/config/portfolio.ts`

### Specifically update these keys
- Email: `personalInfo.email`
- GitHub profile: `personalInfo.github`
- LinkedIn profile: `personalInfo.linkedin`
- Resume URL/file: `personalInfo.resume`
- Project links: each `projects[].links`

## Launch Checklist
- [ ] Replace placeholder email, GitHub, and LinkedIn URLs.
- [ ] Replace `public/resume-placeholder.pdf` with actual resume.
- [ ] Update project case study/demo links.
- [ ] Add real favicon in `public/favicon.ico`.
- [ ] Run `npm run build` successfully.
- [ ] Deploy to Vercel and verify mobile responsiveness.
- [ ] Check accessibility labels and keyboard navigation.
