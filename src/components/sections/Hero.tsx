import {
  StaggerReveal,
  StaggerRevealHeadline,
  StaggerRevealItem,
} from "../motion/stagger-reveal";
import GeometricBackground from "../hero/GeometricBackground";
import TechMarquee from "../hero/TechMarquee";
import { GithubIcon, LinkedinIcon, ProjectsIcon } from "../ui/icons";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="hero-ambient relative flex min-h-[max(760px,100svh)] items-center overflow-hidden bg-[#07080B] pt-[58px] md:min-h-[max(680px,100svh)]"
    >
      <GeometricBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-[clamp(1.5rem,6vw,5rem)] py-20 pb-32 md:py-24 md:pb-28">
        <StaggerReveal className="max-w-[720px]">
          <StaggerRevealItem className="mb-6">
            <p className="font-mono text-[0.72rem] tracking-[0.12em] text-[#9AACFF]">
              <span className="mr-2 text-[#5B7CFF]">&gt;</span>
              system.ready
            </p>
          </StaggerRevealItem>

          <StaggerRevealItem className="mb-2">
            <p className="font-hero text-[clamp(0.9375rem,1.2vw,1rem)] font-medium tracking-[0.01em] text-[#D7DBE5]">
              Olá, eu sou o
            </p>
          </StaggerRevealItem>

          <StaggerRevealHeadline className="hero-name relative font-hero text-[clamp(3rem,7.2vw,6.6rem)] font-semibold leading-[0.96] tracking-[-0.065em] text-[#F4F6FB]">
            Vinicius Arruda
          </StaggerRevealHeadline>

          <StaggerRevealItem>
            <h2 className="mt-7 font-hero text-[clamp(1.35rem,2.5vw,2.05rem)] font-normal leading-[1.18] tracking-[-0.035em] text-[#F4F6FB]">
              Desenvolvedor Full Stack criando aplicações web modernas.
            </h2>
          </StaggerRevealItem>

          <StaggerRevealItem>
            <p className="mt-6 max-w-[550px] font-hero text-[clamp(1rem,1.45vw,1.12rem)] leading-[1.65] text-[#9096A3]">
              Desenvolvo produtos do frontend à arquitetura backend, com foco em
              performance, experiência e qualidade.
            </p>
          </StaggerRevealItem>

          <StaggerRevealItem>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => scrollTo("projects")}
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[#5B7CFF] px-5 font-hero text-[0.9rem] font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#7691FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9AACFF]"
              >
                <ProjectsIcon size={17} />
                Ver projetos
              </button>

              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="https://github.com/ViniciusSavianDeArruda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/[0.08] px-4 font-hero text-[0.9rem] font-medium text-[#F4F6FB] transition duration-200 hover:-translate-y-px hover:border-white/[0.14] hover:text-[#9AACFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9AACFF]"
                >
                  <GithubIcon size={17} />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/arrudavinicius/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/[0.08] px-4 font-hero text-[0.9rem] font-medium text-[#F4F6FB] transition duration-200 hover:-translate-y-px hover:border-white/[0.14] hover:text-[#9AACFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9AACFF]"
                >
                  <LinkedinIcon size={17} />
                  LinkedIn
                </a>
              </div>
            </div>
          </StaggerRevealItem>
        </StaggerReveal>
      </div>

      <TechMarquee />
    </section>
  );
}
