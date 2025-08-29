import { Briefcase } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

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

const Experience = (props: { isVisible: any }) => {
  const { isVisible } = props;

  return (
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
                <h4 className="font-medium text-blue-400">Key Achievements:</h4>
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
  );
};

export default Experience;
