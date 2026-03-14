"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { GravityProvider } from "@/components/GravityContext";
import { GravityToggle } from "@/components/GravityToggle";
import { MagneticButton } from "@/components/MagneticButton";
import { ProjectCard } from "@/components/ProjectCard";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Section } from "@/components/Section";
import { TechOrbit } from "@/components/TechOrbit";
import { experience, exploring, personalInfo, projects, techStack } from "@/config/portfolio";

const HeroScene = dynamic(() => import("@/components/HeroScene").then((mod) => mod.HeroScene), {
  ssr: false,
  loading: () => <div className="h-[340px] w-full animate-pulse rounded-3xl border border-white/10 bg-panel/70 md:h-[420px]" />
});

export default function Home() {
  return (
    <GravityProvider>
      <ScrollProgress />
      <main className="relative overflow-hidden bg-hero-grid pb-20">
        <GravityToggle />

        <section className="mx-auto grid min-h-screen w-full max-w-6xl items-center gap-10 px-6 py-24 md:grid-cols-2 md:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent">Portfolio</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl">{personalInfo.name}</h1>
            <h2 className="mt-3 text-xl font-medium text-slate-200 md:text-2xl">{personalInfo.title}</h2>
            <p className="mt-6 max-w-xl text-base text-slate-300 md:text-lg">{personalInfo.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <MagneticButton href="#projects" label="View Projects" />
              <MagneticButton href="#contact" label="Contact Me" variant="secondary" />
              <MagneticButton href={personalInfo.resume} label="Download Resume" variant="secondary" />
            </div>
          </div>
          <HeroScene />
        </section>

        <Section
          id="about"
          title="About Me"
          subtitle="Enterprise Android engineer with an applied-AI and cloud-builder mindset."
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-slate-300 md:p-8">
            <p>
              I design and ship reliable Android workflows for enterprise operations, with strong hands-on experience in CameraX capture
              pipelines, VIN/barcode scanning with ML Kit, and dynamic JSON-driven experiences backed by Firestore and Room DB.
            </p>
            <p className="mt-4">
              Alongside mobile development, I build practical AI and cloud-connected concepts—from damage annotation assistants to telemetry
              systems on Azure Event Hubs—focused on solving real operational friction with clean architecture and product thinking.
            </p>
          </div>
        </Section>

        <Section id="stack" title="Tech Stack" subtitle="Core technologies grouped by product impact areas.">
          <TechOrbit groups={techStack} />
        </Section>

        <Section id="projects" title="Featured Projects" subtitle="Selected work across mobile, AI, and cloud integrations.">
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience / Journey" subtitle="Production delivery, enterprise context, and continuous cross-stack growth.">
          <div className="space-y-6">
            {experience.map((item) => (
              <motion.article
                key={item.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                  <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                  <span className="text-sm uppercase tracking-[0.18em] text-accent">{item.period}</span>
                </div>
                <p className="mt-3 text-slate-300">{item.focus}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="exploring" title="What I’m Building / Exploring">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {exploring.map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-white/10 bg-panel/60 p-5 text-sm text-slate-200"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          title="Let’s Build Something Impactful"
          subtitle="Open to conversations with recruiters, engineering leaders, and product teams building intelligent systems."
        >
          <div className="rounded-2xl border border-accent/25 bg-accent/5 p-8">
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-200">
              <a href={`mailto:${personalInfo.email}`} className="hover:text-accent">
                {personalInfo.email}
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
                LinkedIn
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-accent">
                GitHub
              </a>
            </div>
          </div>
        </Section>

        <footer className="mx-auto mt-10 w-full max-w-6xl px-6 py-10 text-xs text-slate-400 md:px-8">
          © {new Date().getFullYear()} {personalInfo.name}. Crafted for modern mobile + AI + cloud opportunities.
        </footer>
      </main>
    </GravityProvider>
  );
}
