'use client';

import { useState, useEffect } from 'react';
import Navbar from '../../components/NavBar';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Testimonials from '../../components/Testimonials';
import Process from '../../components/Process';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Process />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}