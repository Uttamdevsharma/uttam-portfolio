"use client"

import { useState } from "react"
import { useTheme } from "../../contexts/theme-context"

export default function ProjectsPage() {
  const { isDarkMode } = useTheme()
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Full Stack", "Frontend", "Backend", "AI/ML", "Mobile"]

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      category: "Full Stack",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "AI Chat Assistant",
      description:
        "An intelligent chatbot powered by OpenAI GPT-4 with custom training data. Includes conversation memory, context awareness, and integration with multiple platforms.",
      image: "/ai-chatbot-interface.png",
      technologies: ["Python", "FastAPI", "OpenAI", "React", "WebSocket"],
      category: "AI/ML",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.",
      image: "/project-management-dashboard.png",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      category: "Full Stack",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Weather Analytics Dashboard",
      description:
        "A data visualization platform that aggregates weather data from multiple APIs and provides interactive charts and forecasting insights.",
      image: "/weather-analytics-dashboard.png",
      technologies: ["React", "D3.js", "Express.js", "MongoDB"],
      category: "Frontend",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Microservices API Gateway",
      description:
        "A scalable API gateway built with Node.js and Docker, handling authentication, rate limiting, and service discovery for microservices architecture.",
      image: "/api-gateway-architecture.png",
      technologies: ["Node.js", "Docker", "Redis", "Nginx", "Kubernetes"],
      category: "Backend",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "React Native Fitness App",
      description:
        "A cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features for sharing achievements.",
      image: "/fitness-app-interface.png",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      category: "Mobile",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ]

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Projects
          </h1>
          <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto`}>
            A showcase of my recent work spanning full-stack development, AI/ML applications, and innovative solutions.
            Each project demonstrates different aspects of my technical expertise and problem-solving approach.
          </p>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h2 className={`text-2xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Featured Projects
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                    isDarkMode ? "bg-gray-800/50" : "bg-white"
                  } shadow-lg hover:shadow-xl`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      {project.title}
                    </h3>
                    <p className={`mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                          isDarkMode
                            ? "border border-gray-600 text-gray-300 hover:bg-gray-700"
                            : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : isDarkMode
                      ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                isDarkMode ? "bg-gray-800/50" : "bg-white"
              } shadow-lg hover:shadow-xl`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      isDarkMode ? "bg-gray-700 text-gray-300" : "bg-white text-gray-700"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"} line-clamp-3`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 rounded text-xs ${
                        isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={`px-2 py-1 rounded text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className={`flex-1 text-center py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isDarkMode
                        ? "border border-gray-600 text-gray-300 hover:bg-gray-700"
                        : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className={`rounded-2xl p-8 ${isDarkMode ? "bg-gray-800/50" : "bg-gray-100"} backdrop-blur-sm`}>
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Interested in collaborating?
            </h3>
            <p className={`mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              I'm always open to discussing new projects and opportunities. Let's build something amazing together!
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
