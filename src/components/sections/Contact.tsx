import { motion, useReducedMotion, type Variants } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { CONTACT_LINKS } from "../../data";

const EMAIL = "arrudavinicius283@gmail.com";

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
  const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  const itemVariants: Variants = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
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

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }

    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }

    resetTimeoutRef.current = setTimeout(() => setCopyStatus("idle"), 1800);
  };

  const copyLabel =
    copyStatus === "copied" ? "Copiado ✓" : copyStatus === "error" ? "Tente novamente" : "Copiar";

  return (
    <section
      id="contact"
      className="contact-ambient px-[clamp(1.5rem,5vw,4rem)] py-20 md:py-28"
      aria-labelledby="contact-title"
    >
      <motion.div
        className="mx-auto max-w-[1160px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 } },
        }}
      >
        <div className="max-w-[720px]">
          <motion.p
            variants={itemVariants}
            className="font-mono text-[0.72rem] tracking-[0.14em] text-[#9AACFF]"
          >
            05 / CONTATO
          </motion.p>
          <motion.h2
            id="contact-title"
            variants={itemVariants}
            className="mt-5 font-hero text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#F4F6FB]"
          >
            Aberto para projetos,
            <br />
            oportunidades e colaborações.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-[560px] font-hero text-[clamp(1rem,1.3vw,1.08rem)] leading-[1.65] text-[#A6ACB8]"
          >
            Disponível para projetos, colaborações e novas oportunidades.
          </motion.p>
        </div>

        <motion.div
          variants={dividerVariants}
          className="mt-11 h-px w-full origin-left bg-white/[0.07]"
        />

        <motion.div variants={itemVariants} className="mt-8 max-w-[860px]">
          <p className="font-mono text-[0.66rem] tracking-[0.14em] text-[#9AACFF]">EMAIL</p>
          <div className="mt-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
            <a
              href={`mailto:${EMAIL}`}
              className="group relative break-all pb-1 font-hero text-[clamp(1.25rem,2.7vw,2.25rem)] font-medium tracking-[-0.04em] text-[#F4F6FB] transition-colors duration-200 hover:text-[#9AACFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9AACFF]"
            >
              {EMAIL}
              <span className="absolute bottom-0 left-0 h-px w-10 bg-[#5B7CFF] transition-[width] duration-200 group-hover:w-full group-focus-visible:w-full" />
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex min-h-11 items-center rounded-md border border-white/[0.09] px-4 font-hero text-[0.86rem] font-semibold text-[#F4F6FB] transition-colors duration-200 hover:border-white/[0.16] hover:text-[#9AACFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9AACFF]"
            >
              {copyLabel}
            </button>
          </div>
          <p className="sr-only" role="status" aria-live="polite">
            {copyStatus === "copied"
              ? "E-mail copiado para a área de transferência."
              : copyStatus === "error"
                ? "Não foi possível copiar o e-mail."
                : ""}
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.07 } },
          }}
          className="mt-11 grid max-w-[760px] border-t border-white/[0.07] sm:grid-cols-2 sm:gap-x-8"
        >
          {CONTACT_LINKS.map((link) => (
            <motion.a
              key={link.label}
              variants={itemVariants}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir ${link.label.toLowerCase()} de Vinicius Arruda em uma nova aba`}
              className="group relative flex min-h-14 items-center justify-between border-b border-white/[0.07] py-3 font-hero text-[1rem] font-medium text-[#D7DBE5] transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#5B7CFF] after:transition-[width] after:duration-200 hover:text-[#F4F6FB] hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9AACFF] focus-visible:after:w-full"
            >
              <span>{link.label === "GITHUB" ? "GitHub" : "LinkedIn"}</span>
              <span
                className="font-mono text-lg leading-none text-[#9AACFF] transition-transform duration-200 group-hover:translate-x-[3px] group-focus-visible:translate-x-[3px]"
                aria-hidden="true"
              >
                ↗
              </span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
