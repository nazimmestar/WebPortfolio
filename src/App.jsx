import React from 'react';
import Navbar from '@/layout/Navbar';
import Hero from '@/sections/Hero'  ;
import About from '@/sections/About';
import Projects from '@/sections/Projects';
import Experience from '@/sections/Experience';
import Contacts from '@/sections/Contacts';


const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar/>

      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Experience/>
        <Contacts/>
      </main>
      
    </div>
  )
}

export default App