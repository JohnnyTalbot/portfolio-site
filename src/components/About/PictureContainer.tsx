import React, { useEffect, useState } from 'react';

interface PictureContainerProps {
  currentPicture: string;
  changingPicture: boolean;
  setChangingPicture: (value: boolean) => void;
}

function PictureContainer({ currentPicture, changingPicture, setChangingPicture }: PictureContainerProps) {
  const [visible, setVisible] = useState(true);
  const [localPicture, setLocalPicture] = useState(currentPicture);

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
    <div className='flex flex-col justify-center items-center' style={{ width: "250px" }}>
      <div style={{ width: "100%", height: "15px", border: "solid #5A7AFB 2px" }}></div>

      <img
        src={localPicture}
        alt="Current"
        style={{
          width: "100%",
          height: visible ? "280px" : "0px",
          opacity: visible ? 1 : 0,
          objectFit: "cover",
          padding: "8px",
          transition: "0.5s ease-in-out",
        }}
        onTransitionEnd={handleTransitionEnd}
      />

      <div style={{ width: "100%", height: "15px", border: "solid #5A7AFB 2px" }}></div>
    </div>
  );
}

export default PictureContainer;
