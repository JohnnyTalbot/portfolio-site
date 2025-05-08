import React from "react";

interface ProjectViewProps {
  project: {
    name: string;
    description: string;
    image: string;
  };
}

function ProjectView({ project }: ProjectViewProps) {
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
      <img 
        src={project.image}
        alt={project.name} 
        className="rounded-full w-full h-full object-cover"
        />
    </div>
  );
}

export default ProjectView;
