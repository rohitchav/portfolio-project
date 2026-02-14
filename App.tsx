
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Career from './components/Career';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react";
import VisitorCounter from "./components/VisitorCounter";


const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Career />
        <Contact />
       
      </main>
      <VisitorCounter />
      <Footer />
       <Analytics />
    </div>
  );
};

export default App;
