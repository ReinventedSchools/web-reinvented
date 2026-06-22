import { Badge } from '../components/Brand.jsx'
import { SectionHead, ContactForm } from '../components/UI.jsx'
import './pages.css'

const personaliza = [
  'Organización del aprendizaje',
  'Desarrollo de autonomía en los estudiantes.',
  'Nuevas formas de acompañamiento de educadores',
  'Sistemas claros de seguimiento y evaluación',
]

const oferta = [
  'Diagnóstico institucional y análisis del sistema educativo actual',
  'Diseño de modelos de personalización con estructura',
  'Implementación de estructuras multiedad',
  'Diseño de sistemas de medición del aprendizaje',
  'Formación y acompañamiento del equipo de educadores',
  'Apoyo en la implementación del Sistema ReinventED',
]

export default function TransformaColegio() {
  return (
    <div className="page">
      {/* Hero */}
      <section className="hero-school">
        <div className="img-ph hero-school-img" />
        <div className="hero-school-overlay light" />
        <div className="container">
          <div className="hero-yellow">
            <b style={{ color: 'var(--blue)' }}>Implementa ReinventED</b><br/>
            <span style={{ color: 'var(--blue-deep)', fontWeight: 400 }}>en tu institución</span>
          </div>
        </div>
      </section>

      {/* Asesorías para colegios */}
      <section className="band-blue section">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 30 }}>
            <Badge color="yellow" />
            <h2 style={{ color: '#fff', fontWeight: 300, fontSize: 'clamp(24px,3vw,34px)' }}>Asesorías para colegios</h2>
          </div>
          <div className="grid-2">
            <div className="contacto-text">
              <h3 style={{ color: '#fff', marginBottom: 16 }}>Transformación educativa con estructura</h3>
              <p>Muchos colegios reconocen la necesidad de cambiar. Buscan personalización, mayor autonomía en los estudiantes y metodologías más relevantes para el mundo actual.</p>
              <p>El desafío no suele estar en la intención, sino en el sistema.</p>
            </div>
            <div className="contacto-text">
              <p>ReinventED acompaña a instituciones educativas en el rediseño de su modelo, integrando innovación pedagógica con estructura, medición y altos estándares académicos.</p>
              <p>Más que introducir nuevas actividades, el objetivo es construir un sistema coherente que permita que la transformación sea sostenible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personalización */}
      <section className="section">
        <div className="container">
          <div className="head-split">
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <Badge />
              <h2 style={{ fontWeight: 300, color: 'var(--ink)', fontSize: 'clamp(28px,4vw,42px)' }}>Personalización</h2>
            </div>
            <p style={{ color: 'var(--ink-soft)', borderLeft: '2px solid var(--line)', paddingLeft: 20, maxWidth: 420 }}>
              La personalización educativa no ocurre con los estudiantes. Debe estar integrada en el diseño del sistema.
            </p>
          </div>
          <div className="prose" style={{ margin: '30px 0 40px' }}>
            <p>En nuestro trabajo con colegios analizamos el contexto institucional, la cultura organizacional y las metas educativas para diseñar un modelo que responda a las necesidades específicas de cada comunidad.</p>
            <p>Esto permite implementar personalización de manera estructurada, considerando:</p>
          </div>
          <div className="grid-4 person-grid">
            {personaliza.map((p, i) => (
              <div className="feat" key={i}>
                <Badge color="yellow" />
                <p style={{ color: 'var(--ink-soft)' }}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oferta ReinventED */}
      <section className="section-tight">
        <div className="container">
          <div className="oferta-head">
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <Badge />
              <h2 style={{ fontWeight: 300, fontSize: 'clamp(26px,3.6vw,40px)' }}>Oferta<br/>ReinventED</h2>
            </div>
            <p style={{ color: 'var(--ink-soft)', borderLeft: '2px solid var(--line)', paddingLeft: 20, maxWidth: 420 }}>
              ReinventED acompaña a colegios en procesos de transformación educativa mediante asesoría estratégica y diseño de sistemas pedagógicos.
            </p>
          </div>
        </div>
      </section>

      {/* Nuestra propuesta puede incluir */}
      <section className="section">
        <div className="container">
          <h3 style={{ fontWeight: 600, marginBottom: 34, fontSize: 22 }}>Nuestra propuesta puede incluir:</h3>
          <div className="grid-4 person-grid">
            {oferta.map((o, i) => (
              <div className="feat" key={i}>
                <Badge color="yellow" />
                <p style={{ color: 'var(--ink-soft)' }}>{o}</p>
              </div>
            ))}
            <div className="oferta-note">
              <Badge color="yellow"><LinkIcon /></Badge>
              <p>Cada proceso se adapta a las necesidades de la institución, manteniendo siempre claridad metodológica y altos estándares.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="band-blue section">
        <div className="container grid-2 contacto">
          <ContactForm btn="var(--yellow)" btnText="var(--ink)" />
          <div className="contacto-text">
            <h2 style={{ color: '#fff', fontWeight: 400, fontSize: 'clamp(32px,5vw,52px)', letterSpacing: 2 }}>CONTACTO</h2>
            <p>Si tu institución busca integrar educación académica de calidad con formación deportiva de alto rendimiento, podemos trabajar juntos en el diseño de un sistema que responda a esa realidad.</p>
            <p>Contáctanos para explorar cómo implementar el modelo ReinventED en tu club o institución.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/>
      <path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/>
    </svg>
  )
}
