"use client";

import { Float, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Orb({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.2}>
      <Sphere args={[0.45, 32, 32]} position={position}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.35} roughness={0.1} />
      </Sphere>
    </Float>
  );
}

export function HeroScene() {
  return (
    <div className="h-[340px] w-full overflow-hidden rounded-3xl border border-white/10 bg-panel/70 shadow-glow md:h-[420px]">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[4, 4, 4]} intensity={80} />
        <Orb position={[-1.4, 0.5, 0]} color="#6ee7ff" />
        <Orb position={[1.2, -0.6, -0.5]} color="#9f7aea" />
        <Orb position={[0, 1.2, -0.8]} color="#5b7cfa" />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.4} enablePan={false} />
      </Canvas>
    </div>
  );
}
