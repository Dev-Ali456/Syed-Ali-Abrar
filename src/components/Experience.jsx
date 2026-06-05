import { useState } from 'react'
import { EXPERIENCE } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import './Experience.css'

export default function Experience() {
  const [active, setActive] = useState(0)
  const headerRef = useInView()

  return (
    <section id="experience" className="exp section">
      <div className="container">

        <div className="reveal" ref={headerRef}>
          <p className="eyebrow">Career</p>
          <h2 className="section-title">
            Work <em>experience</em>
          </h2>
        </div>

        <div className="exp__layout">

          {/* ── Sidebar nav ── */}
          <nav className="exp__menu" aria-label="Experience navigation">
            {EXPERIENCE.map((exp, i) => (
              <button
                key={exp.id}
                className={`exp__menu-item${active === i ? ' active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="exp__menu-dot" />
                <div>
                  <p className="exp__menu-co">{exp.company.split('·')[0].trim()}</p>
                  <p className="exp__menu-role">{exp.role}</p>
                </div>
              </button>
            ))}
          </nav>

          {/* ── Cards ── */}
          <div className="exp__cards">
            {EXPERIENCE.map((exp, i) => (
              <article
                key={exp.id}
                className={`exp-card${active === i ? ' active' : ''}`}
                onClick={() => setActive(i)}
              >
                <div className="exp-card__head">
                  <div className="exp-card__left">
                    <p className="exp-card__company">
                      {exp.current && <span className="exp-card__current-dot" />}
                      {exp.company}
                    </p>
                    <h3 className="exp-card__role">{exp.role}</h3>
                    <p className="exp-card__type">{exp.type} · {exp.location}</p>
                  </div>
                  <span className="exp-card__period">{exp.period}</span>
                </div>

                <div className="exp-card__body">
                  <p className="exp-card__desc">{exp.desc}</p>
                  <div className="exp-card__tags">
                    {exp.tags.map(t => (
                      <span key={t} className="exp-card__tag">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
