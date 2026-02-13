export default function HeroSection() {
  return (
    <section id="home" className="pt-16 scroll-mt-28">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Transforming Ideas into <br />
        <span className="text-white">Scalable</span>{' '}
        <span className="text-purple-300">Web Solutions</span>
      </h1>
      <hr className="w-24 border-2 border-purple-300 my-4" />
      <p className="text-white/70 text-lg md:text-xl max-w-3xl mt-4">
        MERN Stack & Next.js Developer with hands-on internship experience in building
        <strong> responsive, scalable, and user-friendly web applications</strong>. Experienced in <strong>IoT projects</strong>, integrating real-time sensor data and developing smart solutions. Passionate about creating <strong>intuitive UI/UX, writing clean, maintainable code, and delivering innovative full-stack solutions</strong> that make a real-world impact.
      </p>
      <div className="mt-6 flex gap-4">
        <a href="/HASIFA-SHERIN-CP-CV.pdf" target="_blank" rel="noreferrer">
          <button className="bg-purple-400 text-white px-6 py-2 rounded-full hover:bg-purple-500 transition">
            View Resume
          </button>
        </a>
        <a href="#contact">
          <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-purple-500 transition">
            Contact Me
          </button>
        </a>
      </div>
    </section>
  );
}