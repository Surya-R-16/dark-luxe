"use client";
// @ts-nocheck

import { useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial, Sphere, Box, useTexture } from "@react-three/drei";
import * as THREE from "three";

interface HandbagModelProps {
    mousePosition: { x: number; y: number };
}

function HandbagModel({ mousePosition }: HandbagModelProps) {
    const meshRef = useRef<THREE.Group>(null);
    const materialRef = useRef<THREE.MeshStandardMaterial>(null);

    useFrame((state) => {
        if (meshRef.current) {
            // Slow rotation
            meshRef.current.rotation.y += 0.003;

            // Subtle mouse influence
            meshRef.current.rotation.x = THREE.MathUtils.lerp(
                meshRef.current.rotation.x,
                mousePosition.y * 0.1,
                0.05
            );
            meshRef.current.rotation.z = THREE.MathUtils.lerp(
                meshRef.current.rotation.z,
                -mousePosition.x * 0.1,
                0.05
            );
        }
    });

    return (
        <Float
            speed={2}
            rotationIntensity={0.3}
            floatIntensity={0.5}
        >
            <group ref={meshRef}>
                {/* Main body - elongated rounded box to simulate handbag */}
                <Box args={[2.2, 1.4, 0.9]} position={[0, 0, 0]}>
                    <MeshDistortMaterial
                        color="#1a1a1a"
                        roughness={0.3}
                        metalness={0.7}
                        distort={0.1}
                        speed={2}
                    />
                </Box>

                {/* Handle */}
                <mesh position={[0, 1, 0]}>
                    <torusGeometry args={[0.6, 0.08, 16, 32, Math.PI]} />
                    <meshStandardMaterial
                        color="#0d0d0d"
                        roughness={0.4}
                        metalness={0.8}
                    />
                </mesh>

                {/* Gold accent clasp */}
                <mesh position={[0, 0.1, 0.5]}>
                    <boxGeometry args={[0.4, 0.15, 0.1]} />
                    <meshStandardMaterial
                        color="#C9A227"
                        roughness={0.2}
                        metalness={0.9}
                    />
                </mesh>

                {/* Gold accent lines */}
                <mesh position={[0, -0.5, 0.46]}>
                    <boxGeometry args={[1.8, 0.02, 0.01]} />
                    <meshStandardMaterial
                        color="#C9A227"
                        roughness={0.2}
                        metalness={0.9}
                    />
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
