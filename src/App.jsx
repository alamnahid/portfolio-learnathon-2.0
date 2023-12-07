
import { Element } from 'react-scroll'
import './App.css'
import AboutMe from './Components/About/AboutMe'
import Banner from './Components/Banner/Banner'
import Projects from './Components/My Projects/Projects'
import Navbar from './Components/Navbar/Navbar'
import Skills from './Components/Skills/Skills'

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Element name="about">
      <AboutMe />
      </Element>
      <Skills />
      <Projects />

    </>
  )
}

export default App
