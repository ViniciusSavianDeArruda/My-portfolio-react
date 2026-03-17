import { useEffect, useState } from 'react'

const NAV_ITEMS = ['home', 'about', 'education', 'skills', 'projects', 'contact'] as const

export default function Navbar() {
  const [active, setActive]   = useState<string>('home')
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

  // Fecha o menu ao redimensionar para desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Trava o scroll do body quando menu aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(8,8,8,0.95)] backdrop-blur-md border-b border-[#002200] h-[58px] flex items-center justify-between px-[clamp(1.5rem,5vw,3.5rem)]">
        {/* Logo */}
        <span className="font-orbitron text-base font-bold tracking-widest text-[#00FF41] glow-sm">
          &lt;DEV/&gt;
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex gap-[clamp(0.8rem,2.5vw,2rem)]">
          {NAV_ITEMS.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`nav-underline font-mono text-[0.78rem] tracking-[0.12em] uppercase transition-colors duration-200 bg-transparent border-none cursor-pointer ${
                active === id ? 'text-[#00FF41] active' : 'text-[#4ade80] hover:text-[#00FF41]'
              }`}
            >
              {id}
            </button>
          ))}
        </div>

        {/* Hamburger button — mobile only */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 bg-transparent border-none cursor-pointer p-0"
          aria-label="Menu"
        >
          <span
            className="block w-6 h-[1.5px] bg-[#00FF41] transition-all duration-300 origin-center"
            style={{
              transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
              boxShadow: '0 0 6px #00FF41',
            }}
          />
          <span
            className="block w-6 h-[1.5px] bg-[#00FF41] transition-all duration-300"
            style={{
              opacity: menuOpen ? 0 : 1,
              boxShadow: '0 0 6px #00FF41',
            }}
          />
          <span
            className="block w-6 h-[1.5px] bg-[#00FF41] transition-all duration-300 origin-center"
            style={{
              transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
              boxShadow: '0 0 6px #00FF41',
            }}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300"
        style={{
          background: 'rgba(8,8,8,0.97)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          backdropFilter: 'blur(12px)',
        }}
      >
        {/* Scanlines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.04) 2px,rgba(0,0,0,.04) 4px)',
          }}
        />

        {/* Grid bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,255,65,.015) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,65,.015) 1px,transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />

        {/* Menu items */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-2 pt-[58px]">
          {/* Terminal prompt */}
          <p className="font-mono text-[0.7rem] text-[#4ade80] mb-6 tracking-[0.15em]">
            <span className="text-[#00FF41]">root@portfolio</span>:~$ <span className="animate-blink">_</span>
          </p>

          {NAV_ITEMS.map((id, i) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-mono text-[1.2rem] tracking-[0.2em] uppercase bg-transparent border-none cursor-pointer transition-all duration-200 py-3 px-8 w-full text-center"
              style={{
                color: active === id ? '#00FF41' : '#4ade80',
                textShadow: active === id ? '0 0 8px #00FF41' : 'none',
                transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
                opacity: menuOpen ? 1 : 0,
                transition: `transform 0.3s ease ${i * 0.06}s, opacity 0.3s ease ${i * 0.06}s, color 0.2s`,
                borderBottom: '1px solid #001500',
              }}
            >
              <span className="text-[#1a5c35] text-[0.8rem] mr-2">{String(i + 1).padStart(2, '0')}.</span>
              {id}
              {active === id && <span className="ml-2 text-[#00FF41] text-sm">◀</span>}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
