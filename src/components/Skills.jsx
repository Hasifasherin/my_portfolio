export default function Skills() {
  const skills = [
    { name: 'JavaScript', icon: '🟨', desc: 'Programming Language' },
    { name: 'HTML-5', icon: '🟧', desc: 'Markup Language' },
    { name: 'React', icon: '⚛️', desc: 'JS Library for UI' },
    { name: 'CSS', icon: '🔵', desc: 'Stylesheet Language' },
    { name: 'Arduino', icon: '📟', desc: 'IoT Development' },
  ];

  return (
    <section id="skill" className="pt-16 scroll-mt-28">
      <h1 className="text-3xl font-bold mb-8">
        Top-Tier Tools for <span className="text-purple-300">Exceptional Results</span>
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
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
    </section>
  );
}
