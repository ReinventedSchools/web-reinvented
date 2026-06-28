import { Badge } from '../components/Brand.jsx'
import { SectionHead } from '../components/UI.jsx'
import { schools } from '../data/schools.js'
import { Link } from 'react-router-dom'
import imgPuembo from '../assets/Puembo.webp'
import imgIDV from '../assets/IDV.webp'
import imgSantaClara from '../assets/Santa Clara.webp'
import imgRimac from '../assets/Rimac.webp'
import './pages.css'

const sedes = [
  { slug: 'puembo',      name: 'Puembo',      logo: imgPuembo,     since: 'Desde 2020' },
  { slug: 'idv',         name: 'IDV',          logo: imgIDV,        since: 'Desde 2021' },
  { slug: 'santa-clara', name: 'Santa Clara',  logo: imgSantaClara, since: 'Desde 2022' },
  { slug: 'rimac',       name: 'Rímac',        logo: imgRimac,      since: 'Desde 2024' },
]

const jobs = [
  { title: 'Maestro de Educación Física', loc: 'Quito, Ecuador' },
  { title: 'Maestro de Educación Física', loc: 'Quito, Ecuador' },
]

export default function Conocenos() {
  return (
    <div className="page">
      {/* Intro */}
      <section className="section">
        <div className="container conoce-intro">
          <div className="img-ph" style={{ aspectRatio: '3/4', borderRadius: 24 }} />
          <div>
            <div className="dots-row" style={{ justifyContent: 'flex-start', marginTop: 0, marginBottom: 16 }}>
              <i style={{ background: '#9aa0ab' }} />
              <i style={{ background: 'var(--red)' }} />
              <i style={{ background: 'var(--yellow)' }} />
              <i style={{ background: 'var(--blue)' }} />
            </div>
            <h1 style={{ fontSize: 'clamp(30px,4vw,46px)', fontWeight: 600 }}>
              Reinvent<span style={{ color: 'var(--ink)' }}>ED</span>Schools
            </h1>
            <p style={{ color: 'var(--ink-soft)', fontSize: 18, margin: '8px 0 24px' }}>
              El mundo se reinventa, la educación también
            </p>
            <div className="intro-card">
              ReinventED nació del sueño de Ana Cristina Hidalgo y Juan Carlos Pérez de
              transformar la educación desde la autonomía y el propósito. Hoy es una red que
              crece en la región, y demuestra que es posible una educación distinta y
              pertinente para el mundo de hoy.
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra historia */}
      <section className="band-soft section">
        <div className="container">
          <SectionHead title="Nuestra historia" />
          <div className="prose">
            <p>
              ReinventED Schools nace de una visión clara y ambiciosa: transformar la educación
              tradicional para preparar a niños y jóvenes para un mundo que cambia rápidamente.
              Desde el inicio, la tesis fue contundente: no basta con mejorar el sistema
              tradicional; es necesario rediseñarlo. La idea surgió en un contexto en el que muchas
              familias cuestionaban la rigidez de los modelos educativos convencionales y buscaban
              formas más personalizadas, exigentes y significativas de aprender.
            </p>
            <p>
              Los fundadores de ReinventED Schools, Ana Cristina Hidalgo y Juan Carlos Pérez Borja,
              compartían una convicción profunda: la educación debía dejar de ser uniforme para
              convertirse en una experiencia más intencional y centrada en el estudiante. No se
              trataba de flexibilizar sin estructura, sino de construir una propuesta sólida, con
              claridad y altos estándares académicos.
            </p>
            <div style={{ textAlign: 'right' }}><Badge /></div>
          </div>
        </div>
      </section>

      {/* Nuestras sedes */}
      <section className="section">
        <div className="container">
          <SectionHead title="Nuestras sedes" />
          <div className="sedes">
            <div className="sedes-line" />
            {sedes.map(s => (
              <Link to={`/colegios/${s.slug}`} className="sede" key={s.slug}>
                <div className="sede-card">
                  <img src={s.logo} alt={`ReinventED ${s.name}`} className="sede-logo-img" />
                </div>
                <span className="sede-since">{s.since}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trabaja con nosotros */}
      {/* <section className="band-blue section">
        <div className="container">
          <div className="heading-row" style={{ justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <Badge color="yellow" />
              <h2 style={{ color: '#fff', fontWeight: 300, fontSize: 'clamp(24px,3vw,34px)' }}>Trabaja con nosotros</h2>
            </div>
            <div className="carousel-arrows">
              <button>‹</button>
              <button className="y">›</button>
            </div>
          </div>
          <div className="jobs">
            {jobs.map((j, i) => (
              <div className="job-card" key={i}>
                <div className="img-ph" style={{ aspectRatio: '16/9' }} />
                <div className="job-body">
                  <h4>{j.title}</h4>
                  <p className="job-loc">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
                    {j.loc}
                  </p>
                  <p className="job-text">Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore.</p>
                  <button className="btn job-btn">Postular</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  )
}
