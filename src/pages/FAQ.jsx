import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import './FAQ.css'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: 'How long does a typical therapy session last?',
      answer: 'Most sessions are 45-60 minutes, depending on your treatment plan and condition. Initial assessments may take longer.'
    },
    {
      question: 'Do I need a referral from my doctor?',
      answer: 'No referral is required, but we recommend consulting your doctor first. We also accept referrals and work closely with physicians.'
    },
    {
      question: 'What should I bring to my first appointment?',
      answer: 'Please bring any relevant medical reports, imaging results, and a list of current medications. Arrive 15 minutes early to complete initial paperwork.'
    },
    {
      question: 'How many sessions will I need?',
      answer: 'Treatment duration varies based on your condition. After the assessment, we\'ll provide a personalized treatment plan with estimated session frequency.'
    },
    {
      question: 'Do you accept insurance?',
      answer: 'We accept most insurance plans. Please contact us to verify your coverage or discuss payment options.'
    },
    {
      question: 'Can I book online?',
      answer: 'Yes! You can book appointments through our website or call us directly. We offer online consultations as well.'
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq light-bg">
      <div className="container">
        <div className="section-title">
          <span className="subtitle">Questions?</span>
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about our services</p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <FiChevronDown className="faq-icon" />
              </button>

              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
