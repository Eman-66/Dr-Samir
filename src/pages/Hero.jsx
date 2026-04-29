import { useState } from 'react'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import './Hero.css'

export default function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content" data-aos="fade-up">
          <span className="hero-badge">Welcome to Phynx Clinic</span>
          
          <h1>
            Your Path to <span className="gradient-text">Recovery</span> Starts Here
          </h1>
          
          <p className="hero-subtitle">
            Premium physiotherapy and rehabilitation services delivered by expert therapists. 
            Get back to doing what you love.
          </p>

          <div className="hero-features">
            <div className="feature-item">
              <FiCheck className="check-icon" />
              <span>Expert Therapists</span>
            </div>
            <div className="feature-item">
              <FiCheck className="check-icon" />
              <span>Modern Equipment</span>
            </div>
            <div className="feature-item">
              <FiCheck className="check-icon" />
              <span>Proven Results</span>
            </div>
          </div>

          <div className="hero-cta">
            <button onClick={scrollToBooking} className="btn btn-primary btn-lg">
              Book Appointment
              <FiArrowRight />
            </button>
            <button onClick={scrollToContact} className="btn btn-outline btn-lg">
              Contact Us
            </button>
          </div>
        </div>

        <div className="hero-image" data-aos="fade-left">
          <div className="image-placeholder">
            <div className="placeholder-content">
              <span className="placeholder-icon">👨‍⚕️</span>
              <p>Professional Therapy</p>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" data-aos="fade-up" data-aos-delay="200">
        <div className="scroll-wheel"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}
