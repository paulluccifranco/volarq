const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <br />
            <ul className="social-icons text-center">
              <li>
                <a href="https://www.instagram.com/volarq_/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram"></i> Volarq_
                </a>
              </li>
              <li>
                <a href="mailto:volandoarquitectura@gmail.com?subject=Contacto&body=Este%20es%20el%20cuerpo%20del%20mensaje">
                  <i className="fa fa-envelope"></i> volandoarquitectura@gmail.com
                </a>
              </li>
              <br />
              <br />
            </ul>
            <p className="text-center">&copy; 2021 VolandoArquitectura</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
