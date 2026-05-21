import { FaHouse, FaFolder, FaBriefcase, FaWrench, FaAward, FaEnvelope } from 'react-icons/fa6';

export default function Navbar() {
  return (
    <div className="fixed top-5 left-0 w-full flex justify-center z-50 px-4">
      <div className="bg-[#21163e]/80 backdrop-blur-lg border border-purple-500/20 px-8 py-3.5 rounded-full shadow-2xl flex gap-6 sm:gap-8 text-white/90">
        <a href="#home" className="hover:text-purple-300 transition duration-200 transform hover:scale-110">
          <FaHouse size={20} title="Home" />
        </a>
        <a href="#proj" className="hover:text-purple-300 transition duration-200 transform hover:scale-110">
          <FaFolder size={20} title="Projects" />
        </a>
        <a href="#experience" className="hover:text-purple-300 transition duration-200 transform hover:scale-110">
          <FaBriefcase size={20} title="Experience" />
        </a>
        <a href="#skill" className="hover:text-purple-300 transition duration-200 transform hover:scale-110">
          <FaWrench size={20} title="Skills" />
        </a>
        <a href="#certifications" className="hover:text-purple-300 transition duration-200 transform hover:scale-110">
          <FaAward size={20} title="Certifications & Achievements" />
        </a>
        <a href="#contact" className="hover:text-purple-300 transition duration-200 transform hover:scale-110">
          <FaEnvelope size={20} title="Contact Me" />
        </a>
      </div>
    </div>
  );
}
