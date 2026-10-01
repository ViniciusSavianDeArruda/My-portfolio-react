import { motion, useReducedMotion, type Variants } from "motion/react";

const PROFILE_IMAGE = "/images/profile/about-eu.jpeg";

const METADATA = [
  { label: "LOCALIZAÇÃO", value: "Santa Maria — RS, Brasil" },
  { label: "FORMAÇÃO", value: "Sistemas de Informação — UFN" },
  { label: "FOCO", value: "Full Stack" },
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

  return (
    <section
      id="about"
      className="about-ambient px-[clamp(1.5rem,5vw,4rem)] py-20 md:py-28"
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
                className="absolute inset-0 z-10 bg-[#0A0D14] motion-safe:animate-[fallback-reveal_0s_2s_forwards]"
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
              className="space-y-5 font-hero text-[clamp(1rem,1.3vw,1.08rem)] leading-[1.7] text-[#A6ACB8]"
            >
              <p>
                Estudo Sistemas de Informação na UFN e construo aplicações web
                completas — do frontend à API, do banco ao deploy. Meu trabalho
                mais recente é o Facilita OAB, uma plataforma de estudos para a
                prova da OAB, com React, FastAPI e PostgreSQL.
              </p>
              <p>
                Me interesso por entender o produto inteiro, não só a parte que
                coube pra mim. Gosto de pensar na arquitetura antes de abrir o
                editor, e prefiro um código que outra pessoa consiga ler a um
                código que só eu entendo.
              </p>
            </motion.div>

            <motion.dl
              variants={itemVariants}
              className="mt-10 grid gap-y-6 sm:grid-cols-[1fr_1.4fr_1.1fr] sm:gap-x-8"
            >
              {METADATA.map(({ label, value }) => (
                <div key={label} className="min-w-0">
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
              <motion.div
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: shouldReduceMotion ? 0 : 0.1,
                    },
                  },
                }}
                className="mt-6 grid gap-6 sm:grid-cols-3 sm:gap-8"
              >
                {WORK_PRINCIPLES.map((principle, index) => (
                  <motion.div key={principle} variants={principleItemVariants}>
                    <span className="block font-hero text-[1.5rem] font-semibold leading-none tracking-[-0.04em] text-[#5B7CFF]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-3 font-hero text-[0.95rem] leading-[1.5] text-[#D7DBE5]">
                      {principle}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
