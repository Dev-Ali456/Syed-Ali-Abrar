import { useEffect, useState } from 'react'
import { Linkedin, Github, ArrowDownRight } from 'lucide-react'
import { PERSONAL, TITLES } from '../data/portfolio'
import PHOTO from '/ali_dp.png'
import './Hero.css'

export default function Hero() {
  const [idx, setIdx]   = useState(0)
  const [text, setText] = useState('')
  const [del, setDel]   = useState(false)
  const [ch, setCh]     = useState(0)

  useEffect(() => {
    const cur = TITLES[idx]
    let t
    if (!del && ch < cur.length) {
      t = setTimeout(() => { setText(cur.slice(0, ch + 1)); setCh(c => c + 1) }, 65)
    } else if (!del && ch === cur.length) {
      t = setTimeout(() => setDel(true), 2000)
    } else if (del && ch > 0) {
      t = setTimeout(() => { setText(cur.slice(0, ch - 1)); setCh(c => c - 1) }, 35)
    } else {
      setDel(false)
      setIdx(i => (i + 1) % TITLES.length)
    }
    return () => clearTimeout(t)
  }, [ch, del, idx])

  return (
    <section id="hero" className="hero">
      <div className="blob hero__blob--a" />
      <div className="blob hero__blob--b" />

      <div className="container">
        <div className="hero__inner">

          {/* ── Text ── */}
          <div className="hero__content">
            <h1 className="hero__name">
              Syed Ali<br />
              <span className="grad">Abrar</span>
            </h1>

            <div className="hero__typewriter">
              <p>{text}<span className="hero__cursor" /></p>
            </div>

            <p className="hero__location">Lahore, Pakistan · Available Worldwide</p>

            <p className="hero__bio">
              Full-Stack developer building on the <strong>MERN ecosystem</strong> — React, Node.js, MongoDB. Currently expanding into <strong>React Native</strong> for mobile and <strong>Python</strong> for AI integrations. 3+ years of professional experience delivering real-world products for enterprise clients.
            </p>

            <div className="hero__btns">
              <button
                className="btn-primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View projects <ArrowDownRight size={14} />
              </button>
              <button
                className="btn-ghost"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in touch
              </button>
            </div>

            <div className="hero__socials">
              <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="hero__soc">
                <Linkedin size={13} /> LinkedIn
              </a>
              <span className="hero__soc-sep">·</span>
              <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="hero__soc">
                <Github size={13} /> GitHub
              </a>
            </div>
          </div>

          {/* ── Photo ── */}
          <div className="hero__photo-wrap">
            <div className="photo-ring">
              <div className="photo-ring__orbit" />
              <div className="photo-ring__img">
                <img src={PHOTO} alt="Syed Ali Abrar" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
