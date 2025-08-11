//import { useState } from 'react'
import style from './App.module.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Skills from './Components/Skills and Experience/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import TopBtn from './Components/TopBtn/TopBtn';

function App() {
  return (
    <div className={style.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <TopBtn />
    </div>
  )
}

export default App
