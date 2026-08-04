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
    title: "Financial Deck Review Automation",
    problem: "Mitigated risk of human error in financial reporting and reduced time to delivery during tight timelines.",
    hoursSaved: "6 HRS / MO",
    description: "Automated internal-consistency and source tie-out review of the monthly management deck.",
    tools: ["Python", "Claude", "Tesseract OCR", "Pillow"],
  },
  {
    title: "Accelerating Sales Pipeline Reviews for Forecasting, Performance Calibration, and Strategic Planning.",
    problem: "Automating Pipeline Data Sync from Hubspot to Google Sheets.",
    hoursSaved: "12 HRS / MO",
    description: "Built a Google Apps Script bound to the pipeline workbook that reads deal name from the sheet, queries HubSpot's API for matching records, and writes the returned deal data into the sheet.",
    tools: ["Google Apps Script", "HubSpot Private App", "API"],
  },
  {
    title: "Client & Macro Intelligence Monitoring",
    problem: "Client and policy risk surfaced in the reported numbers, never before them.",
    hoursSaved: "10 HRS / MO",
    description: "Systemic weekly monitoring of the client base and the health insurance policy environment. Created a tiered watchlist plus event log; every signal tagged to a forecast action.",
    tools: ["Claude", "RSS", "CMS", "Feedly"],
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