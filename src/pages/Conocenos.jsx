import { useState } from 'react'
import { Badge } from '../components/Brand.jsx'
import { SectionHead } from '../components/UI.jsx'
import SEO from '../components/SEO.jsx'
import { schools } from '../data/schools.js'
import { Link } from 'react-router-dom'
import imgPuembo from '../assets/logos/puemboB.png'
import imgIDV from '../assets/logos/idcB.png'
import imgSantaClara from '../assets/logos/scb.png'
import imgRimac from '../assets/logos/rimacB.png'
import imgHistoria1 from '../assets/historia/historia1.min.webp'
import imgLogoSchools from '../assets/historia/logo_schools.webp'
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
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="page">
      <SEO
        title="Nuestra Historia"
        description="Conoce la historia, misión y valores de ReinventED Schools, una red de colegios comprometida con transformar la educación en Ecuador y Perú."
        path="/conocenos"
      />
      {/* Intro */}
      <section className="section">
        <div className="container conoce-intro">
          <img src={imgHistoria1} alt="El mundo se reinventa" style={{ aspectRatio: '3/4', borderRadius: 24, width: '100%', objectFit: 'cover' }} />
          <div>
            <img src={imgLogoSchools} alt="ReinventED Schools" style={{ height: 120, objectFit: 'contain', display: 'block', marginBottom: 24, marginLeft: 'auto', marginRight: 'auto' }} />
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
          <SectionHead title={<span style={{ fontSize: 'clamp(42px, 5vw, 62px)', fontWeight: 300 }}>Nuestra historia</span>} />
          <div className="prose">
            <p>
              ReinventED Schools nace de una visión clara y ambiciosa: transformar la educación
tradicional para preparar a niños y jóvenes para un mundo que cambia rápidamente.
Desde el inicio, la tesis fue contundente: no basta con mejorar el sistema tradicional;
es necesario rediseñarlo. La idea surgió en un contexto en el que muchas familias
cuestionaban la rigidez de los modelos educativos convencionales y buscaban formas
más personalizadas, exigentes y significativas de aprender
            </p>
            <p>
              Los fundadores de ReinventED Schools, Ana Cristina Hidalgo y Juan Carlos Pérez
Borja, compartían una convicción profunda: la educación debía dejar de ser uniforme
para convertirse en una experiencia más intencional y centrada en el estudiante. No
se trataba de flexibilizar sin estructura, sino de construir una propuesta sólida, con
claridad y altos estándares académicos.
            </p>

            {/* Bloque colapsable */}
            <div className={`prose-expand ${expanded ? 'prose-expand--open' : ''}`}>
              <p>
                La red se estructuró formalmente como organización en 2020, dando vida a su primer
campus en Puembo, Ecuador. Las primeras experiencias de aprendizaje se dieron bajo
carpas y árboles mientras el proyecto tomaba forma. Esa etapa fundacional reafirmó
una idea central: la infraestructura no define la calidad educativa; lo hace el diseño
pedagógico.
              </p>
              <p>
Fue a partir de la consolidación de Puembo que ReinventED comprendió que no
estaba simplemente operando un colegio distinto, sino construyendo algo más
profundo: un modelo educativo con sistema, estructura y diseño intencional, capaz de
adaptarse y crecer. Desde entonces, la organización asumió con claridad su propósito
de diseñar y operar sistemas de aprendizaje personalizados y estructurados.
              </p>
              <p>
Una de las etapas más significativas fue la alianza con el club Independiente del Valle,
que dio lugar a ReinventED IDV. Este proyecto combina educación académica de
calidad con las necesidades específicas de jóvenes deportistas de alto rendimiento,
adaptando horarios y metodologías para que el desarrollo académico y deportivo se
complementen en la formación integral del estudiante.
              </p>
              <p>
                Posteriormente, la red continuó su expansión en Ecuador con la apertura de
ReinventED Santa Clara en el Valle de los Chillos, fortaleciendo su presencia local y
consolidando un modelo educativo personalizado y estructurado que responde a
distintas comunidades, manteniendo intacta su esencia: autonomía, propósito y altos
estándares académicos en un entorno bilingüe.
              </p>
              <p>
                La expansión internacional continuó en Perú con ReinventED Rímac, en alianza con
Sporting Cristal. Esta apertura confirmó que ReinventED no depende de un entorno
específico, sino de la solidez de su diseño. Su propuesta no es un conjunto de
prácticas aisladas, sino un sistema educativo intencional, estructurado y replicable.
              </p>
              <p>
                Desde sus inicios, ReinventED Schools ha sostenido una postura clara frente al
modelo tradicional: todos los estudiantes pueden alcanzar altos niveles de desarrollo
cuando el sistema está diseñado para reconocer sus diferencias, acompañarlos con
estructura y exigirles con propósito. Más que una red de colegios, ReinventED es una
red que diseña sistemas educativos para que cada estudiante construya autonomía,
propósito y competencias reales para la vida.
              </p>
            </div>

            <button className="prose-toggle" onClick={() => setExpanded(e => !e)}>
              {expanded ? 'Leer menos ↑' : 'Leer más ↓'}
            </button>

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
