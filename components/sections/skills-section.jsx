"use client"

import { useTheme } from "../../contexts/theme-context"

export default function SkillsSection() {
  const { isDarkMode } = useTheme()

  const skillCategories = [
    {
      title: "Languages:",
      skills: ["Python", "C++", "C", "JavaScript", "TypeScript"],
    },
    {
      title: "Frontend:",
      skills: ["React", "Next.js", "Tailwind CSS", "Chakra UI", "HTML", "CSS"],
    },
    {
      title: "Backend:",
      skills: ["FastAPI", "Node.js", "Express.js", "REST API"],
    },
    {
      title: "Databases:",
      skills: ["PostgreSQL", "Redis", "Firebase", "MongoDB", "Pinecone"],
    },
    {
      title: "AI/ML:",
      skills: [
        "PyTorch",
        "Transformers",
        "LangChain",
        "Agent-to-Agent (A2A)",
        "Model Context Protocol (MCP)",
        "AI Agents",
        "Prompt Engineering",
        "RAG Pipelines",
        "Vector Databases",
        "LLM Integration",
        "Vector Embeddings",
        "Tool Calling",
        "Vercel AI SDK",
      ],
    },
  ]

  const proficiencies = [
    {
      title: "Distributed Systems & Architecture",
      description: "(Production RAG pipelines processing millions of data points, 99.9% uptime)",
    },
    {
      title: "Leadership & Team Management",
      description: "(Led cross-functional teams of 4+ engineers, scaled systems to thousands of users)",
    },
    {
      title: "Backend Engineering",
      description:
        "(REST APIs serving 10K+ daily active users, 10x performance optimization, Database design, Data processing, API design, Rate limiting)",
    },
    {
      title: "Full Stack Development",
      description: "(React, Next.js, TypeScript, Modern UI/UX, Responsive design, Production deployments)",
    },
    {
      title: "Cloud Infrastructure",
      description: "(AWS ECS/EKS, Auto-scaling, Container orchestration, CI/CD Pipelines, Monitoring & Logging)",
    },
    {
      title: "AI/ML Production Systems",
      description:
        "(RAG pipelines, Vector databases, Vector embeddings, LLM integration, Autonomous AI Agents, Prompt Engineering)",
    },
    {
      title: "Data Engineering",
      description: "(Multi-source ETL pipelines processing TB+ of data, Real-time processing, Database optimization)",
    },
    {
      title: "System Performance",
      description: "(High-throughput and low-latency systems, Concurrent user scaling, Query optimization)",
    },
  ]

  return (
    <section className={`py-20 ${isDarkMode ? "bg-[#171d29] text-white" : "bg-white text-gray-900"}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Skills
          </h2>
          <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto`}>
            A comprehensive overview of my technical expertise across various domains of software development.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Skill Categories */}
          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-4">
                <h3 className={`text-lg font-semibold text-blue-500`}>{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                        isDarkMode
                          ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Proficiencies */}
          <div className="space-y-6">
            <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Proficient in:
            </h3>
            <div className="space-y-6">
              {proficiencies.map((proficiency, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold text-lg ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                        {proficiency.title}
                      </h4>
                      <p className={`text-sm mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                        {proficiency.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
