import GridCell from "./GridCell";

interface Role {
  role: string;
  company: string;
  period: string;
  status: "CURRENT" | "PAST";
}

const experience: Role[] = [
  {
    role: "Senior Financial Analyst",
    company: "Enrollment123",
    period: "2021 — PRESENT",
    status: "CURRENT",
  },
  {
    role: "Consultant and Principal Builder",
    company: "Vanta Black Labs",
    period: "2020 — PRESENT",
    status: "CURRENT",
  },
  {
    role: "Director of Finance",
    company: "Astral AR",
    period: "2018 — 2020",
    status: "PAST",
  },
  {
    role: "Private Equity Associate",
    company: "Defoe Redmount",
    period: "2018 — 2018",
    status: "PAST",
  },
];

export default function TrackRecord({ className = "" }: { className?: string }) {
  return (
    <GridCell index="01" title="Track Record" id="track-record" className={className}>
      <ol className="flex flex-col">
        {experience.map((item, i) => (
          <li
            key={item.company}
            className={`grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 py-5 ${
              i !== 0 ? "border-t border-zinc-800" : ""
            }`}
          >
            <span className="font-mono text-xs text-zinc-600">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold text-white sm:text-lg">
                  {item.role}
                </h3>
                <span
                  className={`font-mono text-[10px] uppercase tracking-widest ${
                    item.status === "CURRENT" ? "text-white" : "text-zinc-600"
                  }`}
                >
                  {item.status === "CURRENT" ? "● ACTIVE" : "○ CLOSED"}
                </span>
              </div>
              <p className="mt-1 font-mono text-xs text-zinc-500">
                {item.company}
              </p>
              <p className="mt-1 font-mono text-xs text-zinc-600">
                {item.period}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </GridCell>
  );
}
