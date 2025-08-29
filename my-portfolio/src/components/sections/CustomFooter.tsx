import { Button } from "../ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const CustomFooter = () => {
  return (
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
  );
};

export default CustomFooter;
