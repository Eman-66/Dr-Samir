import { FiMapPin, FiPhone, FiClock } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import './Branches.css'

export default function Branches() {
  const branches = [
    {
      name: 'Shobra Branch',
      address: '123 El-Nile Street, Shobra, Cairo',
      phone: '+20 100 123 4567',
      hours: 'Sat - Thu: 10 AM - 8 PM',
      mapLink: 'https://maps.google.com'
    },
    {
      name: 'Maadi Branch',
      address: '456 Road 9, Maadi, Cairo',
      phone: '+20 100 123 4568',
      hours: 'Sat - Thu: 10 AM - 8 PM',
      mapLink: 'https://maps.google.com'
    },
    {
      name: 'Sheikh Zayed Branch',
      address: '789 Al-Gouna, Sheikh Zayed, Giza',
      phone: '+20 100 123 4569',
      hours: 'Sat - Thu: 10 AM - 8 PM',
      mapLink: 'https://maps.google.com'
    }
  ]

  return (
    <section id="branches" className="branches light-bg">
      <div className="container">
        <div className="section-title">
          <span className="subtitle">Visit Us</span>
          <h2>Our Branches</h2>
          <p>Convenient locations across the city</p>
        </div>

        <div className="branches-grid">
          {branches.map((branch, index) => (
            <div key={index} className="branch-card" data-aos="fade-up" data-aos-delay={index * 150}>
              <div className="branch-header">
                <div className="branch-icon">
                  <FiMapPin size={28} />
                </div>
                <h3>{branch.name}</h3>
              </div>

              <div className="branch-details">
                <div className="detail-item">
                  <FiMapPin size={18} />
                  <p>{branch.address}</p>
                </div>

                <div className="detail-item">
                  <FiPhone size={18} />
                  <a href={`tel:${branch.phone}`}>{branch.phone}</a>
                </div>

                <div className="detail-item">
                  <FiClock size={18} />
                  <p>{branch.hours}</p>
                </div>
              </div>

              <div className="branch-actions">
                <a href={branch.mapLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                  View Map
                </a>
                <a href="https://wa.me/201000000000" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
