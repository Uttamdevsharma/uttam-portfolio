import { useTheme } from "../../contexts/theme-context"

export default function AchievementsSection() {
  const { isDarkMode } = useTheme()

  const achievements = [
    {
      year: "2024",
      title: "AWS Solutions Architect Professional",
      organization: "Amazon Web Services",
      description: "Advanced certification in cloud architecture and solutions design",
      type: "certification",
    },
    {
      year: "2023",
      title: "Tech Innovation Award",
      organization: "TechCorp Inc.",
      description: "Recognized for developing AI-powered analytics platform that increased efficiency by 40%",
      type: "award",
    },
    {
      year: "2023",
      title: "Full Stack Developer Certification",
      organization: "Meta",
      description: "Comprehensive certification covering React, Node.js, and modern web development",
      type: "certification",
    },
    {
      year: "2022",
      title: "Best Project Award",
      organization: "Harvard University",
      description: "Outstanding thesis project on distributed systems and microservices architecture",
      type: "award",
    },
    {
      year: "2022",
      title: "Google Cloud Professional Developer",
      organization: "Google Cloud",
      description: "Professional certification in cloud-native application development",
      type: "certification",
    },
    {
      year: "2021",
      title: "Dean's List",
      organization: "Harvard University",
      description: "Academic excellence recognition for maintaining GPA above 3.8",
      type: "academic",
    },
  ]

  const getIcon = (type) => {
    switch (type) {
      case "certification":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        )
      case "award":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        )
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        )
    }
  }

  const getColor = (type) => {
    switch (type) {
      case "certification":
        return "bg-blue-500"
      case "award":
        return "bg-yellow-500"
      default:
        return "bg-green-500"
    }
  }

  return (
    <section className={`py-20 ${isDarkMode ? "bg-[#171d29]" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Achievements
          </h2>
          <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto`}>
            Recognition and certifications that highlight my professional growth and technical expertise.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${isDarkMode ? "bg-gray-700" : "bg-gray-300"}`}></div>

            {/* Achievement items */}
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div
                    className={`flex-shrink-0 w-16 h-16 ${getColor(achievement.type)} rounded-full flex items-center justify-center text-white z-10`}
                  >
                    {getIcon(achievement.type)}
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-6 p-6 rounded-xl flex-1 ${isDarkMode ? "bg-gray-800/50" : "bg-white"} backdrop-blur-sm`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        {achievement.title}
                      </h3>
                      <span
                        className={`text-sm font-medium px-3 py-1 rounded-full ${isDarkMode ? "bg-blue-600/20 text-blue-400" : "bg-blue-100 text-blue-600"}`}
                      >
                        {achievement.year}
                      </span>
                    </div>
                    <p className={`text-sm font-medium mb-2 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                      {achievement.organization}
                    </p>
                    <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed`}>
                      {achievement.description}
                    </p>
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
