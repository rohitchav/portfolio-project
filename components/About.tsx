
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-2/5">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-2xl rotate-6 translate-x-4 translate-y-4 -z-10 opacity-20"></div>
              <img
                src="https://picsum.photos/seed/rohit/800/800"
                alt="Profile Workspace"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
              />
            </div>
          </div>

          <div className="w-full md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 relative">
              About Me
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-600 -mb-2"></span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                I am a dedicated and growth-oriented Computer Engineering graduate (2025) currently working as a Graduate Trainee at <strong className="text-slate-900">3WD SOFTWARE</strong>. I specialize in Java backend development with hands-on experience in <strong className="text-slate-900">Core Java, JSP, Servlets, MVC architecture, and Oracle Database</strong> in real-world enterprise applications.
              </p>

              <p>
                I focus on writing production-ready code, optimizing database queries, and improving backend performance. I actively follow structured development practices including <strong className="text-slate-900">DAO–Service–Controller architecture</strong> and enterprise-level workflows.
              </p>

              <p>
                To strengthen my full-stack capabilities, I am currently learning <strong className="text-slate-900">Spring Boot</strong> for modern backend development and <strong className="text-slate-900">Angular</strong> for building dynamic and responsive front-end applications.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-sm font-semibold text-slate-700">
                  <i className="fa-solid fa-location-dot text-blue-600"></i> Maharashtra, India
                </div>
                <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-sm font-semibold text-slate-700">
                  <i className="fa-solid fa-briefcase text-blue-600"></i> Java Backend Developer
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
