import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import DoctorCredentials from './pages/DoctorCredentials'
import Services from './pages/Services'
import Branches from './pages/Branches'
import Testimonials from './pages/Testimonials'
import FAQ from './pages/FAQ'
import Booking from './pages/Booking'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import BackToTop from './components/BackToTop'
import MobileActionBar from './components/MobileActionBar'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    })

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <DoctorCredentials />
      <Services />
      <Branches />
      <Testimonials />
      <FAQ />
      <Booking />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
      <MobileActionBar />
    </div>
  )
}

export default App
