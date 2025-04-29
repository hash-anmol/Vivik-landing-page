"use client"
import React from "react"

function randomRadius() {
  // Generate a random borderRadius string for an organic blob
  function pct() { return `${40 + Math.random() * 40}%` }
  return `${pct()} ${pct()} ${pct()} ${pct()} / ${pct()} ${pct()} ${pct()} ${pct()}`
}

function lerpRadius(a: string, b: string, t: number) {
  // Interpolate between two borderRadius strings
  const aVals = a.split(/[ %/]+/).filter(Boolean).map(Number)
  const bVals = b.split(/[ %/]+/).filter(Boolean).map(Number)
  const lerped = aVals.map((v, i) => v + (bVals[i] - v) * t)
  return `${lerped[0]}% ${lerped[1]}% ${lerped[2]}% ${lerped[3]}% / ${lerped[4]}% ${lerped[5]}% ${lerped[6]}% ${lerped[7]}%`
}

function WhiteGradientBlob() {
  const blobRef = React.useRef<HTMLDivElement>(null)
  const animFrame = React.useRef<number | null>(null)
  const target = React.useRef({ x: 0, y: 0 })
  const current = React.useRef({ x: 0, y: 0 })
  const radius = React.useRef('60% 40% 70% 30% / 40% 60% 30% 70%')
  const targetRadius = React.useRef(radius.current)

  React.useEffect(() => {
    // initialize at center
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    target.current = { x: centerX, y: centerY }
    current.current = { x: centerX, y: centerY }

    function handlePointerMove(e: MouseEvent) {
      // update target position and shape on move
      target.current.x = e.clientX
      target.current.y = e.clientY + 20
      targetRadius.current = randomRadius()
    }
    function animate() {
      // Ultra-smooth follow
      current.current.x += (target.current.x - current.current.x) * 0.15
      current.current.y += (target.current.y - current.current.y) * 0.15
      // Smoothly morph borderRadius
      radius.current = lerpRadius(radius.current, targetRadius.current, 0.30)
      if (blobRef.current) {
        // Position blob at cursor with CSS transform centering
        blobRef.current.style.left = `${current.current.x}px`
        blobRef.current.style.top = `${current.current.y}px`
        blobRef.current.style.borderRadius = radius.current
      }
      animFrame.current = requestAnimationFrame(animate)
    }
    window.addEventListener("pointermove", handlePointerMove)
    animFrame.current = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      if (animFrame.current) cancelAnimationFrame(animFrame.current)
    }
  }, [])

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
