import { Logo } from './Brand.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <Logo size={18} />
          <div className="social">
            <span>Síguenos</span>
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M13 22v-8h3l.5-3H13V9c0-.9.3-1.5 1.6-1.5H17V4.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V11H8v3h2.6v8H13z"/></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="#" aria-label="TikTok">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M16 3c.3 2 1.6 3.4 3.5 3.6V9c-1.3 0-2.5-.4-3.5-1v6.2A5.2 5.2 0 1 1 10.8 9v2.6a2.6 2.6 0 1 0 1.8 2.5V3H16z"/></svg>
            </a>
          </div>
        </div>
        <div className="footer-legal">
          <a href="#">Política de privacidad</a><span>|</span>
          <a href="#">Términos y condiciones</a><span>|</span>
          <a href="#">Aviso legal</a><span>|</span>
          <span style={{ color: 'var(--muted)' }}>© 2026 ReinventED. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  )
}
