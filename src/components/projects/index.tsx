import React from 'react'

import Top from '../Top';
import ProjectList from './ProjectList';

const projectsData = [
  { name: "Project 1", description: "Description of Project 1", skills: ["React", "CSS", "Firebase"], image: "https://fastly.picsum.photos/id/724/200/200.jpg?hmac=sUKRpiwXopeRQ36cEVnZgrG3Wd73G8iet9dfVSvmi8k" },
  { name: "Project 2", description: "Description of Project 2", skills: ["HTML", "JavaScript"], image: "https://picsum.photos/200" },
  { name: "Project 3", description: "Description of Project 3", skills: ["Python", "Machine Learning"], image: "https://fastly.picsum.photos/id/965/200/200.jpg?hmac=OalaXaaPbpRZbMwF3uJMUdZIpUmyqse0anUnQcbStrM" },
  { name: "Project 4", description: "Description of Project 3", skills: ["Wordpress", "PHP", "SQL"], image: "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" },
];

function Projects() {
  return (
    <div id='projects' className='w-full h-screen flex flex-col justify-center items-center'>
      <Top currentView="Projects" />

      {/* MAIN */}
      <div className="w-full h-screen flex justify-center items-center">
        <ProjectList projectsData={projectsData} />
      </div>

    </div>
  )
}

export default Projects
