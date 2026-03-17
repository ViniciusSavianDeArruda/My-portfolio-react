export default function Footer() {
  return (
    <footer className="border-t border-[#001500] px-[clamp(1.5rem,5vw,3rem)] py-7 flex justify-between items-center flex-wrap gap-4">
      <span className="font-orbitron text-[0.8rem] text-[#4ade80]">&lt;DEV/&gt;</span>
      <span className="font-mono text-[0.72rem] text-[#4ade80]">
        © {new Date().getFullYear()} — Criado por{' '}
        <span className="text-[#00FF41]">{'{ vinicius }'}</span>
      </span>
      <span className="font-mono text-[0.72rem] text-[#4ade80]">
        <span className="text-[#00FF41] animate-pulse2">●</span> ONLINE
      </span>
    </footer>
  )
}
