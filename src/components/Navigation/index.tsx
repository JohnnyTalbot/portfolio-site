import React from 'react'

import Down from './Down'

interface MyComponentProps {
  currentView: string;
  setCurrentView: Function;
  setShowNav: Function;
}

function Navigation({currentView, setCurrentView, setShowNav} : MyComponentProps) {
  return (
    <div id="nav" className='h-screen w-full overflow-hidden flex flex-col justify-center items-center'>
      <div className='z-0 absolute h-screen w-full' style={{background: "#2F2F2F", opacity: "50%"}}></div>
      <div className='z-10 relative'>
        <h1 className='font-chakra text-5xl md:text-7xl text-center mt-10 xl:mt-40'>Welcome!</h1>
      </div>
      <div className='z-10 relative'>
        <div className='m-8 px-8 sm:px-12 md:px-28 lg:px-32 py-10 md:py-20 bg-black bg-opacity-30 grid grid-cols-2 gap-x-18 md:gap-x-24 gap-y-10 text-4xl md:text-6xl'
          style={{border: "3px solid #5A7AFB"}}>
              <p 
              className='main-text-shadow cursor-pointer hover:underline underline-offset-8 ease-in ease-out duration-75'
              style={{color: currentView == 'about' ? "#5A7AFB" : "white"}}
              onClick={() => {
                setCurrentView('about')
                setShowNav(false)
              }}
              >
                About
              </p>
              <p 
              className='main-text-shadow cursor-pointer hover:underline underline-offset-8 ease-in ease-out duration-75'
              style={{color: currentView == 'experience' ? "#5A7AFB" : "white"}}
              onClick={() => {
                setCurrentView('experience')
                setShowNav(false)
              }}
              >
                Experience
              </p>
              <p 
              className='main-text-shadow cursor-pointer hover:underline underline-offset-8 ease-in ease-out duration-75'
              style={{color: currentView == 'projects' ? "#5A7AFB" : "white"}}
              onClick={() => {
                setCurrentView('projects')
                setShowNav(false)
              }}
              >
                Projects
              </p>
              <p 
              className='main-text-shadow cursor-pointer hover:underline underline-offset-8 ease-in ease-out duration-75'
              style={{color: currentView == 'contact' ? "#5A7AFB" : "white"}}
              onClick={() => {
                setCurrentView('contact')
                setShowNav(false)
              }}
              >
                Contact
              </p>
        </div>
        <svg className='absolute -top-0 left-0' width="64" height="57" viewBox="0 0 64 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1V55.4688H10.7351V10.7073H62.3854V1H1Z" stroke="#5A7AFB" strokeWidth="2"/>
        </svg>
        <svg className='absolute -bottom-0 right-0' width="64" height="57" viewBox="0 0 64 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M62.3853 55.4688V1H52.6501V45.7614H0.999836V55.4688H62.3853Z" stroke="#5A7AFB" strokeWidth="2"/>
        </svg>
      </div>
      <div className='relative'>
        <Down />
      </div>
      <div className='relative mt-auto mb-1'>
        <p className='font-chakra text-center text-md md:text-xl'>
          Designed and Developed by Jonathan Talbot
        </p>
      </div>
    </div>
  )
}

export default Navigation
