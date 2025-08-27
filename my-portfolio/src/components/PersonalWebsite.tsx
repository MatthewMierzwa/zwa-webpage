import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Briefcase,
  User,
  Heart,
  ChevronDown,
  Star,
} from "lucide-react";

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

  const skills = {
    languages: ["JavaScript", "TypeScript", "Python", "Java", "Go", "Rust"],
    frontend: ["React", "Vue.js", "Angular", "Next.js", "TailwindCSS", "SCSS"],
    backend: [
      "Node.js",
      "Express",
      "Django",
      "FastAPI",
      "Spring Boot",
      "PostgreSQL",
    ],
    tools: ["Docker", "Kubernetes", "AWS", "Git", "Jenkins", "MongoDB"],
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with microservices architecture, real-time inventory management, and integrated payment processing.",
      tech: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
      status: "Production",
      stars: 342,
    },
    {
      title: "Real-time Analytics Dashboard",
      description:
        "Interactive dashboard for monitoring application performance with real-time data visualization and alerting system.",
      tech: ["Vue.js", "Python", "Redis", "D3.js", "WebSockets"],
      status: "Active",
      stars: 189,
    },
    {
      title: "AI-Powered Task Manager",
      description:
        "Intelligent task management app with natural language processing for automatic categorization and priority scoring.",
      tech: ["Next.js", "FastAPI", "TensorFlow", "MongoDB"],
      status: "Beta",
      stars: 95,
    },
  ];

  const experience = [
    {
      company: "TechCorp Solutions",
      role: "Senior Software Engineer",
      period: "2022 - Present",
      description:
        "Leading development of cloud-native applications, mentoring junior developers, and architecting scalable microservices.",
      achievements: [
        "Reduced system latency by 40%",
        "Led team of 5 engineers",
        "Implemented CI/CD pipelines",
      ],
    },
    {
      company: "StartupXYZ",
      role: "Full Stack Developer",
      period: "2020 - 2022",
      description:
        "Built core product features from ground up, optimized database performance, and implemented real-time features.",
      achievements: [
        "Scaled system to 100k+ users",
        "Reduced database queries by 60%",
        "Built mobile-first responsive design",
      ],
    },
    {
      company: "Innovation Labs",
      role: "Junior Software Engineer",
      period: "2019 - 2020",
      description:
        "Developed web applications, participated in code reviews, and contributed to open-source projects.",
      achievements: [
        "Shipped 15+ features",
        "Maintained 98% uptime",
        "Contributed to 10+ open source projects",
      ],
    },
  ];

  const hobbies = [
    {
      name: "Open Source",
      icon: "🚀",
      description:
        "Contributing to community projects and maintaining personal repositories",
    },
    {
      name: "Photography",
      icon: "📸",
      description:
        "Capturing moments and exploring creative composition techniques",
    },
    {
      name: "Rock Climbing",
      icon: "🧗",
      description: "Indoor bouldering and outdoor sport climbing adventures",
    },
    {
      name: "Coffee Brewing",
      icon: "☕",
      description:
        "Perfecting pour-over techniques and exploring single-origin beans",
    },
    {
      name: "Gaming",
      icon: "🎮",
      description:
        "Strategy games, indie titles, and competitive programming challenges",
    },
    {
      name: "Cooking",
      icon: "👨‍🍳",
      description:
        "Experimenting with international cuisines and fermentation projects",
    },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Matthew Mierzwa
            </div>
            <div className="hidden md:flex space-x-8">
              {["about", "experience", "projects", "hobbies"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-blue-400 ${
                    activeSection === section
                      ? "text-blue-400"
                      : "text-gray-300"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="text-center z-10 px-6 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-4xl font-bold">
              MM
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Matthew Mierzwa
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Software Engineer | Founder | Volunteer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              Passionate about building scalable applications, mentoring
              developers, and creating elegant solutions to complex problems.
              Currently crafting the future of cloud-native applications.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm bg-blue-500/20 text-blue-300 border-blue-500/30"
            >
              5+ Years Experience
            </Badge>
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm bg-purple-500/20 text-purple-300 border-purple-500/30"
            >
              Full Stack
            </Badge>
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm bg-green-500/20 text-green-300 border-green-500/30"
            >
              Open Source Contributor
            </Badge>
          </div>
          <Button
            onClick={() => scrollToSection("about")}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full text-lg font-medium transition-all hover:scale-105"
          >
            Explore My Work
            <ChevronDown className="w-5 h-5 ml-2 animate-bounce" />
          </Button>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-24">
        {/* About Section */}
        <section
          id="about"
          className={`transition-all duration-1000 ${
            isVisible.about
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center mb-12">
            <User className="w-8 h-8 mr-4 text-blue-400" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a passionate software engineer with over 5 years of
                experience building scalable web applications and distributed
                systems. I love tackling complex technical challenges and
                turning innovative ideas into robust, user-friendly solutions.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                When I'm not coding, you'll find me contributing to open source
                projects, mentoring fellow developers, or exploring the great
                outdoors with my camera in hand.
              </p>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Download Resume
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="space-y-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card
                  key={category}
                  className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-lg capitalize text-blue-400">
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className={`transition-all duration-1000 ${
            isVisible.experience
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center mb-12">
            <Briefcase className="w-8 h-8 mr-4 text-purple-400" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </h2>
          </div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-white">
                        {job.role}
                      </CardTitle>
                      <CardDescription className="text-purple-300 text-lg font-medium">
                        {job.company}
                      </CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-purple-500/50 text-purple-300"
                    >
                      {job.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-blue-400">
                      Key Achievements:
                    </h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {job.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className={`transition-all duration-1000 ${
            isVisible.projects
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center mb-12">
            <Code className="w-8 h-8 mr-4 text-green-400" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg text-white">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 mr-1" />
                      <span className="text-sm">{project.stars}</span>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={`w-fit ${
                      project.status === "Production"
                        ? "border-green-500/50 text-green-300"
                        : project.status === "Active"
                        ? "border-blue-500/50 text-blue-300"
                        : "border-orange-500/50 text-orange-300"
                    }`}
                  >
                    {project.status}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-gray-700/50 text-gray-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-600 hover:border-blue-400"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-600 hover:border-green-400"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Hobbies Section */}
        <section
          id="hobbies"
          className={`transition-all duration-1000 ${
            isVisible.hobbies
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center mb-12">
            <Heart className="w-8 h-8 mr-4 text-pink-400" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              Hobbies & Interests
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {hobby.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {hobby.name}
                  </h3>
                  <p className="text-sm text-gray-400">{hobby.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-black/30 border-t border-white/10 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400 mb-4">
            Let's build something amazing together
          </p>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" className="hover:text-blue-400">
              <Mail className="w-5 h-5 mr-2" />
              matthew.mierzwa.dev@gmail.com
            </Button>
            <Button variant="ghost" className="hover:text-blue-400">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button variant="ghost" className="hover:text-blue-400">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;
