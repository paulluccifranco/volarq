import { useState } from 'react'

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const portfolioItems = [
    { id: 1, title: 'RCX2', image: '/images/portfolio/imagen1.jpg' },
    { id: 2, title: 'ELEMENTOS', image: '/images/portfolio/imagen2.jpg' },
    { id: 3, title: 'A60', image: '/images/portfolio/imagen3.jpg' },
    { id: 4, title: 'ROYAL PARK', image: '/images/portfolio/imagen4.jpg' },
    { id: 5, title: 'LA SERENA', image: '/images/portfolio/imagen5.jpg' },
    { id: 6, title: '402', image: '/images/portfolio/imagen6.jpg' },
    { id: 7, title: '1-2-3', image: '/images/portfolio/imagen7.jpg' },
    { id: 8, title: 'LOS MALBONES', image: '/images/portfolio/imagen8.jpg' },
    { id: 9, title: 'EFE', image: '/images/portfolio/imagen9.jpg' },
  ]

  const handleImageClick = (imageSrc, e) => {
    e.preventDefault()
    setSelectedImage(imageSrc)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-intro" data-aos="fade-up">
          <h2 className="section-title-large">Nuestros Trabajos</h2>
          <p className="section-description">
            Con nuestra orientación y conocimiento, cada trazo se transforma en una realidad bien estructurada.
            Tu proyecto merece una planificación precisa, y nosotros estamos aquí para garantizar que así sea.
          </p>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="portfolio-item-modern"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="portfolio-image-wrapper">
                <img className="portfolio-image" src={item.image} alt={item.title} />
                <div className="portfolio-overlay">
                  <h3 className="portfolio-title">{item.title}</h3>
                  <button
                    className="portfolio-btn"
                    onClick={(e) => handleImageClick(item.image, e)}
                    aria-label={`Ver ${item.title}`}
                  >
                    <i className="fa fa-expand"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <button className="modal-close" onClick={closeModal} aria-label="Cerrar">
            <i className="fa fa-times"></i>
          </button>
          <img
            src={selectedImage}
            alt="Portfolio"
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

export default Portfolio
