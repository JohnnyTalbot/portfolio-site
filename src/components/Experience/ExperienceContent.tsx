import React from 'react';

type Props = {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  years: Record<string, any>;
  activeIndex: number;
};

function ExperienceContent({ scrollRef, years, activeIndex } : Props) {
  const yearKeys = Object.keys(years);
  const yearCount = yearKeys.length;

  return (
    <div
      ref={scrollRef}
      className="overflow-hidden w-full"
      style={{ height: '500px' }}
    >
      <div
        className="flex transition-transform duration-300"
        style={{ width: `${yearCount * 100}%` }}
      >
        {Object.entries(years).map(([year, content], index) => (
          <div
            key={year}
            className="flex justify-center items-center"
            style={{
              width: `${100 / yearCount}%`,
              height: '150px',
            }}
          >
            <h3 className="text-xl font-semibold">{year}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceContent;
