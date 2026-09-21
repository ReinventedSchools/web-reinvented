import SEO from '../components/SEO.jsx'
import { SectionHead } from '../components/UI.jsx'
import { legalPages } from '../data/legal.jsx'
import './pages.css'

export default function Legal({ page }) {
  const doc = legalPages[page]
  if (!doc) return null

  const { title, description, path, Content } = doc

  return (
    <div className="page">
      <SEO title={title} description={description} path={path} />
      <section className="section">
        <div className="container">
          <SectionHead title={<span style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 300 }}>{title}</span>} />
          <div className="prose legal-doc">
            <Content />
          </div>
        </div>
      </section>
    </div>
  )
}
