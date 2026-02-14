
import React, { useEffect, useRef, useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col ${
        index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
      } bg-slate-50 rounded-3xl overflow-hidden shadow-sm border border-slate-100 group transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Project Image/Visual Placeholder */}
      <div className="w-full md:w-1/2 bg-slate-900 flex items-center justify-center p-12 min-h-[300px]">
        <i
          className={`${project.icon} text-8xl text-blue-500/40 group-hover:text-blue-500/60 transition-colors duration-500`}
        ></i>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-6 text-slate-900">{project.title}</h3>
        <div className="space-y-4 mb-8">
          {project.description.map((desc, i) => (
            <div key={i} className="flex gap-4">
              <i className="fa-solid fa-check text-blue-600 mt-1 flex-shrink-0"></i>
              <p className="text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-500 max-w-xl">
              Concrete examples of my work in building database-driven applications and complex reporting systems.
            </p>
          </div>
          <div className="text-blue-600 font-semibold cursor-default select-none hidden md:block">
            Scroll to explore <i className="fa-solid fa-arrow-right ml-2 animate-pulse"></i>
          </div>
        </div>

        <div className="space-y-16">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
