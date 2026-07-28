import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Smiley, Logo, Badge } from '../components/Brand.jsx'
import { SectionHead, ContactForm } from '../components/UI.jsx'
import imgSchoolJoy from '../assets/schoolJoy.webp'
import imgPersonal from '../assets/Home/personalgro.webp'
import imgAcademic from '../assets/academic.webp'
import imgPuembo from '../assets/Puembo.webp'
import imgSantaClara from '../assets/Santa Clara.webp'
import imgRimac from '../assets/Rimac.webp'
import imgIDV from '../assets/IDV.webp'
import imgImplementa from '../assets/implementa.webp'
import imgHero from '../assets/home/Foto principal.webp'
import imgRedefiniendo from '../assets/home/Redefiniendo.webp'
import imgformulario from '../assets/home/formulario.webp'
import imgPuemboJardin from '../assets/sedes/puemboJardin.webp'
import imgSantaClaraShoot from '../assets/sedes/ReinventEDSantaClaraShoot.webp'
import imgBeyond from '../assets/aliados/beyond-education.webp'
import imgCCR from '../assets/aliados/Center-for-Curriculum-Redesign.webp'
import imgDevMinds from '../assets/aliados/developing minds.webp'
import imgInnovamat from '../assets/aliados/Innovamat.webp'
import imgL11 from '../assets/aliados/Learning-one-to-one.webp'
import imgIAI from '../assets/aliados/Logo_IAI.webp'
import imgMTC from '../assets/aliados/Mastery-Transcript-Consortium.webp'
import imgPenGs from '../assets/aliados/pen gs.webp'
import imgRedSolare from '../assets/aliados/red-solare.webp'
import imgVeriii from '../assets/aliados/veriii_ac-2-02_0.png.webp'
import './home.css'

const allies = [
  { img: imgBeyond, name: 'Beyond Education' },
  { img: imgCCR, name: 'Center for Curriculum Redesign' },
  { img: imgDevMinds, name: 'Developing Minds' },
  { img: imgInnovamat, name: 'Innovamat' },
  { img: imgL11, name: 'Learning One to One' },
  { img: imgIAI, name: 'IAI' },
  { img: imgMTC, name: 'Mastery Transcript Consortium' },
  { img: imgPenGs, name: 'Pen GS' },
  { img: imgRedSolare, name: 'Red Solare' },
  { img: imgVeriii, name: 'Veriii' },
]

const ALLIES_PER_PAGE = 4
const ALLIES_PAGES = Math.ceil(allies.length / ALLIES_PER_PAGE)

const campusDots = [
  { name: 'Puembo', color: '#2bae8c', to: '/colegios/puembo', img: imgPuembo },
  { name: 'Santa Clara', color: '#9fc131', to: '/colegios/santa-clara', img: imgSantaClara },
  { name: 'Rímac', color: '#4fa3d1', to: '/colegios/rimac', img: imgRimac },
  { name: 'IDV', color: '#e5007e', to: '/colegios/idv', img: imgIDV },
]

const stats = [
  { n: '4', label: 'Campus' },
  { n: '723', label: 'Estudiantes' },
  { n: '136', label: 'Graduados' },
  { n: '2', label: 'Países' },
]

const formula = [
  { t: 'School Joy', c: '#5277bd' },
  { t: 'Personal Growth', c: '#5277bd' },
  { t: 'Academic Growth', c: '#5277bd' },
]

