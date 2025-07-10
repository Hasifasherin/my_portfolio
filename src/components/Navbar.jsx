import { FaHouse, FaFolder, FaWrench, FaBriefcase, FaEnvelope } from 'react-icons/fa6'

export default function Navbar() {
  return (
    <div className="fixed top-3 w-full flex justify-center z-50">
      <div className="bg-purple-100 px-8 py-3 rounded-full shadow-md flex gap-6 text-gray-800">
        <a href="#"><FaHouse size={24} title="Home" /></a>
        <a href="#proj"><FaFolder size={24} title="Projects" /></a>
        <a href="#skill"><FaWrench size={24} title="Tools" /></a>
        <a href="#achieve"><FaBriefcase size={24} title="Achievements" /></a>
        <a href="#contact-section"><FaEnvelope size={24} title="Contact Me" /></a>
      </div>
    </div>
  )
}
