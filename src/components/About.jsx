const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title text-center" data-aos="fade-down">
            SOBRE NOSOTROS
          </h2>
          <p className="text-center" data-aos="fade-down">
            Somos un estudio enfocado en el diseño de espacios modernos, proyección y dirección de obras.
            Nuestra especialidad es el diseño de arquitectura moderna, construcción y supervisión de proyectos
            con altos estándares de calidad que día a día nos esforzamos en mejorar. Hoy queremos poner a su
            disposición un gran equipo con amplia experiencia en las diversas áreas involucradas en la edificación
            de obras arquitectónicas, diseño de interiores y diseño de mobiliario. Permítanos diseñarle de forma
            personalizada y concreta ese proyecto que tanto ha soñado. Nuestro compromiso es siempre el de
            satisfacer sus deseos y cumplir a cabalidad sus expectativas.
          </p>
        </div>

        <div className="row">
          <div className="col-sm-6" data-aos="fade-right">
            <h3 className="column-title">A la altura de sus expectativas</h3>
            <p>Nuestro equipo de profesionales está preparado para brindar un servicio de excelencia.</p>
            <p>Ofrecemos distintos servicios para cubrir las necesidades de nuestros clientes.</p>
          </div>
          <div className="col-sm-6" data-aos="fade-left">
            <img className="img-responsive" src="/images/banner3.jpg" alt="Sobre nosotros" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
