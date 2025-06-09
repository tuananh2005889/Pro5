"use client"

import { useState, useEffect } from "react"
import { ArrowUp, MessageCircle, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const actions = [
    { icon: Github, href: "https://github.com/tuananh2005889", label: "GitHub", color: "hover:bg-gray-800" },
    { icon: Linkedin, href: "https://linkedin.com/in/your-profile", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: MessageCircle, href: "mailto:nvtankwork@gmail.com", label: "Contact", color: "hover:bg-green-600" },
  ]

  if (!isVisible) return null

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col items-end space-y-3">
      {/* Social Actions */}
      {isExpanded && (
        <div className="flex flex-col space-y-3 animate-fade-in-up">
          {actions.map(({ icon: Icon, href, label, color }, index) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md flex items-center justify-center text-gray-700 dark:text-gray-300 ${color} hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 border border-gray-200/50 dark:border-gray-600/50`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      )}

      {/* Main FAB */}
      <div className="relative">
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-0"
        >
          <div className={`transition-transform duration-300 ${isExpanded ? "rotate-45" : ""}`}>
            {isExpanded ? (
              <div className="w-6 h-6 relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2" />
                <div className="absolute left-1/2 top-0 w-0.5 h-full bg-white transform -translate-x-1/2" />
              </div>
            ) : (
              <ArrowUp className="w-6 h-6" />
            )}
          </div>
        </Button>

        {/* Scroll to top on click when not expanded */}
        {!isExpanded && <div className="absolute inset-0 rounded-full cursor-pointer" onClick={scrollToTop} />}
      </div>
    </div>
  )
}
