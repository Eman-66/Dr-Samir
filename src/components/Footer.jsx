import { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer primary-bg">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">⚕️</span>
              <h3>Phynx Clinic</h3>
            </div>
            <p>Premium physiotherapy and rehabilitation services. Your recovery is our mission.</p>
            <div className="social-links">
              <a href="https://instagram.com/phynx.clinic" target="_blank" rel="noopener noreferrer">
                <FiInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FiFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FiTwitter />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#branches">Branches</a></li>
              <li><a href="#booking">Book Now</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Physiotherapy</a></li>
              <li><a href="#services">Rehabilitation</a></li>
              <li><a href="#services">Sports Injury</a></li>
              <li><a href="#services">Pain Management</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-item">
              <FiPhone size={18} />
              <a href="tel:+201000000000">+20 100 0000 000</a>
            </div>
            <div className="contact-item">
              <FiMail size={18} />
              <a href="mailto:info@phynxclinic.com">info@phynxclinic.com</a>
            </div>
            <div className="contact-item">
              <FaWhatsapp size={18} />
              <a href="https://wa.me/201000000000" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Phynx Clinic. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
