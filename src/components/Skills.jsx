import { useInView } from '../hooks/useInView'
import { SKILLS } from '../data/portfolio'
import './Skills.css'

export default function Skills() {
  const ref = useInView()

  return (
    <section id="skills" className="skills section">
      <div className="container">

        <div className="skills__header reveal" ref={ref}>
          <p className="eyebrow">Expertise</p>
          <h2 className="section-title">
            Skills & <em>technologies</em>
          </h2>
        </div>

        <div className="skills__grid">
          {SKILLS.map((skill, i) => (
            <SkillTile key={skill.name} skill={skill} delay={i * 35} />
          ))}
        </div>

      </div>
    </section>
  )
}

function SkillTile({ skill, delay }) {
  const ref = useInView(0.1)
  const iconUrl = `https://cdn.simpleicons.org/${skill.slug}/${skill.color.replace('#', '')}`

  return (
    <div
      className={`skill-tile reveal${skill.category === 'Learning' ? ' skill-tile--learning' : ''}`}
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Colored glow orb */}
      <div
        className="skill-tile__glow"
        style={{ background: skill.color }}
      />

      {/* Logo from SimpleIcons CDN */}
      <img
        className="skill-tile__logo"
        src={iconUrl}
        alt={skill.name}
        loading="lazy"
        onError={e => {
          // Fallback: show initials if icon fails to load
          e.currentTarget.style.display = 'none'
          e.currentTarget.nextSibling.style.display = 'flex'
        }}
      />

      {/* Fallback initials (hidden by default) */}
      <div
        style={{
          display: 'none',
          width: 36,
          height: 36,
          borderRadius: 8,
          background: `${skill.color}22`,
          color: skill.color,
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 13,
          fontWeight: 700,
          fontFamily: 'var(--ff-mono)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {skill.name.slice(0, 2).toUpperCase()}
      </div>

      <span className="skill-tile__name">{skill.name}</span>
      <span className="skill-tile__cat">{skill.category}</span>
    </div>
  )
}
