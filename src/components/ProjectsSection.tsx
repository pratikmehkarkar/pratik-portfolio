"use client";

import { ProjectCard } from "@/components/ProjectCard";
import type { PortfolioProject } from "@/config/portfolio";

export function ProjectsSection({ projects }: { projects: PortfolioProject[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </div>
  );
}
