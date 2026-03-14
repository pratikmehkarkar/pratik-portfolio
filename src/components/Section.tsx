"use client";

import { motion } from "framer-motion";

export function Section({
  id,
  title,
  subtitle,
  children
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
        {subtitle ? <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">{subtitle}</p> : null}
      </motion.div>
      {children}
    </section>
  );
}
