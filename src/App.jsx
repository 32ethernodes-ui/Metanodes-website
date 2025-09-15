import { useState } from 'react'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Hero from './components/Hero.jsx'
import './App.css'
import Vision from './components/Vision.jsx'
import Roadmap from './components/Roadmap.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Header />
      <Hero />
      <About />
      <Vision/>
      <Roadmap/>
      <Footer/>
    </>
  )
}

export default App
