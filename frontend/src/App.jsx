import React, { useEffect } from 'react'
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/Aboutme';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {

  useEffect(() => {
    
    setTimeout(() => window.scrollTo(0, 0), 0);
  }, []);

  return (
    <div>
      <Navbar/>
      <Home/>
      <div className="w-full h-1 my-8 md:my-12 rounded-full bg-gradient-to-r from-cyan-500/20 via-gray-800 to-cyan-500/20"></div>
      <About/>
      <div className="w-full h-1 my-8 md:my-12 rounded-full bg-gradient-to-r from-cyan-500/20 via-gray-800 to-cyan-500/20"></div>
      <Skills/>
      <div className="w-full h-1 my-8 md:my-12 rounded-full bg-gradient-to-r from-cyan-500/20 via-gray-800 to-cyan-500/20"></div>
      <Projects/>
      <div className="w-full h-1 my-8 md:my-12 rounded-full bg-gradient-to-r from-cyan-500/20 via-gray-800 to-cyan-500/20"></div>
      <Contact/>
    </div>
  )
}

export default App

