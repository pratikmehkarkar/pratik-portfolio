"use client";

import { createContext, useContext, useMemo, useState } from "react";

type GravityContextType = {
  gravityMode: boolean;
  toggleGravityMode: () => void;
};

const GravityContext = createContext<GravityContextType | undefined>(undefined);

export function GravityProvider({ children }: { children: React.ReactNode }) {
  const [gravityMode, setGravityMode] = useState(false);

  const value = useMemo(
    () => ({
      gravityMode,
      toggleGravityMode: () => setGravityMode((prev) => !prev)
    }),
    [gravityMode]
  );

  return <GravityContext.Provider value={value}>{children}</GravityContext.Provider>;
}

export function useGravityMode() {
  const context = useContext(GravityContext);

  if (!context) {
    throw new Error("useGravityMode must be used inside GravityProvider");
  }

  return context;
}
