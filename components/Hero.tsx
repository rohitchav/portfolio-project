import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-slate-900 text-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-blue-400 font-semibold tracking-widest uppercase mb-4">
              Backend Engineering
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                Rohit Chavan
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-slate-300 font-medium mb-8">
              Java Backend Developer
            </h2>

            <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
              I specialize in building scalable, database-driven applications
              with robust architectures and efficient report development.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all transform hover:-translate-y-1 text-center shadow-lg shadow-blue-600/20 min-w-[180px]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-8 py-4 bg-transparent border-2 border-slate-700 hover:border-blue-500 text-white font-bold rounded-lg transition-all text-center min-w-[180px]"
              >
                Contact Me
              </a>

              <a
                href="/Rohit_Chavan_Resume_9326981878.pdf"
                download="Rohit_Chavan_Resume.pdf"
                className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 border-2 border-slate-700 hover:border-slate-500 text-white font-bold rounded-lg transition-all text-center flex items-center justify-center gap-2 min-w-[180px]"
              >
                <i className="fa-solid fa-download"></i>
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-center items-center">


            <div className="relative group flex justify-center">

              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-2xl"></div>

              <img
                src="/images/favicon.png"
                alt="Rohit Chavan"
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover scale-110 border-4 border-blue-500 shadow-2xl"
              />
            </div>

          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" className="text-slate-500 hover:text-blue-400">
          <i className="fa-solid fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
