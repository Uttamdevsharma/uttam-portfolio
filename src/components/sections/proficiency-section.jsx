import { useTheme } from "../../contexts/theme-context"

export default function ProficiencySection() {
  const { isDarkMode } = useTheme()

  const proficiencyData = [
    { skill: "Frontend/Design", percentage: 85, color: "bg-blue-500" },
    { skill: "Backend", percentage: 78, color: "bg-green-500" },
    { skill: "Programming", percentage: 90, color: "bg-purple-500" },
  ]

  return (
    <section className={`py-20 ${isDarkMode ? "bg-[#171d29]" : "bg-gray-50"}`}>
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
        </div>
      </div>
    </section>
  )
}
