import React from 'react';
interface FolderProps {
  currentTab: string;
  setCurrentTab: Function;
  changingTab: boolean;
  setChangingTab: Function;
}

import Tab from './Tab';

function Folder({currentTab, setCurrentTab, changingTab, setChangingTab} : FolderProps) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div style={{
        width: "500px",
      }}>
        <Tab
          currentTab={currentTab} 
          setCurrentTab={setCurrentTab} 
          changingTab={changingTab}
          setChangingTab={setChangingTab}
        />
        <div style={{
          height: "350px",
          width: "100%",
          border: "solid #5A7AFB 2px",
          borderTop: "none",
          }}>

        </div>
      </div>
      <div
      style={{
        marginLeft: "auto",
        marginTop: "10px",
        width: "250px",
        height:"15px",
        border: "solid #5A7AFB 2px",
      }}
      ></div>
    </div>
  );
};

export default Folder;