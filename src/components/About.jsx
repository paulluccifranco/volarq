const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-intro" data-aos="fade-up">
          <h2 className="section-title-large">La guía en cada medida</h2>
          <p className="section-description">
            Somos un equipo de profesionales dedicados a la arquitectura y el diseño.
            <br />
            Brindamos soluciones integrales para todo tipo de necesidades.
          </p>
        </div>

        <div className="about-content">
          <div className="row">
            <div className="col-md-6" data-aos="fade-right">
              <div className="about-text">
                <h3 className="section-subtitle">Trazamos y proyectamos</h3>
                <p className="section-text">
                  Desde el inicio, guiamos cada paso del proceso con experiencia y compromiso.
                  Nuestra labor es más que diseñar y construir; es proporcionar certeza, claridad y proyección.
                </p>
                <p className="section-text">
                  Somos un estudio enfocado en el diseño de espacios modernos, proyección y dirección de obras.
                  Nuestra especialidad es el diseño de arquitectura moderna, construcción y supervisión de proyectos
                  con altos estándares de calidad que día a día nos esforzamos en mejorar.
                </p>
                <p className="section-text">
                  Permítanos diseñarle de forma personalizada y concreta ese proyecto que tanto ha soñado.
                  Nuestro compromiso es siempre el de satisfacer sus deseos y cumplir a cabalidad sus expectativas.
                </p>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div className="about-image">
                <img className="img-responsive" src="/images/banner3.jpg" alt="Sobre nosotros" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
