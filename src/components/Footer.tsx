export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-black font-mono text-xs text-zinc-500">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div className="flex flex-col gap-1">
          <span className="text-zinc-600">$ contact --initiate</span>
          <a
            href="mailto:ernesto.cal.miguel@gmail.com"
            className="text-white transition-colors duration-150 hover:text-zinc-400"
          >
            ernesto.cal.miguel@gmail.com
            <span className="ml-1 animate-pulse text-white">_</span>
          </a>
        </div>

        <div className="flex flex-col gap-1 text-zinc-600 sm:text-right">
          <span>VANTA BLACK LABS © {year}</span>
          <span>ALL SYSTEMS NOMINAL</span>
        </div>
      </div>
    </footer>
  );
}
