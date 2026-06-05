import { useState } from 'react'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import { PROJECTS } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import './Projects.css'

export default function Projects() {
  const [active, setActive] = useState(0)
  const headerRef = useInView()
  const proj = PROJECTS[active]

  const go = dir =>
    setActive(a => Math.max(0, Math.min(PROJECTS.length - 1, a + dir)))

  return (
    <section id="projects" className="projects section">
      <div className="container">

        {/* Header */}
        <div className="projects__header reveal" ref={headerRef}>
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              Featured <em>projects</em>
            </h2>
          </div>
          <div className="carousel-controls">
            <button className="carousel-btn" onClick={() => go(-1)} disabled={active === 0}>
              <ChevronLeft size={16} />
            </button>
            <button className="carousel-btn" onClick={() => go(1)} disabled={active === PROJECTS.length - 1}>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Main showcase */}
        <div
          className="proj__showcase"
          style={{ '--proj-color': proj.color }}
        >

          {/* ── Active large card ── */}
          <div className="proj__active" style={{ '--proj-color': proj.color }}>
            <div className="proj__active-img">
              <img src={proj.image} alt={proj.name} loading="lazy" />
              <span className="proj__img-label">{proj.label}</span>
              <span className="proj__img-num">{proj.num}</span>
            </div>

            <div className="proj__active-body">
              <h3 className="proj__active-name">{proj.name}</h3>
              <p className="proj__active-tagline">{proj.tagline}</p>
              <p className="proj__active-desc">{proj.desc}</p>

              <div className="proj__active-tags">
                {proj.tags.map(t => (
                  <span key={t} className="proj__active-tag">{t}</span>
                ))}
              </div>

              <div className="proj__active-links">
                {proj.live ? (
                  <a href={proj.live} className="proj__link proj__link--primary"
                    target="_blank" rel="noopener noreferrer"
                    style={{ background: proj.color }}>
                    <ExternalLink size={12} /> Live preview
                  </a>
                ) : (
                  <span className="proj__link proj__link--ghost" aria-disabled="true">
                    In progress / NDA
                  </span>
                )}
                {proj.code && (
                  <a href={proj.code} className="proj__link proj__link--ghost"
                    target="_blank" rel="noopener noreferrer">
                    <Github size={12} /> Source
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* ── Sidebar thumbnails ── */}
          <div className="proj__sidebar">
            {PROJECTS.map((p, i) => (
              <button
                key={p.id}
                className={`proj__thumb${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
                style={{ '--proj-color-border': p.color }}
                aria-label={`Select project: ${p.name}`}
              >
                <div className="proj__thumb-img">
                  <img src={p.image} alt={p.name} loading="lazy" />
                </div>
                <div className="proj__thumb-info">
                  <p className="proj__thumb-num">{p.num}</p>
                  <p className="proj__thumb-name">{p.name}</p>
                </div>
              </button>
            ))}
          </div>

        </div>

        {/* Dots */}
        <div className="carousel-dots">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === active ? ' active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Project ${i + 1}`}
            />
          ))}
        </div>

        <p className="proj__note">
          Projects without a live link are in progress or under NDA — available on request
        </p>

      </div>
    </section>
  )
}
