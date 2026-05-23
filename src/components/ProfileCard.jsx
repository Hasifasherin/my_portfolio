import React, { useState, useRef } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaLocationDot, FaDownload } from "react-icons/fa6";

const ProfileCard = ({ theme }) => {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    transition: "all 0.5s ease-out"
  });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // mouse X relative to card
    const y = e.clientY - rect.top;  // mouse Y relative to card

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate tilt angles (limit max tilt to 7 degrees for a sleek, premium experience)
    const rotateX = ((centerY - y) / centerY) * 7;
    const rotateY = ((x - centerX) / centerX) * 7;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`,
      transition: "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)"
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
    });
  };

  return (
    <div className="w-full lg:max-h-[calc(100vh-180px)] lg:overflow-y-auto scrollbar-thin animate-fade-in-left fill-mode-forwards opacity-0">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={tiltStyle}
        className={`bg-[#0c0a1f]/90 backdrop-blur-md border ${theme.border} rounded-2xl p-5 sm:p-6 text-center shadow-2xl relative overflow-hidden transition-shadow duration-300 hover:${theme.shadow}`}
      >
        {/* Decorative background glows */}
        <div className={`absolute -top-10 -left-10 w-24 h-24 ${theme.glow} rounded-full blur-3xl`}></div>
        <div className={`absolute -bottom-10 -right-10 w-24 h-24 ${theme.glow} rounded-full blur-3xl opacity-50`}></div>

        {/* Profile Image with Glowing Halo Ring */}
        <div className="relative inline-block group mb-2">
          <div className={`absolute -inset-1 bg-gradient-to-r ${theme.buttonBg} rounded-full blur-sm opacity-30 group-hover:opacity-75 transition duration-500 animate-pulse`}></div>
          <img
            src="/profile.png"
            alt="Hasifa Sherin C.P."
            className={`relative w-24 h-24 md:w-30 md:h-30 mx-auto object-cover rounded-full shadow-md border-2 ${theme.border} transition-transform duration-500 group-hover:scale-105`}
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400";
            }}
          />
        </div>

        {/* Name and Role */}
        <h4 className="text-lg sm:text-xl font-bold mt-3 tracking-wide text-white transition-colors duration-300 group-hover:text-purple-300">Hasifa Sherin C.P.</h4>
        <div className={`mt-1 ${theme.text} font-medium text-[10px] sm:text-xs tracking-widest uppercase`}>
          Full Stack Developer
        </div>
        <p className="text-white/60 text-[10px] sm:text-[11px] mt-0.5">MERN Stack & PHP/Laravel Specialist</p>

        <hr className={`${theme.border} my-3.5`} />

        {/* Contact Info list */}
        <div className="space-y-2.5 text-left text-xs text-white/80">
          <div className="flex items-center gap-2.5 group/info">
            <div className={`${theme.bgMuted} ${theme.text} p-1.5 rounded-lg shrink-0 transition-transform duration-300 group-hover/info:scale-110`}>
              <FaLocationDot className="w-3.5 h-3.5" />
            </div>
            <span>Malappuram, Kerala, India</span>
          </div>
          <div className="flex items-center gap-2.5 group/info">
            <div className={`${theme.bgMuted} ${theme.text} p-1.5 rounded-lg shrink-0 transition-transform duration-300 group-hover/info:scale-110`}>
              <FaEnvelope className="w-3.5 h-3.5" />
            </div>
            <a href="mailto:hasifasherincp@gmail.com" className={`hover:${theme.text} transition break-all duration-300`}>
              hasifasherincp@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2.5 group/info">
            <div className={`${theme.bgMuted} ${theme.text} p-1.5 rounded-lg shrink-0 transition-transform duration-300 group-hover/info:scale-110`}>
              <FaPhone className="w-3.5 h-3.5" />
            </div>
            <a href="tel:+916238269435" className={`hover:${theme.text} transition duration-300`}>
              +91 6238269435
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-3 mt-4">
          <a
            href="https://www.linkedin.com/in/hasifa-sherin-cp/"
            target="_blank"
            rel="noreferrer"
            className={`bg-[#110e26] hover:${theme.bgHover} hover:text-black border ${theme.border} text-white p-2 rounded-xl transition duration-300 transform hover:scale-115 hover:-translate-y-0.5 shadow-lg`}
            title="LinkedIn"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/Hasifasherin"
            target="_blank"
            rel="noreferrer"
            className={`bg-[#110e26] hover:${theme.bgHover} hover:text-black border ${theme.border} text-white p-2 rounded-xl transition duration-300 transform hover:scale-115 hover:-translate-y-0.5 shadow-lg`}
            title="GitHub"
          >
            <FaGithub className="w-4 h-4" />
          </a>
        </div>

        {/* Resume Download Action */}
        <a href="/HASIFA-SHERIN-CP-CV.pdf" download className="block mt-4 group/btn">
          <button className={`w-full bg-gradient-to-r ${theme.buttonBg} text-white py-2.5 px-4 rounded-xl text-xs font-medium shadow-lg hover:${theme.shadow} transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer`}>
            <span>Download CV</span>
            <FaDownload className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-y-0.5" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;