export default function Home() {
  const [alliesPage, setAlliesPage] = useState(0)
  const [counts, setCounts] = useState(stats.map(() => 0))
  const statsRef = useRef(null)
  const animatedRef = useRef(false)

  useEffect(() => {
    const id = setInterval(() => setAlliesPage(p => (p + 1) % ALLIES_PAGES), 3000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const targets = stats.map(s => parseInt(s.n, 10))
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || animatedRef.current) return
      animatedRef.current = true
      const duration = 1800
      const start = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCounts(targets.map(t => Math.round(t * eased)))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const start = alliesPage * ALLIES_PER_PAGE
  const visibleAllies = Array.from({ length: ALLIES_PER_PAGE }, (_, i) => allies[(start + i) % allies.length])

  return (
    <div className="page">
      {/* ---------------- HERO ---------------- */}
      <section className="hero">
        <img src={imgHero} alt="ReinventED" className="hero-img" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <h1 className="hero-title" style={{ fontFamily: "'Aller Display', sans-serif" }}>every student succeeds</h1>
        </div>
        <div className="hero-tabs-wrap">
          <div className="hero-tabs">
            <Link to="/transforma" className="htab">
              <Badge /> Sistema ReinventED
            </Link>
            <Link to="/conocenos" className="htab active">
              <Badge /> Red de colegios
            </Link>
            <Link to="/transforma/club" className="htab">
              <Badge /> ReinventED en tu club
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- CONOCE LA RED ---------------- */}
      <section className="section conoce">
        <div className="container">
          <SectionHead title="Conoce la red" align="center" />
          <div className="conoce-logo"><Logo height={40} /></div>
          <div className="campus-row">
            {campusDots.map(c => (
              <Link to={c.to} key={c.name} className="campus-link">
                <img src={c.img} alt={`ReinventED ${c.name}`} className="campus-logo-img" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- REDEFINIENDO EL ÉXITO ---------------- */}
      <section className="section-tight">
        <div className="container">
          <SectionHead title="Redefiniendo el éxito" align="center" />
          <div className="redefine">
            <img src={imgRedefiniendo} alt="Redefiniendo el éxito" className="redefine-img" />
            <div className="redefine-card">
              <h3>El mundo se reinventa, la educación también.</h3>
              <p>
                Somos una red de colegios que combina personalización, autonomía y altos estándares
                académicos para preparar a niños y jóvenes para el futuro. Nuestro modelo educativo ha
                sido reconocido internacionalmente y hoy forma parte del Top 10 de los World’s Best
                School Prizes en la categoría Supporting Healthy Lives, uno de los reconocimientos más
                prestigiosos de la educación a nivel mundial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- UNA RED EN CRECIMIENTO ---------------- */}
      <section className="section">
        <div className="container">
          <SectionHead title="Una red en crecimiento" />
          <div className="stats" ref={statsRef}>
            <svg className="stats-svg" viewBox="0 0 100 30" preserveAspectRatio="none" aria-hidden="true">
              <path
                d="M 0,15 H 18 Q 25,22 31,15 H 43 Q 50,22 57,15 H 69 Q 75,22 82,15 H 100"
                fill="none" stroke="#5277bd" strokeWidth="1.5" vectorEffect="non-scaling-stroke"
              />
            </svg>
            {stats.map((s, i) => (
              <div className="stat" key={i}>
                <div className="stat-circle">{counts[i]}</div>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- NUESTRA FÓRMULA ---------------- */}
      <section className="section formula-sec">
        <div className="container">
          <h2 className="formula-title" style={{ fontFamily: "'Aller Display'", fontWeight: 300 }}>every student succeeds</h2>
          <div className="formula-cards">
            <div className="formula-card">
              <img src={imgSchoolJoy} alt="School Joy" style={{ width: '100%', aspectRatio: '1 / 1.05', objectFit: 'cover', display: 'block' }} />
              <div className="formula-card-label">School Joy</div>
            </div>
            <div className="formula-plus">+</div>
            <div className="formula-card">
              <img src={imgPersonal} alt="Personal Growth" style={{ width: '100%', aspectRatio: '1 / 1.05', objectFit: 'cover', display: 'block' }} />
              <div className="formula-card-label">Personal Growth</div>
            </div>
            <div className="formula-plus">+</div>
            <div className="formula-card">
              <img src={imgAcademic} alt="Academic Growth" style={{ width: '100%', aspectRatio: '1 / 1.05', objectFit: 'cover', display: 'block' }} />
              <div className="formula-card-label">Academic Growth</div>
            </div>
          </div><br></br>
          <div style={{ textAlign: 'center', marginTop: 8 }}>
            <Link to="/transforma" className="btn" style={{ fontSize: 20 }}>Conoce nuestra fórmula</Link>
          </div>

        </div>
      </section>

      {/* ---------------- ALIADOS ---------------- */}
      <section className="section-tight">
        <div className="container">
          <SectionHead title={<>Nuestros <b style={{ color: 'var(--ink)', fontWeight: 600 }}>aliados en transformación</b> educativa</>} />
          <div className="allies" key={alliesPage}>
            {visibleAllies.map((ally, i) => (
              <div className="ally" key={i}>
                <img src={ally.img} alt={ally.name} className="ally-img" />
              </div>
            ))}
          </div>
          <div className="dots-row">
            {Array.from({ length: ALLIES_PAGES }).map((_, i) => (
              <i key={i} className={i === alliesPage ? 'active' : ''} onClick={() => setAlliesPage(i)} style={{ cursor: 'pointer' }} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- APLICA A COLEGIOS PRIVADOS ---------------- */}
      <section id="habilidades-futuro" className="section">
        <div className="container">
          <div className="apply-band">
            <div className="heading-row" style={{ marginBottom: 28 }}>
              <Badge color="yellow" />
              <h2 style={{ color: '#fff', fontWeight: 500, fontSize: 'clamp(28px,3vw,38px)',marginLeft: 3 }}>
                Las habilidades del futuro están cambiando.<br/>
                ¿Tus hijos estarán preparados?
              </h2>
            </div>
            <div className="apply-cards">
              <ApplyCard ed="#2bae8c" name="Puembo" to="/colegios/puembo" img={imgPuemboJardin} logo={imgPuembo} />
              <ApplyCard ed="#9fc131" name="Santa Clara" to="/colegios/santa-clara" img={imgSantaClaraShoot} logo={imgSantaClara} />
            </div>
            <h3 className="display apply-cta">Aplica a nuestros colegios privados</h3>
            
          </div>
        </div>
      </section>
      <div style={{ textAlign: 'center', marginTop: 20 }}>
              <Link to="/transforma" className="btn-conoce-sistema">
                Conoce más del sistema ReinventED
              </Link>
            </div>

      {/* ---------------- IMPLEMENTA EN TU CLUB ---------------- */}
      <section className="section">
        <div className="container">
          <div className="implementa">
            <div>
              <div className="heading-row" style={{ alignItems: 'flex-start' }}>
                <Badge />
                <h2 className="h-light" style={{ color: 'var(--ink-soft)', fontWeight: 300 }}>
                  Implementa el sistema<br/>
                  <b style={{ color: 'var(--ink-soft)', fontWeight: 700 }}>ReinventED</b> en tu<br/>
                  club deportivo o colegio
                </h2>
              </div>
              <ContactForm />
            </div>
            <img src={imgformulario} alt="Implementa ReinventED" className="implementa-img" />
          </div>
        </div>
      </section>
    </div>
  )
}

function ApplyCard({ ed, name, to, img, logo }) {
  return (
    <Link to={to} className="apply-card">
      <img src={img} alt={`ReinventED ${name}`} className="apply-card-img" />
      <div className="apply-card-foot">
        <img src={logo} alt={`Logo ${name}`} className="apply-card-logo" />
      </div>
    </Link>
  )
}
