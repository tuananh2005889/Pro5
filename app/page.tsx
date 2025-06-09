"use client"

import { useState, useEffect } from "react"
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
  Palette,
  Smartphone,
  Globe,
  ChevronDown,
} from "lucide-react"
import Image from "next/image"

export default function PersonalProfile() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    setIsVisible(true)

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
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = [
    { name: "React", level: 90, icon: Code },
    { name: "TypeScript", level: 85, icon: Code },
    { name: "Next.js", level: 88, icon: Globe },
    { name: "UI/UX Design", level: 80, icon: Palette },
    { name: "Mobile Development", level: 75, icon: Smartphone },
    { name: "Node.js", level: 82, icon: Code },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Nền tảng thương mại điện tử hiện đại với React và Node.js",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "Task Management App",
      description: "Ứng dụng quản lý công việc với giao diện trực quan",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Next.js", "TypeScript", "Prisma"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "Website portfolio cá nhân với animations đẹp mắt",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React", "Tailwind", "Framer Motion"],
      link: "#",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-purple-400 ${
                    activeSection === section ? "text-purple-400" : "text-white/80"
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
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="mb-8 relative">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 hover:scale-110 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-slate-900 animate-pulse"></div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Nguyễn Văn Tuấn Anh
            </h1>

            <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-2xl mx-auto">
              Full Stack Developer & UI/UX Designer
            </p>

            <p className="text-lg text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Tôi là một developer đam mê tạo ra những sản phẩm digital đẹp mắt và có ý nghĩa. Với kinh nghiệm trong
              việc phát triển web và mobile applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                onClick={() => scrollToSection("projects")}
              >
                Xem dự án
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Tải CV
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              {[
                { icon: Github, href: "https://github.com/tuananh2005889", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/your-profile", label: "LinkedIn" },
                { icon: Mail, href: "mailto:contact@nvtank.id.vn", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-white/60" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Giới thiệu
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-white/80 leading-relaxed">
                Tôi là một Full Stack Developer với hơn 3 năm kinh nghiệm trong việc phát triển các ứng dụng web và
                mobile. Đam mê tạo ra những sản phẩm có tác động tích cực đến cuộc sống của người dùng.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Chuyên môn của tôi bao gồm React, Next.js, Node.js, và các công nghệ hiện đại khác. Tôi luôn học hỏi và
                cập nhật những xu hướng mới nhất trong ngành công nghệ.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                  <div className="text-white/70">Dự án hoàn thành</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl font-bold text-pink-400 mb-2">3+</div>
                  <div className="text-white/70">Năm kinh nghiệm</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/10 overflow-hidden group hover:scale-105 transition-transform duration-300">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Kỹ năng
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <Card
                  key={skill.name}
                  className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                        <p className="text-white/60">{skill.level}%</p>
                      </div>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Dự án nổi bật
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-purple-600/20 text-purple-300 hover:bg-purple-600/30 transition-colors duration-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Liên hệ
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">Hãy kết nối với tôi</h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Tôi luôn sẵn sàng thảo luận về các dự án mới, cơ hội hợp tác hoặc đơn giản chỉ là trò chuyện về công
                    nghệ.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    { icon: Mail, label: "Email", value: "contact@nvtank.id.vn" },
                    { icon: Phone, label: "Điện thoại", value: "+84 123 456 789" },
                    { icon: MapPin, label: "Địa chỉ", value: "Hà Nội, Việt Nam" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">{label}</p>
                        <p className="text-white font-medium">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-white/80 mb-2">Tên của bạn</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                        placeholder="Nhập tên của bạn"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 mb-2">Tin nhắn</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors duration-300 resize-none"
                        placeholder="Nội dung tin nhắn..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      Gửi tin nhắn
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/40 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60">© 2024 Nguyễn Văn Tuấn Anh. Được thiết kế với ❤️ và React | nvtank.id.vn</p>
        </div>
      </footer>
    </div>
  )
}
