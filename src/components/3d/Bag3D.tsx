"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, Center } from "@react-three/drei";
import * as THREE from "three";

export function Bag3D() {
    // References for different parts of the bag to animate independently
    const groupRef = useRef<THREE.Group>(null);
    const bodyRef = useRef<THREE.Mesh>(null);
    const strapRef = useRef<THREE.Mesh>(null);
    const hardwareRef = useRef<THREE.Group>(null);

    // Hardware pieces references for explosion
    const lockRef = useRef<THREE.Mesh>(null);
    const zipperRef = useRef<THREE.Mesh>(null);
    const logoPlateRef = useRef<THREE.Mesh>(null);

    const scroll = useScroll();

    useFrame((state, delta) => {
        if (!groupRef.current) return;

        // Current scroll offset (0 to 1)
        const offset = scroll.offset;

        // --- 1. ROTATION (0% - 50%) ---
        // Rotates the entire bag
        // We want a slow constant spin initially, then precise control
        if (offset < 0.5) {
            // Normalize 0-0.5 to 0-1
            const rotationProgress = offset * 2;
            groupRef.current.rotation.y = rotationProgress * Math.PI * 2; // Full 360 rotation
            groupRef.current.rotation.x = rotationProgress * 0.2; // Slight tilt
        }

        // --- 2. EXPLOSION (50% - 80%) ---
        // Moves internal parts outward
        if (offset >= 0.5 && offset < 0.8) {
            // Normalize 0.5-0.8 to 0-1
            const explosionProgress = (offset - 0.5) / 0.3;

            // Lock moves forward
            if (lockRef.current) {
                lockRef.current.position.z = 1.5 + explosionProgress * 2;
                lockRef.current.rotation.z = explosionProgress * Math.PI; // Spin it a bit
            }

            // Zipper moves up
            if (zipperRef.current) {
                zipperRef.current.position.y = 1 + explosionProgress * 1.5;
            }

            // Logo plate moves forward and up
            if (logoPlateRef.current) {
                logoPlateRef.current.position.z = 1.2 + explosionProgress * 1.5;
                logoPlateRef.current.position.y = 0.5 + explosionProgress * 0.5;
            }

            // Body fades slightly to transparent to reveal "internals" (if we had real internals)
            // or just rotates to a specific angle
            groupRef.current.rotation.y = Math.PI * 2 + (explosionProgress * 0.5);
        }

        // --- 3. REASSEMBLY (80% - 100%) ---
        if (offset >= 0.8) {
            // Normalize 0.8-1.0 to 0-1 (reversed for coming back)
            const reassemblyProgress = (offset - 0.8) / 0.2;
            const reverse = 1 - reassemblyProgress;

            // Simple lerp back to original positions would be essentially same as above logic, 
            // but let's make sure it snaps back cleanly or stays exploded depending on design.
            // The prompt says "Bag reassembles".

            if (lockRef.current) lockRef.current.position.z = 1.5 + reverse * 2;
            if (zipperRef.current) zipperRef.current.position.y = 1 + reverse * 1.5;
            if (logoPlateRef.current) logoPlateRef.current.position.z = 1.2 + reverse * 1.5;

            // Rotate to front facing for final shot
            groupRef.current.rotation.y = Math.PI * 2.5 - (reassemblyProgress * 0.5);
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, 0, 0.1);
        }

        // --- BACKGROUND TRANSITION ---
        // Shifts from #050505 to #1a1a1a as the bag explodes (starts at 0.5)
        // We use state.scene.background.
        if (state.scene.background instanceof THREE.Color) {
            const startColor = new THREE.Color("#050505");
            const endColor = new THREE.Color("#1a1a1a");

            let lerpFactor = 0;
            if (offset > 0.4 && offset < 0.9) {
                // Transition starts a bit before explosion and holds
                lerpFactor = (offset - 0.4) / 0.5; // map 0.4-0.9 to 0-1
                if (lerpFactor > 1) lerpFactor = 1;
            } else if (offset >= 0.9) {
                lerpFactor = 1;
            }

            state.scene.background.lerpColors(startColor, endColor, lerpFactor);
        } else {
            state.scene.background = new THREE.Color("#050505");
        }
    });

    // Material setup
    const textureLoader = new THREE.TextureLoader();
    // We don't have real textures, so we use standard materials

    const leatherMaterial = new THREE.MeshStandardMaterial({
        color: "#1a1a1a",
        roughness: 0.4,
        metalness: 0.2,
    });

    const goldMaterial = new THREE.MeshStandardMaterial({
        color: "#D4AF37",
        roughness: 0.1,
        metalness: 1, // High metalness for gold
    });

    return (
        <Center>
            <group ref={groupRef} dispose={null}>
                {/* Main Body */}
                <mesh
                    ref={bodyRef}
                    position={[0, 0, 0]}
                    material={leatherMaterial}
                    castShadow
                    receiveShadow
                >
                    <boxGeometry args={[3, 2.5, 1]} /> {/* Placeholder shape */}
                </mesh>

                {/* Flap */}
                <mesh position={[0, 0.8, 0.55]} material={leatherMaterial}>
                    <boxGeometry args={[3, 1, 0.1]} />
                </mesh>

                {/* Strap / Handle */}
                <mesh ref={strapRef} position={[0, 1.5, 0]} material={leatherMaterial}>
                    <torusGeometry args={[1, 0.1, 16, 100, Math.PI]} />
                    <meshStandardMaterial color="#1a1a1a" />
                </mesh>

                {/* Hardware Group */}
                <group ref={hardwareRef}>
                    {/* The Lock */}
                    <mesh ref={lockRef} position={[0, 0, 0.6]} material={goldMaterial}>
                        <boxGeometry args={[0.5, 0.5, 0.2]} />
                    </mesh>

                    {/* The Zipper (Top) */}
                    <mesh ref={zipperRef} position={[0, 1.25, 0]} rotation={[0, 0, Math.PI / 2]} material={goldMaterial}>
                        <capsuleGeometry args={[0.1, 2.8, 4, 8]} />
                    </mesh>

                    {/* Logo Plate */}
                    <mesh ref={logoPlateRef} position={[0, -0.5, 0.52]} material={goldMaterial}>
                        <boxGeometry args={[1, 0.2, 0.05]} />
                    </mesh>
                </group>

                {/* Internal Gold Skeleton (revealed during explosion if body was transparent, 
                    but here we just move parts. Added for extra cool factor) */}
                <mesh position={[0, 0, 0]} scale={[0.9, 0.9, 0.9]}>
                    <boxGeometry args={[3, 2.5, 1]} />
                    <meshBasicMaterial color="#D4AF37" wireframe transparent opacity={0.1} />
                </mesh>
            </group>
        </Center>
    );
}
