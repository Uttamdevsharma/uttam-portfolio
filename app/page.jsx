"use client"

import { useState, useEffect } from "react"
import Navigation from "../components/navigation"
import HeroSection from "../components/sections/hero-section"
import SkillsSection from "../components/sections/skills-section"
import ProficiencySection from "../components/sections/proficiency-section"
import ProjectsSection from "../components/sections/projects-section"
import AchievementsSection from "../components/sections/achievements-section"
import BlogsSection from "../components/sections/blogs-section"
import ContactSection from "../components/sections/contact-section"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "proficiency", "projects", "achievements", "blogs", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSectionChange = (section) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="proficiency">
          <ProficiencySection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="achievements">
          <AchievementsSection />
        </section>
        <section id="blogs">
          <BlogsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </div>
  )
}
