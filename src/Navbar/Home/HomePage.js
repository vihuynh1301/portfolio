import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <div className="container">
        <section id="about" className="main-content">
          <h2>About Me</h2>
          <p>
            Hi there! I'm Vi, a passionate Computer Science student with a love for coding and technology. I have a strong interest in web development and enjoy creating user-friendly and visually appealing websites.
          </p>
          <p>
            Currently, I'm pursuing a Bachelor's degree in Computer Science, and I'm eager to learn new technologies and contribute to meaningful projects.
          </p>
        </section>

        <section id="projects" className="main-content">
          <h2>Projects</h2>
          <p>
            Here are some of the projects I've been working on:
          </p>
          <ul>
            <li>Project 1: Building a Personal Website</li>
            <li>Project 2: Creating a Todo App</li>
            <li>Project 3: Developing a Recipe Finder</li>
          </ul>
        </section>

        <section id="contact" className="main-content">
          <h2>Contact</h2>
          <p>
            Feel free to reach out to me through the following channels:
          </p>
          <p>Email: vth10@case.edu</p>
          <p>LinkedIn: https://www.linkedin.com/in/vihuynh1301/</p>
        </section>
      </div>

      <footer>
        <p>&copy; {new Date().getFullYear()} Vi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
