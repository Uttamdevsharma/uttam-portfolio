"use client"

import { useTheme } from "../../contexts/theme-context"

export default function HomePage() {
  const { isDarkMode } = useTheme()

  const skills = [
    { name: "Frontend/Design", level: 85 },
    { name: "Backend", level: 78 },
    { name: "Programming", level: 90 },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1
                  className={`text-4xl lg:text-6xl font-bold leading-tight ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Hi, I'm a<span className="block text-blue-500">Full Stack Developer</span>
                </h1>
                <p className={`text-lg lg:text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-2xl`}>
                  Passionate about creating innovative web solutions with modern technologies. I specialize in React,
                  Node.js, and building scalable applications that make a difference.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                  View My Work
                </button>
                <button
                  className={`border-2 px-8 py-3 rounded-lg font-medium transition-colors duration-200 ${
                    isDarkMode
                      ? "border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Download CV
                </button>
              </div>
            </div>

            {/* Right Content - Illustration */}
            <div className="relative">
              <div
                className={`relative rounded-2xl p-8 ${isDarkMode ? "bg-gray-800/50" : "bg-gray-100"} backdrop-blur-sm`}
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LoAlLsi2srgGhcIRCqn3nqbdSU1kSb.png"
                  alt="Developer workspace illustration"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proficiency Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Skills Content */}
            <div className="space-y-8">
              <div>
                <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  Proficiency
                </h2>
                <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  My expertise spans across multiple domains of software development
                </p>
              </div>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>{skill.name}</span>
                      <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full h-2 rounded-full ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                      <div
                        className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats or Additional Info */}
            <div className="grid grid-cols-2 gap-6">
              <div className={`p-6 rounded-xl ${isDarkMode ? "bg-gray-800/50" : "bg-gray-100"} text-center`}>
                <div className="text-3xl font-bold text-blue-500 mb-2">50+</div>
                <div className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Projects Completed</div>
              </div>
              <div className={`p-6 rounded-xl ${isDarkMode ? "bg-gray-800/50" : "bg-gray-100"} text-center`}>
                <div className="text-3xl font-bold text-purple-500 mb-2">3+</div>
                <div className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Years Experience</div>
              </div>
              <div className={`p-6 rounded-xl ${isDarkMode ? "bg-gray-800/50" : "bg-gray-100"} text-center`}>
                <div className="text-3xl font-bold text-green-500 mb-2">25+</div>
                <div className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Happy Clients</div>
              </div>
              <div className={`p-6 rounded-xl ${isDarkMode ? "bg-gray-800/50" : "bg-gray-100"} text-center`}>
                <div className="text-3xl font-bold text-orange-500 mb-2">15+</div>
                <div className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className={`text-3xl lg:text-4xl font-bold mb-12 text-center ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Education
            </h2>

            <div className={`rounded-2xl p-8 ${isDarkMode ? "bg-gray-800/50" : "bg-gray-100"} backdrop-blur-sm`}>
              <div className="flex items-start gap-6">
                {/* University Logo */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      isDarkMode ? "bg-red-900" : "bg-red-100"
                    }`}
                  >
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">H</span>
                    </div>
                  </div>
                </div>

                {/* Education Details */}
                <div className="flex-1 space-y-3">
                  <h3 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    Harvard University
                  </h3>
                  <p className={`text-lg font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Master of Science in Computer Science
                  </p>
                  <p className={`${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>September 2017 - April 2019</p>
                  <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    Participated in the research of XXX and published 3 papers.
                  </p>
                  <ul className={`space-y-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                    <li>• Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    <li>• Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className={`text-3xl lg:text-4xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Ready to work together?
            </h2>
            <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Let's create something amazing together. I'm always excited to take on new challenges and collaborate on
              innovative projects.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200">
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
