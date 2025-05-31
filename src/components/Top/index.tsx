import React from 'react';

interface MyComponentProps {
  currentView: string;
}

function Top({ currentView }: MyComponentProps) {
  return (
    <div className='w-full relative grid grid-cols-3'>
      <p className='text-3xl md:text-5xl p-2'>{currentView}</p>
      <div className='flex flex-col justify-center items-center space-y-1 mt-2'>
        <svg
          className="animate-arrow-up"
          style={{ animation: "arrowFloatUp 1s linear infinite" }}
          width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M11.0269 0.610055C11.8405 -0.203352 13.1595 -0.203352 13.9731 0.610055L24.3898 11.0243C25.2034 11.8377 25.2034 13.1565 24.3898 13.9699C23.5762 14.7834 22.2571 14.7834 21.4435 13.9699L12.5 5.02846L3.55647 13.9699C2.74288 14.7834 1.42379 14.7834 0.610194 13.9699C-0.203398 13.1565 -0.203398 11.8377 0.610194 11.0243L11.0269 0.610055Z" fill="#5A7AFB"/>
        </svg>
        <svg
          className="animate-arrow-up"
          style={{ animation: "arrowFloatUp 1s linear infinite"}}
          width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M11.0269 0.610055C11.8405 -0.203352 13.1595 -0.203352 13.9731 0.610055L24.3898 11.0243C25.2034 11.8377 25.2034 13.1565 24.3898 13.9699C23.5762 14.7834 22.2571 14.7834 21.4435 13.9699L12.5 5.02846L3.55647 13.9699C2.74288 14.7834 1.42379 14.7834 0.610194 13.9699C-0.203398 13.1565 -0.203398 11.8377 0.610194 11.0243L11.0269 0.610055Z" fill="#5A7AFB"/>
        </svg>
      </div>
    </div>
  );
};

export default Top;