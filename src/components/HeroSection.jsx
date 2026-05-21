import { FaBriefcase, FaCode, FaGraduationCap, FaRegFilePdf, FaEnvelope } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section id="home" className="pt-20 scroll-mt-28 relative">
      {/* Background Decorative Gradient Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      
      {/* Premium Pulsing Status Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs sm:text-sm font-medium tracking-wide mb-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>Available for Full-Stack Developer Roles</span>
      </div>

      {/* Main Professional Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
        Building Responsive, <br />
        <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
          User-Friendly Web Solutions
        </span>
      </h1>
      
      <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full my-6"></div>
      
      {/* Intro Description */}
      <div className="space-y-4 text-white/80 text-base sm:text-lg max-w-3xl leading-relaxed font-light">
        <p>
          Hi, I am Hasifa Sherin C.P., a passionate <strong className="text-purple-300 font-medium">Full Stack Developer</strong>. 
          I specialize in creating clean, responsive user interfaces and building high-performance server-side web applications using the 
          <strong className="text-white font-medium"> MERN Stack</strong> (MongoDB, Express, React, Node) and 
          <strong className="text-white font-medium"> PHP/Laravel</strong>.
        </p>
        <p className="text-white/70">
          I focus on writing clean, scalable code, implementing secure authentication, and designing seamless API integrations. 
          Additionally, I enjoy working with IoT hardware integrations, real-time sensor systems, and building smart campus kiosks.
        </p>
      </div>

      {/* Sleek Stats Panel */}
      <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mt-10">
        <div className="bg-[#21163e]/40 border border-purple-500/15 rounded-2xl p-4 text-center backdrop-blur-sm hover:border-purple-500/35 transition duration-300">
          <div className="bg-purple-500/10 text-purple-300 w-9 h-9 rounded-xl flex items-center justify-center mx-auto mb-2.5">
            <FaBriefcase className="w-4 h-4" />
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white leading-none">10+ Mos</div>
          <div className="text-[10px] sm:text-xs text-white/50 mt-1 font-light">Internships</div>
        </div>

        <div className="bg-[#21163e]/40 border border-purple-500/15 rounded-2xl p-4 text-center backdrop-blur-sm hover:border-purple-500/35 transition duration-300">
          <div className="bg-purple-500/10 text-purple-300 w-9 h-9 rounded-xl flex items-center justify-center mx-auto mb-2.5">
            <FaCode className="w-4 h-4" />
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white leading-none">8+ Live</div>
          <div className="text-[10px] sm:text-xs text-white/50 mt-1 font-light">Web Projects</div>
        </div>

        <div className="bg-[#21163e]/40 border border-purple-500/15 rounded-2xl p-4 text-center backdrop-blur-sm hover:border-purple-500/35 transition duration-300">
          <div className="bg-purple-500/10 text-purple-300 w-9 h-9 rounded-xl flex items-center justify-center mx-auto mb-2.5">
            <FaGraduationCap className="w-4 h-4" />
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white leading-none">B.Sc.</div>
          <div className="text-[10px] sm:text-xs text-white/50 mt-1 font-light">Comp Science</div>
        </div>
      </div>

      {/* Enhanced Interactive Action Buttons */}
      <div className="mt-10 flex flex-wrap gap-4">
        <a href="/HASIFA-SHERIN-CP-CV.pdf" target="_blank" rel="noreferrer" className="shrink-0">
          <button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-medium px-7 py-3.5 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer text-sm sm:text-base">
            <FaRegFilePdf className="w-4 h-4" />
            <span>View Resume</span>
          </button>
        </a>
        <a href="#contact" className="shrink-0">
          <button className="border border-purple-500/30 hover:border-purple-400 text-white hover:bg-purple-500/10 font-medium px-7 py-3.5 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer text-sm sm:text-base">
            <FaEnvelope className="w-4 h-4 text-purple-300" />
            <span>Contact Me</span>
          </button>
        </a>
      </div>
    </section>
  );
}