
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            A comprehensive overview of my technical stack and professional competencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group cursor-default"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out shadow-sm shadow-blue-200/50 group-hover:shadow-blue-500/40">
                <i className={`${category.icon} text-2xl text-blue-600 group-hover:text-white transition-colors duration-300`}></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-slate-600 font-medium">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full transition-all duration-300 group-hover:w-3 group-hover:bg-blue-400"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
