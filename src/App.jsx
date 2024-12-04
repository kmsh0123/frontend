import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import OurService from './components/OurService'
import Contact from './components/Contact'
import TopArrow from './components/TopArrow'
import Chatbot from './components/Chatbot'


const App = () => {
  return (
    <div className='w-full'>
      <Navbar/>
      <HeroSection/>
      <OurService/>
      <Contact/>
      <TopArrow/>
      <Chatbot/>
    </div>
  )
}

export default App