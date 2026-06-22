import { useState } from 'react'
import { SectionHead } from '../components/UI.jsx'
import './pages.css'

const cats = ['Todas', 'Red', 'Académico', 'Deporte', 'Eventos']

const news = [
  { cat: 'Red', date: '12 jun 2026', title: 'ReinventED Rímac inicia su primer año académico en Perú', excerpt: 'El nuevo campus en la Ciudad Deportiva La Florida abre sus puertas a los futbolistas del Club Sporting Cristal.' },
  { cat: 'Académico', date: '03 jun 2026', title: 'Nuevos grados superiores se abrirán en el período 2026-2027', excerpt: 'La red amplía su oferta con la apertura progresiva de 10th, 11th y 12th grade en sus campus.' },
  { cat: 'Deporte', date: '28 may 2026', title: 'Estudiantes-atletas de IDV compiten en torneo internacional', excerpt: 'El modelo flexible permite a los jóvenes adaptarse a sus viajes sin interrumpir su proceso educativo.' },
  { cat: 'Eventos', date: '15 may 2026', title: 'Jornada de puertas abiertas en ReinventED Santa Clara', excerpt: 'Las familias del Valle de los Chillos conocieron de cerca el Sistema ReinventED.' },
  { cat: 'Académico', date: '02 may 2026', title: 'Presentamos la plataforma de progreso medible', excerpt: 'Una herramienta propia para monitorear avance académico y desarrollo de competencias esenciales.' },
  { cat: 'Red', date: '20 abr 2026', title: 'ReinventED supera los 700 estudiantes en la región', excerpt: 'Un crecimiento sostenido e intencional que cuida la personalización y los altos estándares.' },
]

export default function Noticias() {
  const [active, setActive] = useState('Todas')
  const list = active === 'Todas' ? news : news.filter(n => n.cat === active)

  return (
    <div className="page">
      {/* Hero */}
      <section className="hero-school" style={{ height: 320 }}>
        <div className="img-ph hero-school-img" style={{ height: 320 }} />
        <div className="hero-school-overlay" />
        <div className="container">
          <div className="hero-quote" style={{ maxWidth: 620 }}>
            <strong style={{ fontSize: 'clamp(28px,4vw,42px)', display: 'block' }}>Noticias</strong>
            Lo último de la red ReinventED
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead title="Últimas publicaciones" />

          <div className="news-cats">
            {cats.map(c => (
              <button key={c} className={`news-cat ${active === c ? 'on' : ''}`} onClick={() => setActive(c)}>{c}</button>
            ))}
          </div>

          {/* Featured */}
          {list[0] && (
            <article className="news-feature">
              <div className="img-ph" style={{ aspectRatio: '16/10' }} />
              <div className="news-feature-body">
                <span className="news-tag">{list[0].cat}</span>
                <span className="news-date">{list[0].date}</span>
                <h3>{list[0].title}</h3>
                <p>{list[0].excerpt}</p>
                <button className="btn">Leer más</button>
              </div>
            </article>
          )}

          {/* Grid */}
          <div className="news-grid">
            {list.slice(1).map((n, i) => (
              <article className="news-card" key={i}>
                <div className="img-ph" style={{ aspectRatio: '16/10' }} />
                <div className="news-card-body">
                  <div className="news-meta">
                    <span className="news-tag">{n.cat}</span>
                    <span className="news-date">{n.date}</span>
                  </div>
                  <h4>{n.title}</h4>
                  <p>{n.excerpt}</p>
                  <a href="#" className="news-link">Leer más →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
