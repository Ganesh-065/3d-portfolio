import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera, Environment, Float } from "@react-three/drei";
import type { Mesh, Group } from "three";
import { gsap } from "gsap";
import { useTheme } from "../utils/ThemeContext";

// Abstract geometric shape component
type GeometricShapeProps = {
  position: [number, number, number];
  rotation?: [number, number, number];
  color: string;
  scale?: number;
};

const GeometricShape = ({
  position,
  rotation = [0, 0, 0], // Default rotation
  color,
  scale = 1,
}: GeometricShapeProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Gentle floating animation
    meshRef.current.rotation.x =
      Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    meshRef.current.rotation.y =
      Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <icosahedronGeometry args={[scale, 0]} />
      <meshStandardMaterial color={color} metalness={0.5} roughness={0.2} />
    </mesh>
  );
};

// Main 3D scene component
export const LandingScene = ({ scrollY = 0 }: { scrollY?: number }) => {
  const { theme } = useTheme();
  const groupRef = useRef<Group>(null);
  // const { viewport } = useThree();

  // Handle scroll effect
  useEffect(() => {
    if (!groupRef.current) return;
    gsap.to(groupRef.current.rotation, {
      y: scrollY * 0.01,
      duration: 0.8,
      ease: "power1.out",
    });
  }, [scrollY]);

  // Mouse interaction effect
  useFrame(({ pointer, viewport }) => {
    if (!groupRef.current) return;
    const x = (pointer.x * viewport.width) / 50;
    const y = (pointer.y * viewport.height) / 50;

    gsap.to(groupRef.current.rotation, {
      x: -y,
      y: x,
      duration: 1,
      ease: "power2.out",
    });
  });

  const primaryColor = theme === "dark" ? "#d4d4d8" : "#27272a";
  const secondaryColor = theme === "dark" ? "#3b82f6" : "#2563eb";
  const accentColor = theme === "dark" ? "#ec4899" : "#db2777";

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
      <Environment preset="city" />

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      <group ref={groupRef}>
        <Float speed={2} rotationIntensity={0.4} floatIntensity={0.4}>
          <GeometricShape
            position={[0, 0, 0]}
            color={primaryColor}
            scale={1.5}
          />
          <GeometricShape
            position={[2, 1, -2]}
            color={secondaryColor}
            scale={0.8}
          />
          <GeometricShape
            position={[-2, -1, -1]}
            color={accentColor}
            scale={1.2}
          />
          <GeometricShape
            position={[-1.5, 1.5, -3]}
            color={primaryColor}
            scale={0.6}
          />
          <GeometricShape
            position={[1.5, -2, -2]}
            color={secondaryColor}
            scale={0.7}
          />
        </Float>
      </group>
    </>
  );
};

export default LandingScene;
