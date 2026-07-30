import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Badge } from '../components/Brand.jsx'
import { SectionHead } from '../components/UI.jsx'
import SEO from '../components/SEO.jsx'
import imgSistema from '../assets/sistema/sistema.webp'
import imgAutonomous from '../assets/habilidades/Autonomous.webp'
import imgCollaborator from '../assets/habilidades/collaborator.webp'
import imgCommunicator from '../assets/habilidades/communicator.webp'
import imgConflict from '../assets/habilidades/conflict.webp'
import imgLogical from '../assets/habilidades/logical reasoner.webp'
import imgLoveLearning from '../assets/habilidades/Love for learning.webp'
import imgRealWorld from '../assets/habilidades/real world.webp'
import imgWellbeing from '../assets/habilidades/wellbeing.webp'
import imgPersonal from '../assets/sistema/progresomeible.jpeg'
import imgTransformaArt from '../assets/sistema/transforma.png'
import imgSchoolJoy from '../assets/schoolJoy.webp'
import imgPersonalGro from '../assets/Home/personalgro.webp'
import imgAcademic from '../assets/academic.webp'
import './pages.css'

const combine = [
  { t: 'Desarrollo de autonomía', badge: 'gray' },
  { t: 'Bienestar en el ambiente escolar', badge: 'yellow' },
  { t: 'Personalización con altos estándares', badge: 'red' },
  { t: 'Desarrollo académico y de habilidades del siglo XXI', badge: '' },
]

const exito = [
  {
    img: null,
    t: 'Disfrute escolar',
    d: 'Gusto por aprender, sentirse parte de una comunidad y encontrar propósito en la experiencia educativa.',
  },
  {
    img: null,
    t: 'Crecimiento personal',
    d: 'Desarrollar autonomía, confianza y las habilidades necesarias para enfrentar los desafíos de la vida real.',
  },
  {
    img: null,
    t: 'Crecimiento académico',
    d: 'Construir conocimientos sólidos y desarrollar el pensamiento crítico para comprender y transformar el mundo.',
  },
]
const exitoImgs = [imgSchoolJoy, imgPersonalGro, imgAcademic]

const habilidades = [
  { img: imgAutonomous,    name: 'Autonomous' },
  { img: imgCollaborator,  name: 'Propositive collaborator' },
  { img: imgCommunicator,  name: 'Communicator' },
  { img: imgConflict,      name: 'Conflict resolution' },
  { img: imgLogical,       name: 'Logical reasoner' },
  { img: imgLoveLearning,  name: 'Love for learning' },
  { img: imgRealWorld,     name: 'Real world' },
  { img: imgWellbeing,     name: 'Wellbeing steward' },
]

const HAB_PER_PAGE = 4
const HAB_PAGES = Math.ceil(habilidades.length / HAB_PER_PAGE)

const diff = [
  { t: '1. Sistema innovador', d: 'Operamos bajo un diseño estructurado y coherente que integra las mejores prácticas pedagógicas a nivel mundial dentro de parámetros claros.' },
  { t: '2. Personalización con altos estándares', d: 'Adaptamos el aprendizaje sin bajar la exigencia, combinando flexibilidad con metas académicas rigurosas y seguimiento constante.' },
  { t: '3. Autonomía como competencia medible', d: 'No es un valor abstracto. Se establecen metas claras, se observa el progreso y se evalúa con criterios definidos.' },
  { t: '4. Modelo replicable', d: 'El sistema está diseñado para adaptarse a distintos contextos sin perder profundidad, coherencia ni estándares.' },
]

