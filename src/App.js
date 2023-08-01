import './App.css';
import Navbar from './Navbar/Navbar';
import HomePage from './Navbar/Home/HomePage';
import ExperiencePage from './Navbar/Experience/ExperiencePage';
import ContactPage from './Navbar/Contact/ContactPage';
import ProjectsPage from './Navbar/Projects/ProjectsPage';
import AboutPage from './Navbar/About/AboutPage';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Vi's Portfolio</h1>
        <p>Computer Science Student</p>
      </header>

      <Navbar /> 
      <HomePage />
      <AboutPage/>
      <ExperiencePage />
      <ProjectsPage />
      <ContactPage />

      {/* <footer>
        <p>&copy; {new Date().getFullYear()} Vi. All rights reserved.</p>
      </footer> */}
    </div>
  );
}

export default App;
