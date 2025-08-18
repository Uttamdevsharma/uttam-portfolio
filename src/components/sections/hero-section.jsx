import { useTheme } from "../../contexts/theme-context"

export default function HeroSection() {
  const { isDarkMode } = useTheme()

  return (
    <section
      className={`min-h-screen flex items-center ${
        isDarkMode ? "bg-[#171d29] text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full px-4">
        {/* Grid with custom column ratio */}
        <div className="grid lg:grid-cols-[1.8fr_1fr] gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Main greeting */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Hi all, I'm Uttam <span className="wave-hand">👋</span></h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              A Passionate Full Stack Developer 🚀 specialized in building modern web applications with React, Node.js, Express, MongoDB, and Next.js. Dedicated to creating scalable, user-friendly, and efficient solutions.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {/* GitHub */}
              <a
                href="https://github.com/Uttamdevsharma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/uttamkds/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:uttamrohit4545@gmail.com"
                className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>

              {/* GitLab - Fixed colors */}
              {/* <a
                href="https://gitlab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.5l-3 7h6l-3-7zm0 19l-3-7h6l-3 7zm-9-7l3-7-3 7zm18-7l-3 7 3-7z"/>
                </svg>
              </a> */}

              {/* Facebook - Fixed colors */}
              <a
                href="https://www.facebook.com/uttamkumar.devsharma.7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Medium - Fixed colors and better SVG */}
              <a
                href="https://medium.com/@uttamrohit4545"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>

              {/* StackOverflow - Fixed colors and better SVG */}
              {/* <a
                href="https://stackoverflow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z"/>
                </svg>
              </a> */}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
                className="px-2 py-1 bg-purple-600 text-sm text-white font-semibold rounded-lg transition-colors hover:bg-white hover:text-purple-600"
              >
                Contact Me
              </button>
              <a
  href="/Uttam_Sharma_CV.pdf"
  download="Uttam_Resume.pdf"
  className="px-1 py-1 bg-purple-600 text-sm text-white font-semibold rounded-lg border-2 border-purple-600 transition-colors hover:bg-white hover:text-purple-600 text-center inline-block"
>
  Download My Resume
</a>

            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full h-full flex items-center justify-center">
              <svg viewBox="0 0 600 450" xmlns="http://www.w3.org/2000/svg">
                {/* Background */}
                
                {/* Clouds */}
                <g opacity="0.8">
                  <ellipse cx="120" cy="90" rx="42" ry="24" fill="#D8BFD8"/>
                  <ellipse cx="165" cy="82" rx="52" ry="27" fill="#DDA0DD"/>
                  <ellipse cx="202" cy="98" rx="42" ry="24" fill="#D8BFD8"/>
                </g>
                
                {/* Target circles */}
                <g transform="translate(90,180)" opacity="0.5" stroke="#6a6f90" fill="none">
                  <circle cx="0" cy="0" r="90" stroke-width="3"/>
                  <circle cx="0" cy="0" r="60" stroke-width="2.25"/>
                  <circle cx="0" cy="0" r="30" stroke-width="2.25"/>
                </g>

                {/* Character */}
                <g transform="translate(330,150) scale(1.2)">
                  {/* Body */}
                  <rect x="-30" y="0" width="60" height="105" rx="27" fill="#8A2BE2"/>
                  
                  {/* Legs */}
                  <rect x="-27" y="105" width="21" height="60" rx="9" fill="#7B68EE"/>
                  <rect x="6" y="105" width="21" height="60" rx="9" fill="#7B68EE"/>
                  
                  {/* Shoes */}
                  <ellipse cx="-16.5" cy="172.5" rx="24" ry="12" fill="#2C3E50"/>
                  <ellipse cx="16.5" cy="172.5" rx="24" ry="12" fill="#2C3E50"/>
                  
                  {/* Left arm */}
                  <rect x="-52.5" y="15" width="18" height="52.5" rx="9" fill="#4169E1" transform="rotate(-20)"/>
                  <circle cx="-67.5" cy="52.5" r="12" fill="#FFB347"/>
                  
                  {/* Right arm + waving hand */}
                  <g transform="translate(45,7.5)">
                    <rect x="0" y="0" width="18" height="52.5" rx="9" fill="#4169E1"/>
                    
                    <g transform="translate(9,-37.5)">
                      <animateTransform attributeName="transform" type="rotate"
                        values="10 0 30;30 0 30;10 0 30;-10 0 30;10 0 30"
                        dur="2s" repeatCount="indefinite"/>
                      
                      {/* Palm */}
                      <ellipse cx="0" cy="22.5" rx="27" ry="21" fill="#FFB347"/>
                      {/* Fingers */}
                      <rect x="-15" y="-7.5" width="7.5" height="22.5" rx="3" fill="#FFB347"/>
                      <rect x="-3" y="-12" width="7.5" height="27" rx="3" fill="#FFB347"/>
                      <rect x="9" y="-10.5" width="7.5" height="24" rx="3" fill="#FFB347"/>
                      <rect x="21" y="-4.5" width="7.5" height="21" rx="3" fill="#FFB347"/>
                    </g>
                  </g>
                  
                  {/* Head */}
                  <circle cx="0" cy="-30" r="30" fill="#FFB347"/>
                  
                  {/* Face */}
                  <circle cx="-9" cy="-37.5" r="3" fill="#2C3E50"/>
                  <circle cx="9" cy="-37.5" r="3" fill="#2C3E50"/>
                  <path d="M -12,-22.5 Q 0,-12 12,-22.5" stroke="#2C3E50" stroke-width="3" fill="none"/>
                  
                  {/* Hair/Cap */}
                  <ellipse cx="0" cy="-52.5" rx="24" ry="15" fill="#8A2BE2"/>
                </g>
                
                {/* Motion lines around hand */}
                <g transform="translate(420,105)" opacity="0.6">
                  <path d="M -7.5,-7.5 Q 7.5,-18 22.5,-9" stroke="#8A2BE2" stroke-width="3" fill="none">
                    <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 0,-21 Q 15,-33 30,-18" stroke="#DDA0DD" stroke-width="2.25" fill="none">
                    <animate attributeName="opacity" values="0.6;0.3;0.6" dur="2s" repeatCount="indefinite"/>
                  </path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}