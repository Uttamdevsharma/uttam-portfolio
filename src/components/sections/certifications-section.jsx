import { useTheme } from "../../contexts/theme-context"

export default function CertificationsSection() {
  const { isDarkMode } = useTheme()

  const certifications = [
    {
      title: "Fullstack Web Development ",
      organization: "Udemy",
      year: "2025",
      link: "https://www.udemy.com/certificate/UC-8697de59-d6af-4efb-9fef-8b8a1bb4bd9e/",
    },
    {
      title: "Frontend Developer(React)",
      organization: "Hackerrank",
      year: "2025",
      link: "https://www.hackerrank.com/certificates/iframe/3d4bc993ba8f",
    },
    {
      title: "Master Git and Github",
      organization: "Udemy",
      year: "2025",
      link: "https://www.udemy.com/certificate/UC-c23117e2-3877-448a-a54f-e6b99a793087/",
    },
    
  ]

  return (
    <section className={`py-20 px-12 ${isDarkMode ? "bg-[#171d29]" : "bg-gray-50"}`}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Certifications
          </h2>
          <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto`}>
            My professional certifications and credentials.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 transition-transform duration-300 hover:scale-105 ${
                isDarkMode ? "bg-gray-800/50" : "bg-white"
              } backdrop-blur-sm shadow-lg`}
            >
              <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                {cert.title}
              </h3>
              <p className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                {cert.organization} - {cert.year}
              </p>
              <div className="mt-4">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                >
                  View Certificate
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}