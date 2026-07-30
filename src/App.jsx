import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import './components/ui.css'

// Route-level code splitting — each page loads only when visited
const Home             = lazy(() => import('./pages/Home.jsx'))
const Conocenos        = lazy(() => import('./pages/Conocenos.jsx'))
const Transforma       = lazy(() => import('./pages/Transforma.jsx'))
const TransformaColegio = lazy(() => import('./pages/TransformaColegio.jsx'))
const TransformaClub   = lazy(() => import('./pages/TransformaClub.jsx'))
const School           = lazy(() => import('./pages/School.jsx'))
const Noticias         = lazy(() => import('./pages/Noticias.jsx'))
const BlogPost         = lazy(() => import('./pages/BlogPost.jsx'))
const Buscar           = lazy(() => import('./pages/Buscar.jsx'))

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function PageLoader() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 36, height: 36, border: '3px solid #e1e3e8', borderTopColor: '#5277bd', borderRadius: '50%', animation: 'spin .7s linear infinite' }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollTop />
      <Navbar />
      <main>
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
