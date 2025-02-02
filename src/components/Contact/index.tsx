import React from 'react';

import Icon from './Icon';

const iconMarkers = [
  {icon: "instagram", x: '10%', y: '80%'},
  {icon: "linkedin", x: '25%', y: '40%'},
  {icon: "github", x: '44%', y: '75%'},
  {icon: "phone", x: '68%', y: '60%'},
  {icon: "email", x: '82%', y: '20%'},
]

const starMarkers = [
  {x: '10%', y: '70%'},
  {x: '11%', y: '61%'},
  {x: '13%', y: '52%'},
  {x: '16%', y: '45%'},
  {x: '20%', y: '40%'},
]

function Contact() {
  return (
    <div id="contact"
      className='relative flex justify-center items-center w-screen h-screen'
    >
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
            style={{
              position: "absolute",
              zIndex: 20,
              filter: 'drop-shadow(0px 0px 3px #FFFFFF)',
              left: marker.x,
              top: marker.y,
              transform: 'translate(-50%, -50%)',
              width: "5%",
              height: "auto"
            }}
            />
        ))}

        {starMarkers.map((marker, index) => (
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
        ))}
      </div>
    </div>
  )
}

export default Contact
