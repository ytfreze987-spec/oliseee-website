const items = [
  "VELOCITY EDITS",
  "MOTION DESIGN",
  "AMV & CINEMATICS",
  "AUDIO REACTIVE",
  "NAH, IMMA DO MY OWN THINK",
  "FRAME BY FRAME PRECISION",
];

export default function Marquee() {
  return (
    <section data-testid="editorial-marquee" className="group relative overflow-hidden border-y border-white/[0.06] bg-[#0A0C10]/70 py-8 sm:py-10">
      <div className="marquee-track flex w-max items-center">
        {[0, 1].map((dup) => (
          <div key={dup} aria-hidden={dup === 1} className="flex items-center">
            {items.map((t) => (
              <span key={`${dup}-${t}`} className="flex items-center">
                <span className="marquee-word whitespace-nowrap px-6 font-display text-4xl font-extrabold uppercase tracking-wider sm:px-10 sm:text-6xl">
                  {t}
                </span>
                <span className="marquee-word text-2xl sm:text-3xl">✕</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
