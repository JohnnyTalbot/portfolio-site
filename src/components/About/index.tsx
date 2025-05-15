import React from 'react'

import Top from '../Top';
import Folder from './Folder';

function About() {
  return (
    <div id='about'>
      <Top currentView="About" />

      {/* Folder Information */}
      <div className='w-full h-screen flex flex-col justify-center items-center'>
        <Folder />
      </div>
    </div>
  )
}

export default About
