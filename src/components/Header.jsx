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
      const headerHeight = 60 // Altura aproximada del header
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
    <header id="top-header" className={`navbar-inverse navbar-fixed-top ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div className="navbar-brand">
            <a className="smooth-scroll" onClick={(e) => scrollToSection(e, '#home')} href="#home">
              <img src="/images/logo.png" width="80%" alt="Volarq Logo" />
            </a>
          </div>
        </div>
        <nav className={`collapse navbar-collapse navbar-right ${isMenuOpen ? 'in' : ''}`}>
          <div className="main-menu">
            <ul id="nav" className="nav navbar-nav">
              <li className="scroll">
                <a href="#home" onClick={(e) => scrollToSection(e, '#home')} data-section="#home">
                  Inicio
                </a>
              </li>
              <li className="scroll">
                <a href="#about" onClick={(e) => scrollToSection(e, '#about')} data-section="#about">
                  Nosotros
                </a>
              </li>
              <li className="scroll">
                <a href="#services" onClick={(e) => scrollToSection(e, '#services')} data-section="#services">
                  Servicios
                </a>
              </li>
              <li className="scroll">
                <a href="#portfolio" onClick={(e) => scrollToSection(e, '#portfolio')} data-section="#portfolio">
                  Diseños
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
