import React, {useState, useRef, useEffect} from 'react';

import ProjectView from './ProjectView';

interface ProjectProps {
  isMobile: boolean;
  projectsData: Record<string, any>;
  setCanScroll: (canScroll: boolean) => void;
  setShowProject: (show: boolean) => void;
  setCurrentProject: (project: {
      name: string;
      description: string;
      skills: string[];
      image: string;
    }) => void;
  currentProject: {
      name: string;
      description: string;
      skills: string[];
      image: string;
    };
}

function ProjectList({ isMobile, projectsData, setCanScroll, setShowProject, setCurrentProject, currentProject }: ProjectProps) {
  const [radius, setRadius] = useState(185);
  const containerRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const observer = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const width = entry.contentRect.width;
      setRadius(width / 2);
    }
  });

  if (containerRef.current) {
    observer.observe(containerRef.current);
  }

  return () => {
    if (containerRef.current) {
      observer.unobserve(containerRef.current);
    }
  };
}, []);


  return (
    <div ref={containerRef} className="relative w-[55vw] h-[55vw] sm:w-[350px] sm:h-[350px]">
      {/* Central Circle */}
      <ProjectView isMobile={isMobile} project={currentProject} setCanScroll={setCanScroll} setShowProject={setShowProject} radius={radius} />

      {/* Surrounding Circles */}
      {Object.entries(projectsData).map(([key, project], index) => {
        const angle = (index * 360) / Object.entries(projectsData).length - 90;
        const rSmall = isMobile ? 22 : 30;
        const x = radius + (radius + rSmall * 2) * Math.cos((angle * Math.PI) / 180) - rSmall;
        const y = radius + (radius + rSmall * 2) * Math.sin((angle * Math.PI) / 180) - rSmall;

        return (
          <div
            key={key}
            className="absolute p-[3px] rounded-full bg-gradient-to-r from-blue-500 to-black-400 cursor-pointer"
            style={{
              height: `${rSmall * 2}px`,
              width: `${rSmall * 2}px`,
              top: `${y}px`,
              left: `${x}px`,
              boxShadow: currentProject?.name === project.name ? "0 0 10px rgba(236, 252, 94, 0.87)" : "none",
              transition: "0.2s ease-in-out",
            }}
            onMouseEnter={() => setCurrentProject(project)}
          >
            <div className="w-full h-full rounded-full flex justify-center items-center">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </div>
        );
      })}

    </div>
  )
}

export default ProjectList;