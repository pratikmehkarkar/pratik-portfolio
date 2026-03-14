"use client";

import { useEffect, useRef, useState } from "react";

export function LazyRender({ children, minHeight = 240 }: { children: React.ReactNode; minHeight?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hostRef.current || isVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "180px" }
    );

    observer.observe(hostRef.current);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div ref={hostRef} style={{ minHeight: isVisible ? undefined : minHeight }}>
      {isVisible ? children : <div className="h-full w-full animate-pulse rounded-2xl border border-white/10 bg-panel/50" />}
    </div>
  );
}
