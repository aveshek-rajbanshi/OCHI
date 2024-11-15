import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eye from './components/Eye'
import Feature from './components/Feature'
import Cards from './components/cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';



function App() {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white overflow-hidden'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eye />
      <Feature />
      <Cards />
      <Footer />
    </div>
  )
}

export default App