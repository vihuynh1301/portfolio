import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div>

      <div className="container">
        <section className="main-content">
          <h2>Personal Information</h2>
          <p>
            Hi, I'm [Your Name], a Computer Science student with a passion for technology and software development.
            I enjoy creating innovative solutions and building user-friendly applications.
          </p>
          <p>
            [Add more personal information here, like your interests, hobbies, and goals in computer science.]
          </p>

          <h2>Education</h2>
          <p>
            [Your Degree], [University/Institution], [Year of Graduation]
          </p>
          <p>
            [Add details about your education, relevant coursework, or any academic achievements.]
          </p>

          <h2>Positions</h2>
          <p>
            [Company/Organization], [Location], [Position], [Start Date] - [End Date]
          </p>
          <p>
            [Add information about any relevant positions you have held, internships, or research experience.]
          </p>

          <div className="resume-section">
            <h2>Resume</h2>
            <p>
              [Add a brief description about your resume and encourage visitors to download it.]
            </p>
            <a href="/path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
