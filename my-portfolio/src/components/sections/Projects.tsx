import { Code, ExternalLink, Github, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

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

const Projects = (props: { isVisible: any }) => {
  const { isVisible } = props;

  return (
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

      <div className="grid grid-cols-1 gap-8">
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
  );
};

export default Projects;
