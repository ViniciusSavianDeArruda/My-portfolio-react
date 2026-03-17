import { useEffect, useRef, useState } from 'react'
import SectionLabel from './SectionLabel'
import { PROJECTS } from '../data'

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{flexShrink:0}}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0}}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const linkCls = "inline-flex items-center gap-[0.45rem] font-mono text-[0.78rem] text-[#4ade80] no-underline border border-[#1a4d2e] px-3 py-[0.35rem] transition-all duration-200 hover:text-[#00FF41] hover:border-[#00FF41]"

interface PreviewState {
  visible: boolean
  x: number
  y: number
  img: string
  title: string
  url: string
  status: string
  statusColor: string
}

export default function Projects() {
  const [preview, setPreview] = useState<PreviewState>({
    visible: false, x: 0, y: 0,
    img: '', title: '', url: '', status: '', statusColor: '',
  })
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const previewRef = useRef<HTMLDivElement>(null)
  const PW = 340
  const MARGIN = 24

  function calcPos(rect: DOMRect) {
    const vpW = window.innerWidth
    const vpH = window.innerHeight
    const pH  = previewRef.current?.offsetHeight ?? 230
    let left = rect.right + MARGIN
    if (left + PW > vpW - 8) left = rect.left - PW - MARGIN
    left = Math.max(8, left)
    let top = rect.top + rect.height / 2 - pH / 2
    top = Math.max(8, Math.min(top, vpH - pH - 8))
    return { left, top }
  }

  function showPreview(e: React.MouseEvent<HTMLDivElement>, p: typeof PROJECTS[0]) {
    if (hideTimer.current) clearTimeout(hideTimer.current)
    const { left, top } = calcPos((e.currentTarget as HTMLDivElement).getBoundingClientRect())
    setPreview({ visible: true, x: left, y: top, img: p.preview, title: p.name, url: p.url, status: p.status, statusColor: p.statusColor })
  }

  function updatePos(e: React.MouseEvent<HTMLDivElement>) {
    if (!preview.visible) return
    const { left, top } = calcPos((e.currentTarget as HTMLDivElement).getBoundingClientRect())
    setPreview(prev => ({ ...prev, x: left, y: top }))
  }

  function hidePreview() {
    hideTimer.current = setTimeout(() => setPreview(prev => ({ ...prev, visible: false })), 120)
  }

  useEffect(() => () => { if (hideTimer.current) clearTimeout(hideTimer.current) }, [])

  return (
    <section id="projects" className="py-24 px-[clamp(1.5rem,5vw,4rem)] border-t border-[#001500]">

      {/* ── Floating preview panel ── */}
      <div
        ref={previewRef}
        className="hidden lg:block"
        style={{
          position: 'fixed', zIndex: 200,
          width: PW, left: preview.x, top: preview.y,
          background: '#0a0a0a',
          border: '1px solid #00FF41',
          boxShadow: '0 0 30px rgba(0,255,65,.2), 0 0 60px rgba(0,255,65,.06)',
          pointerEvents: 'none', overflow: 'hidden',
          opacity: preview.visible ? 1 : 0,
          transform: preview.visible ? 'scale(1) translateX(0)' : 'scale(0.97) translateX(12px)',
          transition: 'opacity .22s ease, transform .22s ease',
        }}
      >
        {/* Header dots */}
        <div style={{ background:'#060f0a', borderBottom:'1px solid #002200', padding:'.5rem .8rem', display:'flex', alignItems:'center', gap:'.5rem' }}>
          <div style={{ width:8, height:8, borderRadius:'50%', background:'#ff5f57' }} />
          <div style={{ width:8, height:8, borderRadius:'50%', background:'#ffbd2e' }} />
          <div style={{ width:8, height:8, borderRadius:'50%', background:'#28ca41' }} />
          <span style={{ flex:1, textAlign:'center', fontSize:'.65rem', color:'#4ade80', letterSpacing:'.12em', fontFamily:"'Share Tech Mono',monospace" }}>
            {preview.title} — preview
          </span>
        </div>
        {/* Image */}
        <div style={{ position:'relative', width:'100%', aspectRatio:'16/9', overflow:'hidden', background:'#060f0a' }}>
          <img
            src={preview.img} alt="preview"
            style={{ width:'100%', height:'100%', objectFit:'cover', display:'block', transition:'transform 6s ease', transform: preview.visible ? 'translateY(-6%)' : 'translateY(0)' }}
          />
          <div style={{ position:'absolute', inset:0, background:'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.04) 2px,rgba(0,0,0,.04) 4px)', pointerEvents:'none' }} />
        </div>
        {/* Footer */}
        <div style={{ padding:'.6rem .8rem', display:'flex', justifyContent:'space-between', alignItems:'center', background:'#060f0a' }}>
          <span style={{ fontSize:'.6rem', color:'#4ade80', letterSpacing:'.08em', fontFamily:"'Share Tech Mono',monospace" }}>{preview.url}</span>
          <span style={{ fontSize:'.6rem', letterSpacing:'.1em', border:`1px solid ${preview.statusColor}`, color:preview.statusColor, padding:'1px 6px', fontFamily:"'Share Tech Mono',monospace" }}>
            {preview.status}
          </span>
        </div>
      </div>

      {/* ── Cards ── */}
      <div className="max-w-[920px] mx-auto">
        <SectionLabel cmd="git log --oneline --all" title="projects.sh" />
        <div className="flex flex-col gap-5">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group bg-[#0a0a0a] border border-[#002200] p-8 transition-all duration-300 hover:border-[#00FF41] hover:-translate-y-0.5 cursor-default"
              onMouseEnter={(e) => showPreview(e, project)}
              onMouseMove={updatePos}
              onMouseLeave={hidePreview}
            >
              <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <span className="font-orbitron text-[0.72rem] text-[#4ade80]">#{project.id}</span>
                  <span className="font-orbitron text-[0.95rem] font-bold text-[#00AA2A] group-hover:text-[#00FF41] transition-colors duration-200">
                    {project.name}
                  </span>
                </div>
                <span className="font-mono text-[0.62rem] px-[10px] py-[3px] tracking-[0.1em] border"
                  style={{ borderColor: project.statusColor, color: project.statusColor }}>
                  {project.status}
                </span>
              </div>
              <p className="text-[#bbf7d0] leading-[1.8] text-[0.85rem] mb-5">{project.desc}</p>
              <div className="flex gap-[0.35rem] flex-wrap mb-5">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-[0.68rem] text-[#4ade80] border border-[#1a4d2e] px-2 py-[2px]">{t}</span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 flex-wrap">
                  <a href={project.github} className={linkCls}><GithubIcon /> GitHub</a>
                  {project.demo && (
                    <a href={project.demo} className={linkCls}><ExternalIcon /> Live Demo</a>
                  )}
                </div>
                <span className="hidden lg:block font-mono text-[0.68rem] text-[#1a5c35] group-hover:text-[#4ade80] transition-colors duration-300 tracking-[.1em]">
                  ⌖ hover para preview
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
