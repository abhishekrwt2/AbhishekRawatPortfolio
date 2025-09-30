import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "About", "Skills", "Projects", "Contact", "Resume"];

  return (
    <nav className="w-full fixed top-0 left-0 bg-black/90 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center shadow-lg z-50 border-b border-white/10">
      
      {/* Left - Name */}
      <h1 className="text-2xl font-semibold tracking-wide">
        Abhishek Rawat
      </h1>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
        {navLinks.map((link) => (
          <li
            key={link}
            className="cursor-pointer hover:text-gray-400 transition-colors duration-200"
          >
            {link.toLowerCase() === "resume" ? (
              <a
                href="/AbhishekRawat's Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border-2 border-white text-white
                           shadow-[0_0_8px_white] hover:shadow-[0_0_16px_cyan] hover:border-cyan
                           transition-all duration-300 ease-in-out"
              >
                {link}
              </a>
            ) : (
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col w-8 h-8 justify-between items-center focus:outline-none"
        >
          <span
            className={`block h-0.5 w-full bg-white transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-3" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-white transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-white transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-3" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-black/95 flex flex-col items-center py-4 md:hidden gap-4 border-t border-white/10">
          {navLinks.map((link) => (
            <li key={link} className="cursor-pointer hover:text-gray-400 transition-colors duration-200">
              {link.toLowerCase() === "resume" ? (
                <a
                  href="/AbhishekRawatResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full border-2 border-white text-white
                             shadow-[0_0_8px_white] hover:shadow-[0_0_16px_cyan] hover:border-cyan
                             transition-all duration-300 ease-in-out"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              ) : (
                <a href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                  {link}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
