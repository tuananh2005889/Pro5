"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  Code,
  Database,
  Smartphone,
  Globe,
  Award,
  GraduationCap,
  Briefcase,
  Star,
  ArrowUpRight,
  Zap,
  Target,
  Users,
  Coffee,
  Lightbulb,
  Trophy,
} from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

import LoadingScreen from "@/components/loading-screen"
import ScrollProgress from "@/components/scroll-progress"
import FloatingActionButton from "@/components/floating-action-button"
import CursorFollower from "@/components/cursor-follower"
import ParticleSystem from "@/components/particle-system"
import MagneticElement from "@/components/magnetic-element"
import AppStoreGrid from "@/components/app-store-grid"
import MotionUpdates from "@/components/motion-updates"
import GitHubStats from "@/components/github-stats"
import { MotionText, TypewriterText } from "@/components/motion-text"
import PageTransition from "@/components/page-transition"

declare global {
  interface Window {
    gsap: any
    ScrollTrigger: any
    Lenis: any
  }
}

export default function PersonalProfile() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cursorRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    setIsVisible(true)

    // Mouse cursor effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Advanced GSAP Animations
    if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      // Section reveal animations with improved easing
      gsap.utils.toArray(".reveal-section").forEach((section: any) => {
        gsap.fromTo(
          section,
          { y: 100, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })

      // Staggered animations
      gsap.utils.toArray(".stagger-item").forEach((item: any, index: number) => {
        gsap.fromTo(
          item,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: index * 0.1,
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })

      // Progress bar animations
      gsap.utils.toArray(".progress-bar").forEach((bar: any) => {
        const width = bar.getAttribute("data-width")
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: width + "%",
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })
    }

    const handleScroll = () => {
      const sections = ["home", "about", "skills", "github", "portfolio", "updates", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Updated skills based on GitHub data
  const skills = [
    { name: "Java", level: 90, icon: Code, category: "Programming", color: "from-orange-400 to-red-500" },
    { name: "TypeScript", level: 85, icon: Code, category: "Programming", color: "from-blue-400 to-blue-600" },
    { name: "React", level: 85, icon: Code, category: "Frontend", color: "from-cyan-400 to-blue-400" },
    { name: "Spring Boot", level: 80, icon: Globe, category: "Backend", color: "from-green-400 to-green-600" },
    { name: "MySQL", level: 85, icon: Database, category: "Database", color: "from-blue-500 to-indigo-500" },
    { name: "MongoDB", level: 75, icon: Database, category: "Database", color: "from-green-500 to-emerald-500" },
    { name: "HTML5 & CSS3", level: 90, icon: Code, category: "Frontend", color: "from-orange-500 to-red-500" },
    {
      name: "Android (Kotlin)",
      level: 70,
      icon: Smartphone,
      category: "Mobile",
      color: "from-purple-400 to-purple-600",
    },
  ]

  // Updated achievements based on real information
  const achievements = [
    {
      title: "BWD 2024 Finals - Auto Showroom",
      description:
        "Tham gia vòng chung kết cuộc thi BWD 2024 với dự án Auto Showroom, thử thách làm sản phẩm công nghệ từ sinh viên năm nhất",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Phó Chủ nhiệm CLB Kỹ năng tại VKU",
      description: "Lãnh đạo và tổ chức các hoạt động phát triển kỹ năng cho thành viên CLB",
      icon: Award,
      color: "from-blue-400 to-indigo-500",
    },
    {
      title: "Giải ba cuộc thi thiết kế website đẹp nhất 2024 tại VKU",
      description: "Thiết kế website sáng tạo và chuyên nghiệp",
      icon: Star,
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "Giải khuyến khích cuộc thi Tài năng Tiếng Anh 2024 tại VKU",
      description: "Thể hiện khả năng giao tiếp tiếng Anh xuất sắc",
      icon: Briefcase,
      color: "from-green-400 to-emerald-500",
    },
  ]

  // Updated stats based on GitHub
  const stats = [
    { number: "19", label: "Repositories", icon: Target },
    { number: "923", label: "Contributions", icon: Code },
    { number: "5", label: "Followers", icon: Users },
    { number: "2+", label: "Năm học tập", icon: Coffee },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-dark overflow-x-hidden">
        {isLoading && <LoadingScreen />}
        <ParticleSystem />
        <CursorFollower />
        <ScrollProgress />
        <FloatingActionButton />

        {/* Custom Cursor */}
        <div
          ref={cursorRef}
          className="fixed w-6 h-6 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
            transform: `scale(${mousePosition.x > 0 ? 1 : 0})`,
          }}
        />

        {/* Navigation */}
        <motion.nav
          className="fixed top-0 w-full z-40 nav-bg border-b border-white/10 shadow-lg"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <motion.div
                className="text-2xl font-bold gradient-text-main"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                nvtank
              </motion.div>
              <div className="hidden md:flex space-x-8 text-white">
                {["home", "about", "skills", "github", "portfolio", "updates", "contact"].map((section, index) => (
                  <MagneticElement key={section} strength={40}>
                    <motion.button
                      onClick={() => scrollToSection(section)}
                      className={`relative capitalize transition-all duration-300 text-gray-100 font-medium group ${activeSection === section}`}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -2 }}
                    >
                      {section === "home"
                        ? "Trang chủ"
                        : section === "about"
                          ? "Giới thiệu"
                          : section === "skills"
                            ? "Kỹ năng"
                            : section === "github"
                              ? "GitHub"
                              : section === "portfolio"
                                ? "Portfolio"
                                : section === "updates"
                                  ? "Updates"
                                  : "Liên hệ"}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-yellow to-purple transition-all duration-300 ${
                          activeSection === section ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </motion.button>
                  </MagneticElement>
                ))}
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section
          id="home"
          ref={heroRef}
          className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              className="hero-avatar mb-8 relative"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "backOut" }}
            >
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-yellow via-purple to-blue p-1 shadow-2xl pulse-glow">
                <div className="w-full h-full rounded-full overflow-hidden shadow-inner">
                  <Image
                    src="/images/profile-photo.jpg"
                    alt="Nguyễn Văn Tuấn Anh"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <motion.div
                className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-yellow to-amber-400 rounded-full border-4 border-gray-900 shadow-lg flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="w-3 h-3 bg-gray-900 rounded-full" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <MotionText
                className="text-6xl md:text-8xl font-black mb-6 mt-10 gradient-text-main leading-tight"
                delay={0.8}
              >
                Nguyễn Văn Tuấn Anh
              </MotionText>
            </motion.div>

            <motion.div
              className="hero-subtitle mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow/20 to-purple/20 rounded-full border border-yellow/30 shadow-lg glass">
                <Zap className="w-5 h-5 text-white mr-2" />
                <TypewriterText
                  text="Full Stack Developer & VKU Student"
                  className="text-xl font-semibold text-gray-100"
                  delay={1500}
                />
              </div>
            </motion.div>

            <motion.p
              className="hero-description text-lg mb-12 text-gray-100 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              Sinh viên IT năm 2 tại VKU với đam mê lập trình và phát triển phần mềm. Có kinh nghiệm với{" "}
              <span className="font-semibold text-yellow-300">Java, TypeScript, React, Spring Boot</span> và các công
              nghệ hiện đại. Luôn học hỏi và cập nhật công nghệ mới.
            </motion.p>

            <motion.div
              className="hero-buttons flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              <MagneticElement strength={35}>
                <Button
                  size="lg"
                  className="magnetic bg-gradient-to-r from-yellow to-purple hover:from-yellow-light hover:to-purple-light text-gray-900 px-10 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl group font-bold"
                  onClick={() => scrollToSection("portfolio")}
                >
                  <span className="mr-3">Khám phá portfolio</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Button>
              </MagneticElement>
              <MagneticElement strength={35}>
                <Button
                  variant="outline"
                  size="lg"
                  className="magnetic border-2 border-yellow text-white hover:bg-yellow hover:text-gray-900 px-10 py-4 rounded-full transition-all duration-300 glass shadow-lg hover:shadow-xl group"
                >
                  <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                  <span>Tải CV</span>
                </Button>
              </MagneticElement>
            </motion.div>

            <motion.div
              className="hero-social text-gray-100 flex justify-center space-x-6 pb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.6, stagger: 0.1 }}
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/tuananh2005889",
                  label: "GitHub",
                  color: "hover:bg-purple text-gray-100",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/your-profile",
                  label: "LinkedIn",
                  color: "hover:bg-blue",
                },
                { icon: Mail, href: "mailto:nvtankwork@gmail.com", label: "Email", color: "hover:bg-yellow" },
              ].map(({ icon: Icon, href, label, color }, index) => (
                <MagneticElement key={label} strength={50}>
                  <motion.a
                    href={href}
                    className={`magnetic w-14 h-14 rounded-full glass flex items-center justify-center text-white hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 ${color}`}
                    aria-label={label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 2.8 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Icon className="h-6 w-6 text-gray-100" />
                  </motion.a>
                </MagneticElement>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="w-8 h-12 border-2 border-yellow rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-yellow rounded-full mt-2"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    className="stagger-item text-center p-6 card-bg rounded-2xl shadow-lg border border-white/10 hover:shadow-xl transition-all duration-300 text-gray-100"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 text-gray-100 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-gray-100" />
                    </div>
                    <div className="text-3xl font-bold text-gray-100 mb-2">{stat.number}</div>
                    <div className="text-muted font-medium">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 bg-gradient-dark relative">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              className="reveal-section text-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text-main">Về tôi</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow to-purple mx-auto rounded-full" />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="space-y-8">
                <motion.div
                  className="stagger-item card-bg rounded-3xl p-8 shadow-xl border border-white/10 hover:shadow-2xl transition-all duration-500"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue to-purple rounded-2xl flex items-center justify-center mr-4">
                      <GraduationCap className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-100">Học vấn</h3>
                  </div>
                  <div className="text-reveal">
                    <p className="text-secondary leading-relaxed mb-4">
                      <span className="font-bold text-gray-100">
                        Trường Đại học Công nghệ Thông tin và Truyền thông Việt - Hàn (VKU)
                      </span>
                    </p>
                    <p className="text-gray-100">
                      Cử nhân Công nghệ Thông tin - Hợp tác Kinh doanh
                      <br />
                      Sinh viên năm 2, chuyên ngành Công nghệ Phần mềm
                      <br />
                      <span className="text-yellow-300">GitHub: tuananh2005889</span>
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="stagger-item card-bg rounded-3xl p-8 shadow-xl border border-white/10 hover:shadow-2xl transition-all duration-500"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue to-purple  rounded-2xl flex items-center justify-center mr-4">
                      <Target className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-purple">Mục tiêu</h3>
                  </div>
                  <div className="text-reveal">
                    <p className="text-gray-100 leading-relaxed">
                      Là sinh viên Công nghệ Thông tin hướng đến phát triển trong lĩnh vực{" "}
                      <span className="font-semibold text-yellow-300">lập trình web và phát triển phần mềm</span>, mong
                      muốn làm việc trong môi trường năng động để có thể áp dụng các kỹ năng kỹ thuật và tiếp tục học
                      hỏi để trở thành một lập trình viên chuyên nghiệp.
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="stagger-item relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-full h-[500px] rounded-3xl bg-gradient-to-br from-yellow/20 via-purple/20 to-blue/20 overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="/images/profile-photo.jpg"
                    alt="Profile"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-purple-900/20" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass rounded-2xl p-4">
                      <p className="text-white font-semibold">
                        💡 "Hi guyyyy, I am Tuấn Anh, I am studying at VKU and I need a job huhuhuhhu"
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Achievements Grid */}
            <div className="reveal-section">
              <motion.h3
                className="text-3xl font-bold text-center mb-12 text-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Thành tích & Hoạt động
              </motion.h3>
              <div className="grid md:grid-cols-2 gap-8">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon
                  return (
                    <motion.div
                      key={index}
                      className="stagger-item card-bg rounded-2xl p-6 shadow-lg border border-white/10 hover:shadow-xl transition-all duration-300 group"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-14 h-14 rounded-xl gray-100 bg-gradient-to-r ${achievement.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="h-7 w-7 text-gray-100" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-purple transition-colors duration-300">
                            {achievement.title}
                          </h4>
                          <p className="text-muted text-sm leading-relaxed">{achievement.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 bg-gradient-section relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              className="reveal-section text-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text-main">Kỹ năng</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow to-purple mx-auto rounded-full" />
              <p className="text-xl text-gray-100 mt-8 max-w-2xl mx-auto">
                Những công nghệ và ngôn ngữ lập trình tôi đã làm việc và thành thạo
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -10 }}
                  >
                    <Card className="stagger-item card-bg border-white/10 hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-6">
                          <div
                            className={`w-14 h-14 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <Icon className="h-7 w-7 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-100">{skill.name}</h3>
                            <p className="text-gray-100 text-sm">{skill.category}</p>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                            <motion.div
                              className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                              initial={{ width: "0%" }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1.5, ease: "easeOut" }}
                              viewport={{ once: true }}
                            />
                          </div>
                          <div className="flex justify-between items-center mt-3">
                            <span className="text-sm text-gray-100">Proficiency</span>
                            <span className="text-sm font-bold text-gray-100">{skill.level}%</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* GitHub Stats Section */}
        <section id="github" className="py-32 bg-gradient-dark relative">
          <div className="container mx-auto px-6 relative z-10">
            <GitHubStats />
          </div>
        </section>

        {/* Interactive Portfolio Section */}
        <section id="portfolio" className="py-32 bg-gradient-section relative">
          <div className="container mx-auto px-6 relative z-10">
            <AppStoreGrid />
          </div>
        </section>

        {/* Motion Updates Section */}
        <section id="updates" className="py-32 bg-gradient-dark relative">
          <div className="container mx-auto px-6 relative z-10">
            <MotionUpdates />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-gradient-section relative">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              className="reveal-section text-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text-main">Liên hệ</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow to-purple mx-auto rounded-full" />
              <p className="text-xl text-gray-100 mt-8 max-w-2xl mx-auto">
                Hãy kết nối với tôi để thảo luận về các cơ hội hợp tác hoặc dự án thú vị
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <motion.div
                    className="stagger-item"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-3xl font-bold text-gray-100 mb-8 flex items-center">
                      <Users className="w-8 h-8 mr-3" />
                      Hãy kết nối với tôi
                    </h3>
                    <div className="text-reveal">
                      <p className="text-gray-100 text-lg leading-relaxed mb-8">
                        Tôi luôn sẵn sàng thảo luận về các dự án mới, cơ hội thực tập, hoặc đơn giản chỉ là trò chuyện
                        về công nghệ và lập trình. Đừng ngần ngại liên hệ!
                      </p>
                    </div>
                  </motion.div>

                  <div className="space-y-6">
                    {[
                      {
                        icon: Mail,
                        label: "Email",
                        value: "nvtankwork@gmail.com",
                        color: "text-gray-100",
                        href: "mailto:nvtankwork@gmail.com",
                      },
                      {
                        icon: Github,
                        label: "GitHub",
                        value: "tuananh2005889",
                        color: "text-gray-100",
                        href: "https://github.com/tuananh2005889",
                      },
                      {
                        icon: MapPin,
                        label: "Địa chỉ",
                        value: "Đà Nẵng, Việt Nam",
                        color: "text-gray-100",
                        href: "#",
                      },
                    ].map(({ icon: Icon, label, value, color, href }, index) => (
                      <motion.a
                        key={label}
                        href={href}
                        className="stagger-item flex items-center space-x-6 p-6 rounded-2xl card-bg hover:shadow-xl transition-all duration-500 group border border-white/10"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, x: 10 }}
                      >
                        <div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-gray-100`}
                        >
                          <Icon className="h-8 w-8 text-gray-100" />
                        </div>
                        <div>
                          <p className="text-gray-100 text-sm font-medium">{label}</p>
                          <p className="text-gray-100 font-bold text-lg group-hover:text-purple transition-colors duration-300">
                            {value}
                          </p>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ml-auto" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="stagger-item card-bg border-white/10 shadow-2xl">
                    <CardContent className="p-10">
                      <div className="flex items-center mb-8">
                        <div className="w-12 h-12 bg-gradient-to-r from-yellow to-purple rounded-xl flex items-center justify-center mr-4">
                          <Lightbulb className="w-6 h-6 text-gray-900" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-100">Gửi tin nhắn</h3>
                      </div>
                      <form className="space-y-6">
                        <div>
                          <label className="block text-gray-100 font-semibold mb-3">Tên của bạn</label>
                          <input
                            type="text"
                            className="w-full px-6 py-4 rounded-xl bg-gray-800/80 border-2 border-yellow/30 text-white placeholder-gray-400 focus:outline-none focus:border-yellow transition-all duration-300 shadow-sm"
                            placeholder="Nhập tên của bạn"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-100 font-semibold mb-3">Email</label>
                          <input
                            type="email"
                            className="w-full px-6 py-4 rounded-xl bg-gray-800/80 border-2 border-yellow/30 text-white placeholder-gray-400 focus:outline-none focus:border-yellow transition-all duration-300 shadow-sm"
                            placeholder="your@email.com"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-100 font-semibold mb-3">Tin nhắn</label>
                          <textarea
                            rows={5}
                            className="w-full px-6 py-4 rounded-xl bg-gray-800/80 border-2 border-yellow/30 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-yellow transition-all duration-300 resize-none shadow-sm"
                            placeholder="Nội dung tin nhắn..."
                          ></textarea>
                        </div>
                        <Button className="magnetic w-full bg-gradient-to-r from-yellow to-purple hover:from-yellow-light hover:to-purple-light text-gray-900 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-semibold">
                          <span className="mr-2">Gửi tin nhắn</span>
                          <ArrowUpRight className="w-5 h-5" />
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <motion.footer
          className="py-12 glass border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-100 mb-4 md:mb-0">
                © 2024 Nguyễn Văn Tuấn Anh. Được thiết kế với ❤️ và React | nvtank.id.vn
              </div>
              <div className="flex space-x-6">
                {[
                  { icon: Github, href: "https://github.com/tuananh2005889", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/your-profile", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:nvtankwork@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="magnetic w-10 h-10 rounded-full bg-gradient-to-r from-yellow to-purple flex items-center justify-center text-gray-900 hover:scale-110 transition-all duration-300 shadow-lg"
                    aria-label={label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </PageTransition>
  )
}
