"use client"
import React, { useState, useEffect, useRef } from "react"

// Constants
const MOBILE_BREAKPOINT = 768 // Pixels
// const ANIMATION_INTERVAL = 4000 // No longer needed for continuous motion
// const LERP_FACTOR_POS = 0.01 // Even slower lerp for continuous drift
// const LERP_FACTOR_RAD = 0.02 // Slower lerp for radius morphing
// const DRIFT_SPEED = 2 // Controls how fast the target drifts
// const SHAPE_CHANGE_PROBABILITY = 0.005 // Lower probability for less frequent shape changes

function randomRadius() {
  // Generate a random borderRadius string for an organic blob
  function pct() { return `${40 + Math.random() * 40}%` }
  return `${pct()} ${pct()} ${pct()} ${pct()} / ${pct()} ${pct()} ${pct()} ${pct()}`
}

function lerpRadius(a: string, b: string, t: number) {
  // Interpolate between two borderRadius strings
  const aVals = a.split(/[ %/]+/).filter(Boolean).map(Number)
  const bVals = b.split(/[ %/]+/).filter(Boolean).map(Number)
  // Ensure arrays have the same length (8 expected values)
  if (aVals.length !== 8 || bVals.length !== 8) return a; // Return current if parsing failed
  const lerped = aVals.map((v, i) => v + (bVals[i] - v) * t)
  return `${lerped[0]}% ${lerped[1]}% ${lerped[2]}% ${lerped[3]}% / ${lerped[4]}% ${lerped[5]}% ${lerped[6]}% ${lerped[7]}%`
}

function WhiteGradientBlob() {
  const blobRef = useRef<HTMLDivElement>(null)
  const animFrame = useRef<number | null>(null)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const radius = useRef('60% 40% 70% 30% / 40% 60% 30% 70%')
  const targetRadius = useRef(radius.current)
  const [isMobile, setIsMobile] = useState(false)
  // const intervalRef = useRef<NodeJS.Timeout | null>(null); // No longer needed

  // Effect to detect screen size changes
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Effect to handle animation logic
  useEffect(() => {
    // Skip animation entirely on mobile
    if (isMobile) return;

    // Initialize position at center
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    target.current = { x: centerX, y: centerY }
    current.current = { x: centerX, y: centerY }
    targetRadius.current = randomRadius();

    // --- Animation Loop ---
    function animate() {
      const lerpPos = 0.15;
      const lerpRad = 0.30;

      // Smoothly move/follow towards target
      current.current.x += (target.current.x - current.current.x) * lerpPos;
      current.current.y += (target.current.y - current.current.y) * lerpPos;
      // Smoothly morph borderRadius
      radius.current = lerpRadius(radius.current, targetRadius.current, lerpRad);

      if (blobRef.current) {
        blobRef.current.style.left = `${current.current.x}px`;
        blobRef.current.style.top = `${current.current.y}px`;
        blobRef.current.style.borderRadius = radius.current;
      }
      animFrame.current = requestAnimationFrame(animate);
    }
    animFrame.current = requestAnimationFrame(animate);

    // --- Pointer Logic (Desktop) ---
    const pointerMoveHandler = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY + 20;
      if (Math.random() < 0.1) {
        targetRadius.current = randomRadius();
      }
    };
    window.addEventListener("pointermove", pointerMoveHandler);

    // --- Cleanup ---
    return () => {
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
      window.removeEventListener("pointermove", pointerMoveHandler);
    };

  }, [isMobile]);

  // Don't render anything on mobile
  if (isMobile) return null;

  return (
    <div
      ref={blobRef}
      aria-hidden="true"
      className="absolute z-0 w-[40rem] h-[20rem] opacity-70 blur-4xl mix-blend-lighten transform -translate-x-1/2 -translate-y-1/2 will-change-transform"
      style={{
        left: '0px',
        top: '0px',
        borderRadius: radius.current,
        background: 'radial-gradient(circle at 50% 50%, #00eaff 0%, #d0ff00 33%, #ff3d8b 66%, transparent 100%)',
        pointerEvents: 'none',
      }}
    />
  )
}

export { WhiteGradientBlob }
