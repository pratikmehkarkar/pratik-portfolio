"use client";

import { motion } from "framer-motion";
import type { PortfolioExperience } from "@/config/portfolio";

export function ExperienceSection({ experience }: { experience: PortfolioExperience[] }) {
  return (
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
  );
}
