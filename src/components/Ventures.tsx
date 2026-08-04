import GridCell from "./GridCell";

export default function Ventures({ className = "" }: { className?: string }) {
  return (
    <GridCell index="03" title="Ventures" className={className}>
      <div className="flex flex-col gap-4">
        <div className="flex items-baseline justify-between">
          <h3 className="text-lg font-semibold text-white">Ave</h3>
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
            ● LIVE
          </span>
        </div>
        <p className="font-mono text-xs text-zinc-500">
          A B2B cross-border marketplace connecting American enterprises with certified Mexican manufacturing capacity.
        </p>
        <a
          href="https://avehq.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 border border-zinc-700 px-4 py-2 font-mono text-xs uppercase tracking-widest text-white transition-colors duration-150 hover:bg-white hover:text-black"
        >
          avehq.com ↗
        </a>
      </div>
    </GridCell>
  );
}
