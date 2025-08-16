"use client"

import { useTheme } from "../../contexts/theme-context"

export default function ProficiencySection() {
  const { isDarkMode } = useTheme()

  const proficiencyData = [
    { skill: "Frontend/Design", percentage: 85, color: "bg-blue-500" },
    { skill: "Backend", percentage: 78, color: "bg-green-500" },
    { skill: "Programming", percentage: 90, color: "bg-purple-500" },
  ]

  return (
    <section className={`py-20 ${isDarkMode ? "bg-gray-900/50" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Proficiency
            </h2>
            <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              My expertise levels across different areas of software development
            </p>
          </div>

          {/* Proficiency Bars */}
          <div className="space-y-8">
            {proficiencyData.map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    {item.skill}
                  </h3>
                  <span className={`text-lg font-medium ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {item.percentage}%
                  </span>
                </div>
                <div className={`w-full h-3 rounded-full ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                  <div
                    className={`h-3 rounded-full ${item.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className={`p-6 rounded-xl ${isDarkMode ? "bg-gray-800/50" : "bg-white"} text-center`}>
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className={`text-lg font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Frontend/Design
              </h4>
              <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                Modern UI/UX design with React, Next.js, and responsive layouts
              </p>
            </div>

            <div className={`p-6 rounded-xl ${isDarkMode ? "bg-gray-800/50" : "bg-white"} text-center`}>
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <h4 className={`text-lg font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Backend</h4>
              <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                Scalable APIs, databases, and server-side architecture
              </p>
            </div>

            <div className={`p-6 rounded-xl ${isDarkMode ? "bg-gray-800/50" : "bg-white"} text-center`}>
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h4 className={`text-lg font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Programming
              </h4>
              <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                Algorithm design, data structures, and software architecture
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
