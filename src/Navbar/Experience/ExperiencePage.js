import React from 'react';
import './ExperiencePage.css';

function ExperiencePage() {
  const experiences = [
    {
      id: 1,
      company: 'ABC Tech Solutions',
      location: 'New York, USA',
      position: 'Web Developer Intern',
      website: 'https://www.abc-tech.com',
      description: 'Worked on front-end development using React and assisted in building responsive web applications.',
    },
    {
      id: 2,
      company: 'XYZ Software',
      location: 'San Francisco, USA',
      position: 'Software Engineer',
      website: 'https://www.xyzsoftware.com',
      description: 'Contributed to the development of a large-scale software product using Java and Spring framework.',
    },
  ];

  return (
      <div className="container">
        <section className="main-content">
          <h2>Work Experience</h2>
          {experiences.map((experience) => (
            <div key={experience.id} className="experience-item">
              <h3>{experience.company}</h3>
              <p>{experience.position}</p>
              <p>{experience.location}</p>
              <p><a href={experience.website} target="_blank" rel="noopener noreferrer">Website</a></p>
              <p>{experience.description}</p>
            </div>
          ))}
        </section>
      </div>
  );
}

export default ExperiencePage;
