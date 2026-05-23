import React from 'react';
import { FaAward } from 'react-icons/fa6';
import { themes } from '../theme';

export default function Certifications({ theme = themes.purple }) {
  const certifications = [
    {
      title: 'Full Stack Web Development (MERN)',
      institute: 'Entri Elevate',
      duration: 'Professional Certification',
      bullets: [
        'Hands-on training in frontend development using HTML, CSS, JavaScript, and React.js.',
        'Deep-dive backend development with Node.js, Express.js, and MongoDB for scalable full-stack applications.'
      ],
    },
    {
      title: 'Full Stack Web Development (MERN)',
      institute: 'University of Illinois',
      duration: 'Academic Specialization',
      bullets: [
        'Covers front-end and back-end technologies, including HTML, CSS, JavaScript, and React.js for building dynamic user interfaces.',
        'Explores server-side development with Node.js and Express.js while integrating MongoDB for efficient data storage and retrieval.'
      ],
    },
  ];

  return (
    <section id="certifications" className="pt-20 scroll-mt-28">
      <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-3">
        <span className={`bg-gradient-to-r ${theme.gradientText} bg-clip-text text-transparent flex items-center gap-2`}>
          Certifications
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {certifications.map((cert, index) => {
          const delayClass = index === 0 ? "animation-delay-100" : "animation-delay-250";
          return (
            <div
              key={index}
              className={`bg-[#0c0a1f]/55 border ${theme.border} p-6 sm:p-8 rounded-2xl shadow-xl hover:${theme.shadow} ${theme.borderHover} transition-all duration-500 transform hover:-translate-y-1 backdrop-blur-sm flex flex-col justify-between animate-scale-in fill-mode-forwards opacity-0 ${delayClass} group`}
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug transition-colors duration-300 group-hover:text-purple-300">{cert.title}</h3>
                  <div className={`${theme.bgMuted} ${theme.text} p-2 rounded-lg shrink-0 border ${theme.border} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <FaAward className="w-5 h-5 animate-pulse" />
                  </div>
                </div>
                <p className={`${theme.text} text-sm font-medium`}>{cert.institute}</p>
                
                <ul className="mt-4 space-y-2.5 text-white/70 text-sm">
                  {cert.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed group/bullet">
                      <span className={`${theme.text} mt-1.5 text-[10px] transition-transform duration-200 group-hover/bullet:scale-120`}>◆</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={`mt-6 pt-4 border-t ${theme.border} flex justify-between items-center`}>
                <span className="text-xs text-white/40 italic">{cert.duration}</span>
                <span className={`text-xs font-semibold px-2.5 py-1 ${theme.bgMuted} ${theme.text} rounded border ${theme.border} transition duration-300 hover:scale-105`}>Verified</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
