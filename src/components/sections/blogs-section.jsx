import { useTheme } from "../../contexts/theme-context"

export default function BlogsSection() {
  const { isDarkMode } = useTheme()

  const blogs = [
    {
      title: "Advanced React Patterns for Scalable Applications",
      excerpt:
        "Explore advanced React patterns including render props, compound components, and custom hooks for building maintainable applications.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "React",
      image: "/react-patterns-blog.png",
      url: "#",
    },
    {
      title: "Building Production-Ready RAG Pipelines",
      excerpt:
        "A comprehensive guide to building and deploying Retrieval-Augmented Generation systems in production environments.",
      date: "Dec 10, 2024",
      readTime: "12 min read",
      category: "AI/ML",
      image: "/rag-pipeline-blog.png",
      url: "#",
    },
    {
      title: "Microservices Architecture: Best Practices",
      excerpt:
        "Learn the essential patterns and practices for designing and implementing microservices architecture at scale.",
      date: "Dec 5, 2024",
      readTime: "10 min read",
      category: "Architecture",
      image: "/microservices-blog.png",
      url: "#",
    },
    {
      title: "Node.js Performance Optimization Techniques",
      excerpt: "Discover proven techniques to optimize Node.js applications for better performance and scalability.",
      date: "Nov 28, 2024",
      readTime: "7 min read",
      category: "Backend",
      image: "/nodejs-performance-blog.png",
      url: "#",
    },
  ]

  return (
    <section className={`py-20 ${isDarkMode ? "bg-[#171d29] text-white" : "bg-white text-gray-900"}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Blogs
          </h2>
          <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto`}>
            Sharing insights, tutorials, and experiences from my journey in software development and technology.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className={`rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 ${
                isDarkMode ? "bg-gray-800/50" : "bg-gray-100"
              } backdrop-blur-sm`}
            >
              {/* Blog Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      isDarkMode ? "bg-blue-600/20 text-blue-400" : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {blog.category}
                  </span>
                  <div className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                    {blog.date} • {blog.readTime}
                  </div>
                </div>

                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"} line-clamp-2`}>
                  {blog.title}
                </h3>

                <p
                  className={`text-sm mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed line-clamp-3`}
                >
                  {blog.excerpt}
                </p>

                <a
                  href={blog.url}
                  className={`inline-flex items-center text-sm font-medium transition-colors ${
                    isDarkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"
                  }`}
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  )
}
