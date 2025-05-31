import React, { useRef, useState } from 'react';

import Top from '../Top';
import TimelineSlider from './TimelineSlider';
import ExperienceContent from './ExperienceContent';

import experienceData from '../../data/experienceData.json';

interface ExperienceProps{
  showNav: boolean;
  currentView: string;
}

const years = experienceData as Record<string, any>;

function Experience({showNav, currentView}: ExperienceProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const yearKeys = Object.keys(years);
  const yearCount = yearKeys.length;

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const sectionWidth = scrollRef.current.scrollWidth / yearCount;
    scrollRef.current.scrollTo({
      left: sectionWidth * index,
      behavior: 'smooth',
    });
  };

  return (
    <div 
      id="experience"
      style={{
        opacity: !showNav && currentView === 'experience' ? 1 : 0,
        transform: !showNav && currentView === 'experience' ? 'translateY(0)' : 'translateY(20px)',
        pointerEvents: !showNav && currentView === 'experience' ? 'auto' : 'none',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
      }}  
    >
      <Top currentView="Experience" />

      <TimelineSlider
        years={years}
        setActiveIndex={setActiveIndex}
        activeIndex={activeIndex}
        scrollToIndex={scrollToIndex}
        containerWidth={containerWidth}
        setContainerWidth={setContainerWidth}
      />

      <ExperienceContent
        scrollRef={scrollRef}
        years={years}
      />
    </div>
  );
}

export default Experience;
