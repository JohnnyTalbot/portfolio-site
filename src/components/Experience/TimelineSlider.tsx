import React, { useEffect, useRef, useState } from 'react';

interface TimelineSliderProps {
  years: Record<string, any>;
  setActiveIndex: (index: number) => void;
  activeIndex: number;
  scrollToIndex: (index: number) => void;
  containerWidth: number;
  setContainerWidth: (width: number) => void;
}

function TimelineSlider({
  years,
  setActiveIndex,
  activeIndex,
  scrollToIndex,
  containerWidth,
  setContainerWidth,
}: TimelineSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [thumbX, setThumbX] = useState(0);

  const yearKeys = Object.keys(years).sort((a, b) => Number(b) - Number(a));
  const yearCount = yearKeys.length;
  const snapPoints = Array.from({ length: yearCount }, (_, i) =>
    i * containerWidth / (yearCount - 1)
  );

  const snapThreshold = 15;

  const updateWidth = () => {
    if (trackRef.current) {
      setContainerWidth(trackRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    const handleMove = (clientX: number) => {
      if (!isDragging || !trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      let relativeX = clientX - rect.left;
      relativeX = Math.max(0, Math.min(relativeX, rect.width));

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

    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    };

    const stopDragging = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', stopDragging);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', stopDragging);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', stopDragging);
    };
  }, [isDragging, snapPoints]);


  return (
    <div
      ref={trackRef}
      className="relative h-12 mx-auto mt-6"
      style={{ 
        width: '80%', 
        touchAction: 'none'
      }}
      onMouseDown={(e) => {
        const rect = trackRef.current!.getBoundingClientRect();
        const relativeX = e.clientX - rect.left;
        setThumbX(relativeX);
        setIsDragging(true);
      }}
      onTouchStart={(e) => {
        const rect = trackRef.current!.getBoundingClientRect();
        const touchX = e.touches[0].clientX - rect.left;
        setThumbX(touchX);
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
        onTouchStart={(e) => {
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
          touchAction: 'none',
        }}
      >
        <p style={{
          position: 'absolute',
          bottom: '30px',
          whiteSpace: 'nowrap',
          userSelect: 'none',
          }}>
          {yearKeys[activeIndex]}
        </p>
      </div>
    </div>
  );
}

export default TimelineSlider;