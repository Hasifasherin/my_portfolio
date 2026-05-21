import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaLocationDot, FaDownload } from "react-icons/fa6";

const ProfileCard = () => {
  return (
    <div className="w-full lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto scrollbar-thin">
      <div className="bg-[#21163e]/90 backdrop-blur-md border border-purple-500/20 rounded-2xl p-5 sm:p-6 text-center shadow-2xl relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute -top-10 -left-10 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-indigo-500/10 rounded-full blur-3xl"></div>

        {/* Profile Image */}
        <div className="relative inline-block group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
          <img
            src="/profile.png"
            alt="Hasifa Sherin C.P."
            className="relative w-28 h-28 lg:w-30 lg:h-30 mx-auto object-cover rounded-full shadow-md border-2 border-purple-500/20"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400";
            }}
          />
        </div>

        {/* Name and Role */}
        <h4 className="text-lg sm:text-xl font-bold mt-3 tracking-wide text-white">Hasifa Sherin C.P.</h4>
        <div className="mt-1 text-purple-300 font-medium text-[10px] sm:text-xs tracking-widest uppercase">
          Full Stack Developer
        </div>
        <p className="text-white/60 text-[10px] sm:text-[11px] mt-0.5">MERN Stack & PHP/Laravel Specialist</p>

        <hr className="border-purple-500/20 my-3.5" />

        {/* Contact Info list */}
        <div className="space-y-2 text-left text-xs text-white/80">
          <div className="flex items-center gap-2.5">
            <div className="bg-purple-500/20 text-purple-300 p-1.5 rounded-lg shrink-0">
              <FaLocationDot className="w-3.5 h-3.5" />
            </div>
            <span>Malappuram, Kerala, India</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="bg-purple-500/20 text-purple-300 p-1.5 rounded-lg shrink-0">
              <FaEnvelope className="w-3.5 h-3.5" />
            </div>
            <a href="mailto:hasifasherincp@gmail.com" className="hover:text-purple-300 transition break-all">
              hasifasherincp@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="bg-purple-500/20 text-purple-300 p-1.5 rounded-lg shrink-0">
              <FaPhone className="w-3.5 h-3.5" />
            </div>
            <a href="tel:+916238269435" className="hover:text-purple-300 transition">
              +91 6238269435
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-3 mt-4">
          <a
            href="https://www.linkedin.com/in/hasifa-sherin-cp/"
            target="_blank"
            rel="noreferrer"
            className="bg-[#2a1f4d] hover:bg-purple-500 text-white p-2 rounded-xl transition duration-300 transform hover:scale-110 shadow-lg border border-purple-500/10"
            title="LinkedIn"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/Hasifasherin"
            target="_blank"
            rel="noreferrer"
            className="bg-[#2a1f4d] hover:bg-purple-500 text-white p-2 rounded-xl transition duration-300 transform hover:scale-110 shadow-lg border border-purple-500/10"
            title="GitHub"
          >
            <FaGithub className="w-4 h-4" />
          </a>
        </div>

        {/* Resume Download Action */}
        <a href="/HASIFA-SHERIN-CP-CV.pdf" download className="block mt-4">
          <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white py-2 px-4 rounded-xl text-xs font-medium shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer">
            <span>Download CV</span>
            <FaDownload className="w-3.5 h-3.5" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;