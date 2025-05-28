import React from 'react'
import { useState } from 'react';

import Top from '../Top';
import Folder from './Folder';
import PictureContainer from './PictureContainer';
import data from '../../data/aboutData.json';

type TabKey = 'profile' | 'school' | 'hobbies';

const aboutData = data as Record<string, any>;

function About() {
  const [currentTab, setCurrentTab] = useState<TabKey>('profile');
  const [currentPicture, setCurrentPicture] = useState<string>(aboutData['profile'][0].image);
  const [changingPicture, setChangingPicture] = useState(false);

  return (
    <div id='about'>
      <Top currentView="About" />

      {/* Folder Information */}
      <div className='w-full h-screen flex flex-col md:flex-row justify-evenly justify-center items-center gap-2 s:gap-5 md:gap-10'>
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
