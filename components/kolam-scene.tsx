"use client"

import { useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { useScroll } from "@react-three/drei"
import * as THREE from "three"

function KolamPattern({
  position,
  scale = 1,
  color = "#8B4513",
}: { position: [number, number, number]; scale?: number; color?: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.005
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  // Create Kolam-inspired geometry
  const points = []
  const radius = 2
  const segments = 8

  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius
    points.push(new THREE.Vector3(x, y, 0))

    // Add inner points for complexity
    const innerRadius = radius * 0.5
    const innerX = Math.cos(angle + Math.PI / segments) * innerRadius
    const innerY = Math.sin(angle + Math.PI / segments) * innerRadius
    points.push(new THREE.Vector3(innerX, innerY, 0))
  }

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <tubeGeometry args={[new THREE.CatmullRomCurve3(points, true), 64, 0.1, 8, true]} />
      <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
    </mesh>
  )
}

function FloatingDots() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002
      groupRef.current.children.forEach((child, i) => {
        child.position.y = Math.sin(state.clock.elapsedTime + i) * 0.5
      })
    }
  })

  return (
    <group ref={groupRef}>
      {Array.from({ length: 20 }, (_, i) => (
        <mesh key={i} position={[(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 10]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color="#D2691E" emissive="#D2691E" emissiveIntensity={0.2} />
        </mesh>
      ))}
    </group>
  )
}

export function KolamScene() {
  const scroll = useScroll()
  const { viewport } = useThree()
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      const offset = scroll.offset
      groupRef.current.rotation.y = offset * Math.PI * 2
      groupRef.current.position.z = offset * -10
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main Kolam patterns at different depths */}
      <KolamPattern position={[0, 0, -5]} scale={1.5} color="#8B4513" />
      <KolamPattern position={[-8, 4, -8]} scale={0.8} color="#D2691E" />
      <KolamPattern position={[8, -4, -12]} scale={1.2} color="#CD853F" />
      <KolamPattern position={[0, 8, -15]} scale={0.6} color="#DEB887" />
      <KolamPattern position={[-6, -6, -18]} scale={1.0} color="#F4A460" />

      {/* Secondary layer */}
      <KolamPattern position={[12, 0, -20]} scale={0.9} color="#8B4513" />
      <KolamPattern position={[-12, 8, -25]} scale={0.7} color="#D2691E" />
      <KolamPattern position={[4, -12, -30]} scale={1.1} color="#CD853F" />

      {/* Floating dots for atmosphere */}
      <FloatingDots />

      {/* Ambient geometric shapes */}
      <mesh position={[15, 10, -40]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[2, 2, 0.2]} />
        <meshStandardMaterial color="#8B4513" transparent opacity={0.3} />
      </mesh>

      <mesh position={[-15, -10, -35]} rotation={[Math.PI / 4, 0, 0]}>
        <octahedronGeometry args={[1.5]} />
        <meshStandardMaterial color="#D2691E" transparent opacity={0.4} />
      </mesh>
    </group>
  )
}
