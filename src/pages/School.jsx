import { useState } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
// import imgCamino from '../assets/implementa.webp'
import imgCamino from '../assets/sedes/puembo/c9.jpeg'
import { Badge, SchoolLogo, Smiley } from '../components/Brand.jsx'
import { SectionHead, Gallery, Faq, FadeImg } from '../components/UI.jsx'
import { schools, stages, faqItems } from '../data/schools.js'
import './pages.css'

const applyCards = [
  { t: 'Agenda una visita a nuestro campus', icon: 'book' },
  { t: 'Llena este formulario en línea', icon: 'doc' },
  { t: 'Entrevista y evaluación familiar', icon: 'people' },
  { t: 'Reunión del comité de admisiones', icon: 'group' },
  { t: 'Notificación de admisión', icon: 'bell' },
]

function StudentCarousel({ dotColor, images }) {
  const [page, setPage] = useState(0)
  const PER_PAGE = 4
  const PAGES = images.length ? Math.ceil(images.length / PER_PAGE) : 5
  const magenta = '#c2218f'
  const btn = {
    background: magenta, border: 'none', color: '#fff',
    width: 44, height: 44, borderRadius: 10, cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  }
  const visible = images.length
    ? images.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)
    : [0, 1, 2, 3]

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <button style={btn} onClick={() => setPage(p => (p - 1 + PAGES) % PAGES)}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div className="student-carousel-grid">
          {visible.map((src, i) =>
            typeof src === 'string'
              ? <FadeImg key={src} src={src} alt="" style={{ width: '100%', aspectRatio: '4/3', borderRadius: 16 }} />
              : <div key={i} className="img-ph" style={{ aspectRatio: '4/3', borderRadius: 16 }} />
          )}
        </div>
        <button style={btn} onClick={() => setPage(p => (p + 1) % PAGES)}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
      <div className="dots-row" style={{ marginTop: 20 }}>
        {Array.from({ length: PAGES }).map((_, i) => (
          <i key={i} className={i === page ? 'active' : ''} style={i === page ? { background: dotColor || magenta } : {}} onClick={() => setPage(i)} />
        ))}
      </div>
    </div>
  )
}

