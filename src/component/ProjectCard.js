import React from 'react';
import { NavLink } from 'react-router-dom';

const ProjectCard = (props) => {
  return (
    <div>
      <div className="project-card">
        <img src={props.img} alt="project1" />
        <h3 className="project-title">{props.title}</h3>
        <div className="proj-details">
          <p>{props.description}</p>
          <div className="proj-btn">
            <NavLink to={props.view} className="btn">
              View
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard
