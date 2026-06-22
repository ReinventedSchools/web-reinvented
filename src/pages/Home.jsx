import { Link } from 'react-router-dom'
import { Smiley, Logo, Badge } from '../components/Brand.jsx'
import { SectionHead, ContactForm } from '../components/UI.jsx'
import './home.css'

const campusDots = [
  { name: 'Puembo', color: '#2bae8c', to: '/colegios/puembo' },
  { name: 'Santa Clara', color: '#9fc131', to: '/colegios/santa-clara' },
  { name: 'Rímac', color: '#4fa3d1', to: '/colegios/rimac' },
  { name: 'IDV', color: '#e5007e', to: '/colegios/idv' },
]

const stats = [
  { n: '4', label: 'Campus' },
  { n: '700', label: 'Estudiantes' },
  { n: '120', label: 'Graduados' },
  { n: '2', label: 'Países' },
]

const formula = [
  { t: 'School Joy', c: '#2bae8c' },
  { t: 'Personal Growth', c: '#5277bd' },
  { t: 'Academic Growth', c: '#5277bd' },
]

export default function Home() {
  return (
    <div className="page">
      {/* ---------------- HERO ---------------- */}
      <section className="hero">
        <div className="img-ph hero-img" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <h1 className="display hero-title">every student succeeds</h1>
        </div>
        <div className="container hero-tabs-wrap">
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
          <div className="conoce-logo"><Logo size={26} /></div>
          <div className="campus-row">
            {campusDots.map(c => (
              <Link to={c.to} key={c.name} className="campus-link">
                <Smiley className="smiley" />
                <span style={{ fontWeight: 700 }}>
                  Reinvent<span style={{ color: c.color }}>ED</span>
                </span>
                <strong style={{ color: c.color }}>{c.name}</strong>
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
            <div className="img-ph redefine-img" />
            <div className="redefine-card">
              <h3>El mundo se reinventa, la educación también.</h3>
              <p>
                Somos una red de colegios que combina personalización, autonomía y altos
                estándares académicos para preparar a niños y jóvenes para el futuro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- UNA RED EN CRECIMIENTO ---------------- */}
      <section className="section">
        <div className="container">
          <SectionHead title="Una red en crecimiento" />
          <div className="stats">
            {stats.map((s, i) => (
              <div className="stat" key={i}>
                <div className="stat-circle">{s.n}</div>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- NUESTRA FÓRMULA ---------------- */}
      <section className="section formula-sec">
        <div className="container">
          <h2 className="display formula-title">every student succeeds</h2>
          <p className="formula-sub">Cónoce nuestra fórmula</p>
          <div className="formula-cards">
            {formula.map((f, i) => (
              <div className="formula-card" key={i}>
                <div className="img-ph" style={{ aspectRatio: '1 / 1.05' }} />
              </div>
            ))}
          </div>
          <div className="formula-labels">
            <span style={{ color: formula[0].c }}>School Joy</span>
            <i>+</i>
            <span style={{ color: formula[1].c }}>Personal Growth</span>
            <i>+</i>
            <span style={{ color: formula[2].c }}>Academic Growth</span>
          </div>
        </div>
      </section>

      {/* ---------------- ALIADOS ---------------- */}
      <section className="section-tight">
        <div className="container">
          <SectionHead title={<>Nuestro <b style={{ color: 'var(--ink)', fontWeight: 600 }}>aliados en transformación</b> educativa</>} />
          <div className="allies">
            <div className="ally">CURRICULUM<br/>FOUNDATION</div>
            <div className="ally">MASTERY<br/>TRANSCRIPT<br/>CONSORTIUM</div>
            <div className="ally" style={{ fontFamily: 'Georgia, serif' }}>LEARNING<br/>One to One</div>
            <div className="ally" style={{ color: 'var(--red)' }}>RED SOLARE</div>
          </div>
          <div className="dots-row">
            {[0,1,2,3,4].map(i => <i key={i} className={i===0?'active':''} />)}
          </div>
        </div>
      </section>

      {/* ---------------- APLICA A COLEGIOS PRIVADOS ---------------- */}
      <section className="section">
        <div className="container">
          <div className="apply-band">
            <div className="heading-row" style={{ marginBottom: 28 }}>
              <Badge color="yellow" />
              <h2 style={{ color: '#fff', fontWeight: 500, fontSize: 'clamp(22px,3vw,30px)' }}>
                Las habilidades del futuro están cambiando.<br/>
                ¿Tus hijos estarán preparados?
              </h2>
            </div>
            <div className="apply-cards">
              <ApplyCard ed="#2bae8c" name="Puembo" to="/colegios/puembo" />
              <ApplyCard ed="#9fc131" name="Santa Clara" to="/colegios/santa-clara" />
            </div>
            <h3 className="display apply-cta">Aplica a nuestros colegios privados</h3>
          </div>
        </div>
      </section>

      {/* ---------------- IMPLEMENTA EN TU CLUB ---------------- */}
      <section className="section">
        <div className="container">
          <div className="implementa">
            <div>
              <div className="heading-row" style={{ alignItems: 'flex-start' }}>
                <Badge />
                <h2 className="h-light" style={{ color: 'var(--ink-soft)', fontWeight: 300 }}>
                  Implementa el sistema<br/>
                  <b style={{ color: 'var(--ink)', fontWeight: 600 }}>ReinventED</b> en tu<br/>
                  club deportivo o colegio
                </h2>
              </div>
              <ContactForm />
            </div>
            <div className="img-ph implementa-img" />
          </div>
        </div>
      </section>
    </div>
  )
}

function ApplyCard({ ed, name, to }) {
  return (
    <Link to={to} className="apply-card">
      <div className="img-ph" style={{ aspectRatio: '16 / 9' }} />
      <div className="apply-card-foot">
        <Smiley className="smiley" />
        <span style={{ fontWeight: 700 }}>
          Reinvent<span style={{ color: ed }}>ED</span> <span style={{ color: '#7d8590' }}>{name}</span>
        </span>
      </div>
    </Link>
  )
}
