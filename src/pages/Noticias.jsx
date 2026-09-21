import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { SectionHead, FadeImg } from '../components/UI.jsx'
import { blogs } from '../data/blogs.js'
import SEO from '../components/SEO.jsx'
import imgHero from '../assets/Schools1.webp'
import './pages.css'

const cats = ['Todas', 'Red', 'Académico', 'Deporte', 'Eventos']

export default function Noticias() {
  const [active, setActive] = useState('Todas')
  const list = useMemo(
    () => active === 'Todas' ? blogs : blogs.filter(n => n.cat === active),
    [active]
  )

  return (
    <div className="page">
      <SEO
        title="Noticias"
        description="Últimas noticias, artículos y novedades de ReinventED Schools sobre educación innovadora, bienestar estudiantil y el crecimiento de nuestra red de colegios."
        path="/noticias"
      />
      {/* Hero */}
      <section className="hero-school" style={{ height: 320 }}>
        <img src={imgHero} alt="Noticias ReinventED" className="hero-school-img" style={{ height: 320, objectFit: 'contain', objectPosition: 'center', background: '#fff', padding: '60px clamp(16px, 28vw, 400px)' }} />
        <div className="hero-school-overlay" />
        {/* <div className="container" style={{ alignItems: 'flex-end', justifyContent: 'center', paddingBottom: 0 }}>
          <div className="hero-yellow" style={{ textAlign: 'center', transform: 'translateY(50%)', position: 'relative', zIndex: 2, width: 'fit-content', margin: '0 auto' }}>
            <strong style={{ fontSize: 'clamp(28px,4vw,42px)', display: 'block', color: 'var(--blue)' }}>Noticias</strong>
            <span style={{ color: 'var(--blue-deep)', fontWeight: 400, fontSize: 'clamp(15px,2vw,18px)' }}>Lo último de la red ReinventED</span>
          </div>
        </div> */}
      </section>

      <section className="section" style={{ paddingTop: 50 }}>
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
              {list[0].img
                ? <FadeImg src={list[0].img} alt={list[0].title} fetchPriority="high" style={{ aspectRatio: '16/10', width: '100%' }} />
                : <div className="img-ph" style={{ aspectRatio: '16/10' }} />}
              <div className="news-feature-body">
                <span className="news-tag">{list[0].cat}</span>
                <span className="news-date">{list[0].date}</span>
                <h3>{list[0].title}</h3>
                <p>{list[0].excerpt}</p>
                <Link to={`/noticias/${list[0].slug}`} className="btn">Leer más</Link>
              </div>
            </article>
          )}

          {/* Grid */}
          <div className="news-grid">
            {list.slice(1).map((n) => (
              <article className="news-card" key={n.slug}>
                {n.img
                  ? <FadeImg src={n.img} alt={n.title} loading="lazy" style={{ aspectRatio: '16/10', width: '100%' }} />
                  : <div className="img-ph" style={{ aspectRatio: '16/10' }} />}
                <div className="news-card-body">
                  <div className="news-meta">
                    <span className="news-tag">{n.cat}</span>
                    <span className="news-date">{n.date}</span>
                  </div>
                  <h4>{n.title}</h4>
                  <p>{n.excerpt}</p>
                  <Link to={`/noticias/${n.slug}`} className="news-link">Leer más →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
