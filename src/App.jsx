import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import './App.css';
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection';
import mainBg from './assets/mainBg.jpg';
function App() {
  

  return (
    <>
     <div className="h-screen bg-cover bg-center " 
            style={{ backgroundImage: `url(${mainBg})` }}>
      <NavBar/>
      <HeroSection/>
      </div>
    </>
  )
}

export default App
