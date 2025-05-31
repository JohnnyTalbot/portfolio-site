import React from 'react';

type Props = {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  years: Record<string, any>;
};

function ExperienceContent({ scrollRef, years } : Props) {
  const yearKeys = Object.keys(years);
  const yearCount = yearKeys.length;

  return (
    <div
      ref={scrollRef}
      className="overflow-hidden w-full h-full"
      style={{ height: '500px' }}
    >
      <div
        className="h-full flex transition-transform duration-300"
        style={{ width: `${yearCount * 100}%` }}
      >
        {Object.entries(years).map(([year, content]) => (
          <div
            key={year}
            className="h-full flex flex-col md:flex-row justify-center items-center mt-auto mb-auto"
            style={{
              width: `${100 / yearCount}%`,
              height: '150px',
            }}
          >
            {content.map((item: Record<string, any>, itemIndex: number) => (
              <div key={itemIndex} className="py-2 px-5 xl:p-20 md:p-4 mb-2">
                <h2 className="text-md md:text-2xl font-bold">{item.title}</h2>
                <h3 className="text-sm md:text-xl">{item.position}</h3>
                <p className="text-xs md:text-sm text-gray-500">{item.date}</p>
                <ul className="list-disc pl-5 mt-2">
                  {item.description.map((desc: string, descIndex: number) => (
                    <li key={descIndex} className="text-xs md:text-sm">
                      {desc}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-row items-center mt-2">
                  <span className="text-xs md:text-sm font-semibold mr-2">Technologies: </span>
                  <p className="text-sm md:text-md">{item.technologies.join(', ')}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceContent;
