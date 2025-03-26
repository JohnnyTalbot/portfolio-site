import React, { useState, useEffect } from "react";
import Star from "./Star";

interface StarExplosionProps {
  position: { top: number; left: number };
  iconSize: number;
  starsShow: boolean;
}

const NUM_STARS = 50;

function StarExplosion({ position, iconSize, starsShow }: StarExplosionProps) {
  const [stars, setStars] = useState<{ direction: { x: number; y: number }; distance: number }[]>([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (starsShow) {
      setStars(
        Array.from({ length: NUM_STARS }, () => ({
          direction: {
            x: (Math.random() - 0.5) * 4,
            y: (Math.random() - 0.5) * 4,
          },
          distance: (Math.random() * iconSize) * 0.7 + iconSize,
        }))
      );

      setTimeout(() => setVisible(true), 50);
    } else {
      setVisible(false);
      setTimeout(() => setStars([]), 300);
    }
  }, [starsShow, iconSize]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
        pointerEvents: "none",
      }}
    >
      {stars.map((star, index) => (
        <Star
          key={index}
          position={position}
          direction={star.direction}
          offset={{ x: 0, y: 0 }}
          distance={star.distance}
        />
      ))}
    </div>
  );
}

export default StarExplosion;
