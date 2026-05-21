import React from "react";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import Hero from "./components/HeroSection";
import Projects from "./components/Projects";
import Experience from "./components/Experience"; 
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <div className="bg-dark text-white font-poppins min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 lg:gap-x-12 gap-y-20 items-start">
          {/* Hero Intro: Rendered 1st on mobile, right column on desktop */}
          <div className="order-1 lg:order-none lg:col-span-8 lg:col-start-5">
            <Hero />
          </div>

          {/* Profile Card: Rendered 2nd on mobile, left column sticky on desktop spanning all right rows */}
          <div className="order-2 lg:order-none lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:row-span-7 lg:sticky lg:top-28 lg:self-start z-20">
            <ProfileCard />
          </div>
          
          {/* Projects: Rendered 3rd on mobile (directly below Profile Card), right column on desktop */}
          <div className="order-3 lg:order-none lg:col-span-8 lg:col-start-5">
            <Projects />
          </div>

          {/* Experience */}
          <div className="order-4 lg:order-none lg:col-span-8 lg:col-start-5">
            <Experience />
          </div>

          {/* Certifications */}
          <div className="order-5 lg:order-none lg:col-span-8 lg:col-start-5">
            <Certifications />
          </div>

          {/* Skills */}
          <div className="order-6 lg:order-none lg:col-span-8 lg:col-start-5">
            <Skills />
          </div>

          {/* Achievements */}
          <div className="order-7 lg:order-none lg:col-span-8 lg:col-start-5">
            <Achievements />
          </div>

          {/* Contact Form */}
          <div className="order-8 lg:order-none lg:col-span-8 lg:col-start-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
