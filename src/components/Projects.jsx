export default function Projects() {
  const projects = [
    {
      title: 'SnapEd – Interactive Kiosk for Smart Campus Solutions',
      img: '/snaped.png', // placeholder image
      desc: 'Developed a self-service kiosk using React.js, Node.js, and MySQL. Integrated AI chatbot, BMI calculator, timetable access, and Arduino-based IoT sensor monitoring.',
      link: null, // No live link
    },
    {
      title: 'FoodBite – Online Food Ordering Web App (Frontend Project)',
  desc: 'Developed a fully responsive frontend using React.js, Tailwind CSS, React Router, and Context API. Implemented dynamic category browsing, Favorites, Cart functionality with real-time billing and quantity controls, dark mode toggle, and auto-rotating image carousels. Created a frontend Admin Dashboard to manage products, orders, users, and coupons. Persisted cart and favorites using LocalStorage and deployed the application on Vercel for seamless navigation across devices.',
      link: 'https://food-order-app-two-iota.vercel.app', 
    },
    {
      title: 'Personal Task Manager (MERN Stack)',
      desc: 'Full-stack task management app with user registration, JWT authentication, CRUD operations, and responsive UI using React.js, Node.js, Express.js, MongoDB, and Axios.',
      link: 'https://task-manager-frontend-1.vercel.app',
    },
    {
      title: 'Online Bookstore (MERN Stack)',
      desc: 'Full-stack online bookstore with admin, buyer, and seller roles. Implemented RBAC, banner control, book reviews, and responsive UI using React.js, Node.js, Express.js, MongoDB, and RESTful APIs.',
      link: 'https://book-store-frontend-xi-blush.vercel.app',
    },
    {
  title: 'GoVista – Tour & Activity Booking Platform',
  desc: 'Full-stack travel platform built with React.js, Next.js, Node.js, Express.js, and MongoDB. Features three roles (Admin, Operator, User), tour listings, search & filter, booking management, reviews, notifications, and optional payment integration with Stripe. Designed for responsive, user-friendly experiences worldwide.',
  link: 'https://govistas-frontend-qmj5.vercel.app', 
}

  ];

  return (
    <section id="proj" className="pt-16 scroll-mt-28">
      <h1 className="text-3xl font-bold mb-8">
        <span className="text-purple-300">Projects</span>
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          project.link ? (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-400 p-6 rounded-lg shadow-lg text-center hover:scale-[1.03] transition block"
            >
              <img
                src={project.img}
                className="rounded mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-white/90">{project.desc}</p>
            </a>
          ) : (
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
          )
        ))}
      </div>
    </section>
  );
}
