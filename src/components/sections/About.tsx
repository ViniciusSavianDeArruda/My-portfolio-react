import { motion, useReducedMotion, type Variants } from "motion/react";

const PROFILE_IMAGE = "/About-eu.jpeg";

const METADATA = [
  { label: "LOCALIZAÇÃO", value: "Santa Maria — RS, Brasil" },
  { label: "FORMAÇÃO", value: "Sistemas de Informação — UFN" },
  { label: "FOCO", value: "Desenvolvimento Full Stack" },
];

const WORK_PRINCIPLES = [
  "Clareza antes da complexidade",
  "Experiência antes do excesso",
  "Código pensado para evoluir",
];

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      };

  const principlesTitleVariants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        show: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 12 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
        },
      };

  const principleItemVariants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        show: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 12 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
        },
      };

  const dividerVariants: Variants = shouldReduceMotion
    ? {
        hidden: { scaleX: 1 },
        show: { scaleX: 1 },
      }
    : {
        hidden: { scaleX: 0 },
        show: {
          scaleX: 1,
          transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <section
      id="about"
      className="about-ambient border-t border-white/[0.05] px-[clamp(1.5rem,5vw,4rem)] py-20 md:py-28"
      aria-labelledby="about-title"
    >
      <motion.div
        className="mx-auto max-w-[1160px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 },
          },
        }}
      >
        <motion.div variants={itemVariants} className="max-w-[620px]">
          <p className="font-mono text-[0.72rem] tracking-[0.14em] text-[#9AACFF]">
            02 / SOBRE
          </p>
          <h2
            id="about-title"
            className="mt-5 font-hero text-[clamp(2.45rem,5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#F4F6FB]"
          >
            Quem está por trás
            <br />
            do código.
          </h2>
        </motion.div>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-16">
          <figure className="relative aspect-[4/5] overflow-hidden rounded-[16px] border border-white/[0.07] bg-[#090C12]">
            {PROFILE_IMAGE ? (
              <img
                src={PROFILE_IMAGE}
                alt="Vinicius Arruda"
                className="relative z-0 block h-full w-full object-cover object-center opacity-100"
              />
            ) : (
              <div
                className="flex h-full w-full items-end bg-[linear-gradient(145deg,rgba(91,124,255,0.08),transparent_48%)] p-6"
                role="img"
                aria-label="Espaço reservado para foto de Vinicius Arruda"
              >
                <span className="font-mono text-[0.68rem] tracking-[0.12em] text-[#9096A3]">
                  FOTO DE PERFIL
                </span>
              </div>
            )}
            {!shouldReduceMotion && (
              <motion.div
                aria-hidden="true"
                initial={{ scaleY: 1 }}
                whileInView={{ scaleY: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "bottom" }}
                className="absolute inset-0 z-10 bg-[#0A0D14]"
              />
            )}
            <motion.figcaption
              initial={shouldReduceMotion ? false : { opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.3,
                delay: shouldReduceMotion ? 0 : 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-x-0 bottom-0 z-20 bg-[linear-gradient(to_top,rgba(9,12,18,0.84),transparent)] px-6 pb-5 pt-12 font-mono text-[0.66rem] tracking-[0.12em] text-[#D7DBE5]"
            >
              PROFILE / 2026
            </motion.figcaption>
          </figure>

          <div className="max-w-[620px]">
            <motion.div
              variants={itemVariants}
              className="space-y-5 font-hero text-[clamp(1rem,1.3vw,1.08rem)] leading-[1.7] text-[#969EAD]"
            >
              <p>
                Sou estudante de Sistemas de Informação e desenvolvedor de
                software, com foco na construção de aplicações web modernas.
              </p>
              <p>
                Trabalho principalmente com React, TypeScript, Node.js e Python,
                buscando desenvolver produtos com interfaces bem pensadas,
                arquitetura organizada e uma boa experiência para quem usa.
              </p>
              <p>
                Ao longo da graduação e dos meus projetos, venho aprofundando
                conhecimentos em desenvolvimento full stack, APIs, bancos de
                dados, cloud e segurança, sempre buscando evoluir tecnicamente e
                transformar ideias em produtos úteis.
              </p>
            </motion.div>

            <motion.dl
              variants={itemVariants}
              className="mt-10 grid divide-y divide-white/[0.07] border-y border-white/[0.07] sm:grid-cols-3 sm:divide-x sm:divide-y-0"
            >
              {METADATA.map(({ label, value }) => (
                <div
                  key={label}
                  className="min-w-0 py-5 sm:px-5 sm:first:pl-0 sm:last:pr-0"
                >
                  <dt className="font-mono text-[0.65rem] tracking-[0.12em] text-[#9AACFF]">
                    {label}
                  </dt>
                  <dd className="mt-2 font-hero text-[0.9rem] leading-[1.45] text-[#F4F6FB]">
                    {value}
                  </dd>
                </div>
              ))}
            </motion.dl>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: shouldReduceMotion ? 0 : 0.08,
                  },
                },
              }}
              className="mt-8 border-t border-white/[0.07] pt-8"
            >
              <motion.p
                variants={principlesTitleVariants}
                className="font-mono text-[0.68rem] tracking-[0.14em] text-[#9AACFF]"
              >
                O QUE GUIA MEU CÓDIGO
              </motion.p>
              <motion.ol
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: shouldReduceMotion ? 0 : 0.08,
                    },
                  },
                }}
                className="mt-4 border-t border-white/[0.07]"
              >
                {WORK_PRINCIPLES.map((principle, index) => (
                  <motion.li
                    key={principle}
                    variants={principleItemVariants}
                    className="group relative flex items-center gap-4 py-4"
                  >
                    <span className="font-mono text-[0.68rem] tracking-[0.08em] text-[#5B7CFF]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-hero text-[0.95rem] text-[#D7DBE5] transition-colors duration-200 group-hover:text-[#F4F6FB]">
                      {principle}
                    </span>
                    <motion.span
                      variants={dividerVariants}
                      className="absolute bottom-0 left-0 h-px w-full origin-left bg-white/[0.07]"
                    />
                  </motion.li>
                ))}
              </motion.ol>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
