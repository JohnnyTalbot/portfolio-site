import React, { useState, useEffect } from 'react'

interface starProps {
  position: { top: number; left: number; }
  direction: { x: number; y: number };
  offset: { x: number; y: number };
  distance: number;
}

function Star({ position, direction, offset, distance }: starProps) {
  const [starPosition, setStarPosition] = useState(position);
  const [hasMoved, setHasMoved] = useState(false);
  
  useEffect(() => {
    if (hasMoved) return;

    const moveStar = setInterval(() => {
      setStarPosition(prevPosition => {
        // Calculate the distance moved so far
        const distanceMoved = Math.sqrt(
          Math.pow(prevPosition.top - position.top, 2) + Math.pow(prevPosition.left - position.left, 2)
        );

        // If the star has moved the desired distance, stop the animation
        if (distanceMoved >= distance) {
          clearInterval(moveStar);
          setHasMoved(true);
          return prevPosition;
        }

        // Otherwise, continue moving the star
        return {
          top: prevPosition.top + direction.y,
          left: prevPosition.left + direction.x,
        };
      });
    }, 10);

    return () => clearInterval(moveStar);
  }, [direction, position, distance, hasMoved]);

  return (
    <div
      style={{
        position: "absolute",
        top: `${starPosition.top + offset.y}px`,
        left: `${starPosition.left + offset.x}px`,
        transform: 'translate(-50%, -50%)',
        borderRadius: "100%",
        backgroundColor: "#FAF570",
        filter: 'drop-shadow(0px 0px 3px #FFFFFF)',
        width: "5px",
        height: "5px",
        zIndex: 10,
        opacity: 1,
        transition: "all 0.3s ease",
      }}
    />
  );
};

export default Star;