"use client";
// @ts-nocheck

import { useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial, Sphere, Box, useTexture, RoundedBox, Cylinder, Torus } from "@react-three/drei";
import * as THREE from "three";

interface HandbagModelProps {
    mousePosition: { x: number; y: number };
}

function HandbagModel({ mousePosition }: HandbagModelProps) {
    const meshRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (meshRef.current) {
            // Very slow, constant majestic rotation
            meshRef.current.rotation.y += 0.002;

            // Subtle mouse influence (damped heavily for "weight")
            meshRef.current.rotation.x = THREE.MathUtils.lerp(
                meshRef.current.rotation.x,
                mousePosition.y * 0.05,
                0.03
            );
            meshRef.current.rotation.z = THREE.MathUtils.lerp(
                meshRef.current.rotation.z,
                -mousePosition.x * 0.05,
                0.03
            );
        }
    });

    return (
        <Float
            speed={1.5} // Slower float for "heaviness"
            rotationIntensity={0.2}
            floatIntensity={0.4}
        >
            <group ref={meshRef}>
                {/* --- Main Body --- */}
                {/* Increased metalness slightly for a sheen, reduced roughness for polished leather look */}
                <RoundedBox args={[2.2, 1.6, 0.8]} radius={0.1} smoothness={4} position={[0, -0.2, 0]}>
                    <meshStandardMaterial
                        color="#0F0F0F"
                        roughness={0.25}
                        metalness={0.4}
                    />
                </RoundedBox>

                {/* --- Flap --- */}
                <RoundedBox args={[2.25, 1.0, 0.85]} radius={0.05} smoothness={4} position={[0, 0.2, 0.05]}>
                    <meshStandardMaterial
                        color="#0A0A0A"
                        roughness={0.2}
                        metalness={0.5}
                    />
                </RoundedBox>

                <RoundedBox args={[2.25, 0.2, 0.85]} radius={0.05} smoothness={4} position={[0, 0.7, 0.05]}>
                    <meshStandardMaterial
                        color="#0A0A0A"
                        roughness={0.2}
                        metalness={0.5}
                    />
                </RoundedBox>


                {/* --- Handle --- */}
                <group position={[0, 0.8, 0]}>
                    <mesh>
                        <torusGeometry args={[0.7, 0.06, 16, 48, Math.PI]} />
                        <meshStandardMaterial
                            color="#050505"
                            roughness={0.1}
                            metalness={0.6}
                        />
                    </mesh>

                    {/* Handle attachments (Gold rings) - High polish */}
                    <mesh position={[-0.7, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                        <torusGeometry args={[0.1, 0.02, 16, 32]} />
                        <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.05} />
                    </mesh>
                    <mesh position={[0.7, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                        <torusGeometry args={[0.1, 0.02, 16, 32]} />
                        <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.05} />
                    </mesh>
                </group>

                {/* --- Hardware / Accents --- */}

                {/* Clasp (Gold) */}
                <RoundedBox args={[0.4, 0.2, 0.1]} radius={0.02} smoothness={2} position={[0, -0.2, 0.5]}>
                    <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.05} />
                </RoundedBox>

                {/* Vertical Strap Detail */}
                <RoundedBox args={[0.3, 1.2, 0.05]} radius={0.01} smoothness={2} position={[0, -0.2, 0.45]}>
                    <meshStandardMaterial
                        color="#050505"
                        roughness={0.3}
                        metalness={0.2}
                    />
                </RoundedBox>

                {/* Logo Plate */}
                <mesh position={[0, 0.3, 0.5]}>
                    <boxGeometry args={[0.3, 0.08, 0.02]} />
                    <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} />
                </mesh>

            </group>
        </Float>
    );
}

interface SpotlightFollowerProps {
    mousePosition: { x: number; y: number };
}

function SpotlightFollower({ mousePosition }: SpotlightFollowerProps) {
    const lightRef = useRef<THREE.SpotLight>(null);

    useFrame(() => {
        if (lightRef.current) {
            lightRef.current.position.x = THREE.MathUtils.lerp(
                lightRef.current.position.x,
                mousePosition.x * 5,
                0.1
            );
            lightRef.current.position.y = THREE.MathUtils.lerp(
                lightRef.current.position.y,
                mousePosition.y * 3 + 4,
                0.1
            );
        }
    });

    return (
        <>
            <spotLight
                ref={lightRef}
                position={[0, 4, 5]}
                angle={0.4}
                penumbra={0.8}
                intensity={100}
                color="#EAEAEA"
                castShadow
            />
            {/* Secondary accent light */}
            <spotLight
                position={[-5, 3, 2]}
                angle={0.5}
                penumbra={1}
                intensity={30}
                color="#7B3FE4"
            />
            <spotLight
                position={[5, 2, 3]}
                angle={0.5}
                penumbra={1}
                intensity={20}
                color="#3F7BE4"
            />
        </>
    );
}

function Scene({ mousePosition }: { mousePosition: { x: number; y: number } }) {
    return (
        <>
            <ambientLight intensity={0.1} />
            <SpotlightFollower mousePosition={mousePosition} />
            <HandbagModel mousePosition={mousePosition} />
            <Environment preset="night" />

            {/* Floor reflection */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
                <planeGeometry args={[50, 50]} />
                <meshStandardMaterial
                    color="#050505"
                    roughness={0.1}
                    metalness={0.8}
                />
            </mesh>
        </>
    );
}

interface HeroCanvasProps {
    mousePosition: { x: number; y: number };
}

export function HeroCanvas({ mousePosition }: HeroCanvasProps) {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    <Scene mousePosition={mousePosition} />
                </Suspense>
            </Canvas>

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-bg pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-radial from-transparent to-dark-bg/50 pointer-events-none" />
        </div>
    );
}
