export default function Achievements() {
  const achievements = [
    {
      title: 'IoT Coordinator – INNOVI8 IT Expo',
      desc:
        'Led IoT workshop & project demos for students; enhanced my leadership and teamwork skills.',
    },
    {
      title: 'Coordinator – Audiobook Launch (2022)',
      desc:
        'Organized launch for an audiobook to support visually impaired students; promoted inclusivity.',
    },
    {
      title: 'HackerRank Certified',
      desc:
        'Certified in CSS, JavaScript, SQL for demonstrating web and database proficiency.',
    },
  ];

  return (
    <section id="achieve" className="pt-16 scroll-mt-28">
      <h1 className="text-3xl font-bold mb-8">Achievements</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="bg-purple-400 p-6 rounded-lg shadow hover:scale-[1.03] transition"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}