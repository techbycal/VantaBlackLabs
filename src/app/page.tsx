import Hero from "@/components/Hero";
import TrackRecord from "@/components/TrackRecord";
import CaseStudies from "@/components/CaseStudies";
import Ventures from "@/components/Ventures";
import Media from "@/components/Media";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-black">
      <Hero />

      <main className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 border-x border-zinc-800 md:grid-cols-2">
        <TrackRecord className="border-b border-zinc-800 md:border-b-0 md:border-r" />

        <div className="grid grid-cols-1">
          <CaseStudies className="border-b border-zinc-800" />
          <Ventures className="border-b border-zinc-800" />
          <Media />
        </div>
      </main>

      <Footer />
    </div>
  );
}
