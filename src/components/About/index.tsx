import React from 'react'
import { useState } from 'react';

import Top from '../Top';
import Folder from './Folder';
import PictureContainer from './PictureContainer';
import { aboutData as data } from '../../data/aboutData';

interface AboutProps {
  showNav: boolean;
  currentView: string;
}

const aboutData = data as Record<string, any>;

function About({showNav, currentView}: AboutProps) {
  const [currentTab, setCurrentTab] = useState('profile');
  const [currentPicture, setCurrentPicture] = useState<string>(aboutData['profile'][0].image);
  const [changingPicture, setChangingPicture] = useState(false);

  return (
    <div 
      id="about"
      style={{
        opacity: !showNav && currentView === 'about' ? 1 : 0,
        transform: !showNav && currentView === 'about' ? 'translateY(0)' : 'translateY(20px)',
        pointerEvents: !showNav && currentView === 'about' ? 'auto' : 'none',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Top currentView="About" />

      {/* Folder Information */}
      <div className="flex-1 flex flex-col md:flex-row justify-evenly items-center gap-5 s:gap-5 md:gap-10 overflow-auto">
        <PictureContainer
          currentPicture={currentPicture}
          changingPicture={changingPicture}
          setChangingPicture={setChangingPicture}
        />
        <Folder
          aboutData={aboutData}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          changingPicture={changingPicture}
          setChangingPicture={setChangingPicture}
          setCurrentPicture={setCurrentPicture}
        />
      </div>
    </div>

  )
}

export default About
