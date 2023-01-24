import React from "react";

function ProjectItem({ name, about, technologies }) {

  const technologynames = technologies.map((technology) => {
    <span key={technology.id}>{technology.name}</span>;
    })
  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
      {technologynames}
      </div>
    </div>
  );
}

export default ProjectItem;
