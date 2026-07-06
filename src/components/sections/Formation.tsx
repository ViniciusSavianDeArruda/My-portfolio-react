export default function Formation() {
  return (
    <div
      className="h-full flex flex-col justify-between gap-4 bg-bg-2 border border-neutral-800 p-6 transition-all duration-300 hover:border-green-neon cursor-default"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 0 20px rgba(0,255,65,0.08)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
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
    </div>
  );
}
