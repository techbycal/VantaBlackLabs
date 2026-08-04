import GridCell from "./GridCell";

interface MediaItem {
  tag: string;
  title: string;
  url?: string; // The '?' makes this optional so we can handle 'Coming Soon'
}

const items: MediaItem[] = [
  { 
    tag: "IG", 
    title: "Startup Teardown: [ @techvc ]", 
    url: "https://instagram.com/techvc" 
  },
  { 
    tag: "X", 
    title: "Tech Musings: [ @techbycal ]", 
    url: "https://x.com/techbycal" 
  },
  { 
    tag: "YT", 
    title: "Technical Tutorials: [ Coming Soon ]" 
    // Notice there is no URL here, so it won't be clickable
  },
];

export default function Media({ className = "" }: { className?: string }) {
  return (
    <GridCell index="04" title="Media & Insights" className={className}>
      <ul className="flex flex-col">
        {items.map((item, i) => {
          
          // The visual content of the row
          const innerContent = (
            <>
              <span className="shrink-0 border border-zinc-800 px-2 py-0.5 font-mono text-[10px] text-zinc-500 transition-colors group-hover:border-zinc-500 group-hover:text-zinc-300">
                {item.tag}
              </span>
              <span className="font-mono text-xs text-zinc-400 transition-colors group-hover:text-white">
                {item.title} {item.url && "↗"}
              </span>
            </>
          );

          return (
            <li
              key={`${item.tag}-${i}`}
              className={`flex items-center py-3 ${
                i !== 0 ? "border-t border-zinc-800" : ""
              }`}
            >
              {/* If there is a URL, render a clickable link. If not, render static text. */}
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 w-full cursor-pointer"
                >
                  {innerContent}
                </a>
              ) : (
                <div className="flex items-center gap-3 w-full opacity-50 cursor-not-allowed">
                  {innerContent}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </GridCell>
  );
}
