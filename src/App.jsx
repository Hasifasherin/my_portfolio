import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <header className="py-6 bg-gray-100 dark:bg-gray-800 shadow-md text-center">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
      </main>

      <footer className="text-center py-6 bg-gray-100 dark:bg-gray-800">
        <p className="text-sm">&copy; 2025 Hasifa Sherin. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
