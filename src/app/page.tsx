"use client"

import React, { useEffect, useState, useRef } from 'react';

import Navigation from "../components/Navigation";
import Background from "../components/Background";
import About from "../components/About";
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  const [showNav, setShowNav] = useState(true);
  const [currentView, setCurrentView] = useState('about');
  const [isMobile, setIsMobile] = useState(false);
  const [canScroll, setCanScroll] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);
  const canScrollRef = useRef(true);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    canScrollRef.current = canScroll;
  }, [canScroll]);

  useEffect(() => {
    if (!hasMounted) return;

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleWheel = (event: WheelEvent) => {
      if (!canScrollRef.current) return;

      const deltaY = event.deltaY;
      if (deltaY > 0) {
        setShowNav(false);
      } else if (deltaY < 0) {
        setShowNav(true);
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [hasMounted]);

  if (!hasMounted) return null;

  return (
    <div className="fixed inset-0 w-full min-h-screen overflow-hidden">
      <Background />
      <main className="z-10 relative overflow-hidden w-full h-screen">
        <Navigation 
          currentView={currentView} 
          setCurrentView={setCurrentView} 
          setShowNav={setShowNav}
          showNav={showNav}
        />
        <About
          showNav={showNav}
          currentView={currentView}
        />
        <Experience 
          showNav={showNav}
          currentView={currentView}
        />
        <Projects
          showNav={showNav}
          currentView={currentView}
          isMobile={isMobile} 
          setCanScroll={setCanScroll}
        />
        <Contact 
          showNav={showNav}
          currentView={currentView}
          isMobile={isMobile} 
        />
      </main>
      <footer></footer>
    </div>
  );
}
