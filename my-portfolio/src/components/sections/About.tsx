import { ExternalLink, User } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

const skills = {
  languages: ["JavaScript", "TypeScript", "SQL", "Python", "Java", "C++", "C"],
  frontend: ["React", "Next.js", "TailwindCSS", "HTML", "CSS"],
  backend: [
    "Node.js",
    "Express",
    "PostgreSQL",
    "MySQL",
    "IndexedDB",
    "Flask",
    "Spring Boot",
    "DexieJS",
    "Sequelize",
    "Prisma",
  ],
  tools: [
    "Docker",
    "AWS",
    "Git",
    "Jenkins",
    "Linux",
    "Figma",
    "Jira",
    "Notion",
  ],
};

const About = (props: { isVisible: any }) => {
  const { isVisible } = props;

  return (
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

      <div className="grid md:grid-cols-1 gap-12">
        <div className="text-left">
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Passionate software engineer with over 2 years of experience
            developing scalable web applications. Proudly graduated from the New
            Jersey Institute of Technology. I enjoy solving complex challenges
            and turning ideas into reliable, intuitive solutions.
          </p>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            When I'm not coding, you'll find me collaborating with fellow
            developers, in a climbing gym, checking out a local micro-brewery,
            or on a hiking trail!
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
                <CardTitle className="text-lg text-left capitalize text-blue-400">
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
  );
};

export default About;
