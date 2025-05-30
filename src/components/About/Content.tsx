import React, {useState} from 'react';

import Arrow from './Arrow';

interface ContentProps {
  aboutData: any;
  currentTab: string;
  setCurrentPicture: Function;
  changingPicture: boolean;
  setChangingPicture: Function;
}

function Content({aboutData, currentTab, setCurrentPicture, changingPicture, setChangingPicture }: ContentProps) {
  const [currentLevel, setCurrentLevel] = useState(0);

  if (currentTab === 'profile') {
    return (
      <div className='flex flex-col p-5'>
        <h1 className='mb-1 md:mb-3 text-lg md:text-2xl font-bold'>Profile</h1>
        <p className='text-xl md:text-3xl'>{aboutData['profile'][0].name}</p>
        <p className='mb-1 md:mb-3 text-xs md:text-sm text-gray-500'>Born: {aboutData['profile'][0].birthday}</p>
        <p className='text-sm md:text-md'>{aboutData['profile'][0].content}</p>
      </div>
    );
  }
  else if (currentTab === 'school') {
    return (
      <>
        {aboutData['school'].map((school: any, index: number) => (
          <div
            key={index}
            className='relative h-full min-h-[250px] flex flex-col p-5'
            style={{
              display: currentLevel === index ? 'flex' : 'none',
              transition: 'display 0.3s ease-in-out',
            }}
          >
            <h1 className='mb-1 md:mb-3 text-lg md:text-2xl font-bold'>Education</h1>
            <p className='mb-2 text-xs md:text-sm text-gray-500'>{school.level}</p>
            <p className='text-lg md:text-2xl'>{school.school}</p>
            <p className='mb-1 md:mb-3 text-xs md:text-sm text-gray-500'>{school.date}</p>
            <p className='text-sm md:text-md'>{school.course ? school.course : "" }</p>
            <p className='text-sm md:text-md'>{school.specialization ? `Specialization: ${school.specialization}` : "" }</p>

            <div className='absolute bottom-0 right-0 flex justify-end items-center gap-5 p-2'>
              <Arrow 
                direction="back"
                setCurrentPicture={() => {
                  if (changingPicture) return;
                  const prevIndex = index > 0 ? index - 1 : aboutData['school'].length - 1;
                  setCurrentPicture(aboutData['school'][prevIndex].image);
                  setCurrentLevel(prevIndex);
                  setChangingPicture(true);
                }}
              />

              <Arrow 
                direction="forward"
                setCurrentPicture={() => {
                  if (changingPicture ) return;
                  const nextIndex = index < aboutData['school'].length - 1 ? index + 1 : 0;
                  setCurrentPicture(aboutData['school'][nextIndex].image);
                  setCurrentLevel(nextIndex);
                  setChangingPicture(true);
                }}
              />

            </div>
          </div>
        ))}
      </>
    );
  }
  else if (currentTab === 'hobbies') {
    return (
      <>
        {aboutData['hobbies'].map((hobby: any, index: number) => (
          <div
            key={index}
            className='relative h-full min-h-[250px] flex flex-col p-5'
            style={{
              display: currentLevel === index ? 'flex' : 'none',
              transition: 'display 0.3s ease-in-out',
            }}
          >
            <h1 className='mb-1 md:mb-3 text-lg md:text-2xl font-bold'>Hobbies</h1>
            <p className='text-lg md:text-2xl'>{hobby.hobby}</p>
            <p className='text-sm md:text-md'>{hobby.content}</p>

            <div className='absolute bottom-0 right-0 flex justify-end items-center gap-5 p-2'>
              <Arrow 
                direction="back"
                setCurrentPicture={() => {
                  if (changingPicture) return;
                  const prevIndex = index > 0 ? index - 1 : aboutData['hobbies'].length - 1;
                  setCurrentPicture(aboutData['hobbies'][prevIndex].image);
                  setCurrentLevel(prevIndex);
                  setChangingPicture(true);
                }}
              />

              <Arrow 
                direction="forward"
                setCurrentPicture={() => {
                  if (changingPicture ) return;
                  const nextIndex = index < aboutData['hobbies'].length - 1 ? index + 1 : 0;
                  setCurrentPicture(aboutData['hobbies'][nextIndex].image);
                  setCurrentLevel(nextIndex);
                  setChangingPicture(true);
                }}
              />

            </div>
          </div>
        ))}
      </>
    );
  }
  else {
    return (
      <div className='flex flex-col p-5'>
        <h1 className='text-2xl font-bold'>???</h1>
        <p>How did this even happen</p>
        <p>tung tung tung sahur</p>
      </div>
    );
  }
}

export default Content;