import { FaTrophy } from 'react-icons/fa6';

export default function Achievements() {
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
      desc: 'Earned official certifications in CSS, JavaScript, and SQL for demonstrating web design and database querying proficiency.',
    },
  ];

  return (
    <section id="achieve" className="pt-20 scroll-mt-28">
      <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-3">
        <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent flex items-center gap-2">
          Achievements
        </span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="bg-[#21163e]/55 border border-purple-500/10 p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-purple-500/5 hover:border-purple-500/20 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between group"
          >
            <div>
              <div className="bg-purple-500/10 text-purple-300 p-3 rounded-xl w-fit mb-5 border border-purple-500/20 group-hover:bg-purple-500 group-hover:text-white transition duration-300">
                <FaTrophy className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition duration-300">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}