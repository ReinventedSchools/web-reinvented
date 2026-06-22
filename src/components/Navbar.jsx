import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Logo } from './Brand.jsx'
import './navbar.css'

const colegios = [
  { to: '/colegios/puembo', label: 'ReinventED Puembo' },
  { to: '/colegios/idv', label: 'ReinventED IDV' },
  { to: '/colegios/santa-clara', label: 'ReinventED Santa Clara' },
  { to: '/colegios/rimac', label: 'ReinventED Rímac' },
]

const transforma = [
  { to: '/transforma', label: '¿Por qué repensar la educación?' },
  { to: '/transforma/colegio', label: 'En tu colegio' },
  { to: '/transforma/club', label: 'En tu club deportivo' },
]

export default function Navbar() {
  const [open, setOpen] = useState(null) // which dropdown is open (desktop hover/click)
  const [mobile, setMobile] = useState(false)
  const loc = useLocation()

  // Close menus on route change
  useEffect(() => { setOpen(null); setMobile(false) }, [loc.pathname])

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="nav-logo"><Logo size={17} /></Link>

        <button className="nav-burger" onClick={() => setMobile(m => !m)} aria-label="Menú">
          <span /><span /><span />
        </button>

        <nav className={`nav-links ${mobile ? 'show' : ''}`}>
          <NavLink to="/conocenos" className="nav-item">Conócenos</NavLink>

          <Dropdown
            id="red"
            label="Red de colegios"
            items={colegios}
            open={open}
            setOpen={setOpen}
          />

          <Dropdown
            id="transforma"
            label="Transforma tu colegio / club"
            items={transforma}
            open={open}
            setOpen={setOpen}
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

function Dropdown({ id, label, items, open, setOpen }) {
  const isOpen = open === id
  return (
    <div
      className={`nav-dd ${isOpen ? 'open' : ''}`}
      onMouseEnter={() => setOpen(id)}
      onMouseLeave={() => setOpen(null)}
    >
      <button className="nav-item" onClick={() => setOpen(isOpen ? null : id)}>
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
}
