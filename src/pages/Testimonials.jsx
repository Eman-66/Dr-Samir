import { FiStar } from 'react-icons/fi'
import './Testimonials.css'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ahmed Hassan',
      title: 'Patient',
      rating: 5,
      text: 'Excellent service! The therapists at Phynx are highly professional. I recovered from my sports injury much faster than expected.',
      image: '👨‍💼'
    },
    {
      name: 'Fatima Mohamed',
      title: 'Patient',
      rating: 5,
      text: 'The facilities are world-class and the staff is incredibly caring. Phynx truly transformed my recovery journey.',
      image: '👩‍💼'
    },
    {
      name: 'Karim Al-Rashid',
      title: 'Patient',
      rating: 5,
      text: 'I was skeptical at first, but the personalized treatment plan worked wonders. Highly recommended!',
      image: '👨‍💼'
    },
    {
      name: 'Noor Abdullah',
      title: 'Patient',
      rating: 5,
      text: 'The therapists explained everything clearly and made me feel comfortable. Best decision I made for my health.',
      image: '👩‍💼'
    }
  ]

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-title">
          <span className="subtitle">Patient Stories</span>
          <h2>What Our Patients Say</h2>
          <p>Real stories from real people who've recovered with Phynx</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="testimonial-text">"{testimonial.text}"</p>

              <div className="testimonial-author">
                <span className="author-avatar">{testimonial.image}</span>
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
