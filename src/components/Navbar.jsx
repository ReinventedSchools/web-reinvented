import { useState, useEffect, useCallback, memo } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Logo } from './Brand.jsx'
import './navbar.css'

const colegios = [
  { to: '/colegios/puembo', label: 'ReinventED Puembo' },
  { to: '/colegios/idv', label: 'ReinventED IDV' },
  { to: '/colegios/santa-clara', label: 'ReinventED Santa Clara' },
  { to: '/colegios/rimac', label: 'ReinventED Rímac' },
]

const conocenos = [
  { to: '/conocenos', label: 'Historia' },
  { to: '/transforma', label: 'Sistema ReinventED' },
]

const transforma = [
  { to: '/transforma/club', label: 'Colegios para clubes deportivos' },
  { to: '/transforma/colegio', label: 'Asesorias para colegios' },
]

const Dropdown = memo(function Dropdown({ label, items, isOpen, onOpen, onClose, onToggle }) {
  return (
    <div
      className={`nav-dd ${isOpen ? 'open' : ''}`}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button className="nav-item" onClick={onToggle}>
        {label}
        <svg className="caret" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className="nav-menu">
        {items.map(it => (
          <NavLink key={it.to} to={it.to} className="nav-menu-item">{it.label}</NavLink>
        ))}
      </div>
    </div>
  )
})

export default function Navbar() {
  const [open, setOpen] = useState(null)
  const [mobile, setMobile] = useState(false)
  const loc = useLocation()

  useEffect(() => { setOpen(null); setMobile(false) }, [loc.pathname])

  const closeDropdown  = useCallback(() => setOpen(null), [])
  const openKnowUs     = useCallback(() => setOpen('conocenos'), [])
  const openRed        = useCallback(() => setOpen('red'), [])
  const openTransforma = useCallback(() => setOpen('transforma'), [])
  const toggleKnowUs     = useCallback(() => setOpen(p => p === 'conocenos'  ? null : 'conocenos'), [])
  const toggleRed        = useCallback(() => setOpen(p => p === 'red'        ? null : 'red'), [])
  const toggleTransforma = useCallback(() => setOpen(p => p === 'transforma' ? null : 'transforma'), [])
  const toggleMobile     = useCallback(() => setMobile(m => !m), [])

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="nav-logo"><Logo height={40} /></Link>

        <button className="nav-burger" onClick={toggleMobile} aria-label="Menú">
          <span /><span /><span />
        </button>

        <nav className={`nav-links ${mobile ? 'show' : ''}`}>
          <Dropdown
            label="Conócenos"
            items={conocenos}
            isOpen={open === 'conocenos'}
            onOpen={openKnowUs}
            onClose={closeDropdown}
            onToggle={toggleKnowUs}
          />
          <Dropdown
            label="Red de colegios"
            items={colegios}
            isOpen={open === 'red'}
            onOpen={openRed}
            onClose={closeDropdown}
            onToggle={toggleRed}
          />
          <Dropdown
            label="Transforma tu colegio / club"
            items={transforma}
            isOpen={open === 'transforma'}
            onOpen={openTransforma}
            onClose={closeDropdown}
            onToggle={toggleTransforma}
          />

          <NavLink to="/noticias" className="nav-item">Noticias</NavLink>

          <NavLink to="/buscar" className="nav-search" aria-label="Buscar">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="21" y2="21" />
            </svg>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
