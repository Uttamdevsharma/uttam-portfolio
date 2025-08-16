"use client"

import { useState } from "react"
import { useTheme } from "../../contexts/theme-context"

export default function BlogsPage() {
  const { isDarkMode } = useTheme()
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = ["All", "React", "Node.js", "AI/ML", "DevOps", "Career"]

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications with Modern Patterns",
      excerpt:
        "Explore advanced React patterns including compound components, render props, and custom hooks to build maintainable and scalable applications.",
      content: "Full article content here...",
      category: "React",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "/react-patterns-blog.png",
      featured: true,
      tags: ["React", "JavaScript", "Frontend", "Architecture"],
    },
    {
      id: 2,
      title: "Implementing RAG Pipelines with LangChain and Vector Databases",
      excerpt:
        "A comprehensive guide to building Retrieval-Augmented Generation systems using LangChain, Pinecone, and OpenAI for enhanced AI applications.",
      content: "Full article content here...",
      category: "AI/ML",
      date: "2024-01-10",
      readTime: "12 min read",
      image: "/rag-pipeline-blog.png",
      featured: true,
      tags: ["AI", "LangChain", "RAG", "Vector Database"],
    },
    {
      id: 3,
      title: "Microservices Architecture: From Monolith to Distributed Systems",
      excerpt:
        "Learn how to break down monolithic applications into microservices, including service discovery, API gateways, and container orchestration.",
      content: "Full article content here...",
      category: "DevOps",
      date: "2024-01-05",
      readTime: "10 min read",
      image: "/microservices-blog.png",
      featured: false,
      tags: ["Microservices", "Docker", "Kubernetes", "Architecture"],
    },
    {
      id: 4,
      title: "Advanced Node.js Performance Optimization Techniques",
      excerpt:
        "Deep dive into Node.js performance optimization including clustering, caching strategies, and memory management for high-traffic applications.",
      content: "Full article content here...",
      category: "Node.js",
      date: "2023-12-28",
      readTime: "9 min read",
      image: "/nodejs-performance-blog.png",
      featured: false,
      tags: ["Node.js", "Performance", "Backend", "Optimization"],
    },
    {
      id: 5,
      title: "From Junior to Senior: My 5-Year Development Journey",
      excerpt:
        "Reflections on career growth, key learnings, and advice for developers looking to advance their careers in the tech industry.",
      content: "Full article content here...",
      category: "Career",
      date: "2023-12-20",
      readTime: "6 min read",
      image: "/career-journey-blog.png",
      featured: false,
      tags: ["Career", "Growth", "Advice", "Experience"],
    },
    {
      id: 6,
      title: "State Management in React: Redux vs Zustand vs Context",
      excerpt:
        "Comprehensive comparison of popular React state management solutions with practical examples and performance considerations.",
      content: "Full article content here...",
      category: "React",
      date: "2023-12-15",
      readTime: "11 min read",
      image: "/state-management-blog.png",
      featured: false,
      tags: ["React", "State Management", "Redux", "Zustand"],
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      searchTerm === "" ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Blog</h1>
          <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto`}>
            Thoughts, tutorials, and insights on software development, emerging technologies, and career growth in the
            tech industry.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors duration-200 ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
              />
              <svg
                className={`absolute left-3 top-3.5 w-5 h-5 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : isDarkMode
                        ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && selectedCategory === "All" && searchTerm === "" && (
          <div className="mb-16">
            <h2 className={`text-2xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Featured Articles
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                    isDarkMode ? "bg-gray-800/50" : "bg-white"
                  } shadow-lg hover:shadow-xl`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{post.date}</span>
                      <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                        {post.readTime}
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      {post.title}
                    </h3>
                    <p className={`mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className={`px-2 py-1 rounded text-xs ${
                            isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200">
                      Read More →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* All Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className={`rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                isDarkMode ? "bg-gray-800/50" : "bg-white"
              } shadow-lg hover:shadow-xl`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">{post.category}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{post.date}</span>
                  <span className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{post.readTime}</span>
                </div>
                <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"} line-clamp-2`}>
                  {post.title}
                </h3>
                <p className={`text-sm mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"} line-clamp-3`}>
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 rounded text-xs ${
                        isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className={`text-6xl mb-4 ${isDarkMode ? "text-gray-600" : "text-gray-400"}`}>📝</div>
            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              No articles found
            </h3>
            <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              Try adjusting your search terms or category filter.
            </p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16">
          <div
            className={`rounded-2xl p-8 text-center ${isDarkMode ? "bg-gray-800/50" : "bg-gray-100"} backdrop-blur-sm`}
          >
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Stay Updated</h3>
            <p className={`mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Subscribe to get notified about new articles and insights on software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className={`flex-1 px-4 py-3 rounded-lg border transition-colors duration-200 ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                } focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500`}
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
