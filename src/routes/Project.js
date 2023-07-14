import React from 'react'
import Navbar from '../component/Navbar';
import "../component/ProjectStyle.css";
import ProjectCard from '../component/ProjectCard';
import allProjectData from '../component/allProject';

const Project = () => {
  return (
    <div>
      <Navbar />;
      <div className="container">
        <h1 className="project-heading">PROJECTS</h1>
        <span className="bar"></span>
        <div className="project-container">
          {
            allProjectData.map((val, index) => {
              return (
                <ProjectCard 
                key = {index}
                img = {val.img}
                title = {val.title}
                description = {val.description}
                view = {val.view}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Project
