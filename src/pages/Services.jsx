import { FiActivity, FiTrendingUp, FiZap, FiShield, FiRefreshCw, FiTarget } from 'react-icons/fi'
import './Services.css'

export default function Services() {
  const services = [
    {
      icon: FiActivity,
      title: 'Physiotherapy',
      description: 'Comprehensive physical therapy to improve mobility and strength'
    },
    {
      icon: FiRefreshCw,
      title: 'Rehabilitation',
      description: 'Post-injury recovery programs tailored to your needs'
    },
    {
      icon: FiZap,
      title: 'Sports Injury',
      description: 'Specialized treatment for athletes and active individuals'
    },
    {
      icon: FiTarget,
      title: 'Pain Management',
      description: 'Evidence-based techniques to reduce chronic pain'
    },
    {
      icon: FiTrendingUp,
      title: 'Performance',
      description: 'Optimize your physical performance and prevent injuries'
    },
    {
      icon: FiShield,
      title: 'Preventive Care',
      description: 'Proactive treatment to maintain long-term health'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <span className="subtitle">Our Services</span>
          <h2>Comprehensive Treatment Options</h2>
          <p>Expert care for every condition and recovery goal</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="service-icon">
                <service.icon size={40} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="learn-more">Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
