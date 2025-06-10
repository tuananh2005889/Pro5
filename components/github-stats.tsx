"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, GitBranch, Users, Calendar, Code2, TrendingUp } from "lucide-react"

export default function GitHubStats() {
  const stats = [
    { label: "Repositories", value: "19", icon: GitBranch },
    { label: "Total Contributions", value: "923", icon: Code2 },
    { label: "Followers", value: "5", icon: Users },
    { label: "Following", value: "5", icon: Users },
  ]

  const languages = [
    { name: "Java", percentage: 42.01, color: "bg-orange-500" },
    { name: "CSS", percentage: 9.37, color: "bg-blue-500" },
    { name: "TypeScript", percentage: 15.2, color: "bg-blue-600" },
    { name: "HTML", percentage: 12.8, color: "bg-orange-600" },
    { name: "JavaScript", percentage: 10.5, color: "bg-yellow-500" },
    { name: "Others", percentage: 10.12, color: "bg-gray-500" },
  ]

  const techStack = [
    "Java",
    "TypeScript",
    "React",
    "Spring Boot",
    "MySQL",
    "MongoDB",
    "HTML5",
    "CSS3",
    "Hibernate",
    "C++",
    "Figma",
  ]

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* GitHub Stats Overview */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <Github className="w-8 h-8" />
          GitHub Statistics
        </h3>
        <p className="text-gray-400">Hoạt động lập trình và đóng góp mã nguồn</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-gray-900/50 border-gray-700 hover:border-gray-600 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Languages Chart */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gray-900/50 border-gray-700">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Most Used Languages
              </h4>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={lang.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{lang.name}</span>
                      <span className="text-gray-400">{lang.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full ${lang.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gray-900/50 border-gray-700">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge
                      variant="outline"
                      className="border-gray-600 text-gray-300 bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Contribution Activity */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Card className="bg-gray-900/50 border-gray-700">
          <CardContent className="p-6">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Contribution Activity
            </h4>
            <div className="text-center space-y-4">
              <div className="text-3xl font-bold text-green-400">923</div>
              <div className="text-gray-400">contributions in the last year</div>
              <div className="text-sm text-gray-500">From Sep 17, 2023 to Present • Current streak: 1 day</div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
