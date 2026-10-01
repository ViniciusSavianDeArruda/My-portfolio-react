import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type RefObject } from "react";
import type { Project } from "../../types";
import { ExternalIcon, GithubIcon } from "../ui/icons";

interface ProjectDetailsDialogProps {
  project: Project | null;
  onClose: () => void;
  returnFocusRef: RefObject<HTMLElement | null>;
}

export default function ProjectDetailsDialog({
  project,
  onClose,
  returnFocusRef,
}: ProjectDetailsDialogProps) {
  const shouldReduceMotion = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (!project) {
      return;
    }

    const focusTarget = returnFocusRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "ArrowLeft" && project.images.length > 1) {
        setImageIndex((current) => (current - 1 + project.images.length) % project.images.length);
        return;
      }

      if (event.key === "ArrowRight" && project.images.length > 1) {
        setImageIndex((current) => (current + 1) % project.images.length);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
        ),
      );

      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      focusTarget?.focus();
    };
  }, [project, onClose, returnFocusRef]);

  const activeImageIndex = project ? Math.min(imageIndex, project.images.length - 1) : 0;

  const previousImage = () => {
    if (project) {
      setImageIndex((current) => (current - 1 + project.images.length) % project.images.length);
    }
  };

  const nextImage = () => {
    if (project) {
      setImageIndex((current) => (current + 1) % project.images.length);
    }
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            tabIndex={-1}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.985 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative grid max-h-[calc(100svh-2rem)] w-full max-w-[1180px] overflow-y-auto rounded-2xl border border-white/[0.07] bg-[#0D0F14] lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)]"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Fechar detalhes do projeto"
              className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/[0.10] bg-[#0B0D12]/90 text-lg text-[#F4F6FB] transition-colors hover:border-white/[0.18] hover:text-[#9AACFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9AACFF]"
            >
              ×
            </button>

            <section className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-[#0B0D12] p-6 md:p-10">
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={project.images[activeImageIndex]}
                  src={project.images[activeImageIndex]}
                  alt={`Screenshot ${activeImageIndex + 1} do projeto ${project.name}`}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -16 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="max-h-[58svh] w-full object-contain"
                />
              </AnimatePresence>

              {project.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={previousImage}
                    aria-label="Imagem anterior"
                    className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/[0.10] bg-[#0B0D12]/90 text-[#F4F6FB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9AACFF]"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Próxima imagem"
                    className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/[0.10] bg-[#0B0D12]/90 text-[#F4F6FB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9AACFF]"
                  >
                    →
                  </button>
                </>
              )}

              <p className="absolute bottom-5 left-6 font-mono text-[0.65rem] tracking-[0.12em] text-[#A6ACB8] md:left-10">
                {String(activeImageIndex + 1).padStart(2, "0")} / {String(project.images.length).padStart(2, "0")}
              </p>
            </section>

            <section className="p-7 sm:p-10">
              <p className="font-mono text-[0.66rem] tracking-[0.12em] text-[#9AACFF]">
                {project.type.toUpperCase()}
              </p>
              <h2
                id="project-dialog-title"
                className="mt-5 pr-12 font-hero text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-[#F4F6FB]"
              >
                {project.name}
              </h2>
              <p className="mt-6 font-hero text-[0.98rem] leading-[1.7] text-[#A6ACB8]">
                {project.fullDesc}
              </p>

              <div className="mt-10 border-t border-white/[0.07] pt-7">
                <p className="font-mono text-[0.65rem] tracking-[0.12em] text-[#9AACFF]">
                  O QUE FOI FEITO
                </p>
                <ul className="mt-5 space-y-3">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 font-hero text-[0.9rem] leading-[1.55] text-[#D7DBE5]">
                      <span className="mt-1 text-[#5B7CFF]" aria-hidden="true">
                        ✓
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 border-t border-white/[0.07] pt-7">
                <p className="font-mono text-[0.65rem] tracking-[0.12em] text-[#9AACFF]">STACK</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded border border-white/[0.08] px-2.5 py-1 font-mono text-[0.66rem] text-[#D7DBE5]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[#5B7CFF] px-4 font-hero text-[0.86rem] font-semibold text-white transition-colors hover:bg-[#7691FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9AACFF]"
                  >
                    <ExternalIcon size={15} />
                    Acessar projeto
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/[0.08] px-4 font-hero text-[0.86rem] font-semibold text-[#F4F6FB] transition-colors hover:border-white/[0.14] hover:text-[#9AACFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9AACFF]"
                >
                  <GithubIcon size={15} />
                  GitHub
                </a>
              </div>
            </section>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
