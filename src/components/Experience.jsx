export default function Experience() {
  // Replace this array with multiple experiences if needed
  const experiences = [
    {
      role: 'MERN Stack Developer Intern',
      company: 'Limenzy Technologies Pvt Ltd',
      duration: '08 Oct 2025 – 18 Feb 2026',
      responsibilities: [
        'Developed full-stack applications using MongoDB, Express.js, React.js, Node.js, and Next.js.',
        'Built responsive UI components and implemented RESTful APIs and MongoDB CRUD operations.',
        'Implemented JWT authentication for secure user access and role management.',
        'Completed two end-to-end projects, integrating frontend and backend functionalities.',
      ],
    },
    // You can add more experiences here
  ];

  return (
    <section id="experience" className="pt-16 scroll-mt-28">
      <h1 className="text-3xl font-bold mb-8">
        My <span className="text-purple-300">Experience</span>
      </h1>
      {experiences.length === 0 ? (
        <p className="text-gray-300 text-center">No experience yet.</p>
      ) : (
        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-[#3b2f5e] p-6 rounded-xl shadow hover:scale-[1.02] transition">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-400">{exp.company} | {exp.duration}</p>
              <ul className="mt-4 list-disc list-inside text-gray-300">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
