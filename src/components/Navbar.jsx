import { useState } from 'react'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'
import logo from '../assets/phynx-logo.jpg'
import './Navbar.css'

export default function Navbar({ scrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const scrollToSection = (id) => {
    setMobileOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Phynx Clinic logo" className="logo-image" />
          <span className="logo-text">Phynx</span>
        </div>

        <div className={`nav-menu ${mobileOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('doctor')} className="nav-link">Doctor</button>
          <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
          <button onClick={() => scrollToSection('branches')} className="nav-link">Branches</button>
          <button onClick={() => scrollToSection('testimonials')} className="nav-link">Reviews</button>
          <button onClick={() => scrollToSection('faq')} className="nav-link">FAQ</button>
          <button onClick={() => scrollToSection('booking')} className="nav-link">Book Now</button>
        </div>

        <div className="navbar-cta">
          <a href="tel:01050727008" className="contact-info">
            <FiPhone size={18} />
            <span>01050727008</span>
          </a>
          <button onClick={() => scrollToSection('booking')} className="btn btn-primary btn-sm">
            Book
          </button>
        </div>

        <button
          className={`mobile-toggle ${mobileOpen ? 'active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </nav>
  )
}
