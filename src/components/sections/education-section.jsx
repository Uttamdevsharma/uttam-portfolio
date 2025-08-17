import { useTheme } from "../../contexts/theme-context";

export default function EducationSection() {
  const { isDarkMode } = useTheme();

  const degrees = [
    {
      degree: "Bachelor of Science (BSc)",
      institution: "University of Example",
      year: "2018 - 2021",
      description: "Focused on computer science fundamentals, algorithms, and software development."
    },
    {
      degree: "Honours in Computer Science",
      institution: "University of Example",
      year: "2022",
      description: "Specialized in advanced topics including machine learning and distributed systems."
    }
  ];

  return (
    <section className={`py-20 ${isDarkMode ? "bg-[#171d29]" : "bg-gray-50"}`}>
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-3xl lg:text-4xl font-bold mb-12 text-center ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Education
          </h2>

          <div className="space-y-8">
            {degrees.map((degree, index) => (
              <div key={index} className={`rounded-2xl p-8 ${isDarkMode ? "bg-gray-800/50" : "bg-white"} backdrop-blur-sm shadow-lg`}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isDarkMode ? "bg-blue-900" : "bg-blue-100"}`}>
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      {degree.degree}
                    </h3>
                    <p className={`text-lg font-medium ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>
                      {degree.institution}
                    </p>
                    <p className={`${isDarkMode ? "text-gray-500" : "text-gray-600"}`}>{degree.year}</p>
                    <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                      {degree.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
