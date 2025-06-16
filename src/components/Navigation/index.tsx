import React from 'react'

import Down from './Down'
import HoverText from './HoverText';


interface MyComponentProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  setShowNav: (show: boolean) => void;
  showNav: boolean;
}

function Navigation({currentView, setCurrentView, setShowNav, showNav} : MyComponentProps) {
  return (
    <div 
      id="nav"
      className='absolute h-fullscreen w-full overflow-hidden flex flex-col justify-center items-center'
      style={{
        opacity: showNav ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      <div className='z-0 absolute h-fullscreen w-full' style={{background: "#2F2F2F", opacity: "50%"}}></div>
      <div className='z-10 relative'>
        <h1 className='font-chakra text-5xl md:text-7xl text-center mt-10 xl:mt-40'>Welcome!</h1>
      </div>
      <div 
        className='z-10 relative'
        style={{
          transform: showNav ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        <div className='font-orbitron m-8 px-8 sm:px-10 md:px-24 lg:px-20 py-10 md:py-20 bg-black bg-opacity-30 grid grid-cols-2 gap-x-2 md:gap-x-12 gap-y-5 md:gap-y-10 text-xl md:text-5xl'
          style={{border: "3px solid #5A7AFB"}}>
              <div 
              className='main-text-shadow cursor-pointer w-[200px] md:w-[300px]'
              style={{color: currentView == 'about' ? "#5A7AFB" : "white"}}
              onClick={() => {
                setCurrentView('about')
                setShowNav(false)
              }}
              >
                <HoverText text="About" />
              </div>
              <div 
              className='main-text-shadow cursor-pointer w-[200px] md:w-[300px]'
              style={{color: currentView == 'experience' ? "#5A7AFB" : "white"}}
              onClick={() => {
                setCurrentView('experience')
                setShowNav(false)
              }}
              >
                <HoverText text="Experience" />
              </div>
              <div
              className='main-text-shadow cursor-pointer w-[200px] md:w-[300px]'
              style={{color: currentView == 'projects' ? "#5A7AFB" : "white"}}
              onClick={() => {
                setCurrentView('projects')
                setShowNav(false)
              }}
              >
                <HoverText text="Projects" />
              </div>
              <div 
              className='main-text-shadow cursor-pointer w-[200px] md:w-[300px]'
              style={{color: currentView == 'contact' ? "#5A7AFB" : "white"}}
              onClick={() => {
                setCurrentView('contact')
                setShowNav(false)
              }}
              >
                <HoverText text="Contact" />
              </div>
        </div>
        <svg className='absolute -top-0 left-0' width="64" height="57" viewBox="0 0 64 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1V55.4688H10.7351V10.7073H62.3854V1H1Z" stroke="#5A7AFB" strokeWidth="2"/>
        </svg>
        <svg className='absolute -bottom-0 right-0' width="64" height="57" viewBox="0 0 64 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M62.3853 55.4688V1H52.6501V45.7614H0.999836V55.4688H62.3853Z" stroke="#5A7AFB" strokeWidth="2"/>
        </svg>
      </div>
      <div className='relative md:mb-10 lg:mb-20'>
        <Down />
      </div>
      <div className='absolute bottom-0 mb-1 w-full'>
        <p className='font-chakra text-center text-md md:text-xl'>
          Designed and Developed by Jonathan Talbot
        </p>
      </div>
    </div>
  )
}

export default Navigation
