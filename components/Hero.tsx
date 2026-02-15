import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-slate-900 text-white overflow-hidden pt-24 md:pt-0"
    >
      {/* Safe Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 hidden md:block"></div>

        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

      </div>


      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">

          {/* LEFT CONTENT */}
          <div className="md:w-1/2 text-center md:text-left">

            <p className="text-blue-400 font-semibold tracking-widest uppercase mb-4 text-sm md:text-base">
              Backend Engineering
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                Rohit Chavan
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-slate-300 font-medium mb-6">
              Java Backend Developer
            </h2>

            <p className="text-base md:text-lg text-slate-400 mb-8 max-w-xl leading-relaxed mx-auto md:mx-0">
              I specialize in building scalable, database-driven applications
              with robust architectures and efficient report development.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-lg"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border border-slate-600 hover:border-blue-500 rounded-lg transition-all"
              >
                Contact Me
              </a>

              <a
                href="/Rohit_Chavan_Resume_9326981878.pdf"
                download
                className="px-6 py-3 border border-slate-600 hover:border-slate-400 rounded-lg transition-all"
              >
                Download Resume
              </a>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:w-1/2 flex justify-center">

            <div className="relative">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl">
                <img
                  src="/images/favicon.png"
                  alt="Rohit Chavan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
