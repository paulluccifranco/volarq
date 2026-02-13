const Footer = () => {
  return (
    <footer id="footer" className="footer-modern">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Volarq</h3>
            <p>Estudio de arquitectura y diseño</p>
          </div>
          <div className="footer-contact">
            <h4>Contacto</h4>
            <ul className="contact-list">
              <li>
                <a href="mailto:volandoarquitectura@gmail.com">
                  <i className="fa fa-envelope"></i> volandoarquitectura@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/volarq_/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram"></i> @volarq_
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Seguinos</h4>
            <ul className="social-icons">
              <li>
                <a href="https://www.instagram.com/volarq_/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="mailto:volandoarquitectura@gmail.com">
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} VolandoArquitectura. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
