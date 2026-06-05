import { Linkedin, Github } from 'lucide-react'
import { PERSONAL } from '../data/portfolio'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div>
            <p className="footer__logo">Dev<span>.</span> Ali</p>
            <p className="footer__copy">
              © {new Date().getFullYear()} Syed Ali Abrar · Lahore, Pakistan
            </p>
          </div>

          <p className="footer__tagline">
            MERN Stack Developer · React Native · Python & AI
          </p>

          <div className="footer__links">
            <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="footer__link">
              <Linkedin size={12} /> LinkedIn
            </a>
            <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="footer__link">
              <Github size={12} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
