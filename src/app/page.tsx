"use client"

import React, { useEffect, useState } from 'react';

import Navigation from "@/components/Navigation";
import Background from "@/components/Background";
import About from "@/components/About";
import Experience from '@/components/Experience';
import Projects from '@/components/projects';
import Contact from '@/components/Contact';

export default function Home() {
  const [showNav, setShowNav] = useState(true)
  const [currentView, setCurrentView] = useState('about')

  useEffect(() => {
    let lastScrollY = 0;

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
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
  

  return (
    <div>
      <Background />
      <main className="z-10 relative">
        {showNav && 
        <Navigation 
          currentView={currentView} 
          setCurrentView={setCurrentView} 
          setShowNav={setShowNav}
        />}
        {(!showNav && currentView == 'about') && <About />}
        {(!showNav && currentView == 'experience') && <Experience />}
        {(!showNav && currentView == 'projects') && <Projects />}
        {(!showNav && currentView == 'contact') && <Contact />}
        <div>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}
