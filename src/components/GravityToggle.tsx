"use client";

import { motion } from "framer-motion";
import { useGravityMode } from "@/components/GravityContext";

export function GravityToggle() {
  const { gravityMode, toggleGravityMode } = useGravityMode();

  return (
    <button
      type="button"
      onClick={toggleGravityMode}
      aria-pressed={gravityMode}
      className="fixed bottom-6 right-6 z-40 rounded-full border border-white/20 bg-slate-900/80 px-4 py-2 text-xs text-white backdrop-blur hover:border-accent/60"
    >
      <span className="mr-2">Gravity Mode</span>
      <motion.span animate={{ color: gravityMode ? "#6ee7ff" : "#94a3b8" }}>{gravityMode ? "ON" : "OFF"}</motion.span>
    </button>
  );
}
