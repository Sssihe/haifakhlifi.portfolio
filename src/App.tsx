import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_LINKS } from './constants';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'experience': return <Experience />;
      case 'skills': return <Skills />;
      case 'contact': return <Skills />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary-container selection:text-on-primary-container">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(123,85,86,0.05)] py-4' : 'bg-transparent py-6'}`}>
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className="font-headline text-2xl font-bold italic text-primary cursor-pointer"
            onClick={() => setActiveTab('home')}
          >
            Haifa Khelifi
          </div>
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                className={`font-body text-sm tracking-wide transition-all duration-300 relative py-1 ${
                  activeTab === link.id
                    ? 'text-primary font-bold'
                    : 'text-secondary hover:text-primary'
                }`}
              >
                {link.label}
                {activeTab === link.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </button>
            ))}
          </div>
          <button
            onClick={() => setActiveTab('contact')}
            className="bg-gradient-to-r from-primary to-primary-dim text-on-primary px-8 py-3 rounded-full font-label font-bold text-xs tracking-widest uppercase hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/10"
          >
            Get in Touch
          </button>
        </div>
      </nav>
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="bg-surface-container-low/50 py-20 px-6 lg:px-12 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
          <div className="font-headline text-2xl font-bold italic text-primary">
            Haifa Khelifi
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            <a
              href="https://linkedin.com/in/haifa-khelifi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm tracking-widest uppercase text-secondary hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:haifakhelifi13@gmail.com"
              className="font-body text-sm tracking-widest uppercase text-secondary hover:text-primary transition-colors"
            >
              Email
            </a>
            <a
              href="tel:+21620965021"
              className="font-body text-sm tracking-widest uppercase text-secondary hover:text-primary transition-colors"
            >
              +216 20 965 021
            </a>
          </div>
          <div className="pt-12 border-t border-outline-variant/20 w-full text-center">
            <p className="font-body text-xs tracking-widest uppercase text-outline">
              © 2025 Haifa Khelifi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
