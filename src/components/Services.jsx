const Services = () => {
  const services = [
    {
      number: '01',
      title: 'Consultoría',
      description: 'Asesoramiento completo en distintos proyectos.',
    },
    {
      number: '02',
      title: 'Diseño 3D',
      description: 'Diseñamos con las últimas tecnologías disponibles.',
    },
    {
      number: '03',
      title: 'Interiorismo',
      description: 'Desarrollo completo de espacios de interior.',
    },
    {
      number: '04',
      title: 'Asesoría online',
      description: 'Manejamos distintas herramientas para mantenernos comunicados desde cualquier lugar del mundo.',
    },
  ]

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-intro" data-aos="fade-up">
          <h2 className="section-title-large">Trazamos y proyectamos</h2>
          <p className="section-description">
            Desde el inicio, guiamos cada paso del proceso con experiencia y compromiso.
            Nuestra labor es más que medir y marcar; es proporcionar certeza, claridad y proyección.
          </p>
        </div>

        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-item" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="service-number">{service.number}</div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta" data-aos="fade-up">
          <a href="#contact" className="btn btn-primary">
            Solicitá tu presupuesto ahora
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
