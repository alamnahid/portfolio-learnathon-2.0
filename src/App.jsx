
import { Element } from 'react-scroll'
import './App.css'
import AboutMe from './Components/About/AboutMe'
import Banner from './Components/Banner/Banner'
import Projects from './Components/My Projects/Projects'
import Navbar from './Components/Navbar/Navbar'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import GithubStats from './Components/Github Stats/GithubStats'
import Education from './Components/Education/Education'
import Footer from './Components/Footer/Footer'
import ExtraCurriCularActivities from './Components/ExtraCurricularActivities/ExtraCurriCularActivities'

function App() {
  useEffect(()=>{
    AOS.init();
}, [])
  return (
    <>
      <Navbar />
      <Banner />
      <Element name="about">
      <AboutMe />
      </Element>
      <Element name="education">
      <Education/>
      </Element>
      <Element name="skills">
      <Skills />
      </Element>
      <Element name="projects">
      <Projects />
      </Element>
      
      {/* <GithubStats/> */}
      {/* <ExtraCurriCularActivities/> */}

      <Element name="contact">
      <Contact/>
      </Element>

      <Footer/>

      

     

    </>
  )
}

export default App
