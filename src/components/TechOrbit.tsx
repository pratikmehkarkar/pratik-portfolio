"use client";

import { motion } from "framer-motion";
import { useGravityMode } from "@/components/GravityContext";

type Group = {
  category: string;
  items: string[];
};

export function TechOrbit({ groups }: { groups: Group[] }) {
  const { gravityMode } = useGravityMode();

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {groups.map((group, idx) => (
        <motion.div
          key={group.category}
          whileHover={{ y: -6, scale: 1.01 }}
          animate={
            gravityMode
              ? {
                  y: [0, -8, 0, 8, 0],
                  rotate: [0, 0.6, -0.8, 0]
                }
              : { y: 0, rotate: 0 }
          }
          transition={{ duration: 5 + idx, repeat: gravityMode ? Number.POSITIVE_INFINITY : 0 }}
          className="rounded-2xl border border-white/10 bg-panel/80 p-6"
        >
          <h3 className="text-lg font-medium text-white">{group.category}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span key={item} className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-200">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
