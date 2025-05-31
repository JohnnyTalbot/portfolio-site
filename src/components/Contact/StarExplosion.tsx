import React, { useEffect, useRef, useState } from "react";

interface StarExplosionProps {
  position: { top: number; left: number };
  iconSize: number;
  starsShow: boolean;
}

interface StarData {
  x: number;
  y: number;
  id: number;
}

const NUM_STARS = 50;

function StarExplosion ({ position, iconSize, starsShow }: StarExplosionProps) {
  const [stars, setStars] = useState<StarData[]>([]);
  const globalIdRef = useRef(0);

  useEffect(() => {
    if (starsShow) {
      const newStars: StarData[] = Array.from({ length: NUM_STARS }, () => ({
        x: (Math.random() - 0.5) * iconSize * 2.5,
        y: (Math.random() - 0.5) * iconSize * 2.5,
        id: globalIdRef.current++,
      }));
      setStars(newStars);

      const timer = setTimeout(() => setStars([]), 800);
      return () => clearTimeout(timer);
    }
  }, [starsShow, iconSize]);

  return (
    <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none", zIndex: 10 }}>
      {stars.map((star) => (
        <div
          key={star.id}
          className="exploding-star"
          style={{
            position: "absolute",
            top: `${position.top}px`,
            left: `${position.left}px`,
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            backgroundColor: "#FAF570",
            filter: "drop-shadow(0 0 3px white)",
            animation: `fly-away 0.6s ease-out forwards`,
            ["--x" as any]: `${star.x}px`,
            ["--y" as any]: `${star.y}px`,
          }}
        />
      ))}
    </div>
  );
};

export default StarExplosion;
