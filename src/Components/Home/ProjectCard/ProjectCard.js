import React from "react";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  const { projectName, picture } = props.projectData;
  return (
    <div class="col-md-4">
      <div class="project-card">
        <img src={picture} class="img-fluid" alt="" />
        <div class="profile-name">{projectName}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
