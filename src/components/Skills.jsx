import { useState } from 'react';

export default function Skills() {
  const allSkills = [
    { name: 'JavaScript (ES6+)', icon: '🟨', desc: 'Programming Language' },
    { name: 'HTML5', icon: '🟧', desc: 'Markup Language' },
    { name: 'CSS3', icon: '🔵', desc: 'Stylesheet Language' },
    { name: 'React.js', icon: '⚛️', desc: 'Frontend Library for UI' },
    { name: 'Next.js', icon: '⏭️', desc: 'React Framework for SSR & Routing' },
    { name: 'Node.js', icon: '🟩', desc: 'Backend Runtime Environment' },
    { name: 'Express.js', icon: '🚂', desc: 'Backend Web Framework' },
    { name: 'MongoDB', icon: '🍃', desc: 'NoSQL Database' },
    { name: 'RESTful APIs', icon: '🔗', desc: 'Backend Communication' },
    { name: 'TypeScript', icon: '🔷', desc: 'Typed JavaScript Superset' },
    { name: 'Redux', icon: '🔁', desc: 'State Management Library' },
    { name: 'Bootstrap', icon: '💠', desc: 'CSS Framework' },
    { name: 'Material UI', icon: '📐', desc: 'UI Component Library' },
    { name: 'Tailwind CSS', icon: '🌬️', desc: 'Utility-First CSS Framework' },
    { name: 'Responsive Design', icon: '📱', desc: 'Mobile-First Layouts' },
    { name: 'Arduino', icon: '📟', desc: 'IoT Development' },
    { name: 'Temperature & Humidity Sensors', icon: '🌡️', desc: 'IoT Sensors' },
    { name: 'Git/GitHub', icon: '🐙', desc: 'Version Control & Collaboration' },
    { name: 'VS Code', icon: '🖥️', desc: 'Code Editor' },
    { name: 'XAMPP', icon: '💻', desc: 'Local Server Environment' },
    { name: 'Poster Making – Canva', icon: '🎨', desc: 'Design & Graphics' },
    { name: 'MS Word & Excel', icon: '📄', desc: 'Documentation & Spreadsheets' },
    { name: 'Typing, Data Entry, Internet Research', icon: '⌨️', desc: 'Productivity & Research' },
  ];

  const [visibleCount, setVisibleCount] = useState(9);

  const handleToggle = () => {
    if (visibleCount === 9) {
      setVisibleCount(allSkills.length);
    } else {
      setVisibleCount(9);
    }
  };

  return (
    <section id="skill" className="pt-16 scroll-mt-28">
      <h1 className="text-3xl font-bold mb-8">
        Top-Tier Tools for <span className="text-purple-300">Exceptional Results</span>
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {allSkills.slice(0, visibleCount).map((skill, index) => (
          <div
            key={index}
            className="bg-[#3b2f5e] text-white p-6 rounded-xl flex items-center gap-4 hover:scale-105 transition shadow"
          >
            <div className="bg-[#2a2344] w-12 h-12 rounded-full flex items-center justify-center text-lg">
              {skill.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
              <p className="text-sm text-gray-300">{skill.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button
          onClick={handleToggle}
          className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition"
        >
          {visibleCount === 9 ? 'View More' : 'View Less'}
        </button>
      </div>
    </section>
  );
}
