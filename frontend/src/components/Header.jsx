import { useEffect, useState } from "react";
import { Youtube } from "lucide-react";
import { LogoMark } from "./LogoMark";

const CHANNEL_URL = "https://youtube.com/@oliseee1117";

const links = [
  { href: "#about", num: "01", label: "Über mich" },
  { href: "#videos", num: "02", label: "Videos" },
  { href: "#kontakt", num: "03", label: "Kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="header-navigation"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-white/[0.07] bg-[#060709]/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-8 lg:px-16">
        <a href="#top" className="group flex items-center gap-3" data-testid="header-brand-logo">
          <LogoMark className="h-9 w-9 transition-transform duration-500 group-hover:rotate-90" />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-sm font-extrabold uppercase tracking-[0.18em] text-[#F2F4F8]">
              m.oliseee.11.17
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#525E75]">Edits · YouTube</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`header-link-${l.label.toLowerCase().replace(/[^a-z]/g, "")}`}
              className="group relative flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-[#94A0B8] transition-colors duration-300 hover:text-[#F2F4F8]"
            >
              <span className="font-mono text-[9px] text-[#FF2E00]">{l.num}</span>
              {l.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#FF2E00] transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="header-cta-youtube"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#FF2E00] px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:shadow-[0_0_28px_rgba(255,46,0,0.45)]"
        >
          <Youtube className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
          <span className="hidden sm:inline">Abonnieren</span>
        </a>
      </div>
    </header>
  );
}
