import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import './components/ui.css'

import Home from './pages/Home.jsx'
import Conocenos from './pages/Conocenos.jsx'
import Transforma from './pages/Transforma.jsx'
import TransformaColegio from './pages/TransformaColegio.jsx'
import TransformaClub from './pages/TransformaClub.jsx'
import School from './pages/School.jsx'
import Noticias from './pages/Noticias.jsx'
import BlogPost from './pages/BlogPost.jsx'
import Buscar from './pages/Buscar.jsx'

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/conocenos" element={<Conocenos />} />
          <Route path="/transforma" element={<Transforma />} />
          <Route path="/transforma/colegio" element={<TransformaColegio />} />
          <Route path="/transforma/club" element={<TransformaClub />} />
          <Route path="/colegios/:slug" element={<School />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticias/:slug" element={<BlogPost />} />
          <Route path="/buscar" element={<Buscar />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
