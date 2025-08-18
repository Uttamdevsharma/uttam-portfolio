import { useTheme } from "../../contexts/theme-context"

export default function BlogsSection() {
  const { isDarkMode } = useTheme()

  const blogs = [
    {
      title: "React Hooks Made Simple",
      excerpt:
        "Most beginners start React with useState and useEffect, but Hooks offer much more.",
      date: "Aug 19, 2025",
      readTime: "8 min read",
      category: "React",
      image: "/images/blog1.png",
      url: "https://medium.com/@uttamrohit4545/react-hooks-made-simple-a-beginners-journey-beyond-usestate-useeffect-fa26c6bf2fbe",
    },
    {
      title: "Stop Direct Context Usage — Master the Wrapper Pattern",
      excerpt:
        "React makes building interactive UIs easier than ever,",
      date: "Dec 19, 2025",
      readTime: "10 min read",
      category: "React",
      image: "/images/blog2.png",
      url: "https://medium.com/@uttamrohit4545/stop-direct-context-usage-in-components-master-the-wrapper-pattern-e58484d02c21",
    },
    {
      title: "Structuring Data the Right Way",
      excerpt:
        "Designing a MongoDB schema is more than just creating collections and documents —",
      date: "Dec 19, 2025",
      readTime: "10 min read",
      category: "MongoDB",
      image: "/images/blog3.jpeg",
      url: "https://medium.com/@uttamrohit4545/structuring-data-the-right-way-modern-mongodb-schema-design-tips-176150a4616b",
    }
  ]

  return (
    <section className={`py-20 px-12 ${isDarkMode ? "bg-[#171d29] text-white" : "bg-white text-gray-900"}`}>
      <div className="container mx-auto">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
