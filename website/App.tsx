import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Hero from './pages/Hero';
import Technical from './pages/Technical';
import Demos from './pages/Demos';
import Models from './pages/Models';
import Roadmap from './pages/Roadmap';
import About from './pages/About';
import Contact from './pages/Contact';
import { AnimatePresence, MotionConfig } from 'framer-motion';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <MotionConfig reducedMotion="user">
    <div className="bg-brand-surface min-h-screen text-slate-800 font-sans selection:bg-brand-accent selection:text-white flex flex-col">
      <ScrollToTop />
      <Navbar />
      <div className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Hero />} />
            <Route path="/technical" element={<Technical />} />
            <Route path="/demos" element={<Demos />} />
            <Route path="/models" element={<Models />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
    </MotionConfig>
  );
};

export default App;
