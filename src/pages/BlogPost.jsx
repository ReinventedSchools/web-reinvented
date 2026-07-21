import { useParams, Link, Navigate } from 'react-router-dom'
import { blogs } from '../data/blogs.js'
import './pages.css'
import './blogpost.css'

function renderBlock(block, i) {
  switch (block.type) {
    case 'h2':
      return <h2 key={i} className="bp-h2">{block.text}</h2>
    case 'h3':
      return <h3 key={i} className="bp-h3">{block.text}</h3>
    case 'p':
      return <p key={i} className="bp-p">{block.text}</p>
    case 'bullet-items':
      return (
        <ul key={i} className="bp-bullet-list">
          {block.items.map((item, j) => (
            <li key={j}><b>{item.label}:</b> {item.text}</li>
          ))}
        </ul>
      )
    case 'numbered':
      return (
        <ol key={i} className="bp-numbered-list">
          {block.items.map((item, j) => (
            <li key={j}><b>{item.label}:</b> {item.text}</li>
          ))}
        </ol>
      )
    case 'list':
      return (
        <ul key={i} className="bp-list">
          {block.items.map((item, j) => <li key={j}>{item}</li>)}
        </ul>
      )
    case 'quote':
      return (
        <blockquote key={i} className="bp-quote">
          {block.label && <span className="bp-quote-label">{block.label}</span>}
          <p>{block.text}</p>
        </blockquote>
      )
    case 'faq':
      return (
        <div key={i} className="bp-faq">
          {block.items.map((item, j) => (
            <div key={j} className="bp-faq-item">
              <p className="bp-faq-q">{item.q}</p>
              <p className="bp-faq-a">{item.a}</p>
            </div>
          ))}
        </div>
      )
    default:
      return null
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogs.find(b => b.slug === slug)
  if (!post) return <Navigate to="/noticias" replace />

  return (
    <div className="page">
      {/* Hero */}
      {post.img && (
        <section className="hero-school" style={{ height: 420 }}>
          <img src={post.img} alt={post.title} className="hero-school-img" style={{ height: 420, objectPosition: 'center' }} />
          <div className="hero-school-overlay" style={{ background: 'linear-gradient(180deg, rgba(10,20,50,.55) 0%, rgba(10,20,50,.15) 100%)' }} />
        </section>
      )}

      {/* Article */}
      <section className="section">
        <div className="container bp-container">
          <Link to="/noticias" className="bp-back">← Volver a Noticias</Link>

          <div className="bp-meta">
            <span className="news-tag">{post.cat}</span>
            <span className="news-date">{post.date}</span>
          </div>

          <h1 className="bp-title">{post.title}</h1>

          <div className="bp-body">
            {post.content.map((block, i) => renderBlock(block, i))}
          </div>
        </div>
      </section>
    </div>
  )
}
