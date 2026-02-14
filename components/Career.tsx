
import React from 'react';

const Career: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-4 bg-blue-600/20 rounded-2xl mb-8">
            <i className="fa-solid fa-rocket text-4xl text-blue-500"></i>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Career Objective</h2>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light italic">
            "Motivated Computer Science graduate with strong expertise in Java-based enterprise application development and database-driven systems. Seeking an opportunity to contribute to scalable backend solutions, optimize data-intensive applications, and grow as a software engineer in a dynamic organization."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Career;
