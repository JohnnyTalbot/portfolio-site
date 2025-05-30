"use client"

import React, { useEffect, useState, useRef } from 'react';

import Navigation from "@/components/Navigation";
import Background from "@/components/Background";
import About from "@/components/About";
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

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

    let lastScrollY = 0;

    const handleWheel = (event: any) => {
      if (!canScrollRef.current) return;

      const deltaY = event.deltaY;
      if (deltaY > 0) {
        setShowNav(false);
      } else if (deltaY < 0) {
        setShowNav(true);
      }
      lastScrollY += deltaY;
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [hasMounted]);

  if (!hasMounted) return null;

  return (
    <div>
      <Background />
      <main className="z-10 relative overflow-hidden w-full h-screen">
        {showNav && 
        <Navigation 
          currentView={currentView} 
          setCurrentView={setCurrentView} 
          setShowNav={setShowNav}
        />}
        {(!showNav && currentView === 'about') && <About />}
        {(!showNav && currentView === 'experience') && <Experience />}
        {(!showNav && currentView === 'projects') && (
          <Projects isMobile={isMobile} setCanScroll={setCanScroll} />
        )}
        {(!showNav && currentView === 'contact') && <Contact isMobile={isMobile} />}
      </main>
      <footer></footer>
    </div>
  );
}
