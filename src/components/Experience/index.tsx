import React, { useRef, useEffect, useState } from 'react';

import Top from '../Top';

const years = ['2010', '2012', '2016', '2019', '2024'];
const snapPoints = [0, 75, 150, 225, 300];
const snapThreshold = 15; // px distance to snap

function Experience() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [thumbX, setThumbX] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const sectionWidth = scrollRef.current.scrollWidth / years.length;
    scrollRef.current.scrollTo({
      left: sectionWidth * index,
      behavior: 'smooth',
    });
    setThumbX(snapPoints[index]);
    setActiveIndex(index);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      let relativeX = e.clientX - rect.left;
      relativeX = Math.max(0, Math.min(relativeX, rect.width));

      // Check for snapping
      let snapped = false;
      for (let i = 0; i < snapPoints.length; i++) {
        if (Math.abs(relativeX - snapPoints[i]) < snapThreshold) {
          setThumbX(snapPoints[i]);
          setActiveIndex(i);
          scrollToIndex(i);
          snapped = true;
          break;
        }
      }

      if (!snapped) {
        setThumbX(relativeX);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div id="experience">
      <Top currentView="Experience" />

            <div
        ref={trackRef}
        className="relative h-12 w-[300px] mx-auto mt-6"
        onMouseDown={(e) => {
          const rect = trackRef.current!.getBoundingClientRect();
          const relativeX = e.clientX - rect.left;
          setThumbX(relativeX);
          setIsDragging(true);
        }}
      >
        {/* Snap markers */}
        {snapPoints.map((x, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: '50%',
              left: `${x}px`,
              transform: 'translate(-50%, -50%)',
              width: '4px',
              height: '20px',
              background: 'white',
              borderRadius: '2px',
            }}
          />
        ))}

        {/* Thumb */}
        <div
          onMouseDown={(e) => {
            e.stopPropagation();
            setIsDragging(true);
          }}
          style={{
            position: 'absolute',
            top: '50%',
            left: `${thumbX}px`,
            transform: 'translate(-50%, -50%)',
            width: '25px',
            height: '25px',
            borderRadius: '50%',
            background: '#5A7AFB',
            cursor: 'pointer',
          }}
        />
      </div>

      {/* Content */}
      <div
        ref={scrollRef}
        className="overflow-hidden w-full"
        style={{ height: "500px" }}
      >
        <div
          className="flex transition-transform duration-300"
          style={{ width: `${years.length * 100}%` }}
        >
          {years.map((year, index) => (
            <div
              key={year}
              className="flex justify-center items-center"
              style={{
                width: `${100 / years.length}%`,
                height: "150px",
                // background: index === activeIndex ? "#5A7AFB" : "#222",
                // transition: 'background 0.3s',
              }}
            >
              <h3 className="text-xl font-semibold">{year}</h3>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}

export default Experience;
