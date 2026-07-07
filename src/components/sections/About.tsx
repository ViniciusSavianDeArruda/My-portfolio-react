import { ABOUT_ROWS } from "../../data";
import type { AboutRow } from "../../types";
import SectionLabel from "../ui/SectionLabel";
import Card from "../ui/Card";
import FormationCard from "../ui/FormationCard";

const DOT_COLORS: Record<NonNullable<AboutRow["dot"]>, string> = {
  amber: "text-amber",
  blue: "text-blue-400",
};

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-[clamp(1.5rem,5vw,4rem)] border-t border-neutral-900"
    >
      <div className="max-w-[920px] mx-auto">
        <SectionLabel cmd="cat README.md" title="about.exe" />

        <div className="grid gap-6">
          <Card className="p-8 leading-[1.9] text-neutral-200 text-[0.88rem]">
            <p>
              Olá! Sou um desenvolvedor{" "}
              <strong className="text-green-neon">Full Stack</strong> em
              formacao, desde o inicio da graduacao venha me apronfundando com
              foco no ecossistema javaScript. Busco sempre criar solucoes
              eficientes com foco em qualidade e performance, utilizando as
              melhores práticas de desenvolvimento.
            </p>
            <p className="mt-4">
              Tenho experiência construindo aplicações escaláveis, desde bancdo
              de dados ate o frontend, com atenção especial a detalhes,
              segurança e interfaces intuitivas em projetos pessoais e
              academicos. Estou sempre aberto a novos desafios e oportunidades
              para crescer como desenvolvedor, contribuindo com projetos
              inovadores e de impacto real.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <p className="font-mono text-[0.68rem] text-green-400 tracking-[0.22em] mb-4 border-b border-neutral-900 pb-2">
                STATUS
              </p>
              <ul className="flex flex-col gap-2.5">
                {ABOUT_ROWS.map(({ label, value, highlight, dot }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2 text-[0.83rem]"
                  >
                    <span className={dot ? DOT_COLORS[dot] : "text-green-neon"}>
                      ●
                    </span>
                    <span
                      className={
                        highlight
                          ? "text-green-neon glow-sm"
                          : "text-neutral-200"
                      }
                    >
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>

            <FormationCard />
          </div>
        </div>
      </div>
    </section>
  );
}
