import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import CallToAction from './components/CallToAction'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <div className="homepage" id="home">
      <Header />
      <Hero />
      <About />
      <Services />
      <CallToAction />
      <Portfolio />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
