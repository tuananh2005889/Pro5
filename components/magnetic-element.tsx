"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"

interface MagneticElementProps {
  children: React.ReactNode
  className?: string
  strength?: number
}

export default function MagneticElement({ children, className = "", strength = 30 }: MagneticElementProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: MouseEvent) => {
    if (!elementRef.current) return

    const { clientX, clientY } = e
    const { left, top, width, height } = elementRef.current.getBoundingClientRect()

    // Calculate center of the element
    const centerX = left + width / 2
    const centerY = top + height / 2

    // Calculate distance from mouse to center
    const distanceX = clientX - centerX
    const distanceY = clientY - centerY

    // Calculate the magnetic pull (stronger when closer to center)
    const magneticX = distanceX * (strength / 100)
    const magneticY = distanceY * (strength / 100)

    setPosition({ x: magneticX, y: magneticY })
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
    document.addEventListener("mousemove", handleMouseMove)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    document.removeEventListener("mousemove", handleMouseMove)
    setPosition({ x: 0, y: 0 })
  }

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    element.addEventListener("mouseenter", handleMouseEnter)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter)
      element.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={elementRef} className={`relative ${className}`}>
      <motion.div
        animate={{
          x: isHovering ? position.x : 0,
          y: isHovering ? position.y : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
