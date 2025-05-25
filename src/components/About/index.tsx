import React from 'react'
import { useState } from 'react';

import Top from '../Top';
import Folder from './Folder';
import PictureContainer from './PictureContainer';

type TabKey = 'profile' | 'school' | 'hobbies';

const AboutData: Record<TabKey, {
  title: string;
  content: string;
  image: string;
}> = {
  profile: {
    title: "Profile",
    content: "This is the profile tab content.",
    image: "https://fastly.picsum.photos/id/724/200/200.jpg?hmac=sUKRpiwXopeRQ36cEVnZgrG3Wd73G8iet9dfVSvmi8k"
  },
  school: {
    title: "School",
    content: "This is the school tab content.",
    image: "https://fastly.picsum.photos/id/965/200/200.jpg?hmac=OalaXaaPbpRZbMwF3uJMUdZIpUmyqse0anUnQcbStrM",
  },
  hobbies: {
    title: "Hobbies",
    content: "This is the hobbies tab content.",
    image: "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
  },
};

function About() {
  const [currentTab, setCurrentTab] = useState<TabKey>('profile');
  const [changingTab, setChangingTab] = useState(false);

  return (
    <div id='about'>
      <Top currentView="About" />

      {/* Folder Information */}
      <div className='w-full h-screen flex flex-row justify-center items-center gap-10'>
        <PictureContainer
          currentPicture={AboutData[currentTab].image}
          changingTab={changingTab}
          setChangingTab={setChangingTab}
        />
        <Folder
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          changingTab={changingTab}
          setChangingTab={setChangingTab}
        />
      </div>
    </div>
  )
}

export default About
