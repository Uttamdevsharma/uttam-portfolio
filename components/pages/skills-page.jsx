"use client"

import { useTheme } from "../../contexts/theme-context"

export default function SkillsPage() {
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
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Skills
          </h1>
          <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl`}>
            A comprehensive overview of my technical expertise across various domains of software development, from
            frontend technologies to AI/ML systems and cloud infrastructure.
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

        {/* Additional Skills Section */}
        <div className="mt-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Technical Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Development Practices */}
            <div className={`p-6 rounded-xl ${isDarkMode ? "bg-gray-800/50" : "bg-gray-100"} backdrop-blur-sm`}>
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Development Practices
              </h3>
              <ul className={`space-y-2 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                <li>• Test-Driven Development</li>
                <li>• Agile/Scrum Methodologies</li>
                <li>• Code Reviews & Pair Programming</li>
                <li>• CI/CD Pipeline Implementation</li>
              </ul>
            </div>

            {/* Tools & Platforms */}
            <div className={`p-6 rounded-xl ${isDarkMode ? "bg-gray-800/50" : "bg-gray-100"} backdrop-blur-sm`}>
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Tools & Platforms
              </h3>
              <ul className={`space-y-2 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                <li>• Git & GitHub/GitLab</li>
                <li>• Docker & Kubernetes</li>
                <li>• AWS/GCP/Azure</li>
                <li>• Vercel & Netlify</li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div className={`p-6 rounded-xl ${isDarkMode ? "bg-gray-800/50" : "bg-gray-100"} backdrop-blur-sm`}>
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Soft Skills
              </h3>
              <ul className={`space-y-2 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                <li>• Team Leadership</li>
                <li>• Project Management</li>
                <li>• Technical Communication</li>
                <li>• Problem Solving</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
