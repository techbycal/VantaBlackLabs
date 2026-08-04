import HeroCanvas from "./HeroCanvas";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-800">
      <HeroCanvas />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col items-start justify-center px-6 py-24 sm:px-10">
        <div className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
          <span className="h-1.5 w-1.5 bg-white" />
          System Status: Online
        </div>

        <h1 className="text-4xl font-bold uppercase leading-none tracking-tight text-white sm:text-6xl md:text-7xl">
          Vanta Black Labs
        </h1>

        <p className="mt-6 max-w-xl font-mono text-sm text-zinc-500 sm:text-base">
          Quantitative Analysis & Financial Automation
        </p>

        <div className="mt-10 flex flex-col divide-y divide-white/80 border border-white/80 sm:flex-row sm:divide-x sm:divide-y-0">
          <a
            href="#track-record"
            className="px-6 py-3 text-center font-mono text-xs uppercase tracking-widest text-white transition-colors duration-150 hover:bg-white hover:text-black"
          >
            [ View Track Record ]
          </a>
          <a
            href="mailto:ernesto.cal.miguel@gmail.com?subject=Automate%20Your%20Workflows"
            className="px-6 py-3 text-center font-mono text-xs uppercase tracking-widest text-white transition-colors duration-150 hover:bg-white hover:text-black"
          >
            [ Automate Your Workflows ]
          </a>
        </div>
      </div>
    </section>
  );
}
