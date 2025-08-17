import { useRef, useState, useEffect } from "react";
import Navigation from "../navigation";
import HeroSection from "../sections/hero-section";
import SkillsSection from "../sections/skills-section";
import EducationSection from "../sections/education-section";
import ProjectsSection from "../sections/projects-section";
import CertificationsSection from "../sections/certifications-section";
import BlogsSection from "../sections/blogs-section";
import ContactSection from "../sections/contact-section";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home");

  const sectionRefs = {
    home: useRef(null),
    skills: useRef(null),
    education: useRef(null),
    projects: useRef(null),
    certifications: useRef(null),
    blogs: useRef(null),
    contact: useRef(null),
  };

  const handleSectionChange = (sectionId) => {
    sectionRefs[sectionId].current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);


  return (
    <div className="px-16">
      <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />
      <div id="home" ref={sectionRefs.home}>
        <HeroSection />
      </div>
      <div id="skills" ref={sectionRefs.skills}>
        <SkillsSection />
      </div>
      <div id="education" ref={sectionRefs.education}>
        <EducationSection />
      </div>
      <div id="projects" ref={sectionRefs.projects}>
        <ProjectsSection />
      </div>
      <div id="certifications" ref={sectionRefs.certifications}>
        <CertificationsSection />
      </div>
      <div id="blogs" ref={sectionRefs.blogs}>
        <BlogsSection />
      </div>
      <div id="contact" ref={sectionRefs.contact}>
        <ContactSection />
      </div>
    </div>
  );
}
