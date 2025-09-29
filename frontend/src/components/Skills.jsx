import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaDocker, FaGitAlt, FaAws, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaServer, FaBook,  FaCode
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const skillsData = {
  "Programming Languages": [
    { name: "C++", icon: <FaCode className="text-cyan-400 text-3xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
    { name: "SQL", icon: <FaDatabase className="text-blue-400 text-3xl" /> },
  ],
  " Frameworks / Libraries": [
    { name: "ReactJS", icon: <FaReact className="text-cyan-400 text-3xl" /> },
    { name: "NextJS", icon: <FaServer className="text-white text-3xl" /> }, // Using server icon as placeholder
  ],
  "Backend / Databases": [
    { name: "NodeJS", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
    { name: "ExpressJS", icon: <FaServer className="text-white text-3xl" /> },
    { name: "MongoDB", icon: <FaDatabase className="text-green-600 text-3xl" /> },
    { name: "PostgreSQL", icon: <FaDatabase className="text-blue-400 text-3xl" /> },
    { name: "Prisma", icon: <FaBook className="text-cyan-400 text-3xl" /> }, // Placeholder icon
  ],
  "Tools / DevOps": [
    { name: "AWS", icon: <FaAws className="text-orange-400 text-3xl" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400 text-3xl" /> },
    { name: "Git/GitHub", icon: <FaGitAlt className="text-red-500 text-3xl" /> },
    { name: "Postman", icon: <FaBook className="text-orange-500 text-3xl" /> }, // Placeholder icon
    { name: "VS Code", icon: <VscVscode className="text-blue-600 text-3xl" /> },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="px-8 pt-12 md:pt-6 flex flex-col space-y-8">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-white mb-6"
      >
        Skills
      </motion.h2>

      {Object.entries(skillsData).map(([category, skills], index) => (
        <div key={index} className="flex flex-col space-y-4">
          {/* Category */}
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="text-2xl font-semibold text-white"
          >
            {category}
          </motion.h3>

          {/* Skills Cards */}
          <div className="flex flex-wrap gap-4 mt-2 justify-start"> {/* Left-aligned */}
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center justify-center gap-2 bg-gray-900/70 border border-gray-700 rounded-xl p-4 w-28 h-28 text-center shadow-lg hover:shadow-cyan-400/50 transition-shadow duration-300"
              >
                <div>{skill.icon}</div>
                <p className="text-gray-300 font-medium text-sm">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;

