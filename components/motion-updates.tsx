"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, ExternalLink, Github, Code2, Rocket, Zap, Trophy } from "lucide-react"
import Image from "next/image"

interface Update {
  id: string
  type: "blog" | "project" | "achievement" | "competition"
  title: string
  description: string
  date: string
  image?: string
  tags: string[]
  link?: string
  github?: string
  featured?: boolean
}

const updates: Update[] = [
  {
    id: "1",
    type: "competition",
    title: "BWD 2024 Finals - Auto Showroom Project",
    description:
      "Tham gia vòng chung kết cuộc thi BWD 2024 tại VKU với dự án Auto Showroom. Thử thách làm sản phẩm công nghệ ngay từ khi là sinh viên năm thứ nhất. Dự án sử dụng React, Node.js, và AI để tạo ra nền tảng mua bán xe hơi hiện đại.",
    date: "Dec 2024",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_3924-696x465.jpg-afrsnDiqxwwn4TEc3n4z39obZXiliz.jpeg",
    tags: ["Competition", "React", "Node.js", "AI", "3D Models"],
    github: "https://github.com/anvnh/auto_showroom",
    link: "https://tapchidongnama.vn/vong-chung-ket-bwd-2024-vku-thu-thach-lam-san-pham-cong-nghe-ngay-tu-khi-la-sinh-vien-nam-thu-nhat/",
    featured: true,
  },
  {
    id: "2",
    type: "achievement",
    title: "VKU Website Design Competition - 3rd Place",
    description:
      "Đạt giải ba trong cuộc thi thiết kế website đẹp nhất 2024 tại VKU với thiết kế sáng tạo và chuyên nghiệp, thể hiện kỹ năng frontend và UX/UI design.",
    date: "Nov 2024",
    tags: ["Award", "Design", "Frontend", "UX/UI"],
    featured: true,
  },
  {
    id: "3",
    type: "project",
    title: "Auto Parts Shop - E-commerce Platform",
    description:
      "Phát triển ứng dụng e-commerce cho phụ tùng ô tô với Android app (Kotlin, Jetpack Compose) và backend Spring Boot. Tích hợp PayOS API cho thanh toán và ReactJS cho admin panel.",
    date: "Nov 2024",
    tags: ["Android", "Kotlin", "Spring Boot", "E-commerce", "PayOS"],
    github: "https://github.com/tuananh2005889/AutoParts_Android",
  },
  {
    id: "4",
    type: "achievement",
    title: "English Talent Competition - Encouragement Award",
    description:
      "Đạt giải khuyến khích trong cuộc thi Tài năng Tiếng Anh 2024 tại VKU, thể hiện khả năng giao tiếp và thuyết trình bằng tiếng Anh.",
    date: "Oct 2024",
    tags: ["Award", "English", "Communication"],
  },
  {
    id: "5",
    type: "project",
    title: "Computer Management System",
    description:
      "Hệ thống quản lý kho máy tính sử dụng Java Swing và MySQL. Áp dụng mô hình MVC với giao diện thân thiện và các tính năng quản lý đầy đủ.",
    date: "Sep 2024",
    tags: ["Java", "MySQL", "Desktop App", "MVC"],
    github: "https://github.com/hoangphatdev/computer-management-system",
  },
  {
    id: "6",
    type: "achievement",
    title: "Deputy Head of Skills Club at VKU",
    description:
      "Được bầu làm Phó Chủ nhiệm CLB Kỹ năng tại VKU, lãnh đạo và tổ chức các hoạt động phát triển kỹ năng cho thành viên CLB.",
    date: "Aug 2024",
    tags: ["Leadership", "Club", "Skills Development"],
  },
]

const typeIcons = {
  blog: Code2,
  project: Rocket,
  achievement: Trophy,
  competition: Zap,
}

const typeColors = {
  blog: "from-blue-500/20 to-cyan-500/20",
  project: "from-purple-500/20 to-pink-500/20",
  achievement: "from-yellow-500/20 to-orange-500/20",
  competition: "from-green-500/20 to-emerald-500/20",
}

export default function MotionUpdates() {
  const [selectedType, setSelectedType] = useState<string>("all")
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const filteredUpdates = selectedType === "all" ? updates : updates.filter((update) => update.type === selectedType)

  const types = ["all", "competition", "project", "achievement", "blog"]

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-6xl font-black mb-6 text-white tracking-tight">Updates</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Always in Motion. Theo dõi các dự án, thành tích và hành trình học tập của tôi.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        className="flex justify-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex space-x-2 bg-gray-900/50 backdrop-blur-sm rounded-full p-2 border border-gray-800">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedType === type
                  ? "bg-white text-gray-900 shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50"
              }`}
            >
              {type === "all"
                ? "Tất cả"
                : type === "competition"
                  ? "Cuộc thi"
                  : type === "project"
                    ? "Dự án"
                    : type === "achievement"
                      ? "Thành tích"
                      : "Blog"}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Updates Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedType}
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {filteredUpdates.map((update, index) => {
            const Icon = typeIcons[update.type]
            return (
              <motion.div
                key={update.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(update.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group"
              >
                <Card className="bg-gray-900/30 border-gray-800 hover:border-gray-700 transition-all duration-500 overflow-hidden backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row">
                      {/* Content */}
                      <div className="flex-1 p-8 lg:p-12">
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className={`p-3 rounded-xl bg-gradient-to-r ${typeColors[update.type]} border border-gray-700`}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="border-gray-700 text-gray-300 bg-gray-800/50">
                              {update.type === "competition"
                                ? "Cuộc thi"
                                : update.type === "project"
                                  ? "Dự án"
                                  : update.type === "achievement"
                                    ? "Thành tích"
                                    : "Blog"}
                            </Badge>
                            <div className="flex items-center text-gray-500 text-sm">
                              <Calendar className="w-4 h-4 mr-2" />
                              {update.date}
                            </div>
                          </div>
                          {update.featured && (
                            <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Featured</Badge>
                          )}
                        </div>

                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                          {update.title}
                        </h3>

                        <p className="text-gray-400 text-lg leading-relaxed mb-6">{update.description}</p>

                        <div className="flex flex-wrap gap-2 mb-8">
                          {update.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-4">
                          {update.github && (
                            <motion.a
                              href={update.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                              whileHover={{ x: 5 }}
                            >
                              <Github className="w-5 h-5" />
                              <span>View Code</span>
                            </motion.a>
                          )}
                          {update.link && (
                            <motion.a
                              href={update.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                              whileHover={{ x: 5 }}
                            >
                              <ExternalLink className="w-5 h-5" />
                              <span>Read More</span>
                            </motion.a>
                          )}
                          <motion.button
                            className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300 ml-auto"
                            whileHover={{ x: 5 }}
                          >
                            <span>Chi tiết</span>
                            <ArrowRight className="w-5 h-5" />
                          </motion.button>
                        </div>
                      </div>

                      {/* Image */}
                      {update.image && (
                        <div className="lg:w-80 h-64 lg:h-auto relative overflow-hidden">
                          <motion.div
                            className="absolute inset-0"
                            animate={{
                              scale: hoveredCard === update.id ? 1.1 : 1,
                            }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                          >
                            <Image
                              src={update.image || "/placeholder.svg"}
                              alt={update.title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                          </motion.div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
