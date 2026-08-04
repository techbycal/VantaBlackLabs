import type { ReactNode } from "react";

interface GridCellProps {
  index: string;
  title: string;
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function GridCell({
  index,
  title,
  id,
  className = "",
  children,
}: GridCellProps) {
  return (
    <div id={id} className={`flex flex-col ${className}`}>
      <div className="flex items-baseline justify-between border-b border-zinc-800 px-6 py-4 sm:px-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500">
          <span className="text-zinc-600">{index}</span> / {title}
        </h2>
      </div>
      <div className="flex-1 px-6 py-8 sm:px-10">{children}</div>
    </div>
  );
}
