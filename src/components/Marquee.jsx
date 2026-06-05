import { STACK } from '../data/portfolio'
import './Marquee.css'

export default function Marquee() {
  const doubled = [...STACK, ...STACK]
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((s, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot">✦</span>
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}
