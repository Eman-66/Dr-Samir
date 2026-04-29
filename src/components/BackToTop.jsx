import { useState, useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import './BackToTop.css'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <button
      className={`back-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <FiArrowUp size={20} />
    </button>
  )
}
