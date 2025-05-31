import React, {useState} from 'react';

import Top from '../Top';
import Icon from './Icon';

interface ContactProps {
  showNav: boolean;
  currentView: string;
  isMobile: boolean;
}

const iconMarkers = [
  {icon: "instagram", x: '10%', y: '68%'},
  {icon: "linkedin", x: '30%', y: '35%'},
  {icon: "github", x: '44%', y: '80%'},
  {icon: "phone", x: '65%', y: '55%'},
  {icon: "email", x: '82%', y: '20%'},
]

function Contact({showNav, currentView, isMobile}: ContactProps) {
  const [copied, setCopied] = useState(false);

  return (
    <div 
      id="contact"
      className='w-full h-fullscreen relative flex flex-col'
      style={{
        opacity: !showNav && currentView === 'contact' ? 1 : 0,
        transform: !showNav && currentView === 'contact' ? 'translateY(0)' : 'translateY(20px)',
        pointerEvents: !showNav && currentView === 'contact' ? 'auto' : 'none',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
      }}  
    >
      <Top currentView="Contact" />

      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          opacity: copied ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      >
        <p className="text-2xl">Copied!</p>
      </div>

      <div className='absolute'
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        {iconMarkers.map((marker, index) => (
          <Icon 
            key={index}
            icon={marker.icon}
            className="flex flex-col justify-center items-center translate-x-[-50%] translate-y-[-50%]"
            setCopied={setCopied}
            copied={copied}
            style={{
              position: "absolute",
              zIndex: 20,
              filter: 'drop-shadow(0px 0px 3px #FFFFFF)',
              left: isMobile ? marker.y : marker.x,
              top: isMobile ? `calc(${marker.x} + 50px)` : marker.y,
            }}
            iconStyle={{
              width: "60px",
              height: "auto",
              cursor: "pointer"
            }}
            />
        ))}
      </div>
    </div>
  )
}

export default Contact
