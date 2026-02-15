import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-slate-900 text-white overflow-hidden px-4 sm:px-6"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[70%] h-full bg-blue-600/10 transform skew-x-[-12deg] translate-x-24 hidden md:block"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">

        {/* Top Label */}
        <p className="text-blue-400 font-semibold tracking-widest uppercase mb-4 text-xs sm:text-sm">
          Backend Engineering
        </p>

        {/* Name */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            Rohit Chavan
          </span>
        </h1>

        {/* Role */}
        <h2 className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium mb-6">
          Java Backend Developer
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed px-2">
          I specialize in building scalable, database-driven applications
          using Java, JSP, Servlets, MVC architecture, and Oracle Database.
          I focus on writing production-ready backend systems and optimized reports.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">

          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-lg text-center"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 border border-slate-600 hover:border-blue-500 rounded-lg transition-all text-center"
          >
            Contact Me
          </a>

          <a
            href="/Rohit_Chavan_Resume_9326981878.pdf"
            download
            className="w-full sm:w-auto px-6 py-3 border border-slate-600 hover:border-slate-400 rounded-lg transition-all text-center"
          >
            Download Resume
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;
