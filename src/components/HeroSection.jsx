import React, { useState, useEffect } from "react";
import { FaBriefcase, FaCode, FaGraduationCap, FaRegFilePdf, FaEnvelope } from "react-icons/fa6";
import { themes } from "../theme";

export default function HeroSection({ theme = themes.purple }) {
  const words = [
    "Developer • Kerala • India",
    "MERN Stack Specialist",
    "Laravel Enthusiast",
    "IoT & Automation Innovator"
  ];

  const [wordIdx, setWordIdx] = useState(0);
  const [fadeState, setFadeState] = useState("opacity-100 translate-y-0");
  const [monthsCount, setMonthsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Transition out
      setFadeState("opacity-0 -translate-y-2 scale-95");
      
      setTimeout(() => {
        setWordIdx((prev) => (prev + 1) % words.length);
        // Transition back in
        setFadeState("opacity-100 translate-y-0 scale-100");
      }, 350);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Count up for Internship Months (10) over 1 second duration
    let monthsStart = 0;
    const monthsEnd = 10;
    const monthsIntervalTime = Math.floor(1000 / monthsEnd);
    
    const monthsTimer = setInterval(() => {
      monthsStart += 1;
      setMonthsCount(monthsStart);
      if (monthsStart === monthsEnd) {
        clearInterval(monthsTimer);
      }
    }, monthsIntervalTime);

    // Count up for Live Web Projects (8) over 1 second duration
    let projectsStart = 0;
    const projectsEnd = 8;
    const projectsIntervalTime = Math.floor(1000 / projectsEnd);
    
    const projectsTimer = setInterval(() => {
      projectsStart += 1;
      setProjectsCount(projectsStart);
      if (projectsStart === projectsEnd) {
        clearInterval(projectsTimer);
      }
    }, projectsIntervalTime);

    return () => {
      clearInterval(monthsTimer);
      clearInterval(projectsTimer);
    };
  }, []);

  // Get primary-to-secondary gradient for accent dividers/badges
  const getAccentGradient = (id) => {
    switch (id) {
      case "cyan":
        return "from-cyan-500 to-teal-500";
      case "emerald":
        return "from-emerald-500 to-sky-500";
      case "amber":
        return "from-amber-500 to-rose-500";
      default:
        return "from-purple-500 to-indigo-500";
    }
  };

  return (
    <section id="home" className="pt-20 scroll-mt-28 relative">
      {/* Background Decorative Gradient Blobs - Slow pulsing animation */}
      <div className={`absolute -top-20 -left-20 w-72 h-72 ${theme.glow} rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-subtle`}></div>
      
      {/* Premium Pulsing Status Badge */}
      <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ${theme.bgMuted} border ${theme.border} ${theme.text} text-xs sm:text-sm font-medium tracking-wide mb-6 animate-fade-in-up fill-mode-forwards opacity-0 hover:scale-105 transition-transform duration-300 cursor-default`}>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>Available for Full-Stack Developer Roles</span>
      </div>
 
      {/* Name as premium sub-heading */}
      <div className={`text-base sm:text-lg font-bold tracking-widest uppercase mb-2 ${theme.text} font-poppins animate-fade-in-up fill-mode-forwards opacity-0 animation-delay-100`}>
        Hasifa Sherin C.P.
      </div>

      {/* Main Professional Headline (Bold Uppercase Core Statement like dmirsha.com) */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.2] tracking-tight text-white uppercase font-poppins animate-fade-in-up fill-mode-forwards opacity-0 animation-delay-100">
        Junior Full Stack <br />
        <span className={`inline-block bg-gradient-to-r ${theme.gradientText} bg-clip-text text-transparent transition-all duration-500 transform ${fadeState}`}>
          {words[wordIdx]}
        </span>
      </h1>
      
      <div className={`w-24 h-1.5 bg-gradient-to-r ${getAccentGradient(theme.id)} rounded-full my-6 animate-scale-in fill-mode-forwards opacity-0 animation-delay-200`}></div>
      
      {/* Intro Description */}
      <div className="space-y-4 text-white/80 text-base sm:text-lg max-w-3xl leading-relaxed font-light font-poppins animate-fade-in-up fill-mode-forwards opacity-0 animation-delay-300">
        <p>
          Hi, I am Hasifa Sherin C.P., a passionate <strong className={`${theme.text} font-medium`}>Full Stack Developer</strong>. 
          I specialize in creating clean, responsive user interfaces and building high-performance server-side web applications using the 
          <strong className="text-white font-medium"> MERN Stack</strong> (MongoDB, Express, React, Node) and 
          <strong className="text-white font-medium"> PHP/Laravel</strong>.
        </p>
        <p className="text-white/70 text-sm sm:text-base">
          I focus on writing clean, scalable code, implementing secure authentication, and designing seamless API integrations. 
          Additionally, I enjoy working with IoT hardware integrations, real-time sensor systems, and building smart campus kiosks.
        </p>
      </div>

      {/* Sleek Stats Panel */}
      <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mt-10">
        <div className={`bg-[#0c0a1f]/55 border ${theme.border} rounded-2xl p-4 text-center backdrop-blur-sm ${theme.borderHover} transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:${theme.shadow} animate-scale-in fill-mode-forwards opacity-0 animation-delay-400 cursor-default group`}>
          <div className={`${theme.bgMuted} ${theme.text} w-9 h-9 rounded-xl flex items-center justify-center mx-auto mb-2.5 transition duration-300 group-hover:scale-110`}>
            <FaBriefcase className="w-4 h-4" />
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white leading-none">{monthsCount}+ Mos</div>
          <div className="text-[10px] sm:text-xs text-white/50 mt-1 font-light">Internships</div>
        </div>

        <div className={`bg-[#0c0a1f]/55 border ${theme.border} rounded-2xl p-4 text-center backdrop-blur-sm ${theme.borderHover} transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:${theme.shadow} animate-scale-in fill-mode-forwards opacity-0 animation-delay-500 cursor-default group`}>
          <div className={`${theme.bgMuted} ${theme.text} w-9 h-9 rounded-xl flex items-center justify-center mx-auto mb-2.5 transition duration-300 group-hover:scale-110`}>
            <FaCode className="w-4 h-4" />
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white leading-none">{projectsCount}+ Live</div>
          <div className="text-[10px] sm:text-xs text-white/50 mt-1 font-light">Web Projects</div>
        </div>

        <div className={`bg-[#0c0a1f]/55 border ${theme.border} rounded-2xl p-4 text-center backdrop-blur-sm ${theme.borderHover} transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:${theme.shadow} animate-scale-in fill-mode-forwards opacity-0 animation-delay-700 cursor-default group`}>
          <div className={`${theme.bgMuted} ${theme.text} w-9 h-9 rounded-xl flex items-center justify-center mx-auto mb-2.5 transition duration-300 group-hover:scale-110`}>
            <FaGraduationCap className="w-4 h-4" />
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white leading-none">B.Sc.</div>
          <div className="text-[10px] sm:text-xs text-white/50 mt-1 font-light">Comp Science</div>
        </div>
      </div>

      {/* Enhanced Interactive Action Buttons */}
      <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up fill-mode-forwards opacity-0 animation-delay-700">
        <a href="/HASIFA-SHERIN-CP-CV.pdf" target="_blank" rel="noreferrer" className="shrink-0 group">
          <button className={`bg-gradient-to-r ${theme.buttonBg} text-white font-medium px-7 py-3.5 rounded-xl shadow-lg ${theme.shadow} transition-all duration-300 transform hover:-translate-y-1 active:scale-95 flex items-center gap-2 cursor-pointer text-sm sm:text-base`}>
            <FaRegFilePdf className="w-4 h-4 transition duration-300 group-hover:scale-115" />
            <span>View Resume</span>
          </button>
        </a>
        <a href="#contact" className="shrink-0 group">
          <button className={`border ${theme.border} hover:border-white/30 text-white hover:${theme.bgMuted} font-medium px-7 py-3.5 rounded-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 flex items-center gap-2 cursor-pointer text-sm sm:text-base`}>
            <FaEnvelope className={`w-4 h-4 ${theme.text} transition duration-300 group-hover:scale-115`} />
            <span>Contact Me</span>
          </button>
        </a>
      </div>
    </section>
  );
}