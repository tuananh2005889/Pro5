"use client"

import { useEffect } from "react"

export default function SoundEffects() {
  useEffect(() => {
    // Create audio context for sound effects
    let audioContext: AudioContext | null = null

    const initAudio = () => {
      if (!audioContext) {
        audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      }
    }

    const playSound = (frequency: number, duration: number, type: OscillatorType = "sine") => {
      if (!audioContext) return

      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime)
      oscillator.type = type

      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + duration)
    }

    const handleButtonHover = () => {
      initAudio()
      playSound(800, 0.1, "sine")
    }

    const handleButtonClick = () => {
      initAudio()
      playSound(1000, 0.15, "triangle")
    }

    const handleSectionEnter = () => {
      initAudio()
      playSound(600, 0.2, "sine")
    }

    // Add event listeners
    const buttons = document.querySelectorAll('button, a[role="button"]')
    const sections = document.querySelectorAll("section")

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", handleButtonHover)
      button.addEventListener("click", handleButtonClick)
    })

    // Intersection Observer for sections
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleSectionEnter()
          }
        })
      },
      { threshold: 0.5 },
    )

    sections.forEach((section) => {
      sectionObserver.observe(section)
    })

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", handleButtonHover)
        button.removeEventListener("click", handleButtonClick)
      })
      sectionObserver.disconnect()
      if (audioContext) {
        audioContext.close()
      }
    }
  }, [])

  return null
}
