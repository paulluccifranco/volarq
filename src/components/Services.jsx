const Services = () => {
  const services = [
    {
      icon: 'fa fa-pencil-square-o',
      title: 'CONSULTORIA',
      description: 'Asesoramiento completo en distintos proyectos.',
      delay: '0ms',
    },
    {
      icon: 'fa fa-cubes',
      title: 'DISEÑO 3D',
      description: 'Diseñamos con las últimas tecnologías disponibles.',
      delay: '100ms',
    },
    {
      icon: 'fa fa-building-o',
      title: 'INTERIORISMO',
      description: 'Desarrollo completo de espacios de interior.',
      delay: '200ms',
    },
    {
      icon: 'fa fa-globe',
      title: 'Asesoría online',
      description: 'Manejamos distintas herramientas para mantenernos comunicados desde cualquier lugar del mundo.',
      delay: '300ms',
    },
  ]

  return (
    <section id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title text-center" data-aos="fade-down">
            Nuestros servicios
          </h2>
          <p className="text-center" data-aos="fade-down">
            Nuestros servicios están enfocados para adaptarse a las distintas necesidades que pueden presentar
            nuestros clientes, ofrecemos grandes resultados y una experiencia de calidad.
          </p>
        </div>

        <div className="row">
          <div className="features">
            {services.map((service, index) => (
              <div
                key={index}
                className="col-sm-6 col-md-3 col-lg-3"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="features-item">
                  <div className="features-icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="features-title font-alt">{service.title}</h3>
                  {service.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
