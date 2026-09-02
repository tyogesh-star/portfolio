import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import GitHub from './sections/GitHub';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col h-screen bg-background dark:bg-[#0B0F19]">
      <Header activeSection={activeSection} />
      <main className="flex-1 overflow-y-auto scrollbar-hide">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHub />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
