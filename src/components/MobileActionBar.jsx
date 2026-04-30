import { FiCalendar, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import './MobileActionBar.css'

export default function MobileActionBar() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="mobile-action-bar" aria-label="Quick actions">
      <button type="button" onClick={scrollToBooking} className="mobile-action primary">
        <FiCalendar size={18} />
        <span>Book</span>
      </button>
      <a href="tel:01050727008" className="mobile-action">
        <FiPhone size={18} />
        <span>Call</span>
      </a>
      <a
        href="https://wa.me/201050727008?text=Hello%20Phynx%20Clinic!%20I%20would%20like%20to%20book%20an%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-action whatsapp"
      >
        <FaWhatsapp size={18} />
        <span>WhatsApp</span>
      </a>
    </div>
  )
}
