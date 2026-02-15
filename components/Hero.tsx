import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-slate-900 text-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            <p className="text-blue-400 font-semibold tracking-widest uppercase mb-4 text-sm">
              Backend Engineering
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                Rohit Chavan
              </span>
            </h1>

            <h2 className="text-xl md:text-3xl text-slate-300 font-medium mb-6">
              Java Backend Developer
            </h2>

            <p className="text-base md:text-lg text-slate-400 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
              I specialize in building scalable, database-driven applications
              with robust architectures and efficient report development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all text-center"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3 bg-transparent border border-slate-700 hover:border-blue-500 text-white font-semibold rounded-lg transition-all text-center"
              >
                Contact Me
              </a>

              <a
                href="/Rohit_Chavan_Resume_9326981878.pdf"
                download="Rohit_Chavan_Resume.pdf"
                className="w-full sm:w-auto px-6 py-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-white font-semibold rounded-lg transition-all text-center"
              >
                Download Resume
              </a>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center mt-10 md:mt-0">
            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-2xl"></div>

              <img
                src="/images/favicon.png"
                alt="Rohit Chavan"
                className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
