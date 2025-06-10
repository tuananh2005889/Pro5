"use client"

import { useState } from "react"
import { motion, Reorder } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Star, Calendar, MapPin, Award } from "lucide-react"
import Image from "next/image"

interface GridItem {
  id: string
  title: string
  description: string
  category: string
  image?: string
  tags?: string[]
  link?: string
  github?: string
  featured?: boolean
  size: "small" | "medium" | "large"
  type: "project" | "achievement" | "experience" | "gallery"
}

const initialItems: GridItem[] = [
  {
    id: "1",
    title: "Auto Showroom Website",
    description: "Website bán xe với ReactTS, NodeJS, MongoDB và AI model. Giao diện 3D với ThreeJS, GSAP.",
    category: "Web Development",
    image: "/images/mountain-sunset.jpg",
    tags: ["React", "TypeScript", "NodeJS", "MongoDB", "ThreeJS"],
    github: "https://github.com/anvnh/auto_showroom",
    featured: true,
    size: "large",
    type: "project",
  },
  {
    id: "2",
    title: "Phó Chủ nhiệm CLB Kỹ năng",
    description: "Lãnh đạo và tổ chức các hoạt động phát triển kỹ năng cho thành viên CLB tại VKU",
    category: "Leadership",
    size: "medium",
    type: "achievement",
  },
  {
    id: "3",
    title: "Auto Part Shop",
    description: "Ứng dụng Android với Spring Boot, Kotlin, Jetpack Compose, ReactJS. Tích hợp PayOS API.",
    category: "Mobile Development",
    image: "/images/mountain-landscape.jpg",
    tags: ["Spring Boot", "Kotlin", "Jetpack Compose", "ReactJS"],
    github: "https://github.com/tuananh2005889/AutoParts_Android",
    featured: true,
    size: "medium",
    type: "project",
  },
  {
    id: "4",
    title: "Giải ba Website đẹp nhất 2024",
    description: "Thiết kế website sáng tạo và chuyên nghiệp tại VKU",
    category: "Award",
    size: "small",
    type: "achievement",
  },
  {
    id: "5",
    title: "Computer Manager System",
    description: "Ứng dụng quản lý kho máy tính dựa trên mô hình MVC với Java và MySQL",
    category: "Desktop Application",
    tags: ["Java", "MySQL", "MVC", "Swing"],
    github: "https://github.com/hoangphatdev/computer-management-system",
    size: "medium",
    type: "project",
  },
  {
    id: "6",
    title: "VKU Student",
    description: "Sinh viên năm 2, chuyên ngành Công nghệ Phần mềm tại Đại học VKU",
    category: "Education",
    size: "small",
    type: "experience",
  },
]

export default function AppStoreGrid() {
  const [items, setItems] = useState(initialItems)

  const getGridClass = (size: string) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2"
      case "medium":
        return "col-span-2 row-span-1"
      case "small":
        return "col-span-1 row-span-1"
      default:
        return "col-span-1 row-span-1"
    }
  }

  const getCardContent = (item: GridItem) => {
    const baseClasses = "h-full w-full rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing"

    if (item.image) {
      return (
        <div className={`${baseClasses} relative group`}>
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                {item.category}
              </Badge>
              {item.featured && (
                <Badge variant="secondary" className="text-xs bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              )}
            </div>
            <h3 className="font-bold text-lg mb-2 line-clamp-2">{item.title}</h3>
            <p className="text-sm text-gray-200 line-clamp-2 mb-3">{item.description}</p>
            {item.tags && (
              <div className="flex flex-wrap gap-1 mb-3">
                {item.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-xs bg-white/10 px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {(item.github || item.link) && (
              <div className="flex gap-2">
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )
    }

    const getIcon = () => {
      switch (item.type) {
        case "achievement":
          return <Award className="w-8 h-8 text-yellow-400" />
        case "experience":
          return <Calendar className="w-8 h-8 text-blue-400" />
        default:
          return <MapPin className="w-8 h-8 text-purple-400" />
      }
    }

    const getGradient = () => {
      switch (item.type) {
        case "achievement":
          return "from-yellow-500/20 to-orange-500/20"
        case "experience":
          return "from-blue-500/20 to-indigo-500/20"
        case "project":
          return "from-purple-500/20 to-pink-500/20"
        default:
          return "from-gray-500/20 to-gray-600/20"
      }
    }

    return (
      <Card className={`${baseClasses} card-bg border-white/10 hover:shadow-2xl transition-all duration-300 group`}>
        <CardContent className="p-6 h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${getGradient()}`}>{getIcon()}</div>
              {item.featured && (
                <Badge variant="secondary" className="text-xs bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              )}
            </div>
            <Badge variant="outline" className="text-xs mb-3 border-white/30 text-gray-300">
              {item.category}
            </Badge>
            <h3 className="font-bold text-lg mb-2 text-white line-clamp-2">{item.title}</h3>
            <p className="text-sm text-gray-300 line-clamp-3">{item.description}</p>
          </div>

          {item.tags && (
            <div className="flex flex-wrap gap-1 mt-4">
              {item.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {(item.github || item.link) && (
            <div className="flex gap-2 mt-4">
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-gray-300 hover:text-white"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-gray-300 hover:text-white"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold gradient-text-main mb-4">Interactive Portfolio</h2>
        <p className="text-gray-300 text-lg">Kéo thả để sắp xếp lại các dự án và thành tích</p>
      </div>

      <Reorder.Group axis="y" values={items} onReorder={setItems} className="grid grid-cols-3 gap-4 auto-rows-[200px]">
        {items.map((item) => (
          <Reorder.Item
            key={item.id}
            value={item}
            className={getGridClass(item.size)}
            whileDrag={{
              scale: 1.05,
              zIndex: 50,
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)",
            }}
            dragElastic={0.1}
          >
            <motion.div
              layout
              className="h-full w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {getCardContent(item)}
            </motion.div>
          </Reorder.Item>
        ))}
      </Reorder.Group>

      <div className="text-center mt-8">
        <p className="text-sm text-gray-400">💡 Tip: Kéo và thả các card để sắp xếp lại theo ý thích của bạn</p>
      </div>
    </div>
  )
}
