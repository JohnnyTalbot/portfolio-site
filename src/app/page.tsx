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

  // to fix mobile view
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

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

    // Scroll via mouse wheel
    const handleWheel = (event: WheelEvent) => {
      if (!canScrollRef.current) return;

      const deltaY = event.deltaY;
      if (deltaY > 0) {
        setShowNav(false);
      } else if (deltaY < 0) {
        setShowNav(true);
      }
    };

    // Scroll via touch (mobile)
    let touchStartY = 0;

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      const touchEndY = event.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (!canScrollRef.current) return;

      if (deltaY > 10) {
        setShowNav(false);
      } else if (deltaY < -10) {
        setShowNav(true);
      }
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [hasMounted]);

  if (!hasMounted) return null;

  return (
    <div>
      <Background />
      <main 
        className="h-fullscreen z-10 relative overflow-hidden w-full"
      >
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
