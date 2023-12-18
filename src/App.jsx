import React from 'react'
import Navbar from './pages/Navbar'
import { Box } from '@mui/material'
import Home from './pages/Home'
import Footer from './pages/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Services from './pages/Services'
import Menu from './pages/Menu'
import Booking from './pages/Booking'
import OurTeam from './pages/OurTeam'
import Testimonial from './pages/Testimonial'
import Contact from './pages/Contact'

const App = () => {
  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/ourteam' element={<OurTeam />} />
        <Route path='/testimonial' element={<Testimonial />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
}

export default App