import { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.querySelector(sectionId)
    if (element) {
      const headerHeight = 70
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      setIsMenuOpen(false)
    }
  }

  return (
    <header id="top-header" className={`header-modern ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a className="smooth-scroll" onClick={(e) => scrollToSection(e, '#home')} href="#home">
              <img src="/images/logo.png" alt="Volarq Logo" />
            </a>
          </div>
          <button
            type="button"
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li>
                <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>
                  Quienes Somos
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollToSection(e, '#services')}>
                  Servicios
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => scrollToSection(e, '#portfolio')}>
                  Diseños
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
