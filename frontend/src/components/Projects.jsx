import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Example project data
const projectsData = [
  {
    title: "HirePrep",
    image: "/projects/HirePrep.png", // Place your project image in public/projects/
    description: "HirePrep is a smart AI-powered platform that instantly analyzes resumes, generates interview questions, and helps users prepare efficiently.It delivers a seamless, high-impact experience for aspiring software engineers.",
    techStack: ["TailwindCSS","React","Express.js","MongoDb","Node.js","Google Gemini Api"],
    github: "https://github.com/abhishekrwt2/HirePrep",
    liveDemo: "https://hire-prep-qxhh.vercel.app/",
  },
  {
    title: "Real Time Chat Application",
    image: "/projects/ecommerce.png",
    description: "ChatConnect is a real-time messaging app that enables instant communication with live message updates. Built with React, Node.js, Socket.io, and Tailwind CSS, it delivers a fast, seamless, and interactive chat experience.",
    techStack: ["TailwindCss","React.js","ExpressJS", "MongoDB", "NodeJS"],
    github: "https://github.com/username/ecommerce",
    liveDemo: "https://myecommerceapp.com",
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className="px-8 py-12 flex flex-col space-y-8">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-white mb-6"
      >
        Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-900/70 border border-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-cyan-400/50 transition-shadow duration-300 flex flex-col"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4 flex flex-col flex-1">
              {/* Title & Description */}
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-3 flex-1">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-cyan-400/20 text-cyan-400 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-white hover:text-cyan-400 transition-colors"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-white hover:text-cyan-400 transition-colors"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
