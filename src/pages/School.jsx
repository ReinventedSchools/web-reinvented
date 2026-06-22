import { useParams, Navigate } from 'react-router-dom'
import { Badge, SchoolLogo, Smiley } from '../components/Brand.jsx'
import { SectionHead, Gallery, Faq } from '../components/UI.jsx'
import { schools, stages, faqItems } from '../data/schools.js'
import './pages.css'

const applyCards = [
  { t: 'Agenda una visita a nuestro campus', icon: 'book' },
  { t: 'Llena este formulario en línea', icon: 'doc' },
  { t: 'Entrevista y evaluación familiar', icon: 'people' },
  { t: 'Reunión del comité de admisiones', icon: 'group' },
  { t: 'Notificación de admisión', icon: 'bell' },
]

function ApplyIcon({ name }) {
  const common = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#fff', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
  const paths = {
    book: <><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M19 3v16"/></>,
    doc: <><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/></>,
    people: <><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="17" cy="9" r="2.2"/><path d="M16 14a5 5 0 0 1 5 6"/></>,
    group: <><circle cx="8" cy="9" r="3"/><circle cx="16" cy="9" r="3"/><path d="M3 19a5 5 0 0 1 10 0M11 19a5 5 0 0 1 10 0"/></>,
    bell: <><path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z"/><path d="M10 20a2 2 0 0 0 4 0"/></>,
  }
  return <svg {...common}>{paths[name]}</svg>
}

export default function School() {
  const { slug } = useParams()
  const s = schools[slug]
  if (!s) return <Navigate to="/" replace />

  return (
    <div className="page">
      {/* Hero */}
      <section className="hero-school">
        <div className="img-ph hero-school-img" />
        <div className="hero-school-overlay" />
        <div className="container hero-school-logo">
          <Smiley className="smiley smiley-lg" />
          <SchoolLogo ed={s.ed} name={s.name} nameColor="#fff" base="#fff" size={48} />
        </div>
      </section>

      {/* Fundación del campus */}
      <section className="section">
        <div className="container">
          <SectionHead title="Fundación del campus" />
          <div className="found-band" style={{ background: s.band, color: s.bandText }}>
            {s.intro}
          </div>
          <div style={{ marginTop: 40 }}>
            <Gallery count={5} dotColor={s.circle} />
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="section-tight">
        <div className="container">
          <div className="loc-band" style={{ background: s.band }}>
            <div className="loc-text">
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                <Badge color="purple" />
                <h2 style={{ color: '#fff', fontWeight: 600, fontSize: 'clamp(22px,3vw,30px)' }}>{s.locTitle}</h2>
              </div>
              {s.locText.map((t, i) => <p key={i} style={{ color: 'rgba(255,255,255,.92)' }}>{t}</p>)}
            </div>
            <div className="img-ph loc-img" />
          </div>
        </div>
      </section>

      {/* Tu camino en ReinventED */}
      <section className="section">
        <div className="container">
          <div className="camino-head">
            <div className="img-ph" style={{ width: 200, height: 150, borderRadius: 18, flex: 'none' }} />
            <div>
              <SectionHead title={<span style={{ color: 'var(--ink)', fontWeight: 600 }}>Tu camino en ReinventED</span>} light={false} />
              <p style={{ color: 'var(--ink-soft)', maxWidth: 560 }}>
                En ReinventED, el aprendizaje se organiza en talleres multiedad. Esta estructura
                permite que los estudiantes avancen según su nivel de desarrollo y no únicamente
                por su edad cronológica. Fomenta liderazgo, colaboración y aprendizaje entre pares.
              </p>
            </div>
          </div>

          <div className="timeline">
            <div className="timeline-line" />
            {stages.map(st => (
              <div className="tl-stage" key={st.n}>
                <div className="tl-dot" style={{ background: st.n === 7 ? '#cfd3da' : s.circle }}>{st.n}</div>
                <strong>{st.name}</strong>
                <span className="tl-grade">{st.grade}</span>
                <span className="tl-sub">{st.sub}</span>
              </div>
            ))}
          </div>
          <p className="grades-note">
            <span style={{ color: s.circle }}>✱</span> {s.grades}
          </p>
        </div>
      </section>

      {/* Cómo aplicar */}
      <section className="band-soft section">
        <div className="container">
          <SectionHead title={<>¿Cómo<br/>aplicar?</>} />
          <div className="apply-steps">
            {applyCards.map((c, i) => (
              <div className="apply-step" key={i}>
                <div className="apply-step-icon" style={{ background: s.circle }}>
                  <ApplyIcon name={c.icon} />
                </div>
                <span>{c.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', fontWeight: 300, color: 'var(--muted)', fontSize: 'clamp(30px,4vw,46px)', marginBottom: 30 }}>FAQ</h2>
          <Faq items={faqItems} />
        </div>
      </section>
    </div>
  )
}
