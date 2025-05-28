import React, {useState} from 'react';

import Top from '../Top';
import Icon from './Icon';

interface ContactProps {
  isMobile: boolean;
}

const iconMarkers = [
  {icon: "instagram", x: '10%', y: '68%'},
  {icon: "linkedin", x: '30%', y: '35%'},
  {icon: "github", x: '44%', y: '80%'},
  {icon: "phone", x: '65%', y: '55%'},
  {icon: "email", x: '82%', y: '20%'},
]

const starMarkers = [
  {x: '10%', y: '70%'},
  {x: '11%', y: '61%'},
  {x: '13%', y: '52%'},
  {x: '16%', y: '45%'},
  {x: '20%', y: '40%'},
]

function Contact({isMobile}: ContactProps) {
  const [copied, setCopied] = useState(false);

  return (
    <div id="contact"
      className='w-full h-screen relative flex flex-col'
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
              top: isMobile ? marker.x : marker.y,
            }}
            iconStyle={{
              width: "60px",
              height: "auto",
              cursor: "pointer"
            }}
            />
        ))}

        {/* {starMarkers.map((marker, index) => (
          <div 
          key={index}
          style={{
            position: "absolute",
            left: marker.x,
            top: marker.y,
            transform: 'translate(-50%, -50%)',
            borderRadius: "100%",
            backgroundColor: "#FAF570",
            filter: 'drop-shadow(0px 0px 3px #FFFFFF)',
            width: "5px",
            height: "5px",
          }}></div>
        ))} */}
      </div>
    </div>
  )
}

export default Contact
