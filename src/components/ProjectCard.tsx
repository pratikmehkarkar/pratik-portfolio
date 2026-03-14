"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  stack: string[];
  impact: string;
  links: {
    github: string;
    caseStudy: string;
    demo: string;
  };
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
    >
      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-2 text-sm text-slate-300">{project.summary}</p>

      <div className="mt-4 space-y-3 text-sm text-slate-300">
        <p>
          <span className="font-medium text-slate-100">Challenge:</span> {project.challenge}
        </p>
        <p>
          <span className="font-medium text-slate-100">Solution:</span> {project.solution}
        </p>
        <p>
          <span className="font-medium text-slate-100">Impact:</span> {project.impact}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs text-accent">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-4 text-sm">
        <a className="text-accent hover:text-white" href={project.links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="text-slate-300 hover:text-white" href={project.links.caseStudy}>
          Case Study
        </a>
        <a className="text-slate-300 hover:text-white" href={project.links.demo}>
          Demo
        </a>
      </div>
    </motion.article>
  );
}
