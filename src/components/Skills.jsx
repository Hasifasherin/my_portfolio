import React from 'react';
import { FaCode, FaServer, FaLaptopCode, FaMicrochip, FaPalette, FaPeopleArrows, FaArrowRightLong } from 'react-icons/fa6';
import { themes } from '../theme';

export default function Skills({ theme = themes.purple }) {
  const categories = [
    {
      title: 'Frontend Development',
      icon: <FaCode className="text-pink-400 w-6 h-6" />,
      subhead: 'Building responsive, modern, and pixel-perfect interfaces.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'Bootstrap'],
      desc: 'Expert in developing single-page apps (SPAs) with complex animations, modular components, and responsive cross-device layouts.',
      level: 95
    },
    {
      title: 'Backend & Databases',
      icon: <FaServer className="text-blue-400 w-6 h-6" />,
      subhead: 'Developing performant, secure, and scalable API systems.',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'PHP', 'Laravel', 'RESTful APIs', 'phpMyAdmin'],
      desc: 'Experienced in developing robust server-side applications, setting up databases, handling secure authentications, and building custom APIs.',
      level: 90
    },
    {
      title: 'Tools & Platforms',
      icon: <FaLaptopCode className="text-emerald-400 w-6 h-6" />,
      subhead: 'Optimizing developer workflows and cloud integrations.',
      skills: ['Git/GitHub', 'VS Code', 'WAMP', 'Shopify Theme Customization'],
      desc: 'Proficient in modern version control methodologies, standard debugging workflows, hosting systems, and robust theme customizations.',
      level: 85
    },
    {
      title: 'IoT & Embedded Systems',
      icon: <FaMicrochip className="text-amber-400 w-6 h-6" />,
      subhead: 'Connecting physical sensors and hardware logic units.',
      skills: ['Arduino', 'ESP8266/ESP32', 'Sensors Integrations', 'C/C++ Scripting'],
      desc: 'Passionate about integrating analog and digital sensors (dht11, ultrasonic, relays), micro-controller scripts, and automated hardware nodes.',
      level: 80
    },
    {
      title: 'Design & UI/UX',
      icon: <FaPalette className="text-purple-400 w-6 h-6" />,
      subhead: 'Mapping typography, layouts, and components wires.',
      skills: ['Figma Prototyping', 'Canva Graphics', 'Layout Grids', 'Typographic Scale'],
      desc: 'Skilled in translating complex feature blueprints into intuitive interactive wires, choosing responsive ratios, and mapping style tokens.',
      level: 82
    },
    {
      title: 'Soft Skills',
      icon: <FaPeopleArrows className="text-rose-400 w-6 h-6" />,
      subhead: 'Collaborating effectively within professional agile environments.',
      skills: ['Clear Communication', 'Agile Teamwork', 'Problem Solving', 'Adaptability'],
      desc: 'Dedicated to agile team cooperation, clear status reporting, self-driven research, flexible time management, and collaborative code reviews.',
      level: 92
    }
  ];

  return (
    <section id="skill" className="pt-20 scroll-mt-28">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-3">
        <span className={`bg-gradient-to-r ${theme.gradientText} bg-clip-text text-transparent`}>
          Skills & Technical Expertise
        </span>
      </h2>

      {/* Responsive Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {categories.map((cat, index) => {
          const delayClass = index === 0 ? "animation-delay-100" :
                             index === 1 ? "animation-delay-200" :
                             index === 2 ? "animation-delay-300" :
                             index === 3 ? "animation-delay-400" :
                             index === 4 ? "animation-delay-500" : "animation-delay-700";

          return (
            <div
              key={index}
              className={`group [perspective:1000px] w-full h-[340px] sm:h-[320px] md:h-[340px] lg:h-[320px] animate-scale-in fill-mode-forwards opacity-0 ${delayClass}`}
            >
              {/* Card Container holding 3D coordinates */}
              <div className="relative w-full h-full transition-transform duration-[800ms] preserve-3d group-hover:[transform:rotateY(180deg)] cursor-pointer">
                
                {/* 1. FRONT SIDE OF CARD */}
                <div className={`absolute inset-0 w-full h-full backface-hidden rounded-3xl p-6 sm:p-7 flex flex-col justify-between bg-[#0c0a1f]/85 border ${theme.border} shadow-xl hover:${theme.shadow} backdrop-blur-md overflow-hidden transition-all duration-300`}>
                  {/* Glowing halo behind active cards */}
                  <div className={`absolute -top-12 -left-12 w-24 h-24 ${theme.glow} rounded-full blur-3xl opacity-40`}></div>
                  <div className={`absolute -bottom-12 -right-12 w-24 h-24 ${theme.glow} rounded-full blur-3xl opacity-20`}></div>

                  {/* Top: Category Title & Icon */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`${theme.badgeBg} p-3 rounded-xl border ${theme.badgeBorder} shadow-inner`}>
                        {cat.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">{cat.title}</h3>
                    </div>
                    {/* Middle: Subhead and skills tags preview */}
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4">{cat.subhead}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.slice(0, 4).map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className={`${theme.badgeBg} border ${theme.badgeBorder} ${theme.text} text-[10px] sm:text-xs px-2.5 py-1 rounded-lg font-medium`}
                        >
                          {skill}
                        </span>
                      ))}
                      {cat.skills.length > 4 && (
                        <span className="text-white/40 text-[10px] sm:text-xs flex items-center font-mono pl-1">
                          +{cat.skills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom: Interactive indicator */}
                  <div className="flex justify-between items-center border-t border-white/5 pt-3.5 mt-auto">
                    <span className="text-[9px] text-white/30 uppercase tracking-widest font-mono">Expertise Hub</span>
                    <span className={`text-xs font-semibold ${theme.text} flex items-center gap-1.5 animate-pulse`}>
                      Hover to flip <FaArrowRightLong className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>

                {/* 2. BACK SIDE OF CARD */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl p-6 sm:p-7 flex flex-col justify-between bg-[#080617]/95 border border-purple-500/30 shadow-2xl overflow-hidden transition-all duration-300">
                  {/* Cyberpunk network grid design details */}
                  <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

                  <div>
                    {/* Top: Category Title & Icon */}
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className={`${theme.badgeBg} p-2 rounded-lg border ${theme.badgeBorder}`}>
                        {cat.icon}
                      </div>
                      <h3 className={`text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${theme.gradientText} tracking-wide`}>
                        {cat.title}
                      </h3>
                    </div>

                    {/* Middle: Complete detailed tags list */}
                    <div className="flex flex-wrap gap-1.5 mb-3.5">
                      {cat.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="bg-white/5 border border-white/10 text-white/80 text-[9px] sm:text-[10px] px-2 py-0.5 rounded-md font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Back: Professional description */}
                    <p className="text-white/70 text-[10px] sm:text-xs leading-relaxed font-sans">{cat.desc}</p>
                  </div>

                  {/* Bottom: Glowing proficiency meter & interactive explore projects action */}
                  <div className="space-y-3.5 mt-auto">
                    {/* Proficiency percentage progress meter */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] font-mono">
                        <span className="text-white/40">Proficiency Meter</span>
                        <span className={`font-semibold ${theme.text}`}>{cat.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${theme.buttonBg} rounded-full`}
                          style={{ width: `${cat.level}%` }}
                        />
                      </div>
                    </div>

                    {/* Explore projects shortcut */}
                    <a href="#proj" className="block group/btn">
                      <button className={`w-full bg-[#110e26] hover:${theme.bgHover} hover:text-black border ${theme.border} text-white py-1.5 rounded-xl text-[10px] sm:text-xs font-semibold shadow-md transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer`}>
                        <span>Explore Projects</span>
                        <FaArrowRightLong className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </button>
                    </a>
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
