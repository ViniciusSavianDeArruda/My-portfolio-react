import Card from "./Card";

export default function FormationCard() {
  return (
    <Card className="h-full flex flex-col justify-between gap-4 p-6 hover-glow hover:border-green-neon cursor-default">
      <div>
        <p className="font-mono text-[0.68rem] text-green-400 tracking-[0.22em] mb-4 border-b border-neutral-900 pb-2">
          FORMAÇÃO
        </p>
        <h3 className="font-orbitron text-[1rem] font-bold text-green-neon mb-1">
          Sistemas de Informação
        </h3>
        <p className="font-mono text-[0.82rem] text-green-400">
          Universidade Franciscana — UFN
        </p>
      </div>
      <span className="self-start font-mono text-[0.65rem] px-[10px] py-[3px] tracking-[0.1em] border border-amber text-amber whitespace-nowrap">
        EM ANDAMENTO
      </span>
    </Card>
  );
}
