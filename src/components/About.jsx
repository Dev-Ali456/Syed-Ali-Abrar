import { Code2, Server, Globe, Zap, BookOpen, Cpu } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import './About.css'

const STRENGTHS = [
  { icon: Code2,    bg: 'rgba(74,105,240,0.12)',  color: '#4a69f0', title: 'Frontend Engineering',      desc: 'React.js, JavaScript ES6+, HTML5, CSS3 — crafting fast, accessible interfaces' },
  { icon: Server,   bg: 'rgba(45,212,160,0.10)',  color: '#2dd4a0', title: 'MERN Stack Development',    desc: 'End-to-end apps with Node.js, Express, MongoDB — REST APIs, JWT, full deployment' },
  { icon: Globe,    bg: 'rgba(192,132,252,0.10)', color: '#c084fc', title: 'CivicPlus & Web Delivery',  desc: 'Built and migrated dozens of enterprise web properties for CivicPlus clients' },
  { icon: Zap,      bg: 'rgba(251,146,60,0.10)',  color: '#fb923c', title: 'Data & XML Pipelines',      desc: 'XML/JSX-based data conversion, structured content transformation at scale' },
  { icon: BookOpen, bg: 'rgba(251,191,36,0.10)',  color: '#fbbf24', title: 'React Native (Learning)',   desc: 'Building cross-platform mobile apps with Expo — iOS & Android' },
  { icon: Cpu,      bg: 'rgba(74,105,240,0.10)',  color: '#4a69f0', title: 'Python & AI (Learning)',    desc: 'Python scripting, FastAPI, OpenAI integrations for AI-powered web tools' },
]

export default function About() {
  const headerRef = useInView()
  const bioRef    = useInView(0.1)
  const statsRef  = useInView(0.1)

  return (
    <section id="about" className="about section">
      <div className="container">

        <div className="reveal" ref={headerRef}>
          <p className="eyebrow">About me</p>
          <h2 className="section-title">
            Building for the <em>web</em><br />and beyond
          </h2>
        </div>

        <div className="about__grid">
          {/* ── Left ── */}
          <div className="about__bio reveal" ref={bioRef}>
            <p>
              I'm a <strong>Full-Stack developer</strong> with a focus on the MERN ecosystem. Over the past 3+ years I've worked across web development, enterprise content delivery, and data transformation — building real products for clients and sharpening my skills across the full development stack.
            </p>
            <p>
              At <strong>DevPandas</strong>, I lead data conversion projects for enterprise CivicPlus clients — coordinating between U.S. client teams and the local dev team, applying <strong>React.js, HTML, CSS, JavaScript and XML/JSX pipelines</strong> to deliver clean, production-ready web content at scale.
            </p>
            <p>
              Outside of work, I build MERN Stack products on Upwork, actively learn <strong>React Native</strong> to move into mobile development, and explore <strong>Python and AI integrations</strong> — positioning myself as a well-rounded developer ready for whatever the next big shift in the web industry brings.
            </p>

            <div className="about__strengths">
              {STRENGTHS.map(({ icon: Icon, bg, color, title, desc }) => (
                <div className="strength-row" key={title}>
                  <div className="strength-icon" style={{ background: bg }}>
                    <Icon size={16} color={color} />
                  </div>
                  <div className="strength-text">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right ── */}
          <div className="about__stats reveal" ref={statsRef}>
            <div className="stat-card">
              <p className="stat-card__num">3<em>+</em></p>
              <p className="stat-card__label">Years of professional experience across web development and data engineering</p>
            </div>
            <div className="stat-card">
              <p className="stat-card__num">6<em>+</em></p>
              <p className="stat-card__label">Roles spanning full-stack development, CMS delivery, and client coordination</p>
            </div>
            <div className="stat-card">
              <p className="stat-card__num">20<em>+</em></p>
              <p className="stat-card__label">Projects delivered — web apps, enterprise portals, and freelance products</p>
            </div>
            <div className="stat-card edu-card">
              <p className="edu-card__tag">Education</p>
              <p className="edu-card__name">Govt. College University, Faisalabad</p>
              <p className="edu-card__deg">B.Sc — Computer Science</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
