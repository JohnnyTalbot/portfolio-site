import React from 'react'

import ProjectList from './ProjectList';

const projectsData = [
  { name: "Project 1", description: "Description of Project 1", image: "https://fastly.picsum.photos/id/724/200/200.jpg?hmac=sUKRpiwXopeRQ36cEVnZgrG3Wd73G8iet9dfVSvmi8k" },
  { name: "Project 2", description: "Description of Project 2", image: "https://picsum.photos/200" },
  { name: "Project 3", description: "Description of Project 3", image: "https://fastly.picsum.photos/id/965/200/200.jpg?hmac=OalaXaaPbpRZbMwF3uJMUdZIpUmyqse0anUnQcbStrM" },
  { name: "Project 3", description: "Description of Project 3", image: "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" },
];

function Projects() {
  return (
    <div>
      {/* TOP */}
      <div className='w-full relative grid grid-cols-3'>
        <p className='text-5xl'>Projects</p>
        <div className='flex flex-col justify-center items-center'>
          <p>up</p>
        </div>
      </div>

      {/* MAIN */}
      <div className="w-full h-screen flex justify-center items-center">
        <ProjectList projectsData={projectsData} />
      </div>

    </div>
  )
}

export default Projects
