import { FaLink, FaCode, FaGlobe, FaMessage, FaUtensils, FaCheckDouble, FaHouse, FaBook, FaPlane, FaCalendarCheck } from 'react-icons/fa6';

export default function Projects() {
  const projects = [
    {
      title: 'SnapEd',
      subtitle: 'Interactive Kiosk for Smart Campus Solutions',
      desc: 'Developed a self-service kiosk using React.js, Node.js, and MySQL for campus resource management. Integrated AI chatbot, BMI calculator, and Arduino-based IoT sensor monitoring (temperature/humidity). Connected OpenAI, Spotify, and Chordify APIs.',
      tags: ['React.js', 'Node.js', 'MySQL', 'Arduino', 'IoT', 'OpenAI API'],
      link: null,
      gradient: 'from-[#ff416c] to-[#ff4b2b]',
      mockType: 'kiosk'
    },
    {
      title: 'FoodBite',
      subtitle: 'Online Food Ordering Web App',
      desc: 'A feature-rich food ordering platform with category browsing, dark mode toggle, auto-rotating image carousels, Favorites section, and a full-featured shopping cart page with LocalStorage persistence. Includes an Admin Dashboard simulation.',
      tags: ['React.js', 'Tailwind CSS', 'Context API', 'React Router'],
      link: 'https://food-order-app-two-iota.vercel.app',
      gradient: 'from-[#f857a6] to-[#ff5858]',
      mockType: 'food'
    },
    {
      title: 'Personal Task Manager',
      subtitle: 'Full-Stack MERN Application',
      desc: 'Developed a full-stack task manager with secure JWT user authentication, MongoDB storage, and full CRUD operations. Designed a responsive and clean dashboard using React.js, Express.js, Node.js, and Axios.',
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Axios'],
      link: 'https://task-manager-frontend-1.vercel.app',
      gradient: 'from-[#11998e] to-[#38ef7d]',
      mockType: 'task'
    },
    {
      title: 'Flats',
      subtitle: 'Rental Listing Web Platform',
      desc: 'Developed a real estate rental listing web application using Laravel and Blade templates. Designed a responsive UI to browse available flats, and integrated a direct WhatsApp click-to-chat contact feature for property owners.',
      tags: ['Laravel', 'PHP', 'Blade Templates', 'MySQL', 'WhatsApp API'],
      link: 'https://flats.metacryptonex.com/',
      gradient: 'from-[#00c6ff] to-[#0072ff]',
      mockType: 'rental'
    },
    {
      title: 'Online Bookstore',
      subtitle: 'Multi-Role MERN Platform',
      desc: 'A complete book e-commerce platform with RBAC (Admin, Seller, Buyer). Admin manages users and sliders; sellers list products; buyers browse, purchase, and review books. Features React frontend and Express/MongoDB backend.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'RBAC'],
      link: 'https://book-store-frontend-xi-blush.vercel.app',
      gradient: 'from-[#8e2de2] to-[#4a00e0]',
      mockType: 'bookstore'
    },
    {
      title: 'GoVista',
      subtitle: 'Tour & Activity Booking Platform',
      desc: 'A highly scalable MERN stack travel portal with operator tour listings, dynamic search & filtering, booking management, review system, and custom notification systems. Deployed with separate User, Operator, and Admin roles.',
      tags: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB'],
      link: 'https://govista-frontend.vercel.app/',
      gradient: 'from-[#fc466b] to-[#3f5efb]',
      mockType: 'travel'
    },
    {
      title: 'Aadhya',
      subtitle: 'Ice Bath Program Booking System',
      desc: 'A full-stack registration and booking application built with Laravel and Blade. Features secure participant login and registration, a dynamic calendar slot-booking engine, and robust backend reservation validations.',
      tags: ['Laravel', 'PHP', 'Blade', 'MySQL', 'Scheduling Engine'],
      link: 'https://aadhya.metacryptonex.com/',
      gradient: 'from-[#4facfe] to-[#00f2fe]',
      mockType: 'booking'
    },
    {
      title: 'Personal Portfolio Website',
      subtitle: 'Next-Gen Developer Showroom',
      desc: 'Designed and developed a personal showcase website displaying interactive components, custom layouts, fully responsive timeline animations, and skills matrices. Built with React.js, Next.js, and Tailwind CSS.',
      tags: ['React.js', 'Next.js', 'Tailwind CSS', 'React Icons'],
      link: 'https://github.com/Hasifasherin',
      gradient: 'from-[#f53d7a] to-[#ff8c00]',
      mockType: 'portfolio'
    }
  ];

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
            <div className="bg-[#150a30]/80 rounded-lg p-2.5 flex-1 border border-white/10 flex flex-col justify-between text-[8px]">
              <div className="flex justify-between items-center border-b border-white/5 pb-1">
                <span className="font-bold text-white tracking-wide">🏫 CAMPUS SMART KIOSK</span>
                <span className="text-[7px] text-rose-400 bg-rose-500/10 px-1 rounded">IOT ONLINE</span>
              </div>
              <div className="flex gap-1.5 my-1.5">
                <div className="bg-[#21163e] border border-white/5 p-1 rounded-md flex-1 text-center">
                  <div className="text-[7px] text-white/50">Temp</div>
                  <div className="font-semibold text-rose-300">24.5 °C</div>
                </div>
                <div className="bg-[#21163e] border border-white/5 p-1 rounded-md flex-1 text-center">
                  <div className="text-[7px] text-white/50">Humidity</div>
                  <div className="font-semibold text-indigo-300">62 %</div>
                </div>
              </div>
              <div className="bg-purple-950/40 p-1.5 rounded border border-purple-500/25 flex items-center gap-1.5 text-white/90">
                <FaMessage className="w-2.5 h-2.5 text-pink-400 shrink-0" />
                <span className="italic truncate">"Hello! Ask me campus related questions..."</span>
              </div>
            </div>
          </div>
        );
      case 'food':
        return (
          <div className="h-full flex flex-col justify-between select-none">
            {renderBrowserHeader('foodbite.metacryptonex.com')}
            <div className="bg-[#12072e]/90 flex-1 p-2.5 flex flex-col justify-between text-[8px]">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-white">🍕 Discover Delicious Foods</span>
                <span className="bg-orange-500 text-white px-1.5 py-0.5 rounded-full text-[7px] font-bold">🛒 3 items</span>
              </div>
              <div className="flex gap-2 my-1.5">
                <div className="bg-[#21163e] rounded border border-white/5 p-1 flex-1 flex gap-1 items-center">
                  <FaUtensils className="text-orange-400 w-3 h-3" />
                  <div>
                    <div className="font-bold text-white text-[7px]">Double Cheese Burger</div>
                    <div className="text-[6px] text-white/60">₹149.00</div>
                  </div>
                </div>
                <div className="bg-[#21163e] rounded border border-white/5 p-1 flex-1 flex gap-1 items-center opacity-70">
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
            <div className="bg-[#0b0422]/90 flex-1 p-3 flex flex-col justify-between text-[8px]">
              <div className="flex justify-between items-center border-b border-white/5 pb-1">
                <span className="font-bold text-white flex items-center gap-1"><FaCheckDouble className="text-emerald-400" /> TASK MANAGER</span>
                <span className="text-white/40">MERN Dashboard</span>
              </div>
              <div className="space-y-1 my-1.5 text-[7px]">
                <div className="bg-[#21163e] px-2 py-1 rounded border-l-2 border-emerald-500 flex justify-between">
                  <span className="text-white line-through">✔️ Integrate JSON Web Tokens</span>
                  <span className="text-emerald-400 bg-emerald-500/10 px-1 rounded">Done</span>
                </div>
                <div className="bg-[#21163e] px-2 py-1 rounded border-l-2 border-amber-500 flex justify-between">
                  <span className="text-white">⏳ Connect Axios HTTP Request Headers</span>
                  <span className="text-amber-400 bg-amber-500/10 px-1 rounded">In Progress</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'rental':
        return (
          <div className="h-full flex flex-col justify-between select-none">
            {renderBrowserHeader('flats.metacryptonex.com')}
            <div className="bg-[#0b0422]/90 flex-1 p-2.5 flex flex-col justify-between text-[8px]">
              <div className="flex justify-between items-center border-b border-white/5 pb-1">
                <span className="font-bold text-white flex items-center gap-1"><FaHouse className="text-sky-400" /> LUXURY FLATS LISTINGS</span>
                <span className="text-[7px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-mono">LARAVEL LIVE</span>
              </div>
              <div className="my-1.5 flex gap-2">
                <div className="bg-[#21163e] rounded border border-white/5 p-1 flex-1 flex flex-col justify-between text-left">
                  <div className="font-bold text-white text-[7px] truncate">Premium 2BHK Appartment</div>
                  <div className="text-[6px] text-white/50 my-0.5">Manjeri, Malappuram</div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sky-300 font-bold">₹15,000 / mo</span>
                    <span className="bg-emerald-500 text-white font-semibold text-[6px] px-1 rounded">WhatsApp 💬</span>
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
            <div className="bg-[#0c0424]/90 flex-1 p-2.5 flex flex-col justify-between text-[8px]">
              <div className="flex justify-between items-center border-b border-white/5 pb-1">
                <span className="font-bold text-white flex items-center gap-1"><FaBook className="text-purple-400" /> BOOKIFY STORE</span>
                <span className="text-purple-300 bg-purple-500/10 px-1 rounded">RBAC SECURITY</span>
              </div>
              <div className="flex gap-1.5 my-1.5 text-[7px]">
                <div className="bg-[#21163e] border border-white/5 p-1.5 rounded flex-1 flex flex-col justify-between items-center">
                  <span className="text-[12px]">⚛️</span>
                  <span className="text-white/80 font-bold mt-1 text-center scale-90">React Bible</span>
                  <span className="text-purple-400 text-[6px] mt-0.5">₹499</span>
                </div>
                <div className="bg-[#21163e] border border-white/5 p-1.5 rounded flex-1 flex flex-col justify-between items-center">
                  <span className="text-[12px]">🍃</span>
                  <span className="text-white/80 font-bold mt-1 text-center scale-90">MongoDB Master</span>
                  <span className="text-purple-400 text-[6px] mt-0.5">₹399</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'travel':
        return (
          <div className="h-full flex flex-col justify-between select-none">
            {renderBrowserHeader('govistas.metacryptonex.com')}
            <div className="bg-[#0d0426]/90 flex-1 p-2.5 flex flex-col justify-between text-[8px]">
              <div className="flex justify-between items-center">
                <span className="font-bold text-white flex items-center gap-1"><FaPlane className="text-pink-400" /> GOVISTA TRAVELS</span>
                <span className="bg-pink-500 text-white text-[6px] font-bold px-1 rounded">BOOK NOW</span>
              </div>
              <div className="bg-[#21163e] rounded p-1.5 border border-white/5 my-1.5 flex gap-2 items-center">
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
            <div className="bg-[#0a031f]/90 flex-1 p-2.5 flex flex-col justify-between text-[8px]">
              <div className="flex justify-between items-center border-b border-white/5 pb-1">
                <span className="font-bold text-white flex items-center gap-1"><FaCalendarCheck className="text-cyan-400" /> AADHYA BOOKINGS</span>
                <span className="text-[7px] text-cyan-300 font-mono">SLOT CALENDAR</span>
              </div>
              <div className="my-1 flex justify-between items-center">
                <span className="text-white/60 text-[7px]">Select Time Slot:</span>
                <span className="font-bold text-white text-[7px]">May 2026</span>
              </div>
              <div className="flex gap-1">
                <div className="bg-[#21163e] border border-cyan-500/40 text-cyan-300 px-1.5 py-1 rounded text-center flex-1">
                  <div>10:00 AM</div>
                  <div className="text-[5px] text-cyan-400/70 font-semibold">SELECTED</div>
                </div>
                <div className="bg-[#21163e]/40 border border-white/5 text-white/40 px-1.5 py-1 rounded text-center flex-1">
                  <div>11:30 AM</div>
                  <div className="text-[5px] text-white/20">BOOKED</div>
                </div>
                <div className="bg-[#21163e] border border-white/5 text-white/80 px-1.5 py-1 rounded text-center flex-1">
                  <div>02:00 PM</div>
                  <div className="text-[5px] text-white/40">AVAILABLE</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'portfolio':
        return (
          <div className="h-full flex flex-col justify-between select-none">
            {renderBrowserHeader('hasifasherincp.vercel.app')}
            <div className="bg-[#0b0321]/90 flex-1 p-2.5 flex flex-row gap-2 text-[6px]">
              {/* Mock Sidebar */}
              <div className="bg-[#21163e] rounded w-10 p-1 flex flex-col items-center justify-between border border-white/5 text-center">
                <span className="w-5 h-5 bg-white/20 rounded-full block border border-white/25"></span>
                <div className="w-full h-1 bg-white/40 my-1 rounded"></div>
                <div className="w-full space-y-0.5">
                  <div className="w-full h-0.5 bg-white/20 rounded"></div>
                  <div className="w-full h-0.5 bg-white/20 rounded"></div>
                  <div className="w-full h-0.5 bg-white/20 rounded"></div>
                </div>
              </div>
              {/* Mock Content area */}
              <div className="flex-1 flex flex-col justify-between">
                <div className="text-left font-bold text-white text-[7px]">Welcome to my Portfolio</div>
                <div className="flex gap-1 my-1">
                  <div className="bg-[#21163e] rounded border border-white/5 p-1 flex-1 h-8"></div>
                  <div className="bg-[#21163e] rounded border border-white/5 p-1 flex-1 h-8"></div>
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
        <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">Featured Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#21163e]/60 border border-purple-500/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-purple-500/5 hover:border-purple-500/25 transition-all duration-300 flex flex-col group"
          >
            {/* Interactive HTML Mockup Render instead of boring background colors */}
            <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/10 z-0"></div>
              {/* Render specific CSS/HTML mock based on mockType */}
              <div className="w-full h-full relative z-10">
                {renderMockup(project.mockType)}
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-1 leading-tight group-hover:text-purple-300 transition duration-300">
                  {project.title}
                </h3>
                <h4 className="text-purple-300 font-medium text-xs mb-3 tracking-wide">{project.subtitle}</h4>
                <p className="text-white/70 text-sm leading-relaxed mb-6 font-light">{project.desc}</p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-purple-950/40 text-purple-300 text-[11px] px-2 py-0.5 rounded border border-purple-900/40 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Link / Info */}
                <div className="flex justify-between items-center border-t border-purple-500/10 pt-4">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-300 hover:text-white flex items-center gap-2 text-sm font-medium transition duration-200"
                    >
                      <span>View Live Site</span>
                      <FaLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-white/40 text-xs italic flex items-center gap-1.5 font-light">
                      <FaCode className="w-3.5 h-3.5 text-purple-500/50" />
                      <span>Academic / Internship Project</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
