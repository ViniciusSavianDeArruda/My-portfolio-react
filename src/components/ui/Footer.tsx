import { CONTACT_LINKS } from "../../data";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#001500] px-[clamp(1.5rem,5vw,3rem)] pt-8 pb-6 flex flex-col items-center gap-5">
      {/* Status ONLINE — canto direito */}
      <span className="absolute top-8 right-[clamp(1.5rem,5vw,3rem)] font-mono text-[0.8rem] text-[#4ade80]">
        <span className="text-[#00FF41] animate-pulse2">●</span> ONLINE
      </span>

      {/* Logo */}
      <span className="font-orbitron text-[0.85rem] text-[#4ade80]">&lt;DEV/&gt;</span>

      {/* Social links */}
      <div className="flex gap-3">
        {CONTACT_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.68rem] text-[#4ade80] border border-[#1a4d2e] px-3 py-1 hover:text-[#00FF41] hover:border-[#00FF41] transition-all duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <span className="font-mono text-[0.65rem] text-[#4ade80] text-center">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#00FF41]">Vinicius Arruda</span>
        {" — "}Todos os direitos reservados.
      </span>

    </footer>
  );
}
