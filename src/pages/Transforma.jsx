import { useState, useEffect } from 'react'
import { Badge } from '../components/Brand.jsx'
import { SectionHead } from '../components/UI.jsx'
import imgSistema from '../assets/sistema/sistema.webp'
import imgAutonomous from '../assets/habilidades/Autonomous.webp'
import imgCollaborator from '../assets/habilidades/collaborator.webp'
import imgCommunicator from '../assets/habilidades/communicator.webp'
import imgConflict from '../assets/habilidades/conflict.webp'
import imgLogical from '../assets/habilidades/logical reasoner.webp'
import imgLoveLearning from '../assets/habilidades/Love for learning.webp'
import imgRealWorld from '../assets/habilidades/real world.webp'
import imgWellbeing from '../assets/habilidades/wellbeing.webp'
import imgPersonal from '../assets/transforma/personal.webp'
import './pages.css'

const combine = [
  { t: 'Desarrollo de autonomía', badge: 'magenta' },
  { t: 'Bienestar en el ambiente escolar', badge: 'yellow' },
  { t: 'Personalización con altos estándares', badge: 'red' },
  { t: 'Desarrollo académico y de habilidades del siglo XXI', badge: '' },
]

const exito = [
  {
    t: 'Disfrute escolar',
    d: 'Gusto por aprender, sentirse parte de una comunidad y encontrar propósito en la experiencia educativa.',
  },
  {
    t: 'Crecimiento personal',
    d: 'Desarrollar autonomía, confianza y las habilidades necesarias para enfrentar los desafíos de la vida real.',
  },
  {
    t: 'Crecimiento académico',
    d: 'Construir conocimientos sólidos y desarrollar el pensamiento crítico para comprender y transformar el mundo.',
  },
]

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
      <section className="section">
        <div className="container">
          <SectionHead title="¿Por qué repensar la educación?" badge="red" />
          <div className="repensar">
            <div className="prose">
              <p><b>El mundo cambió.</b> La forma en que aprendemos, trabajamos y nos relacionamos también.</p>
              <p>Sin embargo, gran parte del sistema educativo sigue operando bajo una lógica diseñada para otro siglo: estandarización, memorización y avanzar uniforme para todos.</p>
              <p><b>Repensar la educación no es una moda, es una necesidad.</b> Cada estudiante es distinto en intereses, ritmo, fortalezas y desafíos: el sistema no puede seguir tratándolos como si fueran iguales.</p>
              <p>En ReinventED creemos que todos los estudiantes pueden alcanzar altos estándares cuando el aprendizaje está diseñado con intención, estructura y propósito.</p>
            </div>
            <div className="repensar-art">
              <svg viewBox="0 0 200 200" width="220" height="220" fill="none" stroke="var(--yellow)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="150" cy="60" r="26" />
                <rect x="30" y="40" width="46" height="46" rx="4" transform="rotate(-12 53 63)" />
                <polygon points="60,150 90,110 120,150" />
                <path d="M140 120 l30 0 l0 40 l-30 0 z" />
                <path d="M120 90 q15 -20 30 0" />
              </svg>
            </div>
          </div>

          <h3 style={{ textAlign: 'center', fontWeight: 300, color: 'var(--ink-soft)', fontSize: 'clamp(28px,3.2vw,38px)', margin: '20px 0 36px' }}>
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
      <section className="band-soft section">
        <div className="container">
          <SectionHead title={<span className="display" style={{ color: 'var(--red)', fontWeight: 600 }}>Every student succeeds</span>} badge="red" light={false} />
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h3 style={{ color: 'var(--blue)', fontSize: 38, marginBottom: 8 }}>Nuestra promesa es clara: Cada estudiante es exitoso</h3>
            <p style={{ color: 'var(--ink-soft)', fontSize: 32 }}>Pero el éxito no significa lo mismo para todos.<br/>En ReinventED, el éxito se define como la combinación de:</p>
          </div>
          <div className="exito">
            {exito.map((e, i) => (
              <div className="exito-card" key={i}>
                <div className="exito-icon">
                  {i === 0 && <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>}
                  {i === 1 && <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><circle cx="9" cy="10" r="1" fill="var(--red)"/><circle cx="12" cy="10" r="1" fill="var(--red)"/><circle cx="15" cy="10" r="1" fill="var(--red)"/></svg>}
                  {i === 2 && <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>}
                </div>
                <h4 className="display">{e.t}</h4>
                <p>{e.d}</p>
              </div>
            ))}
          </div>
          <div className="prose" style={{ textAlign: 'center', marginTop: 36, fontSize: 26}}>
            <p><b>Cada estudiante avanza con metas claras, acompañamiento cercano y medición constante.</b> El sistema está diseñado para que todos puedan progresar, no solo quienes se adaptan mejor al modelo tradicional.</p>
            <p><b>No creemos en estudiantes "promedio".</b> Creemos en sistemas que permiten que cada uno avance desde su punto de partida hacia estándares altos y medibles.</p>
          </div>
        </div>
      </section>

      {/* Habilidades para la vida */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <Badge color="red" />
          <h2 style={{ color: 'var(--blue)', fontSize: 'clamp(55px,3.6vw,40px)', margin: '14px 0 36px', fontWeight: 600 }}>
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
            <img src={imgPersonal} alt="Progreso medible ReinventED" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: 18, display: 'block' }} />
            <div>
              <p style={{ color: '#fff', fontWeight: 600, marginTop: 0 }}>
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
            <h2 style={{ color: '#fff', fontWeight: 300, fontSize: 'clamp(24px,3vw,34px)' }}>Nuestros diferenciadores</h2>
          </div>
          <div className="diff">
            {diff.map((d, i) => (
              <div className="diff-card" key={i}>
                <div className="diff-icon">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>
                </div>
                <h4>{d.t}</h4>
                <p>{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
