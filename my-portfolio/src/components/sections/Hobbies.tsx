import { Heart } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const hobbies = [
  {
    name: "Learning",
    icon: "🚀",
    description:
      "Constantly exploring new technologies and programming languages",
  },
  {
    name: "Hiking",
    icon: "📸",
    description: "Love exploring nature trails every chance I get.",
  },
  {
    name: "Rock Climbing",
    icon: "🧗",
    description: "Indoor top rope and outdoor bouldering adventures",
  },
  {
    name: "Visitng Microbreweries",
    icon: "☕",
    description: "Always up to enjoy a good craft stout at a new microbrewery",
  },
  {
    name: "Board Games & Escape Rooms",
    icon: "🎮",
    description:
      "Love social deduction board games and the thrill of solving puzzles in escape rooms",
  },
  {
    name: "Jiu Jitsu",
    icon: "👨‍🍳",
    description:
      "Training in Brazilian Jiu Jitsu for the last 7 months and loving it",
  },
];

const Hobbies = (props: { isVisible: any }) => {
  const { isVisible } = props;

  return (
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
  );
};

export default Hobbies;
