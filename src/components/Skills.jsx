import { FaCode, FaServer, FaLaptopCode, FaMicrochip, FaPalette, FaPeopleArrows } from 'react-icons/fa6';

export default function Skills() {
  const categories = [
    {
      title: 'Frontend Development',
      icon: <FaCode className="text-pink-400 w-6 h-6" />,
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'Responsive Design'],
      bgGradient: 'from-pink-500/10 to-purple-500/10',
      borderGlow: 'hover:border-pink-500/30'
    },
    {
      title: 'Backend & Databases',
      icon: <FaServer className="text-blue-400 w-6 h-6" />,
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'MongoDB', 'PHP', 'Laravel', 'phpMyAdmin'],
      bgGradient: 'from-blue-500/10 to-indigo-500/10',
      borderGlow: 'hover:border-blue-500/30'
    },
    {
      title: 'Tools & Platforms',
      icon: <FaLaptopCode className="text-emerald-400 w-6 h-6" />,
      skills: ['Git/GitHub', 'VS Code', 'WAMP', 'Shopify (Theme Customization)'],
      bgGradient: 'from-emerald-500/10 to-teal-500/10',
      borderGlow: 'hover:border-emerald-500/30'
    },
    {
      title: 'IoT & Embedded Systems',
      icon: <FaMicrochip className="text-amber-400 w-6 h-6" />,
      skills: ['Arduino', 'Temperature & Humidity Sensors'],
      bgGradient: 'from-amber-500/10 to-orange-500/10',
      borderGlow: 'hover:border-amber-500/30'
    },
    {
      title: 'Design & UI/UX',
      icon: <FaPalette className="text-purple-400 w-6 h-6" />,
      skills: ['Figma (Basic)', 'Canva', 'Cross-Browser Compatibility'],
      bgGradient: 'from-purple-500/10 to-violet-500/10',
      borderGlow: 'hover:border-purple-500/30'
    },
    {
      title: 'Soft Skills',
      icon: <FaPeopleArrows className="text-rose-400 w-6 h-6" />,
      skills: ['Communication', 'Collaboration', 'Problem Solving', 'Adaptability', 'Time Management'],
      bgGradient: 'from-rose-500/10 to-red-500/10',
      borderGlow: 'hover:border-rose-500/30'
    }
  ];

  return (
    <section id="skill" className="pt-20 scroll-mt-28">
      <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-3">
        <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
          Skills & Technical Expertise
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${cat.bgGradient} bg-[#190f38]/60 border border-purple-500/10 ${cat.borderGlow} rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm`}
          >
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#24174d] p-3 rounded-xl shadow-inner border border-purple-500/10">
                {cat.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">{cat.title}</h3>
            </div>

            {/* Badges Grid */}
            <div className="flex flex-wrap gap-2.5">
              {cat.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-[#21163e]/80 border border-purple-500/15 hover:border-purple-400/40 text-purple-200 text-xs sm:text-sm px-3.5 py-1.5 rounded-xl font-medium tracking-wide transition duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
