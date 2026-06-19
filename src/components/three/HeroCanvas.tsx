"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ParticleField } from "./ParticleField";

/**
 * Full-bleed WebGL canvas for the hero background.
 * - Lowers particle count on small / low-power devices.
 * - Clamps device pixel ratio to keep things smooth.
 * - Rendered only on the client (imported via next/dynamic, ssr:false).
 */
export function HeroCanvas() {
  const [count, setCount] = useState(4000);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const lowCores =
      typeof navigator !== "undefined" &&
      (navigator.hardwareConcurrency ?? 8) <= 4;
    setCount(isMobile || lowCores ? 1600 : 4000);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 14], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0 }}
    >
      <ParticleField count={count} />
    </Canvas>
  );
}

export default HeroCanvas;
