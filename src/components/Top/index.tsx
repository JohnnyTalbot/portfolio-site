import React from 'react';

interface MyComponentProps {
  currentView: string;
}

function Top({ currentView }: MyComponentProps) {
  return (
    <div className='w-full relative grid grid-cols-3'>
      <p className='text-5xl'>{currentView}</p>
      <div className='flex flex-col justify-center items-center'>
        <p>up</p>
      </div>
    </div>
  );
};

export default Top;