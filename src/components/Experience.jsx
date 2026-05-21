export default function Experience() {
  const experiences = [
    {
      role: 'MERN Stack Developer Intern',
      company: 'Limenzy Technologies Pvt Ltd',
      duration: '08 Oct 2025 – 18 Feb 2026 (4 Months)',
      responsibilities: [
        'Developed full-stack web applications using MongoDB, Express.js, React.js, Node.js, and Next.js.',
        'Built responsive UI components and implemented RESTful APIs and MongoDB CRUD operations.',
        'Implemented JWT authentication for secure user access and role management.',
        'Worked on end-to-end projects by integrating frontend and backend functionalities.',
        'Collaborated with team members to maintain clean code and improve application performance.'
      ],
    },
    {
      role: 'Frontend / React Developer Intern',
      company: 'Metacryptonex Pvt Ltd',
      duration: '6 Months',
      responsibilities: [
        'Developed and maintained responsive web applications using Laravel Blade and React.js.',
        'Collaborated with backend teams using Laravel, PHP, and phpMyAdmin for data integration.',
        'Customized and managed Shopify stores, including UI updates and theme modifications.',
        'Built reusable UI components and ensured cross-browser compatibility.',
        'Assisted in improving website performance and user experience.',
        'Designed basic posters and social media creatives using Canva.',
        'Supported junior interns by helping them learn basic Laravel development concepts.',
        'Worked in a team environment while handling multiple tasks and meeting deadlines.'
      ],
    }
  ];

  return (
    <section id="experience" className="pt-20 scroll-mt-28">
      {/* Experience Title */}
      <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-3">
        <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">Professional Experience</span>
      </h2>

      {/* Experience Timeline */}
      <div className="relative border-l border-purple-500/20 ml-4 pl-8 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#150a30] border-2 border-purple-500 flex items-center justify-center group-hover:border-indigo-400 transition duration-300">
              <div className="w-2.5 h-2.5 rounded-full bg-purple-500 group-hover:bg-indigo-400 transition duration-300"></div>
            </div>

            {/* Experience Card */}
            <div className="bg-[#21163e]/55 border border-purple-500/10 p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-purple-500/5 hover:border-purple-500/20 transition-all duration-300 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition duration-300">{exp.role}</h3>
                  <p className="text-purple-400 font-medium text-sm mt-1">{exp.company}</p>
                </div>
                <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 self-start sm:self-auto">
                  {exp.duration}
                </span>
              </div>

              <ul className="space-y-2.5 text-white/70 text-sm list-none pl-0">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-purple-400 mt-1.5 text-xs">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Education Subsection */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-3">
          <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">Education</span>
        </h2>

        <div className="relative border-l border-purple-500/20 ml-4 pl-8">
          <div className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#150a30] border-2 border-purple-500 flex items-center justify-center group-hover:border-indigo-400 transition duration-300">
              <div className="w-2.5 h-2.5 rounded-full bg-purple-500 group-hover:bg-indigo-400 transition duration-300"></div>
            </div>

            {/* Education Card */}
            <div className="bg-[#21163e]/55 border border-purple-500/10 p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-purple-500/5 hover:border-purple-500/20 transition-all duration-300 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition duration-300">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="text-purple-400 font-medium text-sm mt-1">
                    KAHM Unity Women’s College, Manjeri
                  </p>
                </div>
                <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 self-start sm:self-auto">
                  2022 – 2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
