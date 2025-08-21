import React, { useEffect, useState } from 'react';
import Image from 'next/image';
interface PictureContainerProps {
  currentPicture: string;
}

function PictureContainer({ currentPicture }: PictureContainerProps) {
  const [visible, setVisible] = useState(true);
  const [localPicture, setLocalPicture] = useState(currentPicture);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setLocalPicture(currentPicture);
    setVisible(false);
    setTimeout(() => {
      setVisible(true);
    }, 500);
  }, [currentPicture]);

  return (
    <div className='flex flex-row md:flex-col justify-center items-center h-[215px] w-[250px] md:h-[300px] lg:h-[400px] lg:w-[300px]'>
      <div
        className='w-[15px] md:w-full h-full md:h-[15px]'
        style={{ border: "solid #5A7AFB 2px" }}>
      </div>

      <div
        style={{
          position: "relative",
          width: isMobile ? (visible ? "100%" : "0px") : "100%",
          height: isMobile ? "210px" : (visible ? "100%" : "0px"),
          opacity: visible ? 1 : 0,
          transition: "0.5s ease-in-out",
          padding: isMobile ? "6px" : "8px",
          overflow: 'hidden'
        }}
      >
        <Image
          src={localPicture}
          alt="Current"
          width={isMobile ? 250 : 250}
          height={isMobile ? 210 : 280}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: visible ? 1 : 0,
            transition: "0.7s ease-in-out",
          }}
          placeholder="blur"
        />

      </div>


      <div
        className='w-[15px] md:w-full h-full md:h-[15px]'
        style={{ border: "solid #5A7AFB 2px" }}>
      </div>
    </div>
  );
}

export default PictureContainer;
