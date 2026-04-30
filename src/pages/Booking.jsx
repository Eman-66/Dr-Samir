import { useState } from 'react'
import { FiCheck } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import './Booking.css'

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    branch: '',
    service: '',
    date: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const branches = ['Shobra', 'Maadi', 'Sheikh Zayed']
  const services = ['Physiotherapy', 'Rehabilitation', 'Sports Injury', 'Pain Management', 'Preventive Care']

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', branch: '', service: '', date: '' })
    }, 3000)
  }

  return (
    <section id="booking" className="booking light-bg">
      <div className="container">
        <div className="section-title">
          <span className="subtitle">Get Started</span>
          <h2>Book Your Appointment</h2>
          <p>Schedule your session in just a few clicks</p>
        </div>

        <div className="booking-content">
          <div className="booking-form-wrapper" data-aos="fade-right">
            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="01050727008"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="branch">Branch</label>
                  <select
                    id="branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a branch</option>
                    {branches.map(branch => (
                      <option key={branch} value={branch}>{branch}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="date">Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                {submitted ? (
                  <>
                    <FiCheck /> Booking Confirmed!
                  </>
                ) : (
                  'Book Appointment'
                )}
              </button>
            </form>
          </div>

          <div className="booking-info" data-aos="fade-left">
            <div className="info-card">
              <h3>Need Immediate Assistance?</h3>
              <p>Contact us directly via WhatsApp or phone for instant booking and support.</p>
              
              <a href="https://wa.me/201050727008?text=Hi%20Phynx%20Clinic!%20I%20would%20like%20to%20book%20an%20appointment" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="btn btn-secondary btn-block">
                <FaWhatsapp /> Chat on WhatsApp
              </a>

              <a href="tel:01050727008" className="btn btn-outline btn-block">
                Call Now
              </a>
            </div>

            <div className="info-card">
              <h3>How It Works</h3>
              <ol className="steps-list">
                <li><span className="step-number">1</span> Fill the form</li>
                <li><span className="step-number">2</span> Select your branch</li>
                <li><span className="step-number">3</span> Choose service & date</li>
                <li><span className="step-number">4</span> Get confirmation</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
