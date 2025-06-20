import React from 'react';
interface ArrowProps {
  direction?: 'back' | 'forward';
  setCurrentPicture: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}
const Arrow: React.FC<ArrowProps> = ({ direction = 'forward', setCurrentPicture }) => {
  const rotation = direction === 'back' ? -90 : 90;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#5A7AFB"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: `rotate(${rotation}deg)`, cursor: 'pointer' }}
      onClick={setCurrentPicture}
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <polyline points="19 12 12 5 5 12"></polyline>
    </svg>
  );
};


export default Arrow;