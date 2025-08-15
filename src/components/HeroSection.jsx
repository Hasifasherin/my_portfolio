export default function HeroSection() {
  return (
    <section id="home" className="pt-8 scroll-mt-28">
      <h1 className="text-4xl font-bold">
        Transforming Ideas into <br />
        <span className="text-white">Scalable</span>{' '}
        <span className="text-purple-300">Web Solutions</span>
      </h1>
      <hr className="w-24 border-2 border-purple-300 my-4" />
      <p className="text-white/70 text-lg max-w-2xl">
        Passionate about building dynamic and user-friendly web applications. I specialize in turning innovative ideas into full-stack solutions using MongoDB, Express.js, React, and Node.js.
      </p>
      <div className="mt-6 flex gap-4">
        <a href="/HasifaSherin.pdf" target="_blank" rel="noreferrer">
          <button className="bg-purple-400 text-white px-6 py-2 rounded-full">View Resume</button>
        </a>
        <a href="#contact">
          <button className="border border-white text-white px-6 py-2 rounded-full">Contact Me</button>
        </a>
      </div>
    </section>
  );
}
