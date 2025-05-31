import React, {useState} from 'react'

import Top from '../Top';
import ProjectList from './ProjectList';

import data from '@/data/projectsData.json'

interface ProjectsProps {
  showNav: boolean;
  currentView: string;
  setCanScroll: Function;
  isMobile: boolean;
}

const projectsData = data as Record<string, any>;

function Projects({showNav, currentView, setCanScroll, isMobile} : ProjectsProps) {
  const [showProject, setShowProject] = useState(false);
  const [currentProject, setCurrentProject] = useState(projectsData[0]);

  return (
    <div 
      id='projects' 
      className='relative w-full h-screen flex flex-col justify-center items-center'
      style={{
        opacity: !showNav && currentView === 'projects' ? 1 : 0,
        transform: !showNav && currentView === 'projects' ? 'translateY(0)' : 'translateY(20px)',
        pointerEvents: !showNav && currentView === 'projects' ? 'auto' : 'none',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
      }}  
    >
      <Top currentView="Projects" />

      {/* MAIN */}
      <div className="w-full h-screen flex justify-center items-center">
        <ProjectList 
          isMobile={isMobile}
          projectsData={projectsData} 
          setCanScroll={setCanScroll} 
          setShowProject={setShowProject}
          setCurrentProject={setCurrentProject}
          currentProject={currentProject}
        />
      </div>
      
      <div
        className="absolute w-full h-screen z-20 flex items-center justify-center"
        style={{
          display: showProject ? "flex" : "none",
        }}
      >
        <div
          className="absolute w-full h-screen z-1"
          style={{
            background: "#2F2F2F",
            opacity: "50%",
            transition: "0.2s ease-in-out",
          }}
          onClick={() => {
            setShowProject(false);
            setCanScroll(true);
          }}
        ></div>

        <div
          className="relative z-10 w-[500px] h-[500px] bg-black bg-opacity-60 border-[3px] border-[#5A7AFB] m-2 p-5"
        >
          <div className='flex flex-row justify-between'>
            <div></div>
            <h2 className="text-xl font-bold text-center">{currentProject.name}</h2>
            <svg width="30" height="30" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer' 
              onClick={() => {
                setShowProject(false);
                setCanScroll(true);
              }}
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M6.58126 5.92488C7.46321 5.04689 8.89297 5.04707 9.77471 5.92527L18.6086 14.7179L27.4537 5.90929C28.3352 5.0308 29.7649 5.03016 30.6472 5.90785C31.5294 6.78554 31.5301 8.20921 30.6486 9.0877L21.8017 17.8982L30.7585 26.9118C31.6402 27.79 31.64 29.2136 30.7581 30.0916C29.8761 30.9696 28.4464 30.9694 27.5646 30.0912L18.6097 21.0795L9.84988 30.0229C8.96843 30.9014 7.53867 30.902 6.65643 30.0243C5.77418 29.1466 5.77354 27.7229 6.65498 26.8445L15.4166 17.8992L6.58087 9.10472C5.69913 8.22653 5.6993 6.80286 6.58126 5.92488Z" fill="white"/>
            </svg>
          </div>
          <img className='my-2 mx-auto min-w-[250px]' alt={currentProject.name} src={currentProject.image} />
          <p className="text-md">{currentProject.description}</p>
          <div className='flex flex-row gap-1 text-md text-gray-50'>
            <p>Technologies:</p>
            <p>{currentProject.skills.join(", ")}</p>
          </div>
          <div className='flex flex-row gap-2 mt-2'>
            {
              currentProject.link ?
              <a href={currentProject.link} target="_blank">
                <svg width="38" height="38" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.1695 13.0708L12.9875 9.88885L18.1344 4.74194C21.942 0.934327 28.1154 0.934328 31.923 4.74194C35.7306 8.54955 35.7306 14.7229 31.923 18.5305L26.7761 23.6774L23.5941 20.4954L28.741 15.3485C30.7913 13.2983 30.7913 9.97417 28.741 7.92392C26.6908 5.87367 23.3666 5.87367 21.3164 7.92392L16.1695 13.0708ZM12.9875 16.2528L8.58847 20.6518C6.53822 22.7021 6.53822 26.0262 8.58847 28.0765C10.6387 30.1267 13.9628 30.1267 16.0131 28.0765L20.4121 23.6774L23.5941 26.8594L19.1951 31.2584C15.3875 35.0661 9.2141 35.0661 5.40649 31.2584C1.59888 27.4508 1.59888 21.2775 5.40649 17.4699L9.80552 13.0708L12.9875 16.2528ZM11.7735 24.8947C10.8948 24.016 10.8948 22.5914 11.7735 21.7127L22.3801 11.1061C23.2588 10.2274 24.6834 10.2274 25.5621 11.1061C26.4408 11.9848 26.4408 13.4094 25.5621 14.2881L14.9555 24.8947C14.0768 25.7734 12.6522 25.7734 11.7735 24.8947Z" fill="white"/>
                </svg>
              </a> :
              <></>
            }
            {
            currentProject.github ? 
              <a href={currentProject.github} target="_blank">
                <svg width="38" height="38" viewBox="0 0 102 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M51 0C44.3026 0 37.6707 1.3254 31.4831 3.90052C25.2955 6.47563 19.6733 10.25 14.9376 15.0082C5.3732 24.6179 0 37.6513 0 51.2414C0 73.89 14.637 93.1055 34.884 99.9206C37.434 100.331 38.25 98.7421 38.25 97.3586V88.6988C24.123 91.7733 21.114 81.8324 21.114 81.8324C18.768 75.8884 15.453 74.3 15.453 74.3C10.812 71.123 15.81 71.2255 15.81 71.2255C20.91 71.5842 23.613 76.5033 23.613 76.5033C28.05 84.292 35.547 81.9862 38.454 80.7564C38.913 77.4257 40.239 75.1711 41.667 73.89C30.345 72.609 18.462 68.2022 18.462 48.6793C18.462 42.9915 20.4 38.431 23.715 34.7929C23.205 33.5118 21.42 28.1827 24.225 21.2652C24.225 21.2652 28.509 19.8816 38.25 26.4918C42.279 25.3645 46.665 24.8008 51 24.8008C55.335 24.8008 59.721 25.3645 63.75 26.4918C73.491 19.8816 77.775 21.2652 77.775 21.2652C80.58 28.1827 78.795 33.5118 78.285 34.7929C81.6 38.431 83.538 42.9915 83.538 48.6793C83.538 68.2535 71.604 72.5578 60.231 73.8388C62.067 75.4273 63.75 78.553 63.75 83.3184V97.3586C63.75 98.7421 64.566 100.382 67.167 99.9206C87.414 93.0543 102 73.89 102 51.2414C102 44.5122 100.681 37.849 98.1179 31.6321C95.5549 25.4152 91.7982 19.7664 87.0624 15.0082C82.3267 10.25 76.7045 6.47563 70.5169 3.90052C64.3293 1.3254 57.6974 0 51 0V0Z" fill="white"/>
                </svg>
              </a>
              : <></>
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects
