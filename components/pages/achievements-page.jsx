"use client"

import { useTheme } from "../../contexts/theme-context"

export default function AchievementsPage() {
  const { isDarkMode } = useTheme()

  const achievements = [
    {
      id: 1,
      title: "AWS Solutions Architect Professional",
      organization: "Amazon Web Services",
      date: "2023",
      type: "Certification",
      description: "Advanced certification demonstrating expertise in designing distributed systems on AWS platform.",
      icon: "🏆",
      color: "bg-orange-500",
    },
    {
      id: 2,
      title: "Best Innovation Award",
      organization: "TechCorp Annual Conference",
      date: "2023",
      type: "Award",
      description: "Recognized for developing an AI-powered solution that improved customer satisfaction by 40%.",
      icon: "🥇",
      color: "bg-yellow-500",
    },
    {
      id: 3,
      title: "Google Cloud Professional Developer",
      organization: "Google Cloud",
      date: "2022",
      type: "Certification",
      description: "Professional-level certification for designing and building applications on Google Cloud Platform.",
      icon: "📜",
      color: "bg-blue-500",
    },
    {
      id: 4,
      title: "Team Leadership Excellence",
      organization: "Current Company",
      date: "2022",
      type: "Recognition",
      description:
        "Led a cross-functional team of 8 engineers to deliver a critical project 2 weeks ahead of schedule.",
      icon: "👥",
      color: "bg-purple-500",
    },
    {
      id: 5,
      title: "Open Source Contributor",
      organization: "GitHub",
      date: "2021-Present",
      type: "Achievement",
      description:
        "Active contributor to major open source projects with 500+ stars and 100+ forks across repositories.",
      icon: "💻",
      color: "bg-green-500",
    },
    {
      id: 6,
      title: "React Advanced Certification",
      organization: "Meta",
      date: "2021",
      type: "Certification",
      description: "Advanced React certification covering hooks, context, performance optimization, and testing.",
      icon: "⚛️",
      color: "bg-cyan-500",
    },
  ]

  const stats = [
    { label: "Certifications Earned", value: "12+", color: "text-blue-500" },
    { label: "Awards Received", value: "8", color: "text-yellow-500" },
    { label: "Years Experience", value: "5+", color: "text-green-500" },
    { label: "Projects Delivered", value: "50+", color: "text-purple-500" },
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Achievements
          </h1>
          <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto`}>
            A collection of professional milestones, certifications, and recognitions that showcase my commitment to
            continuous learning and excellence in software development.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-xl ${isDarkMode ? "bg-gray-800/50" : "bg-gray-100"} backdrop-blur-sm`}
            >
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
              <div className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Timeline */}
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl font-bold mb-8 text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Professional Journey
          </h2>

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={achievement.id} className="relative">
                {/* Timeline Line */}
                {index !== achievements.length - 1 && (
                  <div className={`absolute left-6 top-16 w-0.5 h-16 ${isDarkMode ? "bg-gray-700" : "bg-gray-300"}`} />
                )}

                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-12 h-12 ${achievement.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}
                  >
                    {achievement.icon}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 p-6 rounded-xl ${isDarkMode ? "bg-gray-800/50" : "bg-white"} shadow-lg`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        {achievement.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-2 md:mt-0">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {achievement.type}
                        </span>
                        <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                          {achievement.date}
                        </span>
                      </div>
                    </div>
                    <p className={`font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                      {achievement.organization}
                    </p>
                    <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className={`rounded-2xl p-8 ${isDarkMode ? "bg-gray-800/50" : "bg-gray-100"} backdrop-blur-sm`}>
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Ready to achieve more together?
            </h3>
            <p className={`mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Let's collaborate and create new milestones in your next project.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
