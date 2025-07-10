import React from 'react';

const Skills = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Git', 'Vite'];

  return (
    <section id="skills" className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
