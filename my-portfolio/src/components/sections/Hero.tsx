import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";

const Hero = (props: { scrollToSection: any }) => {
  const { scrollToSection } = props;

  return (
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
  );
};

export default Hero;
