import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="px-8 pt-24 md:pt-20 flex flex-col justify-center min-h-screen space-y-4"
    >
      
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-400 text-lg"
      >
        hey, i am
      </motion.p>

      
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-5xl md:text-6xl font-extrabold text-white"
      >
        ABHISHEK <span className="text-cyan-400">RAWAT</span>
      </motion.h1>

      
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="text-gray-300 text-lg md:text-xl max-w-2xl"
      >
        I’m Abhishek Rawat, a B.Tech CSE graduate and aspiring Software Engineer who turns ideas into fast, scalable web applications using modern fullstack tools.
      </motion.p>

    
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="flex justify-between items-center w-full mt-4 md:mt-6"
      >
        <div className="flex gap-5 text-2xl">
          <a href="https://www.linkedin.com/in/abhishek-rawat-9976a1221/" className="text-gray-300 hover:text-cyan-400 transition" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/abhishekrwt2" className="text-gray-300 hover:text-cyan-400 transition" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="mailto:abhirwt008@gmail.com" className="text-gray-300 hover:text-cyan-400 transition"><FaEnvelope /></a>
        </div>
        <a href="/AbhishekRawatResume.pdf" download className="px-6 py-3 rounded-full font-semibold text-black bg-cyan-400 hover:bg-cyan-500 transition-colors duration-300 ease-in-out">
          Download CV
        </a>
      </motion.div>
    </section>
  );
};

export default Home;
