import React from "react";
import Image from 'next/image';
import { useState } from 'react';

interface ProjectViewProps {
  isMobile: boolean;
  project: {
    name: string;
    description: string;
    year: number;
    skills: string[];
    image: string;
  };
  radius: number;
  setCanScroll: (canScroll: boolean) => void;
  setShowProject: (show: boolean) => void;
}

function ProjectView({ isMobile, project, setCanScroll, setShowProject, radius }: ProjectViewProps) {
  const [hovered, setHovered] = useState(false);

  const getSkillsText = (skills: string[]) => {
    const combined = skills.join("")
    if (skills.length <= 1) {
      return skills.join("");
    }
    else if (combined.length < 50) {
      return " ".repeat(30) + skills.join(" ".repeat(30));
    } 
    else {
      return " ".repeat(10) + skills.join(" ".repeat(10));
    }
  }

  return (
    <div
  className="absolute inset-0 m-auto bg-black bg-opacity-30 cursor-pointer w-full h-full"
  style={{
    border: "3px solid #5A7AFB",
    borderRadius: "100%",
  }}
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
  onClick={() => {
    setCanScroll(false);
    setShowProject(true);
    }}
>
  {/* Rotating skills around the outside */}
  <div className="absolute w-full h-full animate-spin-slow pointer-events-none">
      {
      Array.from(getSkillsText(project.skills)).map((char, i, arr) => {
        const angle = (360 / arr.length) * i - 90;
        const offset = isMobile ? 7 : 10;
        const x = (radius + offset) * Math.cos((angle * Math.PI) / 180);
        const y = (radius + offset) * Math.sin((angle * Math.PI) / 180);

        return (
          <span
            key={i}
            className="absolute text-white text-xs md:text-sm"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
              transformOrigin: "center",
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
    
    {/* Project name */}
    <div 
      className="absolute w-full h-full inset-0 flex flex-col justify-center items-center text-center text-white rounded-full z-10"
      style={{
        backgroundColor: hovered ? "rgba(0, 0, 0, 0.5)" : "transparent",
        opacity: hovered ? 1 : 0,
        transition: "0.3s ease-in-out",
      }}>
      <h2 className="text-lg font-bold text-center">{project.name}</h2>
      <h3 className="text-md font-bold text-center">{project.year}</h3>
    </div>

    {/* Image in the center */}
    <div className="w-full h-full inset-0 flex justify-center items-center overflow-hidden rounded-full relative">
      <Image
        src={project.image}
        alt={project.name}
        fill
        className="rounded-full object-cover transition-transform duration-300 ease-in-out"
        style={{
          transform: hovered ? "scale(1.05)" : "scale(1)",
        }}
        sizes="100vw"
      />
    </div>
  </div>

  );
}

export default ProjectView;
