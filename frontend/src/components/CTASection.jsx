import { motion } from "framer-motion";
import { Youtube, MessageSquare } from "lucide-react";

const CHANNEL_URL = "https://youtube.com/@oliseee1117";

export default function CTASection() {
  return (
    <section id="kontakt" data-testid="channel-cta-section" className="relative overflow-hidden border-t border-white/[0.05] py-24 lg:py-36">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1705877883453-2b6685ff5864?crop=entropy&cs=srgb&fm=jpg&q=85)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-[#060709]/80" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[50vh] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF2E00]/[0.1] blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-8"
      >
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-[#FF2E00]">
          03 — Kontakt &amp; Community
        </p>
        <h2 className="mt-6 font-display text-4xl font-black uppercase leading-[0.98] tracking-tight text-[#F2F4F8] sm:text-6xl lg:text-7xl">
          Werde Teil der <span className="text-outline">Community</span>
        </h2>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-[#94A0B8] sm:text-lg">
          Folge <span className="font-semibold text-[#F2F4F8]">m.oliseee.11.17</span> auf YouTube
          für neue Edits — Collabs laufen über die Kanalbeschreibung.
        </p>

        <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row">
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="channel-cta-main-button"
            className="group inline-flex items-center gap-3 rounded-full bg-[#FF2E00] px-10 py-5 font-mono text-xs font-bold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,46,0,0.55)]"
          >
            <Youtube className="h-5 w-5" />
            Auf YouTube ansehen
          </a>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#94A0B8]">
            <MessageSquare className="h-4 w-4 text-[#FF2E00]" />
            Collab → DC: YTFreze987
          </span>
        </div>
      </motion.div>
    </section>
  );
}
