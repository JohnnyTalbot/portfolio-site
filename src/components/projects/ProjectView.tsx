import React from "react";

interface ProjectViewProps {
  project: {
    name: string;
    description: string;
    skills: string[];
    image: string;
  };
}

function ProjectView({ project }: ProjectViewProps) {

  const getSkillsText = (skills: string[]) => {
    let combined = skills.join("")
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
  className="absolute inset-0 m-auto bg-black bg-opacity-30"
  style={{
    height: "350px",
    width: "350px",
    border: "3px solid #5A7AFB",
    borderRadius: "100%",
  }}
>
  {/* Rotating text around the outside */}
  <div className="absolute w-full h-full animate-spin-slow pointer-events-none">
      {
      Array.from(getSkillsText(project.skills)).map((char, i, arr) => {
        const radius = 185; // Slightly more than 175 (outer of 350px)
        const angle = (360 / arr.length) * i - 90;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <span
            key={i}
            className="absolute text-white text-s"
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

    {/* Image in the center */}
    <img
      src={project.image}
      alt={project.name}
      className="rounded-full w-full h-full object-cover"
    />
  </div>

  );
}

export default ProjectView;
