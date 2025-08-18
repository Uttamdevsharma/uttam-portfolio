import { useTheme } from "../../contexts/theme-context"

export default function SkillsSection() {
  const { isDarkMode } = useTheme()

  const skillCategories = [
    {
      title: "Languages:",
      skills: ["JavaScript ", "C++", "C", "Python"],
    },
    {
      title: "Frontend:",
      skills: ["React.js", "Redux", "Next.js", "Tailwind CSS", "Material UI", "HTML5", "CSS3", "React Router"],
    },
    {
      title: "Backend:",
      skills: ["Node.js", "Express.js", "REST API Development", "JWT Authentication"],
    },
    {
      title: "Databases:",
      skills: ["MongoDB", "Mongoose", "Firebase", "MySQL"],
    },
    {
      title: "Tools & Platforms:",
      skills: ["Git", "GitHub", "Postman", "VS Code"],
    },
  ]

  const proficiencies = [
    {
      title: "Full Stack Development",
      description: "(React, Next.js, Node.js, Express, MongoDB — building responsive & scalable web applications)",
    },
    {
      title: "Frontend Engineering",
      description: "(Modern UI/UX with React, Next.js, Tailwind CSS, Responsive design)",
    },
    {
      title: "Backend Engineering",
      description: "(REST API development, Authentication, Database design, Performance optimization)",
    },
    {
      title: "Database Management",
      description: "(MongoDB, PostgreSQL, Firebase — schema design, queries, real-time data handling)",
    },
    {
      title: "Cloud & Deployment",
      description: "(Vercel, Netlify, Render, Firebase Hosting — CI/CD basics, production deployment)",
    },
    {
      title: "Collaboration & Version Control",
      description: "(Git, GitHub, Agile workflows, Team projects)",
    },
  ]

  const proficiencyData = [
    { skill: "Frontend/Design", percentage: 85, color: "bg-blue-500" },
    { skill: "Backend", percentage: 78, color: "bg-green-500" },
    { skill: "Programming", percentage: 90, color: "bg-purple-500" },
  ]

  return (
    <section className={`py-20 px-12 ${isDarkMode ? "bg-[#171d29] text-white" : "bg-white text-gray-900"}`}>
      <div className="container mx-auto">
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
          <div className="space-y-3 flex flex-col ">
            <h3 className={`text-2xl font-semibold mb-0 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Proficient in:
            </h3>
            <div className="space-y-6 text-left w-full">
              {proficiencies.map((proficiency, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${
                    isDarkMode ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"
                  } flex items-start gap-3`}
                >
                  <span className="text-orange-500 text-xl">⚡</span>
                  <div className="flex-1">
                    <h4 className={`font-semibold text-lg ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      {proficiency.title}
                    </h4>
                    <p className={`text-sm mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      {proficiency.description}
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
