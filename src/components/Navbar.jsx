import React, { useState, useEffect } from 'react';
import { FaHouse, FaFolder, FaBriefcase, FaWrench, FaAward, FaEnvelope } from 'react-icons/fa6';

export default function Navbar({ theme }) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "proj", "experience", "skill", "certifications", "contact"];
      const scrollPosition = window.scrollY + 250; // offset to trigger earlier

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to set initial state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", icon: <FaHouse size={19} />, label: "Home" },
    { id: "proj", icon: <FaFolder size={19} />, label: "Projects" },
    { id: "experience", icon: <FaBriefcase size={19} />, label: "Experience" },
    { id: "skill", icon: <FaWrench size={19} />, label: "Skills" },
    { id: "certifications", icon: <FaAward size={19} />, label: "Certifications & Achievements" },
    { id: "contact", icon: <FaEnvelope size={19} />, label: "Contact Me" },
  ];

  return (
    <div className="fixed top-5 left-0 w-full flex justify-center z-50 px-4">
      <div className={`bg-[#0c0a1f]/85 backdrop-blur-xl border ${theme.border} px-6 sm:px-8 py-3.5 rounded-full shadow-2xl flex gap-5 sm:gap-7 text-white/90 transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.02)]`}>
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative flex flex-col items-center group transition-all duration-300 transform active:scale-90 ${
                isActive ? `${theme.text} scale-115` : "text-white/50 hover:text-white hover:scale-110"
              }`}
              title={item.label}
            >
              <div className="transition duration-300 group-hover:-translate-y-0.5">
                {item.icon}
              </div>
              {/* Glowing active indicator dot */}
              <span className={`absolute -bottom-2 w-1.5 h-1.5 rounded-full ${theme.dot} shadow-[0_0_8px_currentColor] transition-all duration-500 ${
                isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
