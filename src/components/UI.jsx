import { useState } from 'react'
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

/* Placeholder gallery: a row of empty image cards + carousel dots */
export function Gallery({ count = 5, dotColor }) {
  const [active, setActive] = useState(1)
  return (
    <div>
      <div className="grid" style={{ gridTemplateColumns: `repeat(${count}, 1fr)` }}>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="img-ph" style={{ aspectRatio: '1 / 1' }} />
        ))}
      </div>
      <div className="dots-row">
        {Array.from({ length: 5 }).map((_, i) => (
          <i
            key={i}
            className={i === active ? 'active' : ''}
            style={i === active && dotColor ? { background: dotColor } : {}}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  )
}

/* FAQ accordion */
export function Faq({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="faq">
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div className={`faq-item ${isOpen ? 'open' : ''}`} key={i}>
            <button className="faq-q" onClick={() => setOpen(isOpen ? -1 : i)}>
              <span className="faq-icon">
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
export function ContactForm({ theme = 'blue', accent = 'var(--blue)', btn = 'var(--blue)', btnText = '#fff' }) {
  const submit = e => { e.preventDefault(); alert('¡Gracias! Nos pondremos en contacto contigo.') }
  return (
    <form className="cform" onSubmit={submit}>
      <div className="cform-row">
        <input type="text" placeholder="Nombre" />
        <input type="tel" placeholder="Teléfono" />
      </div>
      <input type="email" placeholder="Email" />
      <textarea placeholder="Comentario" rows={4} />
      <button className="btn" type="submit" style={{ background: btn, color: btnText, alignSelf: 'flex-end' }}>
        Enviar
      </button>
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
