
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 font-medium">
        <p>© {new Date().getFullYear()} Rohit Chavan. Built with Passion for Backend Excellence.</p>
        <div className="flex gap-8">
          <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
