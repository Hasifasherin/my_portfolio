import React from 'react';
import { FaTrophy } from 'react-icons/fa6';
import { themes } from '../theme';

export default function Achievements({ theme = themes.purple }) {
  const achievements = [
    {
      title: 'IoT Coordinator – INNOVI8 IT Expo',
      desc: 'Led IoT workshop & project demo for students; enhanced leadership, public speaking, and teamwork skills.',
    },
    {
      title: 'Coordinator – Audiobook Launch (2022)',
      desc: 'Organized the official launch of an audiobook program designed to support visually impaired students, promoting inclusivity and community support.',
    },
    {
      title: 'HackerRank Certified Professional',
      desc: 'Earned certifications in CSS, JavaScript, and SQL for demonstrating web design and database querying proficiency.',
    },
  ];

  return (
    <section id="achieve" className="pt-20 scroll-mt-28">
      <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-3">
        <span className={`bg-gradient-to-r ${theme.gradientText} bg-clip-text text-transparent flex items-center gap-2`}>
          Achievements
        </span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
        {achievements.map((item, index) => {
          const delayClass = index === 0 ? "animation-delay-100" :
                             index === 1 ? "animation-delay-250" : "animation-delay-400";
          return (
            <div
              key={index}
              className={`bg-[#0c0a1f]/55 border ${theme.border} p-6 sm:p-8 rounded-2xl shadow-xl hover:${theme.shadow} ${theme.borderHover} transition-all duration-500 transform hover:-translate-y-1.5 backdrop-blur-sm flex flex-col justify-between animate-scale-in fill-mode-forwards opacity-0 ${delayClass} group`}
            >
              <div>
                <div className={`${theme.bgMuted} ${theme.text} p-3 rounded-xl w-fit mb-5 border ${theme.border} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <FaTrophy className="w-5 h-5" />
                </div>
                <h3 className={`text-lg font-bold text-white mb-3 group-hover:${theme.text} transition duration-300`}>
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed font-light font-poppins">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}