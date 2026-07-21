import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Group, Mesh } from "three";

function WireframeScene() {
  const groupRef = useRef<Group>(null);
  const outerRef = useRef<Mesh>(null);
  const innerRef = useRef<Mesh>(null);
  const ringRef = useRef<Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.04;
    }
    if (outerRef.current) {
      outerRef.current.rotation.x = t * 0.06;
      outerRef.current.rotation.z = t * 0.03;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -t * 0.05;
      innerRef.current.rotation.y = t * 0.07;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2 + Math.sin(t * 0.2) * 0.15;
      ringRef.current.rotation.z = t * 0.02;
    }
  });

  return (
    <group ref={groupRef} position={[1.5, 0.2, 0]}>
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[3.4, 1]} />
        <meshBasicMaterial color="#c49a3c" wireframe transparent opacity={0.11} />
      </mesh>

      <mesh ref={innerRef}>
        <octahedronGeometry args={[2.1, 0]} />
        <meshBasicMaterial color="#8fa3c7" wireframe transparent opacity={0.07} />
      </mesh>

      <mesh ref={ringRef}>
        <torusGeometry args={[2.8, 0.02, 12, 96]} />
        <meshBasicMaterial color="#c49a3c" transparent opacity={0.14} />
      </mesh>
    </group>
  );
}

function SecondaryShape() {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * 0.04;
    ref.current.rotation.y = t * 0.06;
  });

  return (
    <mesh ref={ref} position={[-3.2, -1.2, -2]}>
      <dodecahedronGeometry args={[1.4, 0]} />
      <meshBasicMaterial color="#6b7f9e" wireframe transparent opacity={0.05} />
    </mesh>
  );
}

export function Background3D() {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(!media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-80 light:opacity-50"
    >
      <Canvas
        camera={{ position: [0, 0, 9], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      >
        <Suspense fallback={null}>
          <WireframeScene />
          <SecondaryShape />
        </Suspense>
      </Canvas>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,transparent_0%,rgba(10,15,26,0.55)_55%,rgba(10,15,26,0.92)_100%)] light:bg-[radial-gradient(circle_at_30%_20%,transparent_0%,rgba(248,250,252,0.4)_55%,rgba(248,250,252,0.88)_100%)]" />
    </div>
  );
}
