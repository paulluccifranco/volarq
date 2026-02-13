const WhatsAppButton = () => {
  return (
    <div id="wa" className="wa__widget_container">
      <div className="wa__btn_popup" style={{ left: 'unset', right: '30px' }}>
        <div
          className="wa__btn_popup_txt"
          style={{
            display: 'none',
            left: 'unset',
            right: '100%',
            marginRight: '7px',
            marginLeft: '0px',
            width: '156px',
          }}
        >
          <span></span>
        </div>
        <a href="https://api.whatsapp.com/send?phone=5492355576130&text=Hola,%20me comunico%20por%">
          <div className="wa__btn_popup_icon" style={{ background: 'rgb(45, 183, 66)' }}></div>
        </a>
      </div>
    </div>
  )
}

export default WhatsAppButton