export default function Transforma() {
  const [habPage, setHabPage] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setHabPage(p => (p + 1) % HAB_PAGES), 3000)
    return () => clearInterval(id)
  }, [])

  const habStart = habPage * HAB_PER_PAGE
  const visibleHab = Array.from({ length: HAB_PER_PAGE }, (_, i) => habilidades[(habStart + i) % habilidades.length])

  return (
    <div className="page">
      <SEO
        title="Sistema ReinventED"
        description="El Sistema ReinventED combina personalización, autonomía y altos estándares académicos para que every student succeeds. Descubre nuestro modelo educativo innovador."
        path="/transforma"
      />
      {/* Hero quote */}
      <section className="hero-school">
        <img src={imgSistema} alt="Sistema ReinventED" className="hero-school-img" />
        <div className="hero-school-overlay" />
      </section>

      <div className="hero-quote-outer">
        <div className="hero-quote">
          Según el <b>Foro Económico Mundial</b>, el 65% de los niños que hoy ingresan al
          colegio trabajarán en profesiones que aún no existen.
          <strong> ¿Cómo preparamos a nuestros hijos para un mundo tan incierto?</strong>
        </div>
      </div>

      {/* Por qué repensar */}
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          <SectionHead title={<span style={{ fontSize: 'clamp(38px, 5vw, 54px)', fontWeight: 300 }}>¿Por qué repensar la educación?</span>} badge="red" />
          <div className="repensar">
            <div className="prose" style={{ fontSize: 'clamp(16px, 5vw, 18px)' ,marginLeft: '10%', maxWidth: 600, textAlign: 'justify' }}>
              <p><b>El mundo cambió. La forma en que aprendemos, trabajamos y nos relacionamos también.</b></p>
              <p>Sin embargo, gran parte del sistema educativo sigue operando bajo una lógica diseñada para otro siglo: estandarización, memorización y avanzar uniforme para todos.</p>
              <p><b>Repensar la educación no es una moda, es una necesidad.</b> Cada estudiante es distinto en intereses, ritmo, fortalezas y desafíos: el sistema no puede seguir tratándolos como si fueran iguales.</p>
              <p>En ReinventED creemos que todos los estudiantes pueden <b>alcanzar altos estándares cuando el aprendizaje está diseñado con intención, estructura y propósito.</b></p>
            </div>
            <div className="repensar-art repensar-shift">
              <img src={imgTransformaArt} alt="Transforma" style={{ width: '100%', maxWidth: 320, height: 'auto', display: 'block', margin: '0 auto' }} />
            </div>
          </div>

          <h3 style={{ textAlign: 'left', fontWeight: 200, color: 'rgba(80,90,110,0.45)', fontSize: 'clamp(22px,5vw,42px)', margin: '20px 0 36px' }}>
            En ReinventED diseñamos y operamos sistemas de aprendizaje<br/>
            personalizados y estructurados que combinan:
          </h3>
          <div className="combine">
            {combine.map((c, i) => (
              <div className="combine-card" key={i}>
                <Badge color={c.badge} />
                <span>{c.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Every student succeeds */}
      <section id="every-student" className="band-soft section">
        <div className="container">
          <SectionHead title={<span style={{ fontSize: 'clamp(42px, 5vw, 62px)', fontWeight: 100, fontFamily: "'Aller Display', sans-serif" }}>Every student succeeds</span>} badge="red" />
          <div style={{ textAlign: 'left', marginBottom: 40 }}>
            <p style={{ color: 'var(--blue)', fontSize: 'clamp(16px,2.2vw,26px)', fontWeight: 600, marginLeft: 50, marginBottom: 6 }}>Nuestra promesa es clara: Cada estudiante es exitoso</p>
            <p style={{ color: 'var(--ink-soft)', fontSize: 'clamp(16px,1.8vw,26px)', marginLeft: 50, fontWeight: 300, marginTop: 0 }}>Pero el éxito no significa lo mismo para todos.<br/>En ReinventED, el éxito se define como la combinación de:</p>
          </div>
          <div className="exito">
            {exito.map((e, i) => (
              <div className="exito-card" key={i}>
                <img src={exitoImgs[i]} alt={e.t} style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '24px 28px 32px' }}>
                  <h4 className="display">{e.t}</h4>
                  <p>{e.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="prose" style={{ textAlign: 'center', marginTop: 36, fontSize: 'clamp(13px,2.5vw,20px)', margin: '36px auto 0' }}>
            <p><b>Cada estudiante avanza con metas claras, acompañamiento cercano y medición constante.</b> El sistema está diseñado para que todos puedan progresar, no solo quienes se adaptan mejor al modelo tradicional.</p>
            <p><b>No creemos en estudiantes "promedio".</b> Creemos en sistemas que permiten que cada uno avance desde su punto de partida hacia estándares altos y medibles.</p>
          </div>
        </div>
      </section>

      {/* Habilidades para la vida */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <Badge color="red" />
          <h2 style={{ color: 'var(--blue)', fontSize: 'clamp(40px,3.6vw,30px)', margin: '14px 0 36px', fontWeight: 600 }}>
            Conoce las habilidades para la vida<br/>
            <span style={{ color: 'var(--ink-soft)', fontWeight: 300 }}>que desarrollan los estudiantes ReinventED</span>
          </h2>
          <div className="skills-row" key={habPage}>
            {visibleHab.map((h, i) => (
              <img src={h.img} alt={h.name} className="skill-img" key={i} />
            ))}
          </div>
          <div className="dots-row">
            {Array.from({ length: HAB_PAGES }).map((_, i) => (
              <i key={i} className={i === habPage ? 'active' : ''} onClick={() => setHabPage(i)} style={{ cursor: 'pointer' }} />
            ))}
          </div>
        </div>
      </section>

      {/* Progreso medible */}
      <section className="band-blue section">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 30 }}>
            <Badge color="yellow" />
            <h2 style={{ color: '#fff', fontWeight: 300, fontSize: 'clamp(46px,3vw,34px)' }}>Progreso medible</h2>
          </div>
          <div className="medible">
            <img src={imgPersonal} alt="Progreso medible ReinventED" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', borderRadius: 18, display: 'block' }} />
            <div className="medible-text">
              <p style={{ color: '#fff', fontWeight: 400, marginTop: 0 }}>
                El Sistema ReinventED integra una plataforma de medición propia que permite
                monitorear tanto el progreso académico como el desarrollo de competencias esenciales.
              </p>
              <p style={{ color: 'rgba(255,255,255,.85)' }}>Medimos:</p>
              <ul className="check-list">
                <li>Avance en contenidos y habilidades académicas</li>
                <li>Desarrollo de autonomía como competencia</li>
                <li>Pensamiento crítico y resolución de problemas</li>
                <li>Comunicación y colaboración</li>
                <li>Bienestar y hábitos de aprendizaje</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciadores */}
      <section className="band-blue2 section">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 34 }}>
            <Badge color="yellow" />
            <h2 style={{ color: '#fff', fontWeight: 300, fontSize: 'clamp(46px,3vw,34px)' }}>Nuestros diferenciadores</h2>

          </div>
          <div className="diff">
            {diff.map((d, i) => (
              <div className="diff-card" key={i}>
                <div className="diff-icon">
                  {i === 0 && <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="var(--red)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>}
                  {i === 1 && <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="var(--red)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>}
                  {i === 2 && <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="var(--red)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>}
                  {i === 3 && <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="var(--red)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>}
                </div>
                <h4>{d.t}</h4>
                <p>{d.d}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <a href="/#habilidades-futuro" className="btn" style={{ fontSize: 20 }}>Conoce nuestras sedes</a>
          </div>
        </div>
      </section>
    </div>
  )
}
