import { ABOUT_ROWS } from "../../data";
import SectionLabel from "../ui/SectionLabel";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-[clamp(1.5rem,5vw,4rem)] border-t border-[#001500]"
    >
      <div className="max-w-[920px] mx-auto">
        <SectionLabel cmd="cat README.md" title="about.exe" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-10">
          <div className="bg-[#0a0a0a] border border-[#002200] p-8 leading-[1.9] text-[#bbf7d0] text-[0.88rem]">
            <p>
              Olá! Sou um desenvolvedor{" "}
              <strong className="text-[#00FF41]">Full Stack</strong> em
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
          </div>

          {/* Table */}
          <div>
            {ABOUT_ROWS.map(({ label, value, highlight }) => (
              <div
                key={label}
                className="flex border-b border-[#001500] py-2 text-[0.83rem]"
              >
                <span className="text-[#4ade80] min-w-[130px] shrink-0">
                  {label}:
                </span>
                <span
                  className={highlight ? "text-[#00FF41]" : "text-[#00FF41]"}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
