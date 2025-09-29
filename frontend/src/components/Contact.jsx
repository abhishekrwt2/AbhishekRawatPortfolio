import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const email = "abhirwt008@gmail.com"; // Replace with your email
  const githubLink = "https://github.com/abhishekrwt2"; // Replace with your GitHub
  const linkedinLink = "https://linkedin.com/in/abhishekrwt2"; // Replace with your LinkedIn

  const handleEmailClick = () => {
    // Open Gmail compose in new tab
    window.open(`https://mail.google.com/mail/?view=cm&to=${email}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="px-6 md:px-12 py-16 bg-black text-white flex flex-col items-center"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-4 max-w-3xl"
      >
        I’m currently open to exciting opportunities and collaborations
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-400 text-center mb-10 max-w-2xl"
      >
        Have a project in mind, a question, or just want to connect? My inbox is always open.  
        I’ll respond as quickly as possible!
      </motion.p>

      {/* Icons and Email Box */}
      <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-md">
        {/* Email Box */}
        <div className="relative flex items-center bg-gray-900 rounded-xl shadow-lg p-4 w-full hover:shadow-cyan-400/50 transition-shadow duration-300 cursor-pointer">
          <motion.div
            whileHover={{ y: [-2, -6, -2] }}
            transition={{ duration: 0.5 }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400"
            onClick={handleEmailClick}
          >
            <FaEnvelope size={28} />
          </motion.div>

          <input
            type="text"
            value={email}
            readOnly
            className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none pl-16"
            onClick={handleEmailClick}
          />
        </div>

        {/* Social Icons */}
        <div className="flex gap-6">
          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -4 }}
            className="text-white text-3xl"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -4 }}
            className="text-blue-600 text-3xl"
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
