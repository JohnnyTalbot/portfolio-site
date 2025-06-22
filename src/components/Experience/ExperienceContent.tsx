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
        {Object.entries(years).sort(([a], [b]) => Number(b) - Number(a)).map(([year, content]) => (
          <div
            key={year}
            className="h-full flex flex-col md:flex-row justify-center md:items-baseline mt-auto md:mt-10 mb-auto md:mb-0 lg:gap-5 md:px-8 lg:px-10"
            style={{
              width: `${100 / yearCount}%`,
              height: '150px',
            }}
          >
            {content.map((item: Record<string, any>, itemIndex: number) => (
              <div key={itemIndex} className="py-2 px-5 xl:p-20 md:p-4 mb-2">
                <h2 className="text-sm md:text-2xl lg:text-3xl font-bold">{item.title}</h2>
                <h3 className="text-xs md:text-xl lg:text-2xl">{item.position}</h3>
                <p className="text-xs md:text-base lg:text-lg text-gray-500">{item.date}</p>
                <ul className="list-disc pl-5 mt-2">
                  {item.description.map((desc: string, descIndex: number) => (
                    <li key={descIndex} className="text-xs md:text-base lg:text-lg">
                      {desc}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-row items-start mt-2">
                  <span className="text-xs md:text-base font-semibold mr-2">Technologies: </span>
                  <p className="text-xs md:text-base">{item.technologies.join(', ')}</p>
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
