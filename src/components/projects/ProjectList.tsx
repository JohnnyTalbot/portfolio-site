import React from 'react';
import { useState } from 'react';

import ProjectView from './ProjectView';

interface ProjectProps {
 projectsData: Array<{
   name: string;
   description: string;
   image: string;
 }>;
}

function ProjectList({ projectsData }: ProjectProps) {
  const [currentProject, setCurrentProject] = useState(projectsData[0]);

  return (
    <div className="relative" style={{ width: "350px", height: "350px" }}>
      {/* Central Circle */}
      <ProjectView project={currentProject} />

      {/* Surrounding Circles */}
      {projectsData.map((project, i) => {
        const angle = (i * 360) / projectsData.length - 90;
        const radius = 175; // same as half of 350px
        const rSmall = 30; // radius of small circle
        const x = radius + (radius+(rSmall*1.5)) * Math.cos((angle * Math.PI) / 180) - rSmall;
        const y = radius + (radius+(rSmall*1.5)) * Math.sin((angle * Math.PI) / 180) - rSmall;

        return (
          <div
            key={i}
            className="absolute p-[3px] rounded-full bg-gradient-to-r from-blue-500 to-black-400"
            style={{
              height: `${rSmall * 2}px`,
              width: `${rSmall * 2}px`,
              top: `${y}px`,
              left: `${x}px`,
            }}
            onMouseEnter={() => setCurrentProject(project)}
          >
            <div className='w-full h-full rounded-full flex justify-center items-center'
            >
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