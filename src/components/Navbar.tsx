import { useEffect, useState } from 'react'

const NAV_ITEMS = ['home', 'about', 'education', 'skills', 'projects', 'contact'] as const

export default function Navbar() {
  const [active, setActive] = useState<string>('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    NAV_ITEMS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(8,8,8,0.95)] backdrop-blur-md border-b border-[#002200] h-[58px] flex items-center justify-between px-[clamp(1.5rem,5vw,3.5rem)]">
      <span className="font-orbitron text-base font-bold tracking-widest text-[#00FF41] glow-sm">
        &lt;DEV/&gt;
      </span>
      {/* Hamburger menu for mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 bg-transparent border-none cursor-pointer"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Abrir menu"
      >
        <span className={`block w-6 h-0.5 bg-[#00FF41] mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-[#00FF41] mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-[#00FF41] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Menu desktop */}
      <div className="hidden md:flex gap-[clamp(0.8rem,2.5vw,2rem)]">
        {NAV_ITEMS.map((id) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`nav-underline font-mono text-[0.78rem] tracking-[0.12em] uppercase transition-colors duration-200 bg-transparent border-none cursor-pointer ${
              active === id ? 'text-[#00FF41]' : 'text-[#4ade80] hover:text-[#00FF41]'
            } ${active === id ? 'active' : ''}`}
          >
            {id}
          </button>
        ))}
      </div>
      {/* Menu mobile */}
      {menuOpen && (
        <div className="absolute top-[58px] left-0 right-0 bg-[rgba(8,8,8,0.97)] border-b border-[#002200] flex flex-col items-center py-4 md:hidden animate-fadeIn">
          {NAV_ITEMS.map((id) => (
            <button
              key={id}
              onClick={() => {
                scrollTo(id);
                setMenuOpen(false);
              }}
              className={`nav-underline font-mono text-[1rem] tracking-[0.12em] uppercase transition-colors duration-200 bg-transparent border-none cursor-pointer mb-2 ${
                active === id ? 'text-[#00FF41]' : 'text-[#4ade80] hover:text-[#00FF41]'
              } ${active === id ? 'active' : ''}`}
            >
              {id}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
