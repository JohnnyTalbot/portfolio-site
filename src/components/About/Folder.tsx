import React from 'react';

import Tab from './Tab';
import Content from './Content';

interface FolderProps {
  aboutData: any;
  currentTab: string;
  setCurrentTab: Function;
  changingPicture: boolean;
  setChangingPicture: Function;
  setCurrentPicture: Function;
}

function Folder({aboutData, currentTab, setCurrentTab, changingPicture, setChangingPicture, setCurrentPicture} : FolderProps) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div style={{
        width: "500px",
      }}>
        <Tab
          aboutData={aboutData}
          currentTab={currentTab} 
          setCurrentTab={setCurrentTab} 
          changingPicture={changingPicture}
          setChangingPicture={setChangingPicture}
          setCurrentPicture={setCurrentPicture}
        />
        <div style={{
          height: "350px",
          width: "100%",
          border: "solid #5A7AFB 2px",
          borderTop: "none",
          }}>
            <Content
            aboutData={aboutData}
            currentTab={currentTab}
            setCurrentPicture={setCurrentPicture}
            changingPicture={changingPicture}
            setChangingPicture={setChangingPicture}
          />
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
      >
      </div>
    </div>
  );
};

export default Folder;