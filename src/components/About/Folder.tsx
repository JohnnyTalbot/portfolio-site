import React from 'react';
import { useState } from 'react';

import Tab from './Tab';

function Folder(){
  const [currentTab, setCurrentTab] = useState('profile');
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <div style={{
        height: "500px",
        width: "400px",
      }}>
        <Tab currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <div style={{
          height: "350px",
          width: "100%",
          border: "solid #5A7AFB 2px",
          borderTop: "none",
          }}>

        </div>
      </div>
    </div>
  );
};

export default Folder;