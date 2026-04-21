import React from 'react';
import Navbar from '@/layout/Navbar';
import Hero from '@/sections/Hero'  ;
import About from '@/sections/About';
import Projects from '@/sections/Projects';
import Journey from '@/sections/Journey';
import Contacts from '@/sections/Contacts';
import Footer from '@/layout/Footer';


const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar/>

      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Journey/>
        <Contacts/>
      </main>

      <Footer />
      
    </div>
  )
}

export default App