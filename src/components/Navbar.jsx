import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import './Navbar.css'

const LINKS = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
  const { dark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <button className="nav__logo" onClick={() => scrollTo('hero')}>
          Dev<span>.</span> Ali
        </button>

        <div className="nav__links">
          {LINKS.map(l => (
            <button
              key={l}
              className={`nav__link${active === l.toLowerCase() ? ' active' : ''}`}
              onClick={() => scrollTo(l)}
            >{l}</button>
          ))}
        </div>

        <div className="nav__actions">
          <button className="theme-btn" onClick={toggle} aria-label="Toggle theme">
            {dark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button className="nav__cta" onClick={() => scrollTo('contact')}>Hire me</button>
          <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
            {open ? <X size={16} color="var(--txt2)" /> : (
              <><span /><span /><span /></>
            )}
          </button>
        </div>
      </nav>

      <div className={`nav__drawer${open ? ' open' : ''}`}>
        {LINKS.map(l => (
          <button key={l} className="nav__link" onClick={() => scrollTo(l)}>{l}</button>
        ))}
        <button className="nav__cta" onClick={() => scrollTo('contact')}>Hire me</button>
      </div>
    </>
  )
}
