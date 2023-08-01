import React from 'react';
import './ProjectsPage.css';

function ProjectsPage() {
  const projects = [
    { id: 1, title: 'Project 1', description: 'Description of Project 1' },
    { id: 2, title: 'Project 2', description: 'Description of Project 2' },
    { id: 3, title: 'Project 3', description: 'Description of Project 3' },
    { id: 2, title: 'Project 4', description: 'Description of Project 4' },
    { id: 2, title: 'Project 5', description: 'Description of Project 5' }

  ];

  return (
    <div className="projects-container"> 
      <h1 className="projects-title">Projects</h1>
      <div className="projects-list">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <a href="#" className="nav-link"><h2 className="project-title">{project.title}</h2></a>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
