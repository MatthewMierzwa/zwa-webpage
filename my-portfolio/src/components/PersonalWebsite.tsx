import React, { useState, useEffect } from "react";
import Hero from "./sections/Hero";
import CustomNavBar from "./sections/CustomNavBar";
import Hobbies from "./sections/Hobbies";
import CustomFooter from "./sections/CustomFooter";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import About from "./sections/About";

const PersonalWebsite = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <CustomNavBar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <Hero scrollToSection={scrollToSection} />

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-24">
        <About isVisible={isVisible} />

        <Education isVisible={isVisible} />

        <Experience isVisible={isVisible} />

        <Projects isVisible={isVisible} />

        <Hobbies isVisible={isVisible} />
      </div>

      <CustomFooter />
    </div>
  );
};

export default PersonalWebsite;
