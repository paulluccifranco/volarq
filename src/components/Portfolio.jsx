import { useState } from 'react'

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('*')
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
    <section id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title text-center" data-aos="fade-down">
            Nuestros Trabajos
          </h2>
        </div>

        <div className="text-center">
          <ul className="portfolio-filter">
            <li>
              <a
                className={selectedFilter === '*' ? 'active' : ''}
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setSelectedFilter('*')
                }}
                data-filter="*"
              >
                Proyectos
              </a>
            </li>
          </ul>
        </div>

        <div className="portfolio-items">
          {portfolioItems.map((item) => (
            <div key={item.id} className="portfolio-item animation">
              <div className="portfolio-item-inner">
                <img className="img-responsive" src={item.image} alt={item.title} />
                <div className="portfolio-info">
                  <h3>{item.title}</h3>
                  <a
                    className="preview"
                    href={item.image}
                    onClick={(e) => handleImageClick(item.image, e)}
                  >
                    <img src="/images/portfolio/expand.png" alt="Expand" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div
          className="image-modal"
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10000,
            cursor: 'pointer',
          }}
        >
          <img
            src={selectedImage}
            alt="Portfolio"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain',
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

export default Portfolio
