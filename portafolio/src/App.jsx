import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Proyectos from './components/Proyectos.jsx'
import SobreMi from './components/SobreMi.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Proyectos />
        <SobreMi />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
