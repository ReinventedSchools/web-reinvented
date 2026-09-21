import { useState, useRef, useEffect, useCallback } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE  = 'service_crx21jm'   // reemplaza con tu Service ID de EmailJS
const EMAILJS_TEMPLATE = 'template_uxxniwf'  // reemplaza con tu Template ID de EmailJS
const EMAILJS_KEY      = 'zsAt5XlIx1lPeqHQR'   // reemplaza con tu Public Key de EmailJS
import { Badge, ArrowDR } from './Brand.jsx'

/* Section heading: arrow badge + light title (optionally bold accent inside) */
export function SectionHead({ title, badge = '', light = true, align = 'left', children }) {
  return (
    <div className="heading-row" style={{ justifyContent: align === 'center' ? 'center' : 'flex-start' }}>
      <Badge color={badge} />
      <h2 className={light ? 'h-light' : ''} style={light ? {} : { fontSize: 'clamp(24px,3vw,34px)' }}>
        {title}{children}
      </h2>
    </div>
  )
}

/* Photo with shimmer placeholder + fade-in when loaded */
export function FadeImg({ className = '', style, alt = '', onLoad, ...props }) {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef(null)
  const { objectFit, objectPosition, ...wrapStyle } = style || {}

  useEffect(() => {
    setLoaded(false)
    const el = ref.current
    if (el?.complete && el.naturalWidth) setLoaded(true)
  }, [props.src])

  return (
    <span className={`fade-img-wrap${loaded ? ' is-loaded' : ''}${className ? ` ${className}` : ''}`} style={wrapStyle}>
      <img
        ref={ref}
        alt={alt}
        style={{
          ...(objectFit ? { objectFit } : {}),
          ...(objectPosition ? { objectPosition } : {}),
        }}
        {...props}
        onLoad={(e) => {
          setLoaded(true)
          onLoad?.(e)
        }}
      />
    </span>
  )
}

/* Gallery: real images carousel (3 per page) or placeholder */
export function Gallery({ images = [], count = 5, dotColor }) {
  const [page, setPage] = useState(0)
  const containerRef = useRef(null)
  const PER_PAGE = 3
  const pages = images.length ? Math.ceil(images.length / PER_PAGE) : 3

  useEffect(() => {
    if (!images.length) return
    const el = containerRef.current
    if (!el) return
    let id
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        id = setInterval(() => setPage(p => (p + 1) % pages), 3000)
      } else {
        clearInterval(id)
      }
    })
    obs.observe(el)
    return () => { obs.disconnect(); clearInterval(id) }
  }, [images.length, pages])

  if (!images.length) {
    return (
      <div ref={containerRef}>
        <div className="grid" style={{ gridTemplateColumns: `repeat(${count}, 1fr)` }}>
          {Array.from({ length: count }).map((_, i) => (
            <div key={i} className="img-ph" style={{ aspectRatio: '4/3' }} />
          ))}
        </div>
        <div className="dots-row">
          {Array.from({ length: 3 }).map((_, i) => (
            <i key={i} className={i === 1 ? 'active' : ''} style={i === 1 && dotColor ? { background: dotColor } : {}} />
          ))}
        </div>
      </div>
    )
  }

  const visible = images.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  return (
    <div ref={containerRef}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {visible.map((src, i) => (
          <FadeImg
            key={`${page}-${i}-${src}`}
            src={src}
            alt=""
            loading="lazy"
            style={{ width: '100%', aspectRatio: '4/3', borderRadius: 12 }}
          />
        ))}
      </div>
      <div className="dots-row" style={{ marginTop: 16 }}>
        {Array.from({ length: pages }).map((_, i) => (
          <i
            key={i}
            className={i === page ? 'active' : ''}
            style={i === page && dotColor ? { background: dotColor } : {}}
            onClick={() => setPage(i)}
          />
        ))}
      </div>
    </div>
  )
}

/* FAQ accordion */
export function Faq({ items, dotColor }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="faq">
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div className={`faq-item ${isOpen ? 'open' : ''}`} key={i}>
            <button className="faq-q" onClick={() => setOpen(isOpen ? -1 : i)}>
              <span className="faq-icon" style={dotColor ? { background: dotColor } : {}}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points={isOpen ? '6 15 12 9 18 15' : '6 9 12 15 18 9'} />
                </svg>
              </span>
              <span>{it.q}</span>
            </button>
            {isOpen && <div className="faq-a">{it.a}</div>}
          </div>
        )
      })}
    </div>
  )
}

/* Contact form (visual only — placeholders to be wired by the owner) */
export function ContactForm({ btn = 'var(--blue)', btnText = '#fff' }) {
  const formRef = useRef()
  const [fields, setFields] = useState({ nombre: '', telefono: '', email: '', comentario: '' })
  const [status, setStatus] = useState('idle') // idle | sending | ok | error

  const handleChange = useCallback(e => {
    const { name, value } = e.target
    setFields(f => ({ ...f, [name]: value }))
  }, [])

  const submit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          from_name:  fields.nombre,
          telefono:   fields.telefono,
          reply_to:   fields.email,
          message:    fields.comentario,
          to_email:   'jeronimo.hernandez@reinventedschools.com',
        },
        EMAILJS_KEY
      )
      setStatus('ok')
      setFields({ nombre: '', telefono: '', email: '', comentario: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="cform" onSubmit={submit} ref={formRef}>
      <div className="cform-row">
        <input type="text"  name="nombre"     placeholder="Nombre"    value={fields.nombre}     onChange={handleChange} required />
        <input type="tel"   name="telefono"   placeholder="Teléfono"  value={fields.telefono}   onChange={handleChange} required />
      </div>
      <input type="email" name="email"      placeholder="Email"     value={fields.email}      onChange={handleChange} required />
      <textarea           name="comentario" placeholder="Comentario" value={fields.comentario} onChange={handleChange} rows={4} />
      <button className="btn" type="submit" disabled={status === 'sending'}
        style={{ background: btn, color: btnText, alignSelf: 'flex-end', opacity: status === 'sending' ? .7 : 1 }}>
        {status === 'sending' ? 'Enviando…' : 'Enviar'}
      </button>
      {status === 'ok'    && <p style={{ color: 'var(--teal)',     margin: 0 }}>¡Mensaje enviado! Nos pondremos en contacto contigo.</p>}
      {status === 'error' && <p style={{ color: 'var(--red)',      margin: 0 }}>Hubo un error. Por favor intenta de nuevo.</p>}
    </form>
  )
}

/* Small icon tile used in feature grids */
export function FeatureItem({ title, text, badge = '' }) {
  return (
    <div className="feat">
      <Badge color={badge} />
      <h4>{title}</h4>
      {text && <p>{text}</p>}
    </div>
  )
}

export { ArrowDR }
