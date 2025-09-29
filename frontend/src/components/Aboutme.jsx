import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaBook } from "react-icons/fa";

const educationData = [
  { title: "Graphic Era Hill University", degree: "B.Tech CSE", year: "2022 - 2025", icon: <FaGraduationCap className="text-cyan-400 text-2xl" /> },
  { title: "Government Polytechnic Kashipur", degree: "Diploma in Electronics Engineering", year: "2019 - 2022", icon: <FaSchool className="text-cyan-400 text-2xl" /> },
  { title: "Chhauni Children's Academy", degree: "Class 12th CBSE", year: "2018 - 2019", icon: <FaBook className="text-cyan-400 text-2xl" /> },
  { title: "Chhauni Children's Academy", degree: "Class 10th CBSE", year: "2016 - 2017", icon: <FaBook className="text-cyan-400 text-2xl" /> },
];

const About = () => {
  return (
    <section id="about" className="px-8 pt-12 md:pt-6 flex flex-col space-y-8">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-white mb-2"
      >
        About Me
      </motion.h2>

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-300 text-lg md:text-xl max-w-3xl"
      >
        I'm Abhishek Rawat, a Full Stack Developer and Computer Science graduate with a passion for building impactful digital solutions.
        I enjoy working across both frontend and backend, bringing ideas to life with clean design, efficient logic, and seamless user experiences.
        My focus is on continuously improving my skills and growing into a skilled Software Engineer who contributes to meaningful projects.
      </motion.p>

      {/* Education Heading */}
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-3xl font-semibold text-white mt-6"
      >
        Education
      </motion.h3>

      {/* Education Cards Responsive */}
      <div className="flex flex-wrap gap-6 mt-4 justify-center">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            className="bg-gray-900/70 border border-gray-700 rounded-xl p-5 flex flex-col items-start shadow-lg hover:shadow-cyan-400/50 transition-shadow duration-300 min-w-[250px] max-w-[300px] flex-1"
          >
            <div className="mb-2">{edu.icon}</div>
            <h4 className="text-xl font-semibold text-white">{edu.title}</h4>
            {edu.degree && <p className="text-gray-300 mt-1">{edu.degree}</p>}
            <p className="text-gray-400 mt-2 text-sm">{edu.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;


