import React, { useEffect, useState } from 'react';

interface PictureContainerProps {
  currentPicture: string;
  changingPicture: boolean;
  setChangingPicture: (value: boolean) => void;
}

function PictureContainer({ currentPicture, changingPicture, setChangingPicture }: PictureContainerProps) {
  const [visible, setVisible] = useState(true);
  const [localPicture, setLocalPicture] = useState(currentPicture);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (changingPicture) {
      setVisible(false);
    }
  }, [changingPicture]);

  const handleTransitionEnd = () => {
    if (!visible) {
      setLocalPicture(currentPicture);
      setVisible(true);
    } else {
      setChangingPicture(false);
    }
  };

  return (
    <div className='flex flex-row md:flex-col justify-center items-center' style={{ width: "250px" }}>
      <div
        className='w-[15px] md:w-full h-full md:h-[15px]'
        style={{ border: "solid #5A7AFB 2px" }}>
      </div>

      <img
        src={localPicture}
        alt="Current"
        style={{
          width: isMobile ? (visible ? "100%" : "0px") : "100%",
          height: isMobile ? "210px" : (visible ? "280px" : "0px"),
          opacity: visible ? 1 : 0,
          objectFit: "cover",
          padding: isMobile ? "6px" : "8px",
          transition: "0.5s ease-in-out",
        }}
        onTransitionEnd={handleTransitionEnd}
      />

      <div
        className='w-[15px] md:w-full h-full md:h-[15px]'
        style={{ border: "solid #5A7AFB 2px" }}>
      </div>
    </div>
  );
}

export default PictureContainer;
