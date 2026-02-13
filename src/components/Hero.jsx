const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="container">
          <div className="hero-text" data-aos="fade-up">
            <h1 className="hero-title">Diseñamos tu espacio ideal</h1>
            <p className="hero-subtitle">
              Somos un estudio de arquitectura y diseño de la ciudad de La Plata.
              <br />
              Brindamos soluciones integrales para todo tipo de necesidades.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">
                Solicitá tu presupuesto ahora
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/slider/slider.jpg" alt="Volarq Arquitectura" />
      </div>
    </section>
  )
}

export default Hero
