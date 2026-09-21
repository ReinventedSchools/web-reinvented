import { memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from './Brand.jsx'

const PDF_BY_SCHOOL = {
  puembo: '/docs/Politica-Proteccion-de-Datos-Reinvented-Puembo.pdf',
  'santa-clara': '/docs/Politica-Proteccion-de-Datos-Reinvented-Santa-Clara.pdf',
}

export default memo(function Footer() {
  const { pathname } = useLocation()
  const schoolSlug = pathname.match(/^\/colegios\/([^/]+)/)?.[1]
  const pdfHref = PDF_BY_SCHOOL[schoolSlug]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <Logo size={18} />
          <div className="social">
            <span>Síguenos</span>
            <a href="https://www.facebook.com/reinvented.puembo/following" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M13 22v-8h3l.5-3H13V9c0-.9.3-1.5 1.6-1.5H17V4.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V11H8v3h2.6v8H13z"/></svg>
            </a>
            <a href="https://www.instagram.com/reinvented.schools/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
          </div>
        </div>
        <div className="footer-legal">
          <Link to="/politica-de-privacidad">Política de privacidad</Link><span>|</span>
          <Link to="/terminos-y-condiciones">Términos y condiciones</Link><span>|</span>
          <Link to="/aviso-legal">Aviso legal</Link><span>|</span>
          {pdfHref && (
            <>
              <a href={pdfHref} target="_blank" rel="noopener noreferrer">Política de protección de datos personales</a><span>|</span>
            </>
          )}
          <span style={{ color: 'var(--muted)' }}>© 2026 ReinventED. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  )
})
