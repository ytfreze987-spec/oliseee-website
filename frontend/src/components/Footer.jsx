import { Youtube, ArrowUp } from "lucide-react";
import { LogoMark } from "./LogoMark";

const CHANNEL_URL = "https://youtube.com/@oliseee1117";

const links = [
  { href: "#top", label: "Start" },
  { href: "#about", label: "Über mich" },
  { href: "#videos", label: "Videos" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer data-testid="footer-container" className="relative border-t border-white/[0.06] bg-[#0A0C10]/60">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 lg:px-16">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-start">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <LogoMark className="h-10 w-10" />
              <span className="font-display text-base font-extrabold uppercase tracking-[0.18em] text-[#F2F4F8]">
                m.oliseee.11.17
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-[#525E75]">
              „Nah, imma do my own think." — Edits &amp; Motion Design aus reiner Leidenschaft.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#525E75]">Navigation</p>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="w-fit text-sm text-[#94A0B8] transition-colors duration-300 hover:text-[#FF2E00]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#525E75]">Social</p>
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-link-youtube"
              className="group inline-flex items-center gap-3 text-sm text-[#94A0B8] transition-colors duration-300 hover:text-[#FF2E00]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-[#FF2E00]/60 group-hover:bg-[#FF2E00]/10">
                <Youtube className="h-4 w-4" />
              </span>
              youtube.com/@oliseee1117
            </a>
            <span className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#94A0B8]">
              Collab → DC: YTFreze987
            </span>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#525E75]">
            © 2026 m.oliseee.11.17 — Crafted in carbon black
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#525E75]">
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Online
            </span>
            <a
              href="#top"
              data-testid="footer-back-to-top"
              aria-label="Nach oben scrollen"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#94A0B8] transition-all duration-300 hover:border-[#FF2E00]/60 hover:text-[#FF2E00]"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
