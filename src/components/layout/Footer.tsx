import { motion, useReducedMotion, type Variants } from "motion/react";
import { CONTACT_LINKS } from "../../data";
import { GithubIcon, LinkedinIcon, MailIcon } from "../ui/icons";

const EMAIL = "arrudavinicius283@gmail.com";
const NAVIGATION_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Stack", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants: Variants = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 8 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        },
      };

  const dividerVariants: Variants = shouldReduceMotion
    ? { hidden: { scaleX: 1 }, visible: { scaleX: 1 } }
    : {
        hidden: { scaleX: 0 },
        visible: {
          scaleX: 1,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      };

  const linkClasses =
    "group inline-flex min-h-11 items-center gap-2 font-hero text-[0.86rem] font-medium text-[#A6ACB8] transition-colors duration-200 hover:text-[#F4F6FB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9AACFF]";

  return (
    <footer className="footer-ambient px-[clamp(1.5rem,5vw,4rem)] py-10 md:py-12">
      <motion.div
        className="mx-auto max-w-[1160px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 } },
        }}
      >
        <div className="relative">
          <motion.div variants={dividerVariants} className="h-px w-full origin-left bg-white/[0.07]" />
          <span className="absolute left-0 top-0 h-px w-12 bg-[#5B7CFF]" aria-hidden="true" />
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.25fr_0.8fr_0.9fr] md:gap-8 lg:gap-14">
          <motion.div variants={itemVariants}>
            <p className="font-mono text-[0.86rem] font-medium tracking-[0.04em] text-[#F4F6FB]">
              &lt;DEV<span className="text-[#5B7CFF]">/</span>&gt;
            </p>
            <p className="mt-6 font-hero text-[1rem] font-medium text-[#F4F6FB]">Vinicius Arruda</p>
            <p className="mt-1 font-hero text-[0.86rem] text-[#A6ACB8]">Desenvolvedor de Software</p>
          </motion.div>

          <motion.nav variants={itemVariants} aria-label="Navegação do rodapé">
            <p className="font-mono text-[0.65rem] tracking-[0.14em] text-[#9AACFF]">NAVEGAÇÃO</p>
            <div className="mt-4 flex flex-col">
              {NAVIGATION_LINKS.map((link) => (
                <a key={link.href} href={link.href} className={linkClasses}>
                  <span className="transition-transform duration-200 group-hover:translate-x-[2px] group-focus-visible:translate-x-[2px]">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.nav>

          <motion.div variants={itemVariants}>
            <p className="font-mono text-[0.65rem] tracking-[0.14em] text-[#9AACFF]">SOCIAL</p>
            <div className="mt-4 flex flex-col">
              {CONTACT_LINKS.map((link) => {
                const Icon = link.label === "GITHUB" ? GithubIcon : LinkedinIcon;
                const label = link.label === "GITHUB" ? "GitHub" : "LinkedIn";

                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir ${label} de Vinicius Arruda em uma nova aba`}
                    whileHover={shouldReduceMotion ? undefined : { x: 2 }}
                    className={linkClasses}
                  >
                    <span aria-hidden="true" className="text-[#9AACFF] transition-colors duration-200 group-hover:text-[#5B7CFF]">
                      <Icon size={16} />
                    </span>
                    <span className="transition-colors duration-200 group-hover:text-[#F4F6FB]">{label}</span>
                  </motion.a>
                );
              })}
              <motion.a
                href={`mailto:${EMAIL}`}
                whileHover={shouldReduceMotion ? undefined : { x: 2 }}
                className={linkClasses}
              >
                <span aria-hidden="true" className="text-[#9AACFF] transition-colors duration-200 group-hover:text-[#5B7CFF]">
                  <MailIcon size={16} />
                </span>
                <span className="transition-colors duration-200 group-hover:text-[#F4F6FB]">Email</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col gap-3 border-t border-white/[0.07] pt-6 font-hero text-[0.78rem] text-[#9096A3] sm:flex-row sm:items-center sm:justify-between"
        >
          <span>Santa Maria — RS, Brasil</span>
          <span>© {new Date().getFullYear()} Vinicius Arruda</span>
        </motion.div>
      </motion.div>
    </footer>
  );
}
