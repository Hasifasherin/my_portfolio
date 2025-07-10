export default function Projects() {
  const projects = [
    {
      title: 'Snaped Kiosk – Smart Campus Assistant',
      img: '/snaped.png',
      desc:
        'An interactive, tech-themed information kiosk with voice interaction, real-time Arduino data, and essential campus services.',
    },
    {
      title: 'Simple Calculator – Web-Based Arithmetic Tool',
      img: '/calculator.png',
      desc:
        'A responsive calculator built using HTML, CSS, and JavaScript that performs basic arithmetic operations.',
    },
    {
      title: 'Blind Stick – Obstacle Detection Aid',
      img: '/blindstick.webp',
      desc:
        'An Arduino-based stick that detects nearby obstacles using ultrasonic sensors and alerts via buzzer.',
    },
  ];

  return (
    <section id="proj" className="pt-16 scroll-mt-28">
      <h1 className="text-3xl font-bold mb-8">Recent <span className="text-purple-300">Projects</span></h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-purple-400 p-6 rounded-lg shadow-lg text-center hover:scale-[1.03] transition"
          >
            <img
              src={project.img}
              alt={project.title}
              className="rounded mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-white/90">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}