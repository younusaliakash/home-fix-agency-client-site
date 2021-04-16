import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import './RecentProjects.css'

const recentProjectData = [
    {
        projectName: "Cras tristique purus non lacus",
        picture: "https://homefix.kinsta.cloud/wp-content/uploads/2014/01/gallery-img-1.jpg"
    },
    {
        projectName: "Duis fermentum felis",
        picture: "https://homefix.kinsta.cloud/wp-content/uploads/2014/01/gallery-img-2.jpg"
    },
    {
        projectName: "Quisque id maximus leo",
        picture: "https://homefix.kinsta.cloud/wp-content/uploads/2014/01/gallery-img-3.jpg"
    },
    {
        projectName: "Proin venenatis felis.",
        picture: "https://homefix.kinsta.cloud/wp-content/uploads/2014/01/gallery-img-4.jpg"
    },
    {
        projectName: "Aenean vitae enim rhoncus",
        picture: "https://homefix.kinsta.cloud/wp-content/uploads/2014/01/gallery-img-5.jpg"
    },
    {
        projectName: "Donec in maximus augue",
        picture: "https://homefix.kinsta.cloud/wp-content/uploads/2014/01/gallery-img-6.jpg"
    },
]

const RecentProjects = () => {
  return (
    <div className="recent-projects">
      <div className="title-container">
        <div className="section-title">
          <h1>
            <span>RECENT PROJECTS</span>
          </h1>
          <h6>A Small Gallery of Us</h6>
        </div>
      </div>
      <div className="container projects">
          <div className="row">
              {
                  recentProjectData?.map( projectData => <ProjectCard projectData={projectData}/>)
              }
          </div>
      </div>
    </div>
  );
};

export default RecentProjects;
