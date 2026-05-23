import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import Hero from "./components/HeroSection";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import ContactForm from "./components/ContactForm";
import CanvasBackground from "./components/CanvasBackground";
import CustomCursor from "./components/CustomCursor";
import { themes } from "./theme";
import { FaPalette } from "react-icons/fa6";

const App = () => {
  const [activeTheme, setActiveTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "purple";
  });
  const [isThemeOpen, setIsThemeOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", activeTheme);
  }, [activeTheme]);

  const theme = themes[activeTheme];

  return (
    <div className="bg-dark text-white font-poppins min-h-screen relative transition-colors duration-500">
      {/* Interactive Theme-reactive Canvas Starfield Constellation Backdrop */}
      <CanvasBackground theme={theme} />

      {/* High-Fidelity Custom Trailing Glowing Dot Cursor */}
      <CustomCursor theme={theme} />

      {/* Decorative background glow blobs wrapped to prevent horizontal overflow without breaking position: sticky */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[-15%] w-[40rem] h-[40rem] rounded-full blur-[150px] opacity-25 transition-all duration-1000"
          style={{
            background: activeTheme === "purple" ? "radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)" :
              activeTheme === "cyan" ? "radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)" :
                activeTheme === "emerald" ? "radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)" :
                  "radial-gradient(circle, rgba(245,158,11,0.3) 0%, transparent 70%)"
          }}
        ></div>
        <div className="absolute bottom-[10%] right-[-15%] w-[40rem] h-[40rem] rounded-full blur-[150px] opacity-25 transition-all duration-1000"
          style={{
            background: activeTheme === "purple" ? "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)" :
              activeTheme === "cyan" ? "radial-gradient(circle, rgba(20,184,166,0.3) 0%, transparent 70%)" :
                activeTheme === "emerald" ? "radial-gradient(circle, rgba(14,165,233,0.3) 0%, transparent 70%)" :
                  "radial-gradient(circle, rgba(239,68,68,0.3) 0%, transparent 70%)"
          }}
        ></div>
      </div>

      <Navbar theme={theme} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        {/* Responsive Flex Layout: Desktop Side-by-Side (Sticky) & Mobile Stacked (Flow) */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Column - Sticky Profile Card (Desktop only, hidden on mobile) */}
          <div className="hidden lg:block lg:w-[30%] lg:sticky lg:top-[100px] self-start h-fit z-20">
            <ProfileCard theme={theme} />
          </div>

          {/* Right Column - Scrollable Content */}
          <div className="w-full lg:w-[70%] flex flex-col gap-20">
            <Hero theme={theme} />

            {/* Mobile Profile Card - Placed above Featured Projects section, hidden on desktop */}
            <div className="block lg:hidden w-full">
              <ProfileCard theme={theme} />
            </div>

            <Projects theme={theme} />
            <Experience theme={theme} />
            <Certifications theme={theme} />
            <Skills theme={theme} />
            <Achievements theme={theme} />
            <ContactForm theme={theme} />
          </div>
        </div>
      </div>

      {/* Floating Theme Accent Switcher Widget */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5">
        {isThemeOpen && (
          <div className="flex gap-2 p-2 bg-[#0c0a1f]/85 backdrop-blur-md border border-white/10 rounded-full shadow-2xl animate-fade-in transition-all duration-300">
            {Object.keys(themes).map((tKey) => {
              const t = themes[tKey];
              let dotBg = "bg-purple-500";
              if (tKey === "cyan") dotBg = "bg-cyan-500";
              if (tKey === "emerald") dotBg = "bg-emerald-500";
              if (tKey === "amber") dotBg = "bg-amber-500";

              return (
                <button
                  key={tKey}
                  onClick={() => {
                    setActiveTheme(tKey);
                    setIsThemeOpen(false);
                  }}
                  className={`w-6 h-6 rounded-full cursor-pointer transition-all duration-300 hover:scale-125 hover:rotate-12 ${dotBg} ${activeTheme === tKey ? "ring-2 ring-white ring-offset-2 ring-offset-dark scale-110" : "opacity-80"
                    }`}
                  title={t.name}
                />
              );
            })}
          </div>
        )}
        <button
          onClick={() => setIsThemeOpen(!isThemeOpen)}
          className={`p-3 bg-[#110e26]/85 hover:bg-[#1a1736] border text-white rounded-full shadow-2xl transition duration-300 transform hover:scale-115 hover:rotate-45 cursor-pointer flex items-center justify-center`}
          style={{
            borderColor: activeTheme === "purple" ? "rgba(168,85,247,0.4)" :
              activeTheme === "cyan" ? "rgba(6,182,212,0.4)" :
                activeTheme === "emerald" ? "rgba(16,185,129,0.4)" :
                  "rgba(245,158,11,0.4)"
          }}
          title="Customize Theme Color"
        >
          <FaPalette className={`w-5 h-5`}
            style={{
              color: activeTheme === "purple" ? "#a855f7" :
                activeTheme === "cyan" ? "#06b6d4" :
                  activeTheme === "emerald" ? "#10b981" :
                    "#f59e0b"
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default App;
