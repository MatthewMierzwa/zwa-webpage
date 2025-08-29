import { Button } from "../ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const CustomNavBar = (props: { activeSection: any; scrollToSection: any }) => {
  const { activeSection, scrollToSection } = props;

  return (
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Matthew Mierzwa
          </div>
          <div className="hidden md:flex space-x-8">
            {["about", "education", "experience", "projects", "hobbies"].map(
              (section) => (
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
              )
            )}
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
  );
};

export default CustomNavBar;
