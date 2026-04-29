import { FiAward, FiBookOpen, FiCheckCircle, FiFileText, FiShield } from 'react-icons/fi'
import './DoctorCredentials.css'

export default function DoctorCredentials() {
  const credentials = [
    {
      icon: FiAward,
      title: 'Professional Degree',
      description: 'Academic qualification in physiotherapy and rehabilitation care.'
    },
    {
      icon: FiBookOpen,
      title: 'Advanced Training',
      description: 'Specialized training in manual therapy, sports injuries, and pain management.'
    },
    {
      icon: FiShield,
      title: 'Licensed Practice',
      description: 'Clinical practice guided by professional standards and patient safety protocols.'
    },
    {
      icon: FiFileText,
      title: 'Treatment Planning',
      description: 'Personalized assessment reports and structured recovery programs for every case.'
    }
  ]

  return (
    <section id="doctor" className="doctor-credentials">
      <div className="container">
        <div className="section-title">
          <span className="subtitle">Lead Doctor</span>
          <h2>Doctor Credentials & Certifications</h2>
          <p>Professional expertise you can trust throughout your recovery journey</p>
        </div>

        <div className="doctor-layout">
          <div className="doctor-profile" data-aos="fade-right">
            <div className="doctor-badge">
              <FiCheckCircle size={34} />
            </div>
            <span className="doctor-label">Responsible Doctor</span>
            <h3>Lead Physiotherapy Specialist</h3>
            <p>
              The responsible doctor supervises patient assessments, treatment plans, and clinical
              follow-up to make sure every recovery program is clear, measurable, and safe.
            </p>

            <div className="doctor-stats">
              <div>
                <strong>10+</strong>
                <span>Years Experience</span>
              </div>
              <div>
                <strong>4</strong>
                <span>Core Credentials</span>
              </div>
            </div>
          </div>

          <div className="credentials-grid" data-aos="fade-left">
            {credentials.map((credential, index) => (
              <div
                key={credential.title}
                className="credential-card"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="credential-icon">
                  <credential.icon size={28} />
                </div>
                <h4>{credential.title}</h4>
                <p>{credential.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
