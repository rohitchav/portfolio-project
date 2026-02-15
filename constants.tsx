
import { Project, SkillCategory, NavLink, ContactLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: "Coding", href: "#coding" },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    skills: ['Java', 'SQL', 'Python (Basic)', 'JavaScript (Basic)'],
    icon: 'fa-solid fa-code',
  },
  {
    title: 'Backend Development',
    skills: ['JSP', 'Servlets', 'JDBC', 'REST APIs', 'AngularJS (Basic)'],
    icon: 'fa-solid fa-server',
  },
   {
    title: 'Frameworks',
    skills: ['Spring Boot', 'React', 'Angular'],
    icon: 'fa-solid fa-cubes',
  },
  {
    title: 'Database Management',
    skills: ['MySQL', 'Oracle', 'SQL Optimization'],
    icon: 'fa-solid fa-database',
  },
  {
    title: 'Architecture & Design',
    skills: ['MVC Architecture', 'DAO Pattern', 'Service-Controller Layering', 'OOP'],
    icon: 'fa-solid fa-layer-group',
  },
  {
    title: 'Core Computer Science',
    skills: ['Data Structures', 'SDLC', 'Linux Basics', 'Cloud Basics', 'Debugging', 'Clean Code Practices'],
    icon: 'fa-solid fa-brain',
  },
  {
    title: 'Tools & Version Control',
    skills: ['Git', 'GitHub', 'Eclipse', 'VS Code', 'SQL Plus'],
    icon: 'fa-solid fa-screwdriver-wrench',
  },
  {
    title: 'Professional Skills',
    skills: ['Problem-Solving', 'Analytical Thinking', 'Teamwork', 'Continuous Learning'],
    icon: 'fa-solid fa-users',
  },
];


export const PROJECTS: Project[] = [
  {
    title: 'Grocery Store Management System',
    description: [
      'Web-based application for billing, inventory, and customer management.',
      'Implemented MVC architecture with separate DAO, Service, and Controller layers.',
      'Integrated MySQL using JDBC for efficient CRUD operations.',
      'Added multilingual support (English & Marathi).'
    ],
    tech: ['Java', 'JSP', 'Servlets', 'JDBC', 'MySQL', 'MVC'],
    icon: 'fa-solid fa-cart-shopping',
    image: '/images/image1.png', 
  },
  {
    title: 'Cardiovascular Disease Prediction',
    description: [
      'Machine learning model trained on 70,000+ medical records.',
      'Performed data preprocessing and feature engineering for improved accuracy.',
      'Implemented Random Forest, KNN, and SVM models (81% accuracy with Random Forest).',
      'Developed Flask-based interface with automated PDF report generation.'
    ],
    tech: ['Python', 'Flask', 'Machine Learning', 'Scikit-learn', 'SQLite', 'ReportLab'],
    icon: 'fa-solid fa-heart-pulse',
      image: '/images/image2.png', 
  }
];


export const CONTACT_LINKS: ContactLink[] = [
  {
    name: 'Email',
    href: 'mailto:rohitchavan4007@gmail.com',
    icon: 'fa-solid fa-envelope',
    label: 'rohitchavan4007@gmail.com',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rohit-chavan-rc/',
    icon: 'fa-brands fa-linkedin',
    label: 'linkedin.com/in/rohitchavan',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/rohitchavan',
    icon: 'fa-brands fa-github',
    label: 'github.com/rohitchavan',
  },
];
