import { Badge } from '../components/Brand.jsx'
import { SectionHead, ContactForm } from '../components/UI.jsx'
import imgHero from '../assets/implementa/Jardín.png'
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
        <img src={imgHero} alt="Implementa ReinventED" className="hero-school-img" style={{ objectPosition: 'center' }} />
        <div className="hero-school-overlay light" />
        <div className="container" style={{ alignItems: 'flex-end', justifyContent: 'center', paddingBottom: 0 }}>
          <div className="hero-yellow" style={{ fontSize: 'clamp(34px, 4.8vw, 58px)', textAlign: 'center', transform: 'translateY(50%)', position: 'relative', zIndex: 2 }}>
            <b style={{ color: 'var(--blue)' }}>Implementa ReinventED</b><br/>
            <span style={{ color: 'var(--blue-deep)', fontWeight: 400 }}>en tu institución</span>
          </div>
        </div>
      </section>

      {/* Asesorías para colegios */}
      <section className="band-blue section" style={{ paddingTop: 140 }}>
        <div className="container">
          <div className="contacto-text">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginTop: 32 }}>
              <Badge color="yellow" />
              <div>
                <h2 style={{ color: '#fff', fontWeight: 300, fontSize: 'clamp(26px,3vw,36px)', marginBottom: 20 }}><b>Asesorías para colegios</b></h2>
                <h3 style={{ color: '#fff', marginBottom: 16 }}>Transformación educativa con estructura</h3>
                <div className="tcolegio-2col">
                  <div>
                    <p>Muchos colegios reconocen la necesidad de cambiar. Buscan personalización, mayor autonomía en los estudiantes y metodologías más relevantes para el mundo actual.</p>
                    <p>El desafío no suele estar en la intención, sino en el sistema.</p>
                  </div>
                  <div>
                    <p>ReinventED acompaña a instituciones educativas en el rediseño de su modelo, integrando innovación pedagógica con estructura, medición y altos estándares académicos.</p>
                    <p>Más que introducir nuevas actividades, el objetivo es construir un sistema coherente que permita que la transformación sea sostenible.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personalización */}
      <section className="section">
        <div className="container">
          <div className="head-split" style={{ justifyContent: 'center', gap: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <Badge />
              <h2 style={{ fontWeight: 300, color: 'var(--ink)', fontSize: 'clamp(28px,4vw,42px)' }}><b>Personalización</b></h2>
            </div>
            <p style={{ color: 'var(--ink-soft)', borderLeft: '2px solid var(--line)', paddingLeft: 10, maxWidth: 450 }}>
              La personalización educativa no ocurre con los estudiantes. Debe estar integrada en el diseño del sistema.
            </p>
          </div>
          <div className="prose" style={{ margin: '30px auto 40px', maxWidth: 800, textAlign: 'justify' }}>
            <p>En nuestro trabajo con colegios analizamos el contexto institucional, la cultura organizacional y las metas educativas para diseñar un modelo que responda a las necesidades específicas de cada comunidad.</p>
            <p>Esto permite implementar personalización de manera estructurada, considerando:</p>
          </div>
          <div className="person-grid" style={{ maxWidth: 800, margin: '0 auto' }}>
            {personaliza.map((p, i) => (
              <div className="feat feat-lg" key={i}>
                <Badge />
                <p style={{ color: 'var(--ink-soft)' }}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oferta ReinventED */}
      <section className="section-tight">
        <div className="container">
          <div style={{ background: 'rgba(0,0,0,0.04)', border: '1.5px solid rgba(0,0,0,0.08)', borderRadius: 16, padding: '36px 48px' }}>
            <div className="oferta-head" style={{ justifyContent: 'center', gap: 40 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <Badge />
                <h2 style={{ fontWeight: 300, fontSize: 'clamp(26px,3.6vw,40px)' }}>Oferta<br/>ReinventED</h2>
              </div>
              <p style={{ color: 'var(--ink-soft)', borderLeft: '2px solid var(--line)', paddingLeft: 20, maxWidth: 380 }}>
                ReinventED acompaña a colegios en procesos de transformación educativa mediante asesoría estratégica y diseño de sistemas pedagógicos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra propuesta puede incluir */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div style={{ marginBottom: 24 }}>
              <h3 style={{ fontWeight: 600, fontSize: 22 }}>Nuestra propuesta puede incluir:</h3>
            </div>
            <div className="oferta-4col">
              {oferta.slice(0, 4).map((o, i) => (
                <div className="feat feat-lg" key={i}>
                  <Badge color="yellow" />
                  <p style={{ color: 'var(--ink-soft)' }}>{o}</p>
                </div>
              ))}
            </div>
            <div className="oferta-3col">
              {oferta.slice(4).map((o, i) => (
                <div className="feat feat-lg" key={i + 4}>
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
        </div>
      </section>

      {/* Contacto */}
      <section className="band-blue section">
        <div className="container contacto">
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
