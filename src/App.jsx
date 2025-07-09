import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <header className="py-6 shadow-md bg-gray-100 dark:bg-gray-800">
        <h1 className="text-4xl font-bold text-center">My Portfolio</h1>
      </header>

      <main className="p-6">
        <section id="hero" className="py-10 border-b">
          <h2 className="text-2xl font-semibold">Hero Section</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Your intro goes here.</p>
        </section>

        <section id="about" className="py-10 border-b">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Write a short bio.</p>
        </section>

        <section id="skills" className="py-10 border-b">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">List your tech stack.</p>
        </section>

        <section id="projects" className="py-10 border-b">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Show off your work here.</p>
        </section>

        <section id="contact" className="py-10 border-b">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Add a contact form or your email.</p>
        </section>
      </main>

      <footer className="text-center py-6 bg-gray-100 dark:bg-gray-800">
        <p className="text-sm">&copy; 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