function ApplyIcon({ name }) {
  const common = { width: 32, height: 32, viewBox: '0 0 24 24', fill: 'none', stroke: '#fff', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round' }
  const paths = {
    book: <><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M19 3v16"/></>,
    doc: <><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/></>,
    people: <><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="17" cy="9" r="2.2"/><path d="M16 14a5 5 0 0 1 5 6"/></>,
    group: <><circle cx="8" cy="9" r="3"/><circle cx="16" cy="9" r="3"/><path d="M3 19a5 5 0 0 1 10 0M11 19a5 5 0 0 1 10 0"/></>,
    bell: <><path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z"/><path d="M10 20a2 2 0 0 0 4 0"/></>,
  }
  return <svg {...common}>{paths[name]}</svg>
}

const schoolMeta = {
  puembo: {
    description: 'ReinventED Puembo, colegio bilingüe en Ecuador con aprendizaje personalizado, desarrollo de autonomía y altos estándares académicos desde 2020.',
  },
  idv: {
    description: 'ReinventED IDV, colegio de alto rendimiento junto a Independiente del Valle. Educación personalizada integrada con la formación deportiva profesional en Ecuador.',
  },
  'santa-clara': {
    description: 'ReinventED Santa Clara, colegio bilingüe en el Valle de los Chillos. Aprendizaje personalizado, bienestar integral y desarrollo de habilidades para la vida.',
  },
  rimac: {
    description: 'ReinventED Rímac, colegio en alianza con Sporting Cristal en Lima, Perú. Educación académica de calidad integrada con la formación deportiva de alto rendimiento.',
  },
}

export default function School() {
  const { slug } = useParams()
  const s = schools[slug]
  if (!s) return <Navigate to="/" replace />

  const meta = schoolMeta[slug] || {}
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'School',
    name: `ReinventED ${s.name}`,
    url: `https://reinventedschools.com/colegios/${slug}`,
    description: meta.description,
    parentOrganization: { '@type': 'EducationalOrganization', name: 'ReinventED Schools' },
  }

  return (
    <div className="page">
      <SEO
        title={`ReinventED ${s.name}`}
        description={meta.description}
        image={s.heroImg}
        path={`/colegios/${slug}`}
        jsonLd={jsonLd}
      />
      {/* Hero */}
      <section className="hero-school">
        {s.heroImg
          ? <FadeImg src={s.heroImg} alt={`ReinventED ${s.name}`} className="hero-school-img" fetchPriority="high" style={{ ...(s.heroFit ? { objectFit: s.heroFit } : {}), objectPosition: s.heroPosition || 'center', ...(s.heroHeight ? { height: s.heroHeight } : {}) }} />
          : <div className="img-ph hero-school-img" />}
        <div className="hero-school-overlay" />
        <div className="container hero-school-logo" style={s.logoRight ? { justifyContent: 'flex-end' } : {}}>
          {s.logoImg
            ? <img src={s.logoImg} alt={`Logo ReinventED ${s.name}`} className="school-hero-logo-img" />
            : <><Smiley className="smiley smiley-lg" /><SchoolLogo ed={s.ed} name={s.name} nameColor="#fff" base="#fff" size={48} /></>}
        </div>
      </section>

      {/* Fundación del campus */}
      <section className="section">
        <div className="container">
          <SectionHead title={<span style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 300 }}>Fundación del campus</span>} badge={s.arrow} />
          <div className="found-band" style={{ background: s.band, color: s.bandText }}>
            {s.intro}
          </div>
          <div style={{ marginTop: 40 }}>
            <Gallery images={s.galleryImgs || []} count={5} dotColor={s.circle} />
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="section-tight">
        <div className="container">
          <div className="loc-band" style={{ background: s.band }}>
            <div className="loc-text">
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                <Badge color={s.arrow} />
                <h2 style={{ color: '#fff', fontWeight: 600, fontSize: 'clamp(22px,3vw,30px)', whiteSpace: 'pre-line' }}>{s.locTitle}</h2>
              </div>
              {s.locText.map((t, i) => <p key={i} style={{ color: 'rgba(255,255,255,.92)' }}>{t}</p>)}
            </div>
            {s.locImg
              ? s.locImgBg
                ? <div className="loc-img loc-img-real" style={{ background: s.locImgBg, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 28, borderRadius: 18, flexShrink: 0 }}>
                    <FadeImg src={s.locImg} alt={`ReinventED ${s.name}`} style={{ width: '100%', objectFit: s.locImgFit || 'contain' }} />
                  </div>
                : <FadeImg src={s.locImg} alt={`ReinventED ${s.name}`} className="loc-img loc-img-real" style={s.locImgFit ? { objectFit: s.locImgFit } : {}} />
              : <div className="img-ph loc-img" />}
          </div>
        </div>
      </section>

      {/* Nominación */}
      {s.nominacionImg && (
        <section className="section">
          <div className="container">
            <div className="school-extra-grid">
              <FadeImg src={s.nominacionImg} alt="Nominación" style={{ width: '100%', aspectRatio: '2 / 1', borderRadius: 18 }} />
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <Badge color={s.arrow} />
                  <h2 style={{ fontWeight: 600, fontSize: 'clamp(24px,3vw,34px)', color: 'var(--ink)' }}>Top 10 World's Best School Prizes</h2>
                </div>
                <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7, paddingLeft: 50 }}>{s.nominacionText}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Sección extra + Los estudiantes desarrollan (IDV) */}
      {s.sectionImg && (
        <section className={s.sectionNoBg ? 'section' : 'band-soft section'}>
          <div className="container">
            <div className="school-extra-grid" style={s.sectionImgRight ? { direction: 'rtl' } : {}}>
              <FadeImg src={s.sectionImg} alt={s.sectionTitle} style={{ width: '100%', aspectRatio: '4/3', borderRadius: 18 }} />
              <div style={{ direction: 'ltr' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <Badge color={s.arrow} />
                  <h2 style={{ fontWeight: 600, fontSize: 'clamp(24px,3vw,34px)', color: 'var(--ink)' }}>{s.sectionTitle}</h2>
                </div>
                <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7, paddingLeft: 50 }}>{s.sectionText}</p>
              </div>
            </div>
            {s.studentsDevelop && (
              <>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 40 }}>
                  <Badge color={s.arrow} />
                  <h2 style={{ fontWeight: 400, fontSize: 'clamp(24px,3vw,36px)', color: 'var(--ink)' }}>Los estudiantes desarrollan</h2>
                </div>
                <div className="students-develop-grid">
                  {s.studentsDevelop.map((item, i) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                      {s.studentsDevelopIcons?.[i]
                        ? <img src={s.studentsDevelopIcons[i]} alt="" style={{ width: 64, height: 64, objectFit: 'contain' }} />
                        : <div style={{ width: 14, height: 14, borderRadius: '50%', background: 'var(--magenta)', flexShrink: 0 }} />}
                      <p style={{ color: 'var(--ink-soft)', margin: 0, fontSize: 15, lineHeight: 1.5 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {/* Tu camino en ReinventED */}
      {!s.hideCamino && <section className="section">
        <div className="container">
          <div className="camino-head">
            <FadeImg src={s.caminoImg || imgCamino} alt="Tu camino en ReinventED" className="camino-img fit-contain" />
            <div>
              <SectionHead title={<span style={{ color: 'var(--ink)', fontWeight: 600, fontSize: 'clamp(26px, 3vw, 38px)' }}>Tu camino en ReinventED</span>} badge={s.arrow} light={false} />
              <p style={{ color: 'var(--ink-soft)', maxWidth: 560 }}>
                En ReinventED, el aprendizaje se organiza en talleres multiedad. Esta estructura
                permite que los estudiantes avancen según su nivel de desarrollo y no únicamente
                por su edad cronológica. Fomenta liderazgo, colaboración y aprendizaje entre pares.
                Permite que cada estudiante encuentre desafíos acordes a su progreso, manteniendo
                metas claras y estándares definidos.
              </p>
            </div>
          </div>

          <div className="timeline">
            <div className="timeline-line" />
            {stages.map((st, i) => (
              <div className="tl-stage" key={st.n}>
                <div className="tl-dot" style={{ background: s.stageColors?.[i] ?? st.color }}>{st.n}</div>
                <strong>{st.name}</strong>
                <span className="tl-grade">{st.grade}</span>
                <span className="tl-sub">{st.sub}</span>
              </div>
            ))}
          </div>
          <p className="grades-note">
            <span style={{ color: s.circle }}>✱</span>{' '}
            {Array.isArray(s.grades)
              ? s.grades.map((seg, i) => seg.b ? <b key={i}>{seg.t}</b> : seg.t)
              : s.grades}
          </p>
          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <Link to="/transforma" className="btn-propuesta" style={s.propuestaColor ? { background: s.propuestaColor } : {}}>
              CONOCE MÁS DE NUESTRA PROPUESTA
            </Link>
          </div>
        </div>
      </section>}

      {/* Cómo aplicar */}
      {!s.hideCamino && <section className="band-soft section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <SectionHead title={<span style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 300 }}>¿Cómo aplicar?</span>} badge={s.arrow} align="center" />
          </div>
          <div className="apply-steps">
            {applyCards.map((c, i) => {
              const href = (i === 0 && s.calendlyUrl) ? s.calendlyUrl : (i === 1 && s.formUrl) ? s.formUrl : null
              const isCalendly = !!href
              const inner = (
                <>
                  <div className="apply-step-icon" style={{ background: s.circle }}>
                    <ApplyIcon name={c.icon} />
                  </div>
                  <span>{c.t}</span>
                </>
              )
              return isCalendly
                ? <a key={i} className="apply-step" href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', cursor: 'pointer' }}>{inner}</a>
                : <div key={i} className="apply-step">{inner}</div>
            })}
          </div>
        </div>
      </section>}

      {/* Estudiantes ReinventED (IDV) */}
      {s.sectionImg && !s.hideStudents && (
        <section className="section">
          <div className="container">
            <h2 style={{ textAlign: 'center', fontWeight: 300, color: 'var(--ink)', fontSize: 'clamp(26px,3.5vw,40px)', marginBottom: 36 }}>
              Estudiantes <b style={{ fontWeight: 700 }}>ReinventED</b>
            </h2>
            <StudentCarousel dotColor={s.circle} images={s.studentImgs || []} />
          </div>
        </section>
      )}

      {/* FAQ */}
      {!s.hideFaq && (
        <section className="section">
          <div className="container">
            <h2 style={{ textAlign: 'center', fontWeight: 300, color: 'var(--muted)', fontSize: 'clamp(30px,4vw,46px)', marginBottom: 30 }}>FAQ</h2>
            <Faq items={s.faqItems || faqItems} dotColor={s.faqDot} />
          </div>
        </section>
      )}
    </div>
  )
}
