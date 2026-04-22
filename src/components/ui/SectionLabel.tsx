interface SectionLabelProps {
  cmd: string;
  title: string;
  center?: boolean;
}

export default function SectionLabel({
  cmd,
  title,
  center,
}: SectionLabelProps) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      <p className="text-[#4ade80] text-xs mb-1 font-mono">
        <span className="text-[#00FF41]">root@portfolio</span>:~$ {cmd}
      </p>
      <h2 className="font-orbitron text-[clamp(1.3rem,3vw,1.9rem)] font-bold tracking-[0.04em] text-[#00FF41] glow-sm">
        {title}
      </h2>
      <div
        className={`w-[38px] h-[2px] bg-[#00FF41] mt-2 ${center ? "mx-auto" : ""}`}
        style={{ boxShadow: "0 0 8px #00FF41" }}
      />
    </div>
  );
}
