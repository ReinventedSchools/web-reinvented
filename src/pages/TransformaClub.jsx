import { Badge } from '../components/Brand.jsx'
import { SectionHead, ContactForm } from '../components/UI.jsx'
import './pages.css'

const niveles = [
  { t: 'Estudiante', d: 'metas académicas claras y seguimiento constante.' },
  { t: 'Club', d: 'planificación alineada con la dinámica deportiva.' },
  { t: 'Sistema', d: 'estructura flexible que permite adaptación sin perder coherencia.' },
]

const propuesta = [
  'Diseño del sistema académico adaptado al entorno deportivo',
  'Implementación del modelo pedagógico ReinventED',
  'Desarrollo de estructura multiedad y personalización',
  'Plataforma de medición del progreso académico y competencias',
  'Formación y acompañamiento del equipo educativo',
  'Integración con la dinámica deportiva del club',
]

export default function TransformaClub() {
  return (
    <div className="page">
      {/* Hero */}
      <section className="hero-school">
        <div className="img-ph hero-school-img" />
        <div className="hero-school-overlay light" />
        <div className="container">
          <div className="hero-yellow">
            <b style={{ color: 'var(--blue)' }}>Implementa ReinventED</b><br/>
            <span style={{ color: 'var(--blue-deep)', fontWeight: 400 }}>en tu club deportivo</span>
          </div>
        </div>
      </section>

      {/* No solo opera colegios */}
      <section className="section">
        <div className="container grid-2 club-intro">
          <div className="intro-soft">
            <Badge />
            <p style={{ marginTop: 16 }}>
              <b>ReinventED no solo opera colegios. Diseña sistemas educativos.</b>
            </p>
            <p>
              A partir de la experiencia desarrollada en Ecuador y Perú, la red ha consolidado la
              capacidad de implementar su modelo en distintos contextos educativos, manteniendo
              siempre la misma <b>estructura, coherencia pedagógica y altos estándares académicos.</b>
            </p>
          </div>
          <div className="club-gallery">
            <div className="img-ph" style={{ gridColumn: '1 / 2', aspectRatio: '4/3' }} />
            <div className="img-ph" style={{ aspectRatio: '4/3' }} />
            <div className="img-ph" style={{ gridColumn: '1 / 3', aspectRatio: '16/6' }} />
          </div>
        </div>
      </section>

      {/* Colegios para deportistas */}
      <section className="section-tight">
        <div className="container grid-2 club-deport">
          <div className="img-ph" style={{ aspectRatio: '4/3', borderRadius: 18 }} />
          <div>
            <SectionHead title={<span style={{ color: 'var(--ink)', fontWeight: 600 }}>Colegios<br/>para deportistas</span>} light={false} />
            <p style={{ fontWeight: 600 }}>Líderes en cambio educativo</p>
            <p style={{ color: 'var(--ink-soft)' }}>El deporte de alto rendimiento exige disciplina, planificación y compromiso. La educación debe responder a esa realidad sin perder profundidad ni estándares académicos.</p>
            <p style={{ color: 'var(--ink-soft)' }}>En ReinventED diseñamos sistemas educativos capaces de integrarse a entornos deportivos exigentes. Nuestro modelo permite que los estudiantes continúen su formación académica mientras desarrollan su carrera deportiva dentro de estructuras profesionales.</p>
          </div>
        </div>
      </section>

      {/* Personalización */}
      <section className="band-soft section">
        <div className="container">
          <SectionHead title={<span style={{ color: 'var(--ink)', fontWeight: 600 }}>Personalización</span>} badge="red" light={false} />
          <div className="grid-2 person">
            <div className="prose">
              <p>La personalización en ReinventED no se limita al estudiante. También se aplica al contexto institucional.</p>
              <p>Cuando trabajamos con clubes deportivos, el sistema se adapta a las dinámicas propias de cada organización: calendarios de competencia, cargas de entrenamiento, viajes y procesos de formación deportiva.</p>
              <p>Esto permite construir un modelo académico que mantiene altos estándares, pero responde a las necesidades reales del entorno deportivo.</p>
              <p style={{ fontWeight: 600 }}>La personalización ocurre en tres niveles:</p>
            </div>
            <div className="niveles">
              {niveles.map((n, i) => (
                <div className="nivel" key={i}>
                  <Badge />
                  <div><b>{n.t}:</b> {n.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Casos de éxito + graduados */}
      <section className="section">
        <div className="container">
          <SectionHead title={<span style={{ color: 'var(--ink)', fontWeight: 600 }}>Casos<br/>de éxito</span>} light={false} />
          <div className="grid-2" style={{ marginBottom: 50 }}>
            <div className="prose">
              <p>Entre los casos más destacados se encuentran:</p>
              <p>ReinventED IDV junto a Independiente del Valle en Ecuador.<br/>ReinventED Rímac en alianza con Sporting Cristal en Perú.</p>
            </div>
            <div className="prose">
              <p>Estos proyectos demuestran que la educación académica rigurosa y el desarrollo deportivo pueden coexistir cuando el sistema está diseñado con intención, estructura y seguimiento constante.</p>
            </div>
          </div>
          <h3 style={{ textAlign: 'center', fontWeight: 300, color: 'var(--muted)', fontSize: 'clamp(24px,3.4vw,38px)', marginBottom: 24 }}>NUESTROS GRADUADOS</h3>
          <div className="grad-strip">
            {[0,1,2,3,4].map(i => <div className="img-ph" key={i} style={{ aspectRatio: '3/4' }} />)}
          </div>
        </div>
      </section>

      {/* Nuestra propuesta */}
      <section className="band-soft section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h3 style={{ fontWeight: 300, color: 'var(--muted)', fontSize: 'clamp(24px,3.4vw,38px)', marginBottom: 12 }}>NUESTRA PROPUESTA</h3>
          <p style={{ color: 'var(--ink-soft)', maxWidth: 760, margin: '0 auto 8px' }}>
            ReinventED acompaña a clubes deportivos en el diseño e implementación de un sistema
            educativo completo para sus estudiantes-atletas.
          </p>
          <p style={{ fontWeight: 600, marginBottom: 36 }}>Nuestra propuesta incluye:</p>
          <div className="propuesta">
            {propuesta.map((p, i) => (
              <div className="prop-item" key={i}>
                <Badge />
                <span>{p}</span>
              </div>
            ))}
          </div>
          <p style={{ color: 'var(--ink-soft)', maxWidth: 720, margin: '40px auto 0' }}>
            El objetivo es construir un sistema educativo que acompañe el desarrollo deportivo sin
            comprometer el futuro académico de los estudiantes.
          </p>
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
