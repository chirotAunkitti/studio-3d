"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { siteConfig } from "@/config/site.config";

function Particles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    const points = ref.current;
    if (!points) return;
    points.rotation.y += delta * 0.04;
    points.rotation.x += delta * 0.008;

    const { x, y } = state.pointer;
    points.position.x = THREE.MathUtils.lerp(points.position.x, x * 0.6, 0.04);
    points.position.y = THREE.MathUtils.lerp(points.position.y, y * 0.6, 0.04);
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color={siteConfig.theme.accentSecondary}
        sizeAttenuation
        transparent
        opacity={0.9}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function FloatingShape() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.15;
    ref.current.rotation.y += delta * 0.2;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshBasicMaterial
          color={siteConfig.theme.accent}
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>
    </Float>
  );
}

export function ParticleField({ count = 4000 }: { count?: number }) {
  return (
    <>
      <Particles count={count} />
      <FloatingShape />
    </>
  );
}

export default ParticleField;
