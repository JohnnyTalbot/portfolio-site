"use client"

import React, { useEffect, useState } from 'react';

import Navigation from "@/components/Navigation";
import Background from "@/components/Background";
import About from "@/components/About";
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  const [showNav, setShowNav] = useState(true)
  const [currentView, setCurrentView] = useState('about')
  const [isMoblile, setIsMobile] = useState(false)

  useEffect(() => {
    let lastScrollY = 0;

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleWheel = (event: any) => {
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
  }, []);
  

  return (
    <div>
      <Background />
      <main className="z-10 relative overflow-hidden">
        {showNav && 
        <Navigation 
          currentView={currentView} 
          setCurrentView={setCurrentView} 
          setShowNav={setShowNav}
        />}
        {(!showNav && currentView == 'about') && <About />}
        {(!showNav && currentView == 'experience') && <Experience />}
        {(!showNav && currentView == 'projects') && <Projects />}
        {(!showNav && currentView == 'contact') && <Contact isMobile={isMoblile} />}
        <div>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}
