"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface MotionTextProps {
  children: string
  className?: string
  delay?: number
  duration?: number
  stagger?: number
}

export function MotionText({ children, className = "", delay = 0, duration = 0.8, stagger = 0.02 }: MotionTextProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const words = children.split(" ")

  return (
    <motion.div className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration,
                delay: delay + (wordIndex * words.length + charIndex) * stagger,
                ease: "easeOut",
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  )
}

interface TypewriterTextProps {
  text: string
  className?: string
  delay?: number
  speed?: number
}

export function TypewriterText({ text, className = "", delay = 0, speed = 50 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (currentIndex < text.length) {
          setDisplayText((prev) => prev + text[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        }
      },
      currentIndex === 0 ? delay : speed,
    )

    return () => clearTimeout(timer)
  }, [currentIndex, text, delay, speed])

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="inline-block w-0.5 h-6 bg-yellow-400 ml-1"
      />
    </span>
  )
}
