"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

type Props = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export function MagneticButton({ href, label, variant = "primary" }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 140, damping: 10 });
  const springY = useSpring(y, { stiffness: 140, damping: 10 });

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const dx = event.clientX - (rect.left + rect.width / 2);
        const dy = event.clientY - (rect.top + rect.height / 2);
        x.set(dx * 0.15);
        y.set(dy * 0.2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="inline-block"
    >
      <Link
        href={href}
        className={`rounded-full px-6 py-3 text-sm font-medium transition duration-300 ${
          variant === "primary"
            ? "bg-white text-slate-900 hover:bg-accent hover:text-slate-950"
            : "border border-white/25 bg-white/5 text-white hover:border-accent/70 hover:bg-accent/10"
        }`}
      >
        {label}
      </Link>
    </motion.div>
  );
}
