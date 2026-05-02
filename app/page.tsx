import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Values from './components/Values'
import Careers from './components/Careers'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery'
import Info from './components/Info'
import BookingSection from './components/BookingSection'

function page() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Values />
      <Reviews />
      <Gallery />
      <Info />
      <Careers />
      <BookingSection />
    </div>
  )
}

export default page