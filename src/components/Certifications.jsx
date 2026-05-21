import { FaAward } from 'react-icons/fa6';

export default function Certifications() {
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
        'Covers both front-end and back-end technologies, including HTML, CSS, JavaScript, and React.js for building dynamic user interfaces.',
        'Explores server-side development with Node.js and Express.js while integrating MongoDB for efficient data storage and retrieval.'
      ],
    },
  ];

  return (
    <section id="certifications" className="pt-20 scroll-mt-28">
      <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-3">
        <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent flex items-center gap-2">
          Certifications
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-[#21163e]/55 border border-purple-500/10 p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-purple-500/5 hover:border-purple-500/20 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start gap-4 mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">{cert.title}</h3>
                <div className="bg-purple-500/20 text-purple-300 p-2 rounded-lg shrink-0">
                  <FaAward className="w-5 h-5" />
                </div>
              </div>
              <p className="text-purple-400 text-sm font-medium">{cert.institute}</p>
              
              <ul className="mt-4 space-y-2.5 text-white/70 text-sm">
                {cert.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-purple-400 mt-1.5 text-[10px]">◆</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-6 pt-4 border-t border-purple-500/10 flex justify-between items-center">
              <span className="text-xs text-white/40 italic">{cert.duration}</span>
              <span className="text-xs font-semibold px-2.5 py-1 bg-purple-500/10 text-purple-300 rounded border border-purple-500/20">Verified</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
