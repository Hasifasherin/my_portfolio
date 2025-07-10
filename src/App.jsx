import React from "react";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import Hero from "./components/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/ContactForm";

const App = () => {
  return (
    <div className="bg-dark text-white font-poppins min-h-screen">
      <Navbar />

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 pt-32 lg:pl-[360px]">
        {/* Profile Card (fixed on large screens) */}
        <ProfileCard />

        {/* Main sections */}
        <div className="space-y-20">
          <Hero />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
