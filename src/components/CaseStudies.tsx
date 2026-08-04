"use client"; // Required for interactivity in Next.js

import { useState } from "react";
import GridCell from "./GridCell";

interface CaseStudy {
  title: string;
  problem: string;
  hoursSaved: string;
  description: string;
  tools: string[];
}

const caseStudies: CaseStudy[] = [
  {
    title: "Month-End Close Automation",
    problem: "Manual reconciliation across multiple entities and ledgers.",
    hoursSaved: "40 HRS / MO",
    description: "Built an automated pipeline that parses unstructured CSV exports, maps GL codes based on historical precedents, and highlights anomalies for human review before final entry.",
    tools: ["Python", "Claude API", "Pandas"],
  },
  {
    title: "Board Deck Generation",
    problem: "Recurring manual build of investor reporting decks.",
    hoursSaved: "12 HRS / MO",
    description: "Linked core financial database directly to reporting templates. The script fetches real-time KPIs, calculates MoM/YoY variances, and auto-populates slide layouts.",
    tools: ["SQL", "Supabase", "React"],
  },
  {
    title: "Cap Table & Scenario Modeling",
    problem: "Spreadsheet-driven dilution modeling prone to version drift.",
    hoursSaved: "8 HRS / MO",
    description: "Developed a centralized cap table tracker that allows founders to run real-time 'what-if' financing scenarios without breaking underlying spreadsheet logic.",
    tools: ["Next.js", "Vercel", "Tailwind"],
  },
];

export default function CaseStudies({ className = "" }: { className?: string }) {
  // Track which case study is currently open. null means all are closed.
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <GridCell index="02" title="Case Studies" className={className}>
      <div className="flex flex-col">
        {caseStudies.map((study, i) => {
          const isExpanded = expandedIndex === i;

          return (
            <div
              key={study.title}
              onClick={() => toggleExpand(i)}
              // Added cursor-pointer and a subtle hover effect to indicate it's clickable
              className={`flex flex-col cursor-pointer transition-colors hover:bg-zinc-900/50 ${
                i !== 0 ? "border-t border-zinc-800" : ""
              }`}
            >
              {/* The Visible Row */}
              <div className="flex flex-col gap-2 py-5 px-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                    {/* A simple terminal-style indicator of state */}
                    <span className="text-zinc-500 font-mono text-xs">{isExpanded ? "[-]" : "[+]"}</span>
                    {study.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-zinc-500 ml-6">
                    {study.problem}
                  </p>
                </div>
                <span className="shrink-0 border border-zinc-800 px-3 py-1 font-mono text-xs text-white sm:text-right">
                  {study.hoursSaved}
                </span>
              </div>

              {/* The Expanded Content (Only renders if isExpanded is true) */}
              {isExpanded && (
                <div className="pl-8 pr-4 pb-5">
                  <div className="border-l border-zinc-800 pl-4 py-1">
                    <p className="text-sm text-zinc-300 mb-3">
                      {study.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {study.tools.map((tool) => (
                        <span key={tool} className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 border border-zinc-800">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </GridCell>
  );
}