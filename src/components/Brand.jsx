// Reusable brand pieces: the "ReinventED Schools" wordmark, the smiley mark,
// and the small arrow used inside section badges.

export function Logo({ size = 18 }) {
  return (
    <span className="logo" style={{ fontSize: size }}>
      <span className="l1">Reinvent<b>ED</b></span>
      <span className="l2">
        Schools
        <span className="dots">
          <i style={{ background: '#2bae8c' }} />
          <i style={{ background: '#f4c20d' }} />
          <i style={{ background: '#e0492f' }} />
          <i style={{ background: '#5277bd' }} />
        </span>
      </span>
    </span>
  )
}

// School-specific logo: "ReinventED <name>" with custom colors.
export function SchoolLogo({ ed = '#2bae8c', name, nameColor = '#fff', base = '#fff', size = 34 }) {
  return (
    <span style={{ fontSize: size, fontFamily: 'Jost, sans-serif', fontWeight: 700, lineHeight: 1.02 }}>
      <span style={{ display: 'block', color: base }}>
        Reinvent<span style={{ color: ed }}>ED</span>
      </span>
      <span style={{ display: 'block', color: nameColor }}>{name}</span>
    </span>
  )
}

export function Smiley({ className = 'smiley' }) {
  // The ReinventED face mark: parenthesis "ears", colored dots, smile.
  return (
    <svg className={className} viewBox="0 0 70 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 8C6 14 6 38 14 44" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M56 8c8 6 8 30 0 36" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M22 30c4 7 22 7 26 0" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      <circle cx="24" cy="20" r="3" fill="#2bae8c" />
      <circle cx="32" cy="20" r="3" fill="#f4c20d" />
      <circle cx="40" cy="20" r="3" fill="#e0492f" />
      <circle cx="48" cy="20" r="3" fill="#5277bd" />
    </svg>
  )
}

export function ArrowDR() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="7" x2="17" y2="17" />
      <polyline points="17 9 17 17 9 17" />
    </svg>
  )
}

// Section heading with arrow badge.
export function Badge({ color = '', children }) {
  return (
    <span className={`badge ${color}`}>
      {children || <ArrowDR />}
    </span>
  )
}
