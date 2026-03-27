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
        if (offset < 0.5) {
            const rotationProgress = offset * 2;
            const targetRotationY = rotationProgress * Math.PI * 2;
            const targetRotationX = rotationProgress * 0.2;
            
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.1);
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.1);
        }

        // --- 2. EXPLOSION (50% - 80%) ---
        if (offset >= 0.5 && offset < 0.8) {
            const explosionProgress = (offset - 0.5) / 0.3;

            // Lock moves forward
            if (lockRef.current) {
                const targetZ = 1.5 + explosionProgress * 2;
                const targetRotZ = explosionProgress * Math.PI;
                lockRef.current.position.z = THREE.MathUtils.lerp(lockRef.current.position.z, targetZ, 0.1);
                lockRef.current.rotation.z = THREE.MathUtils.lerp(lockRef.current.rotation.z, targetRotZ, 0.1);
            }

            // Zipper moves up
            if (zipperRef.current) {
                const targetY = 1 + explosionProgress * 1.5;
                zipperRef.current.position.y = THREE.MathUtils.lerp(zipperRef.current.position.y, targetY, 0.1);
            }

            // Logo plate moves forward and up
            if (logoPlateRef.current) {
                const targetZ = 1.2 + explosionProgress * 1.5;
                const targetY = 0.5 + explosionProgress * 0.5;
                logoPlateRef.current.position.z = THREE.MathUtils.lerp(logoPlateRef.current.position.z, targetZ, 0.1);
                logoPlateRef.current.position.y = THREE.MathUtils.lerp(logoPlateRef.current.position.y, targetY, 0.1);
            }

            const targetGroupRotY = Math.PI * 2 + (explosionProgress * 0.5);
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetGroupRotY, 0.1);
        }

        // --- 3. REASSEMBLY (80% - 100%) ---
        if (offset >= 0.8) {
            const reassemblyProgress = (offset - 0.8) / 0.2;
            const reverse = 1 - reassemblyProgress;

            if (lockRef.current) {
                const targetZ = 1.5 + reverse * 2;
                lockRef.current.position.z = THREE.MathUtils.lerp(lockRef.current.position.z, targetZ, 0.1);
            }
            if (zipperRef.current) {
                const targetY = 1 + reverse * 1.5;
                zipperRef.current.position.y = THREE.MathUtils.lerp(zipperRef.current.position.y, targetY, 0.1);
            }
            if (logoPlateRef.current) {
                const targetZ = 1.2 + reverse * 1.5;
                logoPlateRef.current.position.z = THREE.MathUtils.lerp(logoPlateRef.current.position.z, targetZ, 0.1);
            }

            const targetGroupRotY = Math.PI * 2.5 - (reassemblyProgress * 0.5);
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetGroupRotY, 0.1);
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, 0, 0.1);
        }

        // --- BACKGROUND TRANSITION ---
        if (state.scene.background instanceof THREE.Color) {
            const startColor = new THREE.Color("#050505");
            const endColor = new THREE.Color("#1a1a1a");

            let lerpFactor = 0;
            if (offset > 0.4 && offset < 0.9) {
                lerpFactor = (offset - 0.4) / 0.5;
                if (lerpFactor > 1) lerpFactor = 1;
            } else if (offset >= 0.9) {
                lerpFactor = 1;
            }

            state.scene.background.lerpColors(startColor, endColor, lerpFactor);
        } else {
            state.scene.background = new THREE.Color("#050505");
        }
    });

    const leatherMaterial = new THREE.MeshStandardMaterial({
        color: "#1a1a1a",
        roughness: 0.4,
        metalness: 0.2,
    });

    const goldMaterial = new THREE.MeshStandardMaterial({
        color: "#D4AF37",
        roughness: 0.1,
        metalness: 1,
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
                    <boxGeometry args={[3, 2.5, 1]} />
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

                {/* Internal Gold Skeleton */}
                <mesh position={[0, 0, 0]} scale={[0.9, 0.9, 0.9]}>
                    <boxGeometry args={[3, 2.5, 1]} />
                    <meshBasicMaterial color="#D4AF37" wireframe transparent opacity={0.1} />
                </mesh>
            </group>
        </Center>
    );
}
