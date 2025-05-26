import React, { useRef, useState } from 'react';

import Top from '../Top';
import TimelineSlider from './TimelineSlider';
import ExperienceContent from './ExperienceContent';

function Experience() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const years = {
    2021: {}, 
    2022: {}, 
    2023: {}, 
    2024: {}, 
    2025: {}
  };

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
    <div id="experience">
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
        activeIndex={activeIndex}
      />
    </div>
  );
}

export default Experience;
