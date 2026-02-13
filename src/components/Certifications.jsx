export default function Certifications() {
  const certifications = [
    {
      title: 'Full Stack Web Development (MERN)',
      institute: 'Entri Elevate',
      duration: '2025 – Present',
      description: 'Hands-on training in frontend development (HTML, CSS, JavaScript, React.js) and backend development (Node.js, Express.js, MongoDB) with dynamic, responsive, and user-friendly full-stack projects.',
    },
    {
      title: 'Full Stack Web Development (MERN)',
      institute: 'University of Illinois',
      duration: '2025 – Present',
      description: 'Covered both frontend and backend technologies including HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB for building efficient full-stack web applications.',
    },
  ];

  return (
    <section id="certifications" className="pt-16 scroll-mt-28">
      <h1 className="text-3xl font-bold mb-8">
         <span className="text-purple-300">Certifications</span>
      </h1>
      <div className="flex flex-col gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-[#3b2f5e] p-6 rounded-xl shadow hover:scale-[1.02] transition"
          >
            <h3 className="text-xl font-semibold">{cert.title}</h3>
            <p className="text-gray-400">{cert.institute} | {cert.duration}</p>
            <p className="mt-2 text-gray-300">{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
