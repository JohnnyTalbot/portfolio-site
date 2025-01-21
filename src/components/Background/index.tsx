import React from 'react'

import LineGroup from './LineGroup';
import Line from './Line';

function Background() {
  return (
    <div id="background" className='z-0 absolute h-screen w-full overflow-hidden'>
      <div className="absolute inset-0 flex flex-col gap-10 md:gap-12 lg:gap-16"
          style={{
            transformOrigin: "center",
            transform: "rotate(-45deg)",
            left: "calc(-25vw)",
            top: "calc(-40vh)",
          }}>

        <LineGroup isTop={true}>
          <Line size={1} />
          <Line size={1} />
        </LineGroup>

        <LineGroup>
          <Line size={2} />
          <Line size={4} />
          <Line size={1} />
          <Line size={1} />
        </LineGroup>

        <LineGroup isTop={true}>
          <Line size={4} />
          <Line size={4} />
          <Line size={4} />
          <Line size={2} />
          <Line size={4} />
        </LineGroup>

        <LineGroup>
          <Line size={2} />
          <Line size={4} />
          <Line size={2} />
          <Line size={1} />
        </LineGroup>

        <LineGroup isTop={true}>
          <Line size={2} />
          <Line size={2} />
          <Line size={1} />
        </LineGroup>

        <LineGroup>
          <Line size={1} />
          <div style={{width: "100px"}}></div>
          <Line size={4} />
          <Line size={2} />
          <div style={{width: "650px"}}></div>
        </LineGroup>

        <LineGroup isTop={true}>
          <Line size={2} />
          <div style={{width: "100px"}}></div>
          <Line size={2} />
          <Line size={4} />
          <div style={{width: "200px"}}></div>
          <Line size={2} />
        </LineGroup>

        <LineGroup>
          <Line size={2} />
          <div style={{width: "200px"}}></div>
          <Line size={4} />
          <Line size={4} />
          <Line size={4} />
          <Line size={4} />
          <div style={{width: "250px"}}></div>
        </LineGroup>

        <LineGroup isTop={true}>
          <Line size={4} />
          <Line size={4} />
          <Line size={4} />
          <Line size={1} />
          <div style={{width: "100px"}}></div>
          <Line size={2} />
          <Line size={4} />
          <Line size={4} />
          <div style={{width: "200px"}}></div>
        </LineGroup>

        <LineGroup>
          <Line size={1} />
          <div style={{width: "100px"}}></div>
          <Line size={3} />
          <Line size={1} />
          <div style={{width: "100px"}}></div>
          <Line size={2} />
          <div style={{width: "400px"}}></div>
        </LineGroup>

        <LineGroup isTop={true}>
          <Line size={1} />
          <div style={{width: "80px"}}></div>
          <Line size={2} />
          <div style={{width: "100px"}}></div>
          <Line size={4} />
          <Line size={4} />
          <Line size={4} />
          <div style={{width: "400px"}}></div>
        </LineGroup>

        <LineGroup>
          <Line size={1} />
          <div style={{width: "80px"}}></div>
          <Line size={2} />
          <Line size={2} />
          <div style={{width: "100px"}}></div>
          <Line size={3} />
          <div style={{width: "400px"}}></div>
        </LineGroup>

        <LineGroup isTop={true}>
          <Line size={2} />
          <Line size={4} />
          <Line size={4} />
          <Line size={4} />
          <Line size={2} />
          <Line size={3} />
          <Line size={2} />
          <div style={{width: "100px"}}></div>
        </LineGroup>
        
        <LineGroup>
          <Line size={4} />
          <Line size={4} />
          <Line size={4} />
          <div style={{width: "200px"}}></div>
          <Line size={2} />
          <Line size={3} />
          <div style={{width: "200px"}}></div>
          <Line size={4} />
          <Line size={4} />
          <Line size={4} />
          <div style={{width: "200px"}}></div>
          <Line size={1} />
        </LineGroup>

        <LineGroup isTop={true}>
          <Line size={1} />
          <Line size={2} />
          <Line size={3} />
          <div style={{width: "200px"}}></div>
          <Line size={1} />
          <div style={{width: "200px"}}></div>
          <Line size={2} />
        </LineGroup>
        
        <LineGroup>
          <Line size={2} />
          <Line size={1} />
          <Line size={4} />
          <Line size={4} />
          <Line size={4} />
          <Line size={2} />
          <Line size={3} />
          <Line size={4} />
        </LineGroup>

        <LineGroup isTop={true}>
          <Line size={4} />
          <Line size={4} />
          <Line size={4} />
          <div style={{width: "300px"}}></div>
          <Line size={3} />
          <Line size={1} />
          <Line size={4} />
          <Line size={2} />
          <Line size={3} />
        </LineGroup>

        <LineGroup>
          <Line size={1} />
          <div style={{width: "300px"}}></div>
          <Line size={2} />
          <div style={{width: "200px"}}></div>
          <Line size={1} />
          <Line size={4} />
          <Line size={4} />
          <Line size={4} />
          <Line size={3} />
        </LineGroup>

        <LineGroup isTop={true}>
          <Line size={3} />
          <Line size={2} />
          <div style={{width: "300px"}}></div>
          <Line size={3} />
          <Line size={3} />
          <div style={{width: "200px"}}></div>
          <Line size={3} />
        </LineGroup>

        <LineGroup>
          <Line size={2} />
          <Line size={1} />
          <div style={{width: "200px"}}></div>
          <Line size={1} />
          <Line size={4} />
          <Line size={4} />
          <Line size={4} />
          <div style={{width: "200px"}}></div>
          <Line size={4} />
          <Line size={4} />
          <Line size={4} />
        </LineGroup>

        <LineGroup isTop={true}>
          <Line size={4} />
          <Line size={4} />
          <Line size={4} />
          <Line size={2} />
          <Line size={1} />
          <Line size={2} />
          <Line size={3} />
          <div style={{width: "200px"}}></div>
          <Line size={1} />
        </LineGroup>

        <LineGroup>
          <Line size={1} />
          <Line size={4} />
          <Line size={4} />
          <Line size={4} />
          <div style={{width: "200px"}}></div>
          <Line size={1} />
        </LineGroup>

        <LineGroup isTop={true}>
          <Line size={2} />
          <div style={{width: "200px"}}></div>
          <Line size={3} />
          <Line size={3} />
          <Line size={2} />
        </LineGroup>

        <LineGroup>
          <div style={{width: "100px"}}></div>
          <Line size={3} />
          <Line size={3} />
          <Line size={3} />
          <Line size={2} />
          <div style={{width: "200px"}}></div>
          <Line size={2} />
        </LineGroup>

        <LineGroup isTop={true}>
          <Line size={2} />
          <div style={{width: "400px"}}></div>
          <Line size={3} />
          <Line size={4} />
          <Line size={4} />
          <Line size={4} />
        </LineGroup>
        
        <LineGroup>
          <div style={{width: "400px"}}></div>
          <Line size={1} />
          <Line size={2} />
          <Line size={1} />
        </LineGroup>

      </div>
    </div>
  )
}

export default Background