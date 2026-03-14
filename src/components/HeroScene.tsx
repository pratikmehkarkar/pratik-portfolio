"use client";

import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { useGravityMode } from "@/components/GravityContext";

function CalmOrb({ gravityMode }: { gravityMode: boolean }) {
  const emissiveIntensity = gravityMode ? 0.45 : 0.25;

  return (
    <group rotation={[0.4, 0.3, 0]}>
      <Sphere args={[0.95, 20, 20]}>
        <meshStandardMaterial color="#6ee7ff" emissive="#5b7cfa" emissiveIntensity={emissiveIntensity} roughness={0.25} />
      </Sphere>
    </group>
  );
}

export function HeroScene() {
  const { gravityMode } = useGravityMode();
  const sceneClass = useMemo(
    () =>
      `h-[300px] w-full overflow-hidden rounded-3xl border border-white/10 bg-panel/70 shadow-glow md:h-[360px] ${
        gravityMode ? "animate-[pulse_5s_ease-in-out_infinite]" : ""
      }`,
    [gravityMode]
  );

  return (
    <div className={sceneClass}>
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 3.2], fov: 40 }} gl={{ antialias: false, powerPreference: "low-power" }}>
        <ambientLight intensity={0.65} />
        <directionalLight position={[1.5, 2, 2]} intensity={2.5} />
        <CalmOrb gravityMode={gravityMode} />
      </Canvas>
    </div>
  );
}
