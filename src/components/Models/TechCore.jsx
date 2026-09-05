import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

// Original, lightweight scene: an orbiting "tech core" made of simple
// primitives instead of a heavy imported GLB model. No textures, no
// postprocessing, no external assets to fetch — keeps the hero fast.

const ORBIT_ITEMS = [
  { color: "#61DAFB", radius: 3.1, speed: 0.4, size: 0.26, tilt: 0.9 }, // React
  { color: "#F7DF1E", radius: 3.7, speed: -0.3, size: 0.22, tilt: -1.1 }, // JS
  { color: "#3C873A", radius: 4.3, speed: 0.24, size: 0.27, tilt: 0.6 }, // Node
  { color: "#336791", radius: 4.9, speed: -0.34, size: 0.24, tilt: -0.7 }, // SQL
  { color: "#38BDF8", radius: 5.5, speed: 0.2, size: 0.2, tilt: 1.2 }, // Cloud
];

function OrbitNode({ color, radius, speed, size, tilt }) {
  const ref = useRef();
  const angle = useRef(Math.random() * Math.PI * 2);

  useFrame((_, delta) => {
    angle.current += speed * delta;
    const x = Math.cos(angle.current) * radius;
    const z = Math.sin(angle.current) * radius;
    const y = Math.sin(angle.current * 1.4) * tilt;
    if (ref.current) ref.current.position.set(x, y, z);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 12, 12]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.55}
        roughness={0.35}
        metalness={0.1}
      />
    </mesh>
  );
}

function Particles({ count = 180 }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 8 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#839cb5"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

export function TechCore() {
  const coreRef = useRef();
  const shellRef = useRef();

  useFrame((_, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.18;
      coreRef.current.rotation.x += delta * 0.04;
    }
    if (shellRef.current) {
      shellRef.current.rotation.y -= delta * 0.08;
    }
  });

  return (
    <group>
      <Particles />

      {/* wireframe core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshStandardMaterial
          color="#0e0e10"
          emissive="#7209b7"
          emissiveIntensity={0.45}
          wireframe
        />
      </mesh>

      {/* soft inner glow shell */}
      <mesh ref={shellRef}>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshStandardMaterial
          color="#4cc9f0"
          emissive="#4cc9f0"
          emissiveIntensity={0.4}
          transparent
          opacity={0.18}
        />
      </mesh>

      {ORBIT_ITEMS.map((item, i) => (
        <OrbitNode key={i} {...item} />
      ))}
    </group>
  );
}
