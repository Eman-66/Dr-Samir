import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <span className="subtitle">Get In Touch</span>
          <h2>Contact Us</h2>
          <p>We're here to help and answer any questions you might have</p>
        </div>

        <div className="contact-content">
          <div className="contact-methods" data-aos="fade-right">
            <div className="contact-card">
              <div className="contact-icon">
                <FiPhone size={32} />
              </div>
              <h3>Phone</h3>
              <p>Call us for immediate assistance</p>
              <a href="tel:+201000000000" className="contact-link">+20 100 0000 000</a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FaWhatsapp size={32} />
              </div>
              <h3>WhatsApp</h3>
              <p>Message us anytime</p>
              <a href="https://wa.me/201000000000" target="_blank" rel="noopener noreferrer" className="contact-link">
                Start Chat
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FiMail size={32} />
              </div>
              <h3>Email</h3>
              <p>Send us your inquiry</p>
              <a href="mailto:info@phynxclinic.com" className="contact-link">info@phynxclinic.com</a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FiClock size={32} />
              </div>
              <h3>Hours</h3>
              <p>Saturday - Thursday</p>
              <a href="#" className="contact-link">10 AM - 8 PM</a>
            </div>
          </div>

          <div className="contact-map" data-aos="fade-left">
            <div className="map-placeholder">
              <FiMapPin size={64} />
              <h3>Visit Our Clinics</h3>
              <p>3 Convenient Locations</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View on Map
              </a>
            </div>
          </div>
        </div>

        <div className="social-section" data-aos="fade-up">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://instagram.com/phynx.clinic" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://wa.me/201000000000" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
