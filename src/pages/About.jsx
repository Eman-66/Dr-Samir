import { FiHeart, FiTarget, FiAward, FiUsers } from 'react-icons/fi'
import './About.css'

export default function About() {
  const reasons = [
    {
      icon: FiAward,
      title: 'Expert Team',
      description: 'Certified physiotherapists with 10+ years experience'
    },
    {
      icon: FiHeart,
      title: 'Patient First',
      description: 'Personalized treatment plans for each patient'
    },
    {
      icon: FiTarget,
      title: 'Modern Tech',
      description: 'Latest equipment and therapy techniques'
    },
    {
      icon: FiUsers,
      title: 'Community',
      description: 'Join thousands of satisfied patients'
    }
  ]

  return (
    <section id="about" className="about light-bg">
      <div className="container">
        <div className="section-title">
          <span className="subtitle">About Us</span>
          <h2>Why Choose Phynx?</h2>
          <p>We combine expertise, compassion, and innovation to deliver exceptional results</p>
        </div>

        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <h3>Your Recovery is Our Mission</h3>
            <p>
              At Phynx Clinic, we believe in the power of movement and recovery. Our team of expert 
              physiotherapists is dedicated to helping you return to optimal health and performance.
            </p>
            <p>
              With state-of-the-art facilities and personalized treatment plans, we've helped thousands 
              of patients overcome injuries and achieve their wellness goals.
            </p>
            <ul className="benefits-list">
              <li>✓ Evidence-based treatment protocols</li>
              <li>✓ Personalized recovery programs</li>
              <li>✓ Flexible appointment schedules</li>
              <li>✓ Comprehensive follow-up support</li>
            </ul>
          </div>

          <div className="reasons-grid" data-aos="fade-left">
            {reasons.map((reason, index) => (
              <div key={index} className="reason-card" data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="reason-icon">
                  <reason.icon size={32} />
                </div>
                <h4>{reason.title}</h4>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
