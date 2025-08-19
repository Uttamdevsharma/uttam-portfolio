import { useTheme } from "../../contexts/theme-context"

export default function ProjectsSection() {
  const { isDarkMode } = useTheme()

  const projects = [
    {
      title: "ThePro",
      description:
        "ThesPro is a comprehensive web application designed to streamline the management of academic theses and research projects. It provides a collaborative platform for students, supervisors, and committee.",
      image: "/images/thespro.png",
      technologies: ["React", "Tailwind Css", "Firebase"],
      liveUrl: "https://thespro1.netlify.app/",
      githubUrl: "https://github.com/Uttamdevsharma/thespro",
    },
    {
      title: "Shaj",
      description:
        "Shaj is a complete and modern e-commerce web application. It features a user-friendly client interface for customers and a comprehensive dashboard for administrators to manage the store.",
      image: "/images/Shaj.png",
      technologies: ["React","nodeJS","ExpressJS","MongDB"],
      liveUrl: "https://shaj-client.vercel.app/",
      githubUrl: "https://github.com/Uttamdevsharma/Shaj",
    },
    {
      title: "MarkEdit+",
      description:
        "MarkEdit+ is an advanced, feature-rich Markdown editor built with React. It provides a seamless experience for writing and previewing Markdown content in real-time, along with powerful functionalities.",
      image: "/images/mark.png",
      technologies: ["React", "Tailwind CSS","React-Allotment"],
      liveUrl: "https://markeditex.netlify.app/",
      githubUrl: "https://github.com/Uttamdevsharma/MarkEdit-",
    },
    {
      title: "Personal-Portfolio",
      description:
        "A personal portfolio website showcasing my projects, skills, and development journey as a Full Stack Developer, built with modern web technologies for a responsive and user-friendly experience.",
      image: "/images/light-mode.png",
      technologies: ["React", "Tailwind CSS","Responsive Design"],
      liveUrl: "https://uttam-devjourney.netlify.app/",
      githubUrl: "https://github.com/Uttamdevsharma/uttam-portfolio",
    },   
  ]

  return (
    <section className={`py-20 px-12 ${isDarkMode ? "bg-[#171d29] text-white" : "bg-white text-gray-900"}`}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Projects
          </h2>
          <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto`}>
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 ${
                isDarkMode ? "bg-gray-800/50" : "bg-gray-100"
              } backdrop-blur-sm ${
                index === projects.length - 1 ? "lg:col-start-2 lg:col-end-3" : ""
              }`}
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDarkMode ? "bg-blue-600/20 text-blue-400" : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors text-center"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 px-4 py-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-sm font-medium rounded-lg transition-colors text-center ${
                      isDarkMode ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900" : ""
                    }`}
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
