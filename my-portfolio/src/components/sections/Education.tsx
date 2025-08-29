import { GraduationCap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

const Education = (props: { isVisible: any }) => {
  const { isVisible } = props;

  return (
    <section
      id="education"
      className={`transition-all duration-1000 ${
        isVisible.education
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex items-center mb-12">
        <GraduationCap className="w-8 h-8 mr-4 text-indigo-400" />
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Education
        </h2>
      </div>

      <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
        <CardHeader>
          <div className="flex justify-between items-start mb-4">
            <div>
              <CardTitle className="text-2xl text-white mb-2">
                Bachelor of Science in Computer Science
              </CardTitle>
              <CardDescription className="text-indigo-300 text-lg font-medium">
                New Jersey Institute of Technology
              </CardDescription>
            </div>
            <Badge
              variant="outline"
              className="border-indigo-500/50 text-indigo-300"
            >
              Graduated: May 2023
            </Badge>
          </div>

          <div className="grid md:grid-cols-1 gap-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/50">
                  Albert Dorman Honors Scholar
                </Badge>
              </div>
              <div className="flex items-center space-x-3">
                <Badge className="bg-green-500/20 text-green-300 border-green-500/50">
                  3.923 GPA
                </Badge>
              </div>
              <div className="flex items-center space-x-3">
                <Badge
                  variant="outline"
                  className="border-purple-500/50 text-purple-300"
                >
                  Minor: Applied Mathematics
                </Badge>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-blue-400 text-lg">
                Highlighted Academic Achievement
              </h4>
              <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
                <h5 className="font-medium text-white mb-2">
                  Independent Study: Computer Organization
                </h5>
                <p className="text-sm text-gray-300 mb-2">Fall 2022</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Conducted independent research into RISC architecture and MIPS
                  programming language. Gained deep understanding of computer
                  arithmetic handling and instruction execution cycles,
                  including both sequential and pipelined processing
                  methodologies.
                </p>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </section>
  );
};

export default Education;
