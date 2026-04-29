import { FiMessageCircle } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import './FloatingWhatsApp.css'

export default function FloatingWhatsApp() {
  const whatsappLink = 'https://wa.me/201000000000?text=Hello%20Phynx%20Clinic!%20I%20would%20like%20to%20book%20an%20appointment.'

  return (
    <div className="floating-whatsapp">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
        <FaWhatsapp size={28} />
      </a>
      <div className="whatsapp-tooltip">
        Chat with us
      </div>
    </div>
  )
}
