import { Linkedin, Github, Mail, MapPin, ArrowUpRight } from 'lucide-react'
import { PERSONAL } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import './Contact.css'

const CARDS = [
  {
    icon: Mail,
    label: 'Email',
    value: PERSONAL.email,
    sub: 'Reach out directly',
    href: `mailto:${PERSONAL.email}`,
    iconBg: 'rgba(74,105,240,0.12)',
    iconColor: '#4a69f0',
    external: false,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'syed-ali-abrar',
    sub: 'Connect professionally',
    href: PERSONAL.linkedin,
    iconBg: 'rgba(10,102,194,0.12)',
    iconColor: '#0a66c2',
    external: true,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Dev-Ali456',
    sub: 'See my code',
    href: PERSONAL.github,
    iconBg: 'rgba(255,255,255,0.06)',
    iconColor: 'var(--txt1)',
    external: true,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Lahore, Pakistan',
    sub: 'Available worldwide · Remote-ready',
    href: null,
    iconBg: 'rgba(45,212,160,0.10)',
    iconColor: '#2dd4a0',
    external: false,
  },
]

export default function Contact() {
  const headerRef = useInView()
  const cardsRef  = useInView(0.1)

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact__inner">

          {/* Header */}
          <div className="reveal" ref={headerRef}>
            <p className="eyebrow contact__eyebrow">Let's connect</p>
            <h2 className="contact__heading section-title" style={{ marginBottom: 14 }}>
              Let's build something<br />
              <em>extraordinary</em>
            </h2>
            <p className="contact__sub">
              Open to full-time MERN roles, freelance projects, and collaborations. Based in Lahore — available worldwide.
            </p>
          </div>

          {/* Cards */}
          <div className="contact__links reveal" ref={cardsRef}>
            {CARDS.map(({ icon: Icon, label, value, sub, href, iconBg, iconColor, external }) => {
              const content = (
                <>
                  <div className="contact-card__icon" style={{ background: iconBg }}>
                    <Icon size={18} color={iconColor} />
                  </div>
                  <div className="contact-card__body">
                    <p className="contact-card__label">{label}</p>
                    <p className="contact-card__value">{value}</p>
                    <p className="contact-card__sub">{sub}</p>
                  </div>
                  {href && <ArrowUpRight size={15} className="contact-card__arrow" />}
                </>
              )

              return href ? (
                <a
                  key={label}
                  href={href}
                  className="contact-card"
                  target={external ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={label} className="contact-card contact-card--static">
                  {content}
                </div>
              )
            })}
          </div>

          {/* Bottom availability row */}
          <div className="contact__cta">
            <div className="contact__availability">
              <span className="contact__avail-dot" />
              Currently open to new opportunities
            </div>
            <a
              href={`mailto:${PERSONAL.email}`}
              className="btn-primary"
            >
              Send an email <Mail size={13} />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
