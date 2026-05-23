import React, { useState } from 'react';
import { FaLink, FaCode, FaGlobe, FaMessage, FaUtensils, FaCheckDouble, FaHouse, FaBook, FaPlane, FaCalendarCheck } from 'react-icons/fa6';
import { themes } from '../theme';

export default function Projects({ theme = themes.purple }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: 'SnapEd',
      subtitle: 'Interactive Kiosk for Smart Campus Solutions',
      desc: 'Developed a self-service kiosk using React.js, Node.js, and MySQL for campus resource management. Integrated AI chatbot, BMI calculator, and Arduino-based IoT sensor monitoring (temperature/humidity). Connected OpenAI, Spotify, and Chordify APIs.',
      tags: ['React.js', 'Node.js', 'MySQL', 'Arduino', 'IoT', 'OpenAI API'],
      link: null,
      gradient: 'from-[#ff416c] to-[#ff4b2b]',
      mockType: 'kiosk',
      category: 'IoT & Other'
    },
    {
      title: 'FoodBite',
      subtitle: 'Online Food Ordering Web App',
      desc: 'A feature-rich food ordering platform with category browsing, dark mode toggle, auto-rotating image carousels, Favorites section, and a full-featured shopping cart page with LocalStorage persistence. Includes an Admin Dashboard simulation.',
      tags: ['React.js', 'Tailwind CSS', 'Context API', 'React Router'],
      link: 'https://food-order-app-two-iota.vercel.app',
      gradient: 'from-[#f857a6] to-[#ff5858]',
      mockType: 'food',
      category: 'MERN Stack'
    },
    {
      title: 'Personal Task Manager',
      subtitle: 'Full-Stack MERN Application',
      desc: 'Developed a full-stack task manager with secure JWT user authentication, MongoDB storage, and full CRUD operations. Designed a responsive and clean dashboard using React.js, Express.js, Node.js, and Axios.',
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Axios'],
      link: 'https://task-manager-frontend-1.vercel.app',
      gradient: 'from-[#11998e] to-[#38ef7d]',
      mockType: 'task',
      category: 'MERN Stack'
    },
    {
      title: 'Flats',
      subtitle: 'Rental Listing Web Platform',
      desc: 'Developed a real estate rental listing web application using Laravel and Blade templates. Designed a responsive UI to browse available flats, and integrated a direct WhatsApp click-to-chat contact feature for property owners.',
      tags: ['Laravel', 'PHP', 'Blade Templates', 'MySQL', 'WhatsApp API'],
      link: 'https://flats.metacryptonex.com/',
      gradient: 'from-[#00c6ff] to-[#0072ff]',
      mockType: 'rental',
      category: 'PHP/Laravel'
    },
    {
      title: 'Online Bookstore',
      subtitle: 'Multi-Role MERN Platform',
      desc: 'A complete book e-commerce platform with RBAC (Admin, Seller, Buyer). Admin manages users and sliders; sellers list products; buyers browse, purchase, and review books. Features React frontend and Express/MongoDB backend.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'RBAC'],
      link: 'https://book-store-frontend-xi-blush.vercel.app',
      gradient: 'from-[#8e2de2] to-[#4a00e0]',
      mockType: 'bookstore',
      category: 'MERN Stack'
    },
    {
      title: 'GoVista',
      subtitle: 'Tour & Activity Booking Platform',
      desc: 'A highly scalable MERN stack travel portal with operator tour listings, dynamic search & filtering, booking management, review system, and custom notification systems. Deployed with separate User, Operator, and Admin roles.',
      tags: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB'],
      link: 'https://govista-frontend.vercel.app/',
      gradient: 'from-[#fc466b] to-[#3f5efb]',
      mockType: 'travel',
      category: 'MERN Stack'
    },
    {
      title: 'Aadhya',
      subtitle: 'Ice Bath Program Booking System',
      desc: 'A full-stack registration and booking application built with Laravel and Blade. Features secure participant login and registration, a dynamic calendar slot-booking engine, and robust backend reservation validations.',
      tags: ['Laravel', 'PHP', 'Blade', 'MySQL', 'Scheduling Engine'],
      link: 'https://aadhya.metacryptonex.com/',
      gradient: 'from-[#4facfe] to-[#00f2fe]',
      mockType: 'booking',
      category: 'PHP/Laravel'
    },
    {
      title: 'Personal Portfolio Website',
      subtitle: 'Next-Gen Developer Showroom',
      desc: 'Designed and developed a personal showcase website displaying interactive components, custom layouts, fully responsive timeline animations, and skills matrices. Built with React.js, Next.js, and Tailwind CSS.',
      tags: ['React.js', 'Next.js', 'Tailwind CSS', 'React Icons'],
      link: 'https://github.com/Hasifasherin',
      gradient: 'from-[#f53d7a] to-[#ff8c00]',
      mockType: 'portfolio',
      category: 'MERN Stack'
    }
  ];

  const categories = ["All", "MERN Stack", "PHP/Laravel", "IoT & Other"];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const renderMockup = (type) => {
    // Shared browser chrome window header
    const renderBrowserHeader = (url) => (
      <div className="flex items-center justify-between bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-t-lg border-b border-white/10 text-[9px] text-white/50">
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-rose-500 rounded-full"></span>
          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
        </div>
        <div className="bg-black/30 px-3 py-0.5 rounded text-[8px] tracking-wide text-white/70 max-w-[120px] truncate">
          {url}
        </div>
        <div className="w-3"></div>
      </div>
    );

    switch (type) {
      case 'kiosk':
        return (
          <div className="h-full flex flex-col justify-between p-3 select-none">
            {/* Kiosk Dashboard Screen Mock */}
            <div className="bg-[#080517]/85 rounded-lg p-2.5 flex-1 border border-white/10 flex flex-col justify-between text-[8px]">
              <div className="flex justify-between items-center border-b border-white/5 pb-1">
                <span className="font-bold text-white tracking-wide">🏫 CAMPUS SMART KIOSK</span>
                <span className="text-[7px] text-rose-400 bg-rose-500/10 px-1 rounded">IOT ONLINE</span>
              </div>
              <div className="flex gap-1.5 my-1.5">
                <div className="bg-[#120f26]/80 border border-white/5 p-1 rounded-md flex-1 text-center">
                  <div className="text-[7px] text-white/50">Temp</div>
                  <div className="font-semibold text-rose-300">24.5 °C</div>
                </div>
                <div className="bg-[#120f26]/80 border border-white/5 p-1 rounded-md flex-1 text-center">
                  <div className="text-[7px] text-white/50">Humidity</div>
                  <div className="font-semibold text-indigo-300">62 %</div>
                </div>
              </div>
              <div className={`${theme.badgeBg} p-1.5 rounded border ${theme.badgeBorder} flex items-center gap-1.5 text-white/90`}>
                <FaMessage className="w-2.5 h-2.5 text-pink-400 shrink-0 animate-bounce" />
                <span className="italic truncate">"Hello! Ask me campus related questions..."</span>
              </div>
            </div>
          </div>
        );
      case 'food':
        return (
          <div className="h-full flex flex-col justify-between select-none">
            {renderBrowserHeader('foodbite.metacryptonex.com')}
            <div className="bg-[#080517]/85 flex-1 p-2.5 flex flex-col justify-between text-[8px]">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-white">🍕 Discover Delicious Foods</span>
                <span className="bg-orange-500 text-white px-1.5 py-0.5 rounded-full text-[7px] font-bold animate-pulse">🛒 3 items</span>
              </div>
              <div className="flex gap-2 my-1.5">
                <div className="bg-[#120f26]/80 rounded border border-white/5 p-1 flex-1 flex gap-1 items-center">
                  <FaUtensils className="text-orange-400 w-3 h-3" />
                  <div>
                    <div className="font-bold text-white text-[7px]">Double Cheese Burger</div>
                    <div className="text-[6px] text-white/60">₹149.00</div>
                  </div>
                </div>
                <div className="bg-[#120f26]/80 rounded border border-white/5 p-1 flex-1 flex gap-1 items-center opacity-70">
                  <span className="text-[10px]">🥗</span>
                  <div>
                    <div className="font-bold text-white text-[7px]">Greek Salad</div>
                    <div className="text-[6px] text-white/60">₹99.00</div>
                  </div>
                </div>
              </div>
              <div className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded text-center text-[7px]">
                🎉 Coupon "WELCOME50" applied!
              </div>
            </div>
          </div>
        );
      case 'task':
        return (
          <div className="h-full flex flex-col justify-between select-none">
            {renderBrowserHeader('tasks.hasifasherincp.dev')}
            <div className="bg-[#080517]/85 flex-1 p-3 flex flex-col justify-between text-[8px]">
              <div className="flex justify-between items-center border-b border-white/5 pb-1">
                <span className="font-bold text-white flex items-center gap-1"><FaCheckDouble className="text-emerald-400" /> TASK MANAGER</span>
                <span className="text-white/40">MERN Dashboard</span>
              </div>
              <div className="space-y-1 my-1.5 text-[7px]">
                <div className="bg-[#120f26]/80 px-2 py-1 rounded border-l-2 border-emerald-500 flex justify-between items-center">
                  <span className="text-white line-through">✔️ Integrate JSON Web Tokens</span>
                  <span className="text-emerald-400 bg-emerald-500/10 px-1 rounded text-[6px]">Done</span>
                </div>
                <div className="bg-[#120f26]/80 px-2 py-1 rounded border-l-2 border-amber-500 flex justify-between items-center">
                  <span className="text-white">⏳ Connect Axios HTTP Headers</span>
                  <span className="text-amber-400 bg-amber-500/10 px-1 rounded text-[6px] animate-pulse">Pending</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'rental':
        return (
          <div className="h-full flex flex-col justify-between select-none">
            {renderBrowserHeader('flats.metacryptonex.com')}
            <div className="bg-[#080517]/85 flex-1 p-2.5 flex flex-col justify-between text-[8px]">
              <div className="flex justify-between items-center border-b border-white/5 pb-1">
                <span className="font-bold text-white flex items-center gap-1"><FaHouse className="text-sky-400" /> LUXURY FLATS LISTINGS</span>
                <span className="text-[7px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-mono">LARAVEL LIVE</span>
              </div>
              <div className="my-1.5 flex gap-2">
                <div className="bg-[#120f26]/80 rounded border border-white/5 p-1 flex-1 flex flex-col justify-between text-left">
                  <div className="font-bold text-white text-[7px] truncate">Premium 2BHK Appartment</div>
                  <div className="text-[6px] text-white/50 my-0.5">Manjeri, Malappuram</div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sky-300 font-bold">₹15,000 / mo</span>
                    <span className="bg-emerald-500 text-white font-semibold text-[6px] px-1 rounded transition-transform duration-300 hover:scale-105">WhatsApp 💬</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'bookstore':
        return (
          <div className="h-full flex flex-col justify-between select-none">
            {renderBrowserHeader('bookstore.hasifasherincp.dev')}
            <div className="bg-[#080517]/85 flex-1 p-2.5 flex flex-col justify-between text-[8px]">
              <div className="flex justify-between items-center border-b border-white/5 pb-1">
                <span className="font-bold text-white flex items-center gap-1"><FaBook className={`${theme.text}`} /> BOOKIFY STORE</span>
                <span className={`${theme.text} ${theme.bgMuted} px-1 rounded`}>RBAC SECURITY</span>
              </div>
              <div className="flex gap-1.5 my-1.5 text-[7px]">
                <div className="bg-[#120f26]/80 border border-white/5 p-1.5 rounded flex-1 flex flex-col justify-between items-center">
                  <span className="text-[12px] transition-transform duration-300 hover:rotate-12">⚛️</span>
                  <span className="text-white/80 font-bold mt-1 text-center scale-90">React Bible</span>
                  <span className={`${theme.text} text-[6px] mt-0.5`}>₹499</span>
                </div>
                <div className="bg-[#120f26]/80 border border-white/5 p-1.5 rounded flex-1 flex flex-col justify-between items-center">
                  <span className="text-[12px] transition-transform duration-300 hover:scale-110">🍃</span>
                  <span className="text-white/80 font-bold mt-1 text-center scale-90">MongoDB Master</span>
                  <span className={`${theme.text} text-[6px] mt-0.5`}>₹399</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'travel':
        return (
          <div className="h-full flex flex-col justify-between select-none">
            {renderBrowserHeader('govistas.metacryptonex.com')}
            <div className="bg-[#080517]/85 flex-1 p-2.5 flex flex-col justify-between text-[8px]">
              <div className="flex justify-between items-center">
                <span className="font-bold text-white flex items-center gap-1"><FaPlane className="text-pink-400" /> GOVISTA TRAVELS</span>
                <span className="bg-pink-500 text-white text-[6px] font-bold px-1 rounded animate-pulse">BOOK NOW</span>
              </div>
              <div className="bg-[#120f26]/80 rounded p-1.5 border border-white/5 my-1.5 flex gap-2 items-center">
                <div className="text-[11px] shrink-0">🏝️</div>
                <div className="flex-1 text-left">
                  <div className="font-bold text-white text-[7px]">Explore Paradise in Bali Gateway</div>
                  <div className="text-[6px] text-white/50">4 Days, 3 Nights | Resort Stay Included</div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-pink-400 font-bold">₹24,999</span>
                  <div className="text-[5px] text-white/40">per head</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'booking':
        return (
          <div className="h-full flex flex-col justify-between select-none">
            {renderBrowserHeader('aadhya.metacryptonex.com')}
            <div className="bg-[#080517]/85 flex-1 p-2.5 flex flex-col justify-between text-[8px]">
              <div className="flex justify-between items-center border-b border-white/5 pb-1">
                <span className="font-bold text-white flex items-center gap-1"><FaCalendarCheck className="text-cyan-400" /> AADHYA BOOKINGS</span>
                <span className="text-[7px] text-cyan-300 font-mono">SLOT CALENDAR</span>
              </div>
              <div className="my-1 flex justify-between items-center">
                <span className="text-white/60 text-[7px]">Select Time Slot:</span>
                <span className="font-bold text-white text-[7px]">May 2026</span>
              </div>
              <div className="flex gap-1">
                <div className="bg-[#120f26]/80 border border-cyan-500/40 text-cyan-300 px-1.5 py-1 rounded text-center flex-1">
                  <div>10:00 AM</div>
                  <div className="text-[5px] text-cyan-400/70 font-semibold">SELECTED</div>
                </div>
                <div className="bg-[#120f26]/80 border border-white/5 text-white/40 px-1.5 py-1 rounded text-center flex-1 text-white/30">
                  <div>11:30 AM</div>
                  <div className="text-[5px] text-white/20">BOOKED</div>
                </div>
                <div className="bg-[#120f26]/80 border border-white/5 text-white/80 px-1.5 py-1 rounded text-center flex-1">
                  <div>02:00 PM</div>
                  <div className="text-[5px] text-white/40 font-light">AVAILABLE</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'portfolio':
        return (
          <div className="h-full flex flex-col justify-between select-none">
            {renderBrowserHeader('hasifasherincp.vercel.app')}
            <div className="bg-[#080517]/85 flex-1 p-2.5 flex flex-row gap-2 text-[6px]">
              {/* Mock Sidebar */}
              <div className="bg-[#120f26]/80 rounded w-10 p-1 flex flex-col items-center justify-between border border-white/5 text-center">
                <span className={`w-5 h-5 ${theme.bgMuted} rounded-full block border ${theme.border} transition-transform duration-300 hover:rotate-12`}></span>
                <div className="w-full h-1 bg-white/40 my-1 rounded"></div>
                <div className="w-full space-y-0.5">
                  <div className="w-full h-0.5 bg-white/20 rounded"></div>
                  <div className="w-full h-0.5 bg-white/20 rounded"></div>
                  <div className="w-full h-0.5 bg-white/20 rounded"></div>
                </div>
              </div>
              {/* Mock Content area */}
              <div className="flex-1 flex flex-col justify-between">
                <div className={`text-left font-bold ${theme.text} text-[7px]`}>Welcome to my Portfolio</div>
                <div className="flex gap-1 my-1">
                  <div className="bg-[#120f26]/80 rounded border border-white/5 p-1 flex-1 h-8 transition-transform duration-300 hover:scale-105"></div>
                  <div className="bg-[#120f26]/80 rounded border border-white/5 p-1 flex-1 h-8 transition-transform duration-300 hover:scale-105"></div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="h-full flex items-center justify-center">
            <FaGlobe className="text-white/20 w-12 h-12" />
          </div>
        );
    }
  };

  return (
    <section id="proj" className="pt-20 scroll-mt-28">
      <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-3">
        <span className={`bg-gradient-to-r ${theme.gradientText} bg-clip-text text-transparent`}>
          Featured Projects
        </span>
      </h2>

      {/* Category Tabs/Filter */}
      <div className="flex flex-wrap gap-2.5 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 border cursor-pointer ${
              selectedCategory === cat
                ? `bg-gradient-to-r ${theme.buttonBg} text-white border-transparent shadow-lg scale-105`
                : `bg-[#0c0a1f]/40 text-white/60 border-white/5 ${theme.borderHover} hover:text-white hover:bg-[#0c0a1f]/80`
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Adding selectedCategory as key forces React to trigger entrance animations on filter toggle! */}
      <div key={selectedCategory} className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => {
          // Calculate stagger delay based on item index
          const delayClass = index === 0 ? "animation-delay-100" :
                             index === 1 ? "animation-delay-200" :
                             index === 2 ? "animation-delay-300" :
                             index === 3 ? "animation-delay-400" : "animation-delay-500";

          return (
            <div
              key={index}
              className={`bg-[#0c0a1f]/55 border ${theme.border} ${theme.borderHover} rounded-2xl overflow-hidden shadow-xl hover:${theme.shadow} transition-all duration-500 flex flex-col group backdrop-blur-sm animate-scale-in fill-mode-forwards opacity-0 ${delayClass}`}
            >
              {/* Interactive HTML Mockup Render inside background colors */}
              <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 z-0"></div>
                <div className="w-full h-full relative z-10 transition-transform duration-500 group-hover:scale-103">
                  {renderMockup(project.mockType)}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className={`text-xl font-bold text-white mb-1 leading-tight group-hover:${theme.text} transition duration-300`}>
                    {project.title}
                  </h3>
                  <h4 className={`${theme.text} font-medium text-xs mb-3 tracking-wide`}>{project.subtitle}</h4>
                  <p className="text-white/70 text-sm leading-relaxed mb-6 font-light">{project.desc}</p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`${theme.badgeBg} ${theme.text} text-[11px] px-2 py-0.5 rounded border ${theme.badgeBorder} font-mono hover:scale-105 transition-transform duration-200 cursor-default`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer Link / Info */}
                  <div className={`flex justify-between items-center border-t ${theme.border} pt-4`}>
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${theme.text} hover:text-white flex items-center gap-2 text-sm font-medium transition duration-200`}
                      >
                        <span>View Live Site</span>
                        <FaLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    ) : (
                      <span className="text-white/40 text-xs italic flex items-center gap-1.5 font-light">
                        <FaCode className={`w-3.5 h-3.5 ${theme.text} opacity-50`} />
                        <span>Academic / Internship Project</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
