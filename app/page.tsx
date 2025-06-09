"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
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
} from "lucide-react"
import Image from "next/image"

import LoadingScreen from "@/components/loading-screen"
import ScrollProgress from "@/components/scroll-progress"
import FloatingActionButton from "@/components/floating-action-button"
import CursorFollower from "@/components/cursor-follower"
import ParticleSystem from "@/components/particle-system"

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

    // // Initialize Lenis for ultra-smooth scrolling
    // if (typeof window !== "undefined" && window.Lenis) {
    //   const lenis = new window.Lenis({
    //     duration: 0.8,
    //     easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    //     direction: "vertical",
    //     gestureDirection: "vertical",
    //     smooth: true,
    //     mouseMultiplier: 1.5,
    //     smoothTouch: false,
    //     touchMultiplier: 2,
    //     infinite: false,
    //   })

    //   function raf(time: number) {
    //     lenis.raf(time)
    //     requestAnimationFrame(raf)
    //   }
    //   requestAnimationFrame(raf)

    //   // Connect GSAP ScrollTrigger with Lenis
    //   lenis.on("scroll", window.ScrollTrigger?.update)
    // }

    // Advanced GSAP Animations
    if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      // Hero entrance animation
      const tl = gsap.timeline({ delay: 0.5 })
      tl.fromTo(
        ".hero-avatar",
        { scale: 0, rotation: 180, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 1.2, ease: "back.out(1.7)" },
      )
        .fromTo(
          ".hero-title",
          { y: 100, opacity: 0, rotationX: 90 },
          { y: 0, opacity: 1, rotationX: 0, duration: 1, ease: "power3.out" },
          "-=0.8",
        )
        .fromTo(
          ".hero-subtitle",
          { y: 50, opacity: 0, scale: 0.8 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
          "-=0.6",
        )
        .fromTo(
          ".hero-description",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.4",
        )
        .fromTo(
          ".hero-buttons",
          { y: 30, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
          "-=0.2",
        )
        .fromTo(
          ".hero-social",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.1 },
          "-=0.4",
        )

      // Floating elements animation
      gsap.to(".floating-1", {
        y: -20,
        x: 10,
        rotation: 5,
        duration: 3,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      })

      gsap.to(".floating-2", {
        y: 15,
        x: -15,
        rotation: -3,
        duration: 4,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1,
      })

      gsap.to(".floating-3", {
        y: -10,
        x: 20,
        rotation: 2,
        duration: 5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: 2,
      })

      // Section reveal animations
      gsap.utils.toArray(".reveal-section").forEach((section: any) => {
        gsap.fromTo(
          section,
          { y: 100, opacity: 0, scale: 0.95, rotationX: 15 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationX: 0,
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

      // Staggered card animations
      gsap.utils.toArray(".stagger-card").forEach((card: any, index: number) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0, scale: 0.8, rotationY: 25 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            delay: index * 0.15,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "bottom 10%",
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

      // Magnetic effect for buttons
      gsap.utils.toArray(".magnetic").forEach((button: any) => {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, { scale: 1.05, duration: 0.3, ease: "power2.out" })
        })
        button.addEventListener("mouseleave", () => {
          gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" })
        })
      })
    }

    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
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

  const skills = [
    { name: "Java", level: 90, icon: Code, category: "Programming", color: "from-yellow-400 to-orange" },
    { name: "React", level: 85, icon: Code, category: "Frontend", color: "from-blue-400 to-cyan-400" },
    { name: "Spring Boot", level: 80, icon: Globe, category: "Backend", color: "from-purple-400 to-pink-400" },
    { name: "MySQL", level: 85, icon: Database, category: "Database", color: "from-blue-500 to-indigo-500" },
    { name: "MongoDB", level: 75, icon: Database, category: "Database", color: "from-yellow-500 to-amber-500" },
    { name: "Tailwind CSS", level: 90, icon: Code, category: "Frontend", color: "from-cyan-400 to-blue-400" },
    { name: "C++", level: 75, icon: Code, category: "Programming", color: "from-purple-500 to-violet-500" },
    {
      name: "Android (Kotlin)",
      level: 70,
      icon: Smartphone,
      category: "Mobile",
      color: "from-yellow-400 to-yellow-600",
    },
  ]

  const projects = [
    {
      title: "Auto Showroom Website",
      description:
        "Website bán xe được xây dựng với ReactTS, TailwindCSS, NodeJS, MongoDB cùng với AI model để đánh giá sản phẩm phổ biến nhất. Giao diện đẹp mắt với 3D models sử dụng ThreeJS, Framer-motion, AOS, GSAP, Parallax.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "TypeScript", "NodeJS", "MongoDB", "ThreeJS", "GSAP"],
      github: "https://github.com/anvnh/auto_showroom",
      demo: "#",
      featured: true,
    },
    {
      title: "Computer Manager System",
      description:
        "Ứng dụng quản lý kho máy tính dựa trên mô hình MVC được xây dựng bằng Java và MySQL. Hệ thống quản lý toàn diện với giao diện thân thiện.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Java", "MySQL", "MVC", "Swing"],
      github: "https://github.com/hoangphatdev/computer-management-system",
      demo: "#",
      featured: false,
    },
    {
      title: "Auto Part Shop",
      description:
        "Ứng dụng Android với website quản lý sản phẩm được xây dựng bằng Java Spring Boot, Kotlin, Jetpack Compose, ReactJS, TailwindCSS, MySQL. Tích hợp PayOS API để thanh toán thực tế.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Spring Boot", "Kotlin", "Jetpack Compose", "ReactJS", "PayOS"],
      github: "https://github.com/tuananh2005889/AutoParts_Android",
      demo: "#",
      featured: true,
    },
    {
      title: "Dormitory Management",
      description:
        "Dự án quản lý ký túc xá dựa trên mô hình MVC, được xây dựng bằng Java và MySQL. Hệ thống quản lý sinh viên, phòng ở và các dịch vụ ký túc xá.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Java", "MySQL", "MVC", "JavaFX"],
      github: "https://github.com/tuananh2005889/OOP-KTX-2024-N1",
      demo: "#",
      featured: false,
    },
  ]

  const achievements = [
    {
      title: "Phó Chủ nhiệm CLB Kỹ năng tại VKU",
      description: "Lãnh đạo và tổ chức các hoạt động phát triển kỹ năng cho thành viên CLB",
      icon: Award,
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Thành viên Ban chấp hành Liên chi hội Khoa CNTT tại VKU",
      description: "Tham gia điều hành các hoạt động của khoa",
      icon: Briefcase,
      color: "from-blue-400 to-indigo-500",
    },
    {
      title: "Giải khuyến khích cuộc thi Tài năng Tiếng Anh 2024 tại VKU",
      description: "Thể hiện khả năng giao tiếp tiếng Anh xuất sắc",
      icon: Star,
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "Giải ba cuộc thi thiết kế website đẹp nhất 2024 tại VKU",
      description: "Thiết kế website sáng tạo và chuyên nghiệp",
      icon: Award,
      color: "from-yellow-500 to-amber-500",
    },
  ]

  const stats = [
    { number: "50+", label: "Dự án hoàn thành", icon: Target },
    { number: "2", label: "Năm kinh nghiệm", icon: Coffee },
    { number: "4", label: "Giải thưởng", icon: Award },
    { number: "100+", label: "Commits GitHub", icon: Code },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
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
      <nav className="fixed top-0 w-full z-40 nav-bg border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold gradient-text-main">nvtank</div>
            <div className="hidden md:flex space-x-8 text-white">
              {["home", "about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`relative capitalize transition-all duration-300 text-gray-100 font-medium group ${activeSection === section} "
                    }`}
                >
                  {section === "home"
                    ? "Trang chủ"
                    : section === "about"
                      ? "Giới thiệu"
                      : section === "skills"
                        ? "Kỹ năng"
                        : section === "projects"
                          ? "Dự án"
                          : "Liên hệ"}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-yellow to-purple transition-all duration-300 ${activeSection === section ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="floating-1 absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400/20 to-purple-400/20 rounded-full blur-xl" />
        <div className="floating-2 absolute top-1/3 right-20 w-48 h-48 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl" />
        <div className="floating-3 absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-yellow-400/20 to-blue-400/20 rounded-full blur-xl" />
      </div>

      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="hero-avatar mb-8 relative">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-yellow via-purple to-blue p-1 shadow-2xl pulse-glow">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-7xl shadow-inner">
                👨‍💻
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-yellow to-amber-400 rounded-full border-4 border-gray-900 animate-pulse shadow-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-gray-900 rounded-full" />
            </div>
          </div>

          <h1 className="hero-title text-6xl md:text-8xl font-black mb-6 mt-10 gradient-text-main leading-tight">
            Nguyễn Văn
            <br />
            <span className="text-5xl md:text-7xl">Tuấn Anh</span>
          </h1>

          <div className="hero-subtitle mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow/20 to-purple/20 rounded-full border border-yellow/30 shadow-lg glass">
              <Zap className="w-5 h-5 text-white mr-2" />
              <span className="text-xl font-semibold text-gray-100">Full Stack Developer & IT Student</span>
            </div>
          </div>

          <p className="hero-description text-lg mb-12 text-gray-100 max-w-4xl mx-auto leading-relaxed">
            Sinh viên IT năm 2 tại VKU với kinh nghiệm làm việc với{" "}
            <span className="font-semibold text-gray-100" >Java, React</span> và các framework. Có khả năng thích ứng nhanh
            với môi trường mới và luôn nghiên cứu, cập nhật công nghệ mới mỗi ngày.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="magnetic bg-gradient-to-r from-yellow to-purple hover:from-yellow-light hover:to-purple-light text-gray-900 px-10 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl group font-bold"
              onClick={() => scrollToSection("projects")}
            >
              <span className="mr-3">Khám phá dự án</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="magnetic border-2 border-yellow text-white hover:bg-yellow hover:text-gray-900 px-10 py-4 rounded-full transition-all duration-300 glass shadow-lg hover:shadow-xl group"
            >
              <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
              <span>Tải CV</span>
            </Button>
          </div>

          <div className="hero-social text-gray-100 flex justify-center space-x-6 pb-12">
            {[
              { icon: Github, href: "https://github.com/tuananh2005889", label: "GitHub", color: "hover:bg-purple text-gray-100" },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/your-profile",
                label: "LinkedIn",
                color: "hover:bg-blue",
              },
              { icon: Mail, href: "mailto:nvtankwork@gmail.com", label: "Email", color: "hover:bg-yellow" },
            ].map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                className={`magnetic w-14 h-14 rounded-full glass flex items-center justify-center text-white hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 ${color}`}
                aria-label={label}
              >
                <Icon className="h-6 w-6 text-gray-100" />
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-yellow rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="stagger-card text-center p-6 card-bg rounded-2xl shadow-lg border border-white/10 hover:shadow-xl transition-all duration-300 text-gray-100"
                >
                  <div className="w-16 h-16 mx-auto mb-4 text-gray-100 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-gray-100" />
                  </div>
                  <div className="text-3xl font-bold text-gray-100 mb-2">{stat.number}</div>
                  <div className="text-muted font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-dark relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="reveal-section text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text-main">Về tôi</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow to-purple mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="stagger-card card-bg rounded-3xl p-8 shadow-xl border border-white/10 hover:shadow-2xl transition-all duration-500">
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
                  </p>
                </div>
              </div>

              <div className="stagger-card card-bg rounded-3xl p-8 shadow-xl border border-white/10 hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue to-purple  rounded-2xl flex items-center justify-center mr-4">
                    <Target className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple">Mục tiêu</h3>
                </div>
                <div className="text-reveal">
                  <p className="text-gray-100 leading-relaxed">
                    Là sinh viên Công nghệ Thông tin hướng đến phát triển trong lĩnh vực{" "}
                    <span className="font-semibold text-gray-100">lập trình web và kỹ thuật phần mềm</span>, mong muốn làm
                    việc trong môi trường năng động để có thể áp dụng các kỹ năng kỹ thuật và tiếp tục học hỏi để trở
                    thành một lập trình viên chuyên nghiệp.
                  </p>
                </div>
              </div>
            </div>

            <div className="stagger-card relative">
              <div className="w-full h-[500px] rounded-3xl bg-gradient-to-br from-yellow/20 via-purple/20 to-blue/20 overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Profile"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-purple-900/20" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass rounded-2xl p-4">
                    <p className="text-white font-semibold">💡 "Code is poetry written in logic"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="reveal-section">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-100">Thành tích & Hoạt động</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <div
                    key={index}
                    className="stagger-card card-bg rounded-2xl p-6 shadow-lg border border-white/10 hover:shadow-xl transition-all duration-300 group"
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
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-gradient-section relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="reveal-section text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text-main">Kỹ năng</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow to-purple mx-auto rounded-full" />
            <p className="text-xl text-gray-100 mt-8 max-w-2xl mx-auto">
              Những công nghệ và ngôn ngữ lập trình tôi đã làm việc và thành thạo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <Card
                  key={skill.name}
                  className="stagger-card card-bg border-white/10 hover:shadow-2xl transition-all duration-500 group overflow-hidden"
                >
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
                        <div
                          className={`progress-bar h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                          data-width={skill.level}
                          style={{ width: "0%" }}
                        />
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-sm text-gray-100">Proficiency</span>
                        <span className="text-sm font-bold text-gray-100">{skill.level}%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-gradient-dark relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="reveal-section text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text-main">Dự án nổi bật</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow to-purple mx-auto rounded-full" />
            <p className="text-xl text-gray-100 mt-8 max-w-3xl mx-auto">
              Những dự án tôi đã thực hiện, từ web applications đến mobile apps với các công nghệ hiện đại
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`stagger-card grid lg:grid-cols-2 text-gray-100 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
              >
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative group">
                    <div className="absolute text-gray-100 inset-0 bg-gradient-to-r from-yellow/20 to-purple/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative card-bg rounded-3xl overflow-hidden shadow-xl border border-white/10 group-hover:shadow-2xl text-gray-100 transition-all duration-500">
                      <div className="relative overflow-hidden">

                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 gray-100 transition-opacity duration-500" />
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex space-x-3">
                          <Button size="sm" className="magnetic glass hover:bg-white/30 border border-white/30" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 text-gray-100" />
                            </a>
                          </Button>
                        </div>
                        {project.featured && (
                          <div className="absolute top-4 left-4">
                            <div className="bg-gradient-to-r from-yellow to-orange-500  px-3 py-1 rounded-full text-xs text-gray-100 font-bold flex items-center">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold  mb-4 group-hover:text-purple transition-colors duration-300 text-gray-100">
                        {project.title}
                      </h3>
                      <div className="text-reveal">
                        <p className="text-gray-100 leading-relaxed text-lg">{project.description}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className="bg-gradient-to-r from-yellow/20 to-purple/20 text-white hover:from-yellow/30 hover:to-purple/30 transition-all duration-300 px-4 py-2 text-sm font-medium border border-yellow/30 text-gray-100"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <Button
                        className="magnetic bg-gradient-to-r from-yellow to-purple hover:from-yellow-light hover:to-purple-light text-gray-900 px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group font-bold"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-5 h-5 mr-2" />
                          <span>View Code</span>
                          <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="magnetic border-2 border-yellow text-white hover:bg-yellow hover:text-gray-900 px-6 py-3 rounded-full transition-all duration-300 glass"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-5 h-5 mr-2" />
                          <span>Live Demo</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-section relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="reveal-section text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text-main">Liên hệ</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow to-purple mx-auto rounded-full" />
            <p className="text-xl text-gray-100 mt-8 max-w-2xl mx-auto">
              Hãy kết nối với tôi để thảo luận về các cơ hội hợp tác hoặc dự án thú vị
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="stagger-card">
                  <h3 className="text-3xl font-bold text-gray-100 mb-8 flex items-center">
                    <Users className="w-8 h-8 mr-3" />
                    Hãy kết nối với tôi
                  </h3>
                  <div className="text-reveal">
                    <p className="text-gray-100 text-lg leading-relaxed mb-8">
                      Tôi luôn sẵn sàng thảo luận về các dự án mới, cơ hội thực tập, hoặc đơn giản chỉ là trò chuyện về
                      công nghệ và lập trình. Đừng ngần ngại liên hệ!
                    </p>
                  </div>
                </div>

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
                      icon: Phone,
                      label: "Điện thoại",
                      value: "0374123205",
                      color: "text-gray-100",
                      href: "tel:0374123205",
                    },
                    {
                      icon: MapPin,
                      label: "Địa chỉ",
                      value: "Hòa Quý, Ngũ Hành Sơn, Đà Nẵng",
                      color: "text-gray-100",
                      href: "#",
                    },
                  ].map(({ icon: Icon, label, value, color, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="stagger-card flex items-center space-x-6 p-6 rounded-2xl card-bg hover:shadow-xl transition-all duration-500 group border border-white/10 hover:scale-105"
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
                    </a>
                  ))}
                </div>
              </div>

              <Card className="stagger-card card-bg border-white/10 shadow-2xl">
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
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 glass border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-100 mb-4 md:mb-0">
              © 2024 Nguyễn Văn Tuấn Anh. Được thiết kế với và React | nvtank.id.vn
            </div>
            <div className="flex space-x-6">
              {[
                { icon: Github, href: "https://github.com/tuananh2005889", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/your-profile", label: "LinkedIn" },
                { icon: Mail, href: "mailto:nvtankwork@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="magnetic w-10 h-10 rounded-full bg-gradient-to-r from-yellow to-purple flex items-center justify-center text-gray-900 hover:scale-110 transition-all duration-300 shadow-lg"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
