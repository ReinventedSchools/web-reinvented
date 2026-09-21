import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import './pages.css'

// Simple client-side index of the site's main pages.
const index = [
  { title: 'Conócenos', path: '/conocenos', tag: 'Página', text: 'Nuestra historia, fundadores Ana Cristina Hidalgo y Juan Carlos Pérez, nuestras sedes y trabaja con nosotros.' },
  { title: '¿Por qué repensar la educación?', path: '/transforma', tag: 'Sistema', text: 'Every student succeeds. Personalización, autonomía, altos estándares y habilidades del siglo XXI.' },
  { title: 'En tu colegio', path: '/transforma/colegio', tag: 'Transforma', text: 'Implementa ReinventED en tu institución. Asesorías y oferta para colegios.' },
  { title: 'En tu club deportivo', path: '/transforma/club', tag: 'Transforma', text: 'Implementa ReinventED en tu club deportivo. Colegios para deportistas y casos de éxito.' },
  { title: 'ReinventED Puembo', path: '/colegios/puembo', tag: 'Colegio', text: 'Primer campus de la red, desde 2020. Ubicado en Puembo, rodeado de naturaleza.' },
  { title: 'ReinventED IDV', path: '/colegios/idv', tag: 'Colegio', text: 'Alianza con Independiente del Valle, desde 2021. Educación de alto rendimiento deportivo.' },
  { title: 'ReinventED Santa Clara', path: '/colegios/santa-clara', tag: 'Colegio', text: 'En el Valle de los Chillos, desde 2022. Comunidad, accesibilidad y altos estándares.' },
  { title: 'ReinventED Rímac', path: '/colegios/rimac', tag: 'Colegio', text: 'Alianza con Sporting Cristal en Perú, desde 2024. Expansión regional de la red.' },
  { title: 'Noticias', path: '/noticias', tag: 'Página', text: 'Lo último de la red ReinventED: nuevos campus, grados y eventos.' },
  { title: 'Política de privacidad', path: '/politica-de-privacidad', tag: 'Legal', text: 'Aviso de privacidad conforme a la LOPDP. Tratamiento de datos personales, finalidades y derechos.' },
  { title: 'Términos y condiciones', path: '/terminos-y-condiciones', tag: 'Legal', text: 'Condiciones de uso del sitio web, obligaciones del usuario, propiedad intelectual y legislación aplicable.' },
  { title: 'Aviso legal', path: '/aviso-legal', tag: 'Legal', text: 'Aviso de privacidad. Al usar el sitio aceptas la Política de privacidad y los Términos y condiciones.' },
]

export default function Buscar() {
  const [q, setQ] = useState('')

  const results = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (!term) return []
    return index.filter(it =>
      (it.title + ' ' + it.text + ' ' + it.tag).toLowerCase().includes(term)
    )
  }, [q])

  return (
    <div className="page">
      <section className="section search-sec">
        <div className="container">
          <h1 style={{ fontWeight: 300, color: 'var(--muted)', fontSize: 'clamp(30px,4vw,46px)', textAlign: 'center', marginBottom: 8 }}>Buscar</h1>
          <p style={{ textAlign: 'center', color: 'var(--ink-soft)', marginBottom: 30 }}>Encuentra colegios, programas y noticias dentro de la red ReinventED.</p>

          <div className="search-box">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="21" y2="21" />
            </svg>
            <input
              autoFocus
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="¿Qué estás buscando? Ej: Puembo, admisión, deporte…"
            />
            {q && <button className="search-clear" onClick={() => setQ('')}>✕</button>}
          </div>

          {!q && (
            <div className="search-suggest">
              {['Puembo', 'IDV', 'Santa Clara', 'Rímac', 'Admisión', 'Noticias'].map(s => (
                <button key={s} onClick={() => setQ(s)}>{s}</button>
              ))}
            </div>
          )}

          {q && (
            <p className="search-count">{results.length} resultado{results.length !== 1 ? 's' : ''} para “{q}”</p>
          )}

          <div className="search-results">
            {results.map(r => (
              <Link to={r.path} key={r.path} className="search-result">
                <span className="search-tag">{r.tag}</span>
                <h4>{r.title}</h4>
                <p>{r.text}</p>
                <span className="search-path">{r.path}</span>
              </Link>
            ))}
            {q && results.length === 0 && (
              <p style={{ textAlign: 'center', color: 'var(--muted)', padding: '40px 0' }}>
                No encontramos resultados. Intenta con otra palabra.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
