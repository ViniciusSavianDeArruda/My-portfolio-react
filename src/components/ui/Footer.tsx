import { CONTACT_LINKS } from "../../data";

export default function Footer() {
  return (
    <footer className="relative border-t border-neutral-900 px-[clamp(1.5rem,5vw,3rem)] pt-8 pb-6 flex flex-col items-center gap-5">
      {/* Status ONLINE — canto direito */}
      <span className="absolute top-8 right-[clamp(1.5rem,5vw,3rem)] font-mono text-[0.8rem] text-green-400">
        <span className="text-green-neon animate-pulse2">●</span> ONLINE
      </span>

      {/* Logo */}
      <span className="font-orbitron text-[0.85rem] text-green-400">
        &lt;DEV/&gt;
      </span>

      {/* Social links */}
      <div className="flex gap-3">
        {CONTACT_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.68rem] text-green-400 border border-neutral-700 px-3 py-1 hover:text-green-neon hover:border-green-neon transition-all duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <span className="font-mono text-[0.65rem] text-green-400 text-center">
        © {new Date().getFullYear()}{" "}
        <span className="text-green-neon">Vinicius Arruda</span>
        {" — "}Todos os direitos reservados.
      </span>
    </footer>
  );
}
