import { Link } from 'react-router-dom'
import { Badge } from '../components/Brand.jsx'
import { SectionHead, ContactForm, Faq } from '../components/UI.jsx'
import imgHero from '../assets/club/club.jpg'
import imgClub1 from '../assets/club/club2.jpg'
import imgClub5 from '../assets/club/club5.jpg'
import imgClub6 from '../assets/club/club6.jpg'
import imgClub8 from '../assets/club/club8.jpg'
import imgClub3 from '../assets/club/club3.jpg'
import imgIDV from '../assets/sedes/idv/idvPrincipal.webp'
import imgRimac from '../assets/sedes/rimac/r3.jpg'
import imgLogoIDV from '../assets/IDV.webp'
import imgLogoRimac from '../assets/Rimac.webp'
import './pages.css'

const clubFaq = [
  {
    q: '¿Cómo iniciamos un proyecto con ReinventED?',
    a: 'El primer paso es una reunión de diagnóstico. Analizamos los objetivos del club, su infraestructura, el perfil de los deportistas y las oportunidades de desarrollo para diseñar una propuesta personalizada y un plan de implementación.',
  },
  {
    q: '¿ReinventED impone un modelo o lo adapta a cada club?',
    a: 'Nuestro modelo no se copia ni se instala como un producto estándar. Trabajamos junto al club para diseñar un proyecto educativo alineado con su identidad, sus objetivos deportivos y las necesidades de su comunidad. Compartimos una misma filosofía, pero cada implementación es única.',
  },
  {
    q: '¿Es posible combinar una educación de excelencia con el alto rendimiento deportivo?',
    a: 'Sí. El modelo está diseñado específicamente para deportistas de alto rendimiento. La planificación académica se integra con los entrenamientos, competencias y procesos de recuperación, permitiendo que los estudiantes progresen sin tener que elegir entre su desarrollo académico y deportivo.',
  },
  {
    q: '¿Cómo funciona el aprendizaje personalizado?',
    a: 'Cada estudiante cuenta con un plan de aprendizaje adaptado a su nivel, ritmo de avance, objetivos académicos y realidad deportiva. Los educadores acompañan el proceso mediante espacios flexibles de aprendizaje y seguimiento permanente, priorizando el desarrollo de competencias antes que la memorización de contenidos.',
  },
  {
    q: '¿Qué sucede cuando un deportista viaja para competir?',
    a: 'La agenda deportiva se planifica junto con la académica. Los estudiantes pueden continuar avanzando durante concentraciones o competencias mediante un modelo flexible que evita retrasos y reduce la sobrecarga académica.',
  },
  {
    q: '¿Qué pasa si un deportista no llega al profesionalismo?',
    a: 'Nuestra filosofía es clara: Every Student Succeeds. El objetivo es que cada estudiante construya un proyecto de vida exitoso, dentro o fuera del deporte. Por eso el modelo desarrolla competencias para la vida, dominio del inglés, orientación vocacional y una formación académica sólida que abre oportunidades en la educación superior y el mundo laboral.',
  },
  {
    q: '¿El colegio cumple con la normativa educativa de cada país?',
    a: 'Sí. Todos los proyectos cumplen con el currículo oficial y la normativa educativa correspondiente. La innovación está en la forma de enseñar y aprender, no en la validez de los estudios o de la titulación obtenida.',
  },
  {
    q: '¿Puede un club de menor tamaño implementar este modelo?',
    a: 'Sí. No es necesario tener la escala de un gran club profesional. Diseñamos proyectos ajustados a la realidad de cada institución, siempre respetando los estándares esenciales que garantizan la calidad del modelo.',
  },
]

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
        <img src={imgHero} alt="Implementa ReinventED" className="hero-school-img" style={{ objectFit: 'cover', objectPosition: 'top center' }} />
        <div className="hero-school-overlay light" />
        <div className="container" style={{ alignItems: 'flex-end', justifyContent: 'center', paddingBottom: 0 }}>
          <div className="hero-yellow" style={{ fontSize: 'clamp(34px, 4.8vw, 58px)', textAlign: 'center', transform: 'translateY(50%)', position: 'relative', zIndex: 2, background: 'var(--blue)' }}>
            <b style={{ color: '#fff' }}>Implementa ReinventED</b><br/>
            <span style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400 }}>en tu club deportivo</span>
          </div>
        </div>
      </section>

      {/* No solo opera colegios */}
      <section className="section" style={{ paddingTop: 140 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 40 }}>
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
          <div style={{ display: 'flex', gap: 12, height: 360 }}>
            <img src={imgClub1} alt="" style={{ flex: 1, borderRadius: 12, objectFit: 'cover', width: 0 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
              <img src={imgClub5} alt="" style={{ flex: 1, borderRadius: 12, objectFit: 'cover', width: '100%', minHeight: 0 }} />
              <img src={imgClub6} alt="" style={{ flex: 1, borderRadius: 12, objectFit: 'cover', width: '100%', minHeight: 0 }} />
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Colegios para deportistas */}
      <section className="section-tight">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <img src={imgClub8} alt="Colegios para deportistas" style={{ aspectRatio: '4/3', borderRadius: 18, objectFit: 'cover', width: '100%', display: 'block' }} />
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
              <Badge />
              <h2 style={{ color: 'var(--ink)', fontWeight: 600, fontSize: 'clamp(24px,3vw,34px)' }}>Colegios para deportistas</h2>
            </div>
            <p style={{ fontWeight: 600 }}>Líderes en cambio educativo</p>
            <p style={{ color: 'var(--ink-soft)' }}>El deporte de alto rendimiento exige disciplina, planificación y compromiso. La educación debe responder a esa realidad sin perder profundidad ni estándares académicos.</p>
            <p style={{ color: 'var(--ink-soft)' }}>En ReinventED diseñamos sistemas educativos capaces de integrarse a entornos deportivos exigentes. Nuestro modelo permite que los estudiantes continúen su formación académica mientras desarrollan su carrera deportiva dentro de estructuras profesionales.</p>
            <p style={{ color: 'var(--ink-soft)' }}>Más que adaptar horarios, rediseñamos el sistema educativo para que funcione dentro de contextos de alto rendimiento</p>
          </div>
          </div>
        </div>
      </section>

      {/* Personalización */}
      <section className="band-soft section">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 32 }}>
            <Badge color="red" />
            <h2 style={{ color: 'var(--ink)', fontWeight: 600, fontSize: 'clamp(26px,3vw,36px)' }}>Personalización</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
            <div className="prose">
              <p style={{ marginTop: 0 }}>La personalización en ReinventED no se limita al estudiante. También se aplica al contexto institucional.</p>
              <p>Cuando trabajamos con clubes deportivos, el sistema se adapta a las dinámicas propias de cada organización: calendarios de competencia, cargas de entrenamiento, viajes y procesos de formación deportiva.</p>
              <p>Esto permite construir un modelo académico que mantiene altos estándares, pero responde a las necesidades reales del entorno deportivo.</p>
            </div>
            <div className="niveles">
              <p style={{ marginTop: 0 }}><b>La personalización ocurre en tres niveles:</b></p>

              {niveles.map((n, i) => (
                <div className="nivel" key={i} style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--red)', flexShrink: 0, marginTop: 6 }} />
                  <div><b>{n.t}:</b> {n.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Casos de éxito */}
      <section className="section">
        <div className="container">
          <div className="apply-band">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 16 }}>
              <Badge color="red" />
              <h2 style={{ color: '#fff', fontWeight: 600, fontSize: 'clamp(28px,3vw,42px)', margin: 0 }}>Casos de éxito</h2>
            </div>
            <p style={{ color: 'rgba(255,255,255,.85)', textAlign: 'center', maxWidth: 640, margin: '0 auto 32px' }}>
              Estos proyectos demuestran que la educación académica rigurosa y el desarrollo deportivo pueden coexistir cuando el sistema está diseñado con intención, estructura y seguimiento constante.
            </p>
            <div className="apply-cards">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <Link to="/colegios/idv" className="apply-card">
                  <img src={imgIDV} alt="ReinventED IDV" className="apply-card-img" />
                  <div className="apply-card-foot">
                    <img src={imgLogoIDV} alt="Logo IDV" className="apply-card-logo" />
                  </div>
                </Link>
                <p style={{ color: 'rgba(255,255,255,.9)', margin: 0, textAlign: 'center' }}>ReinventED IDV junto a Independiente del Valle en Ecuador.</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <Link to="/colegios/rimac" className="apply-card">
                  <img src={imgRimac} alt="ReinventED Rímac" className="apply-card-img" />
                  <div className="apply-card-foot">
                    <img src={imgLogoRimac} alt="Logo Rímac" className="apply-card-logo" />
                  </div>
                </Link>
                <p style={{ color: 'rgba(255,255,255,.9)', margin: 0, textAlign: 'center' }}>ReinventED Rímac en alianza con Sporting Cristal en Perú.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra propuesta */}
      <section className="band-soft section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <img src={imgClub6} alt="Nuestra propuesta ReinventED" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', borderRadius: 18, display: 'block' }} />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                <Badge />
                <h3 style={{ fontWeight: 700, color: 'var(--ink)', fontSize: 'clamp(24px,3.4vw,38px)', margin: 0 }}>NUESTRA PROPUESTA</h3>
              </div>
              <p style={{ color: 'var(--ink-soft)', marginBottom: 8 }}>
                ReinventED acompaña a clubes deportivos en el diseño e implementación de un sistema educativo completo para sus estudiantes-atletas.
              </p>
              <p style={{ fontWeight: 600, marginBottom: 20 }}>Nuestra propuesta incluye:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {propuesta.map((p, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--blue)', flexShrink: 0, marginTop: 6 }} />
                    <span style={{ color: 'var(--ink-soft)' }}>{p}</span>
                  </div>
                ))}
              </div>
              <p style={{ color: 'var(--ink-soft)', marginTop: 24 }}>
                El objetivo es construir un sistema educativo que acompañe el desarrollo deportivo sin comprometer el futuro académico de los estudiantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="band-blue section">
        <div className="container contacto" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 48, alignItems: 'start' }}>
          <ContactForm btn="var(--yellow)" btnText="var(--ink)" />
          <div className="contacto-text">
            <h2 style={{ color: '#fff', fontWeight: 400, fontSize: 'clamp(32px,5vw,52px)', letterSpacing: 2 }}>CONTACTO</h2>
            <p>Si tu institución busca integrar educación académica de calidad con formación deportiva de alto rendimiento, podemos trabajar juntos en el diseño de un sistema que responda a esa realidad.</p>
            <p>Contáctanos para explorar cómo implementar el modelo ReinventED en tu club o institución.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', fontWeight: 300, color: 'var(--muted)', fontSize: 'clamp(30px,4vw,46px)', marginBottom: 30 }}>FAQ</h2>
          <Faq items={clubFaq} dotColor="var(--blue)" />
        </div>
      </section>
    </div>
  )
}
