import './App.css';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
// import WorkExperience from './components/WorkExperience/WorkExperience';

function App() {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <section id="home">
          <Hero/>
        </section>
        <section id="skills">
          <Skills/>
        </section>
        <section id="projects">
          <Projects/>
        </section>
        {/* <section id="work-experience">
          <WorkExperience/>
        </section> */}
        <section id="contact-me">
          <ContactMe/>
        </section>
      </div>
      <Footer/>
    </>
  );
}

export default App;